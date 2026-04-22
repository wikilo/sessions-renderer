#!/usr/bin/env python3
"""
Session Data Parser
===================
Parses the sessions/ directory structure and produces a JSON file
compatible with the Session Browser UI.

Infers session titles and topic tags from the content of session notes,
particularly from problem links and markdown headings — since sessions
do not store explicit title or tag metadata.

Usage:
    python parse_sessions.py [sessions_dir] [-o output.json] [--stats]
"""

import json
import os
import re
import sys
from collections import Counter
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Dict, List, Optional

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Data Models
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


@dataclass
class Resource:
    text: str
    url: Optional[str] = None


@dataclass
class ParsedResources:
    problems: list = field(default_factory=list)
    quizzes: list = field(default_factory=list)
    assignments: list = field(default_factory=list)
    excalidraw: list = field(default_factory=list)


@dataclass
class Solution:
    lang: str
    file: str
    user: str
    content: str


@dataclass
class Session:
    id: str
    date: str
    num: int
    title: str
    topics: list
    markdown: str
    solutions: list


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Topic Inference Mappings
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Each regex pattern maps to a canonical topic tag.
# Checked against link text → headings → full body (in order of priority).
TOPIC_PATTERNS: dict[str, str] = {
    # ── Data structures ──
    r"\barray\b": "arrays",
    r"\bstring\b": "strings",
    r"\bhash\s*map\b": "hash map",
    r"\bhash\s*set\b": "hash set",
    r"\bhash\s*table\b": "hash map",
    r"\bhashing\b": "hash map",
    r"\bstack\b": "stack",
    r"\bqueue\b": "queue",
    r"\bheap\b": "heap",
    r"\bpriority\s*queue\b": "heap",
    r"\btree\b": "trees",
    r"\bbinary\s*tree\b": "binary tree",
    r"\bbst\b": "binary search tree",
    r"\bbinary\s*search\s*tree\b": "binary search tree",
    r"\btrie\b": "trie",
    r"\bgraph\b": "graph",
    r"\blinked\s*list\b": "linked list",
    r"\bdoubly\s*linked\b": "doubly linked list",
    r"\bmatrix\b": "matrix",
    r"\b2d\s*array\b": "matrix",
    r"\bsegment\s*tree\b": "segment tree",
    r"\bfenwick\s*tree\b": "fenwick tree",
    r"\bbinary\s*indexed\s*tree\b": "fenwick tree",
    r"\bbit\b": "fenwick tree",
    r"\bmonotonic\s*stack\b": "monotonic stack",
    r"\bmonotonic\s*queue\b": "monotonic queue",
    # ── Paradigms & techniques ──
    r"\brecursion\b": "recursion",
    r"\brecursive\b": "recursion",
    r"\bbacktrack(?:ing)?\b": "backtracking",
    r"\bdynamic\s*program(?:ming)?\b": "dynamic programming",
    r"\bdivide\s*(?:and|&)\s*conquer\b": "divide and conquer",
    r"\bgreedy\b": "greedy",
    r"\bsliding\s*window\b": "sliding window",
    r"\btwo\s*pointer(?:s)?\b": "two pointers",
    r"\bbinary\s*search\b": "binary search",
    r"\bbfs\b": "bfs",
    r"\bbreadth\s*first\b": "bfs",
    r"\bdfs\b": "dfs",
    r"\bdepth\s*first\b": "dfs",
    r"\btopological\s*sort\b": "topological sort",
    r"\btopo\s*sort\b": "topological sort",
    r"\bprefix\s*sum\b": "prefix sum",
    r"\bunion\s*find\b": "union find",
    r"\bdisjoint\s*set\b": "union find",
    r"\bmemoization\b": "memoization",
    r"\btabulation\b": "tabulation",
    r"\boptimal\s*substructure\b": "dynamic programming",
    r"\boverlapping\s*subproblem": "dynamic programming",
    # ── Specific problems → canonical topic ──
    r"\btwo\s*sum\b": "two pointers",
    r"\bthree\s*sum\b": "two pointers",
    r"\bfour\s*sum\b": "two pointers",
    r"\bnumber\s*of\s*islands\b": "graph",
    r"\bclone\s*graph\b": "graph",
    r"\bcourse\s*schedule\b": "topological sort",
    r"\balien\s*dictionary\b": "topological sort",
    r"\b0[/\\-]?1\s*knapsack\b": "dynamic programming",
    r"\bknapsack\b": "dynamic programming",
    r"\bcoin\s*change\b": "dynamic programming",
    r"\blcs\b": "dynamic programming",
    r"\blongest\s*common\s*subsequence\b": "dynamic programming",
    r"\blongest\s*common\s*substring\b": "dynamic programming",
    r"\blongest\s*increasing\s*subsequence\b": "dynamic programming",
    r"\blis\b": "dynamic programming",
    r"\bedit\s*distance\b": "dynamic programming",
    r"\bword\s*break\b": "dynamic programming",
    r"\bclimbing\s*stairs\b": "dynamic programming",
    r"\bhouse\s*robber\b": "dynamic programming",
    r"\bmin\s*cost\s*climbing\b": "dynamic programming",
    r"\bn\s*queens\b": "backtracking",
    r"\bsudoku\b": "backtracking",
    r"\bpermutation\b": "backtracking",
    r"\bsubset\b": "backtracking",
    r"\bcombination\s*sum\b": "backtracking",
    r"\bword\s*search\b": "backtracking",
    r"\bletter\s*combinations\b": "backtracking",
    r"\bgenerate\s*parentheses\b": "backtracking",
    r"\bfibonacci\b": "recursion",
    r"\bfactorial\b": "recursion",
    r"\btower\s*of\s*hanoi\b": "recursion",
    r"\bmerge\s*sort\b": "sorting",
    r"\bquick\s*sort\b": "sorting",
    r"\bheap\s*sort\b": "sorting",
    r"\binsertion\s*sort\b": "sorting",
    r"\bbubble\s*sort\b": "sorting",
    r"\bcounting\s*sort\b": "sorting",
    r"\bradix\s*sort\b": "sorting",
    r"\bmerge\s*interval\b": "intervals",
    r"\bminimum\s*spanning\s*tree\b": "graph",
    r"\bmst\b": "graph",
    r"\bdijkstra\b": "graph",
    r"\bbellman\s*ford\b": "graph",
    r"\bfloyd\s*warshall\b": "graph",
    r"\bbipartite\b": "graph",
    r"\bconnected\s*component\b": "graph",
    r"\bcycle\s*detect(?:ion)?\b": "graph",
    r"\bshortest\s*path\b": "graph",
    r"\bstrongly\s*connected\b": "graph",
    r"\btarjan\b": "graph",
    r"\bkosaraju\b": "graph",
    r"\blru\s*cache\b": "design",
    r"\blfu\s*cache\b": "design",
    r"\bmin\s*stack\b": "design",
    r"\biterator\b": "design",
    r"\bkmp\b": "string matching",
    r"\bknuth[\s-]*morris[\s-]*pratt\b": "string matching",
    r"\brabin[\s-]*karp\b": "string matching",
    r"\brobin[\s-]*karp\b": "string matching",
    r"\bmanacher\b": "string matching",
    r"\bz[\s-]*algorithm\b": "string matching",
    r"\banagram\b": "strings",
    r"\bpalindrom(?:e|ic)\b": "strings",
    r"\blongest\s*substring\b": "sliding window",
    r"\bminimum\s*window\s*substring\b": "sliding window",
    r"\bpattern\s*print(?:ing)?\b": "loops",
    r"\bbit\s*manipulation\b": "bit manipulation",
    r"\bbitwise\b": "bit manipulation",
    r"\bxor\b": "bit manipulation",
    r"\bcounting\s*bits\b": "bit manipulation",
    r"\bprime\b": "primes",
    r"\bsieve\b": "primes",
    r"\bnumber\s*theory\b": "number theory",
    r"\bmodular\s*arithmetic\b": "number theory",
    r"\bgcd\b": "number theory",
    r"\blcm\b": "number theory",
    r"\bregex\b": "regex",
    r"\bregular\s*expression\b": "regex",
    r"\bbinary\s*lifting\b": "binary lifting",
    r"\bsparse\s*table\b": "sparse table",
    r"\bflatten\b": "trees",
    r"\bflatten\s*nested\b": "trees",
    # ── General / beginner concepts ──
    r"\bsorting\b": "sorting",
    r"\bsearch(?:ing)?\b": "searching",
    r"\blinear\s*search\b": "searching",
    r"\biteration\b": "loops",
    r"\bloop\b": "loops",
    r"\bfor\s*loop\b": "loops",
    r"\bwhile\s*loop\b": "loops",
    r"\bvariable\b": "variables",
    r"\bdata\s*type\b": "data types",
    r"\btype\s*cast(?:ing)?\b": "type casting",
    r"\bscope\b": "scope",
    r"\boop\b": "oop",
    r"\binheritance\b": "oop",
    r"\bpolymorphism\b": "oop",
    r"\bencapsulation\b": "oop",
    r"\babstract\s*class\b": "oop",
    r"\binterface\b": "oop",
    r"\b(setup|environment|install|git|terminal)\b": "setup",
    r"\bcontrol\s*flow\b": "control flow",
    r"\bif[\s-]*(?:else)?\b": "control flow",
    r"\bswitch\b": "control flow",
    r"\bternary\b": "control flow",
    r"\bfunction\b": "functions",
    r"\bmethod\b": "functions",
    r"\bparameter\b": "functions",
    r"\bargument\b": "functions",
    r"\bcall\s*stack\b": "recursion",
}

# Noise patterns that indicate a heading/text is NOT a good title
TITLE_NOISE = re.compile(
    r"^(link|links|note|notes|assignment|quiz|excalidraw|resource|resources|"
    r"problem|problems|here|also|additional|see|refer|click|visit|follow|"
    r"more|bonus|challenge|set|solution|solutions|file|files|reference|"
    r"references|reading|homework|submission|submit|due|deadline|grade|"
    r"grading|review|feedback|description|details|info|information|"
    r"question|questions|answer|answers|key|solution|approach|hint|hints|"
    r"task|tasks|topic|topics|content|material|materials)\b",
    re.IGNORECASE,
)

# Languages we recognise (map folder name → display name)
LANG_MAP = {
    "python": "Python",
    "py": "Python",
    "cpp": "C++",
    "c++": "C++",
    "cc": "C++",
    "java": "Java",
    "js": "JavaScript",
    "javascript": "JavaScript",
    "ts": "TypeScript",
    "typescript": "TypeScript",
    "c": "C",
    "go": "Go",
    "rs": "Rust",
    "rust": "Rust",
    "rb": "Ruby",
    "ruby": "Ruby",
    "kt": "Kotlin",
    "kotlin": "Kotlin",
    "swift": "Swift",
    "cs": "C#",
    "csharp": "C#",
}


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Parsing: Solution Files
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def parse_solution_filename(filename: str) -> tuple[str, str]:
    """
    Parse solution filename convention: problem_name_user_name.ext
    Returns (problem_name, user_name).

    Handles edge cases:
      - single_part.ext           → ('single_part', 'unknown')
      - problem_user.ext          → ('problem', 'user')
      - multi_word_problem_user.ext → ('multi_word_problem', 'user')
    """
    stem = Path(filename).stem
    parts = stem.split("_")
    if len(parts) < 2:
        return stem, "unknown"
    user = parts[-1]
    problem = "_".join(parts[:-1])
    return problem, user


def parse_solution_file(sol_path: Path) -> Optional[Solution]:
    """
    Parse a single solution file.
    Extracts language from parent folder, user/problem from filename,
    and full file content.
    """
    try:
        content = sol_path.read_text(encoding="utf-8")
    except (IOError, UnicodeDecodeError) as e:
        print(f"    [WARN] Cannot read {sol_path.name}: {e}")
        return None

    filename = sol_path.name
    lang = sol_path.parent.name.lower().strip()
    problem, user = parse_solution_filename(filename)

    return Solution(
        lang=lang,
        file=filename,
        user=user,
        content=content,
    )


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Parsing: Markdown Content
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def parse_markdown_content(md_path: Path) -> tuple[str, ParsedResources]:
    """
    Parse a session's markdown file.
    Returns (raw_markdown_string, ParsedResources).

    Resource section detection is robust to:
      - Emoji-prefixed headers  (🔗 Problem Links)
      - Plain headers            (## Problems)
      - Mixed formats            (## 🔗 Links)
      - Inline links, bare URLs, and plain-text descriptors
    """
    try:
        markdown = md_path.read_text(encoding="utf-8")
    except (IOError, UnicodeDecodeError) as e:
        print(f"    [WARN] Cannot read {md_path.name}: {e}")
        return "", ParsedResources()

    lines = markdown.split("\n")
    resources = ParsedResources()
    section = None

    for line in lines:
        trimmed = line.strip()
        if not trimmed:
            continue

        # ── Detect section header ──
        heading_match = re.match(r"^#{1,6}\s*(.+)", trimmed)
        if heading_match:
            header_text = heading_match.group(1).strip()
            header_lower = header_text.lower()

            # Strip leading emoji for detection (but keep them for display)
            clean_header = re.sub(r"^[\s]*[🔗📝📚🎨📄→]+\s*", "", header_lower)

            if re.search(r"problem|coding|question", clean_header):
                section = "problems"
            elif re.search(r"quiz|test|assessment", clean_header):
                section = "quizzes"
            elif re.search(r"assignment|homework|hw", clean_header):
                section = "assignments"
            elif "excalidraw" in clean_header:
                section = "excalidraw"
            else:
                section = None
            continue

        if not section:
            continue

        # ── Extract markdown links: [text](url) ──
        captured_urls: set[str] = set()
        for m in re.finditer(r"\[([^\]]*)\]\(([^)]+)\)", trimmed):
            link_text = m.group(1).strip()
            url = m.group(2).strip()
            captured_urls.add(url)

            target = "excalidraw" if "excalidraw.com" in url else section
            target_list = getattr(resources, target)

            # Avoid duplicate URLs within the same category
            if not any(r.url == url for r in target_list):
                target_list.append(Resource(text=link_text or url, url=url))

        # ── Extract bare URLs not already captured ──
        for m in re.finditer(r'https?://[^\s)\]>"\']+', trimmed):
            url = m.group(0).strip()
            if url in captured_urls:
                continue

            target = "excalidraw" if "excalidraw.com" in url else section
            target_list = getattr(resources, target)

            if not any(r.url == url for r in target_list):
                target_list.append(Resource(text=url, url=url))

        # ── Plain-text lines (no URLs) as descriptors ──
        has_any_url = bool(re.search(r"https?://", trimmed))
        has_md_link = bool(re.search(r"\[[^\]]*\]\([^)]+\)", trimmed))
        is_separator = bool(re.match(r"^[–—:.,\-\s*]+$", trimmed))

        if trimmed and not has_any_url and not has_md_link and not is_separator:
            getattr(resources, section).append(Resource(text=trimmed, url=None))

    return markdown, resources


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Title Inference
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def _clean_heading(text: str) -> str:
    """Strip emojis, trailing punctuation, and whitespace from a heading."""
    cleaned = re.sub(r"[🔗📝📚🎨📄→\-\:#*_`]", "", text).strip()
    # Remove trailing colon, period, dash
    cleaned = re.sub(r"\s*[:.\-–—]+\s*$", "", cleaned).strip()
    return cleaned


def infer_title(
    resources: ParsedResources,
    markdown: str,
    session_num: int,
) -> str:
    """
    Infer a human-readable session title.

    Strategy (in priority order):
      1. First H1 heading — if informative (not just "Coding Problem")
      2. Concatenated problem link texts (up to 3)
      3. Most relevant assignment/quiz link text
      4. Key topics extracted from body
      5. Fallback: "Session N"
    """
    # ── 1. Try H1 heading ──
    h1_match = re.search(r"^#\s+(.+)", markdown, re.MULTILINE)
    if h1_match:
        cleaned = _clean_heading(h1_match.group(1))
        if cleaned and len(cleaned) > 3 and not TITLE_NOISE.match(cleaned):
            return cleaned

    # ── 2. Problem link texts ──
    problem_names = [
        r.text.strip()
        for r in resources.problems
        if r.url
        and r.text
        and "http" not in r.text
        and not TITLE_NOISE.match(r.text.strip())
    ]
    if problem_names:
        parts = problem_names[:3]
        if len(parts) == 1:
            return parts[0]
        return (
            f"{parts[0]} & {parts[1]}"
            if len(parts) == 2
            else f"{parts[0]}, {parts[1]} & more"
        )

    # ── 3. Assignment/quiz link texts ──
    for category in (resources.assignments, resources.quizzes):
        names = [
            r.text.strip()
            for r in category
            if r.url
            and r.text
            and "http" not in r.text
            and not TITLE_NOISE.match(r.text.strip())
        ]
        if names:
            return names[0] if len(names) == 1 else f"{names[0]} & more"

    # ── 4. Extract the most prominent topic from the body ──
    topic_counts: Counter = Counter()
    for pattern, tag in TOPIC_PATTERNS.items():
        if re.search(pattern, markdown, re.IGNORECASE):
            topic_counts[tag] += 1
    if topic_counts:
        top = topic_counts.most_common(1)[0][0]
        # Capitalise first letter
        return top[0].upper() + top[1:] + " Problems"

    # ── 5. Fallback ──
    return f"Session {session_num}"


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Tag Inference
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def infer_tags(
    resources: ParsedResources,
    markdown: str,
    max_tags: int = 8,
) -> list[str]:
    """
    Infer topic tags from session content.

    Weighted sources:
      weight 4  → problem link text     (strongest signal)
      weight 3  → assignment link text
      weight 2  → quiz link text
      weight 2  → markdown headings
      weight 1  → full body text        (weakest, noisiest)

    Additionally, descriptive problem names are added as tags directly
    if they are multi-word and don't match known noise patterns.

    Returns up to max_tags unique tags sorted by descending score.
    """
    # Build weighted text sources
    sources: list[tuple[str, int]] = []

    for res in resources.problems:
        if res.text:
            sources.append((res.text, 4))
    for res in resources.assignments:
        if res.text:
            sources.append((res.text, 3))
    for res in resources.quizzes:
        if res.text:
            sources.append((res.text, 2))

    for m in re.finditer(r"^#{1,6}\s+(.+)", markdown, re.MULTILINE):
        sources.append((m.group(1), 2))

    sources.append((markdown, 1))

    # Pattern match with deduplication per source
    tag_scores: Counter = Counter()
    seen_in_source: set[str] = set()

    for text, weight in sources:
        seen_in_source.clear()
        for pattern, tag in TOPIC_PATTERNS.items():
            if tag in seen_in_source:
                continue
            if re.search(pattern, text, re.IGNORECASE):
                tag_scores[tag] += weight
                seen_in_source.add(tag)

    # Add descriptive problem names as tags
    for res in resources.problems:
        if not (res.url and res.text and "http" not in res.text):
            continue
        name = res.text.strip()
        words = name.split()
        if len(words) >= 2 and not TITLE_NOISE.match(name):
            norm = name.lower()
            if tag_scores[norm] == 0:
                tag_scores[norm] = 1

    top_tags = [tag for tag, _ in tag_scores.most_common(max_tags)]
    return top_tags if top_tags else ["general"]


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Folder Parsing
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def parse_session_folder(session_path: Path) -> Optional[Session]:
    """
    Parse a single session folder (e.g., sessions/2026-01-06-session1/).
    Locates the .md file, parses it, scans solutions/ subfolder.
    """
    folder_name = session_path.name

    # Validate folder name: YYYY-MM-DD-sessionN
    match = re.match(r"^(\d{4}-\d{2}-\d{2})-session(\d+)$", folder_name)
    if not match:
        print(f"  [SKIP] Non-standard folder name: {folder_name}")
        return None

    date_str = match.group(1)
    session_num = int(match.group(2))
    session_id = folder_name

    # ── Find markdown file ──
    md_files = sorted(session_path.glob("*.md"))
    if not md_files:
        md_files = sorted(session_path.glob("*.txt"))
    if not md_files:
        print(f"  [WARN] No .md/.txt file in {folder_name}")
        return None

    md_path = md_files[0]
    markdown, resources = parse_markdown_content(md_path)

    # ── Parse solutions ──
    solutions: list[Solution] = []
    sol_dir = session_path / "solutions"
    if sol_dir.is_dir():
        for lang_dir in sorted(sol_dir.iterdir()):
            if not lang_dir.is_dir():
                continue
            for sol_file in sorted(lang_dir.iterdir()):
                if sol_file.name == ".gitkeep":
                    continue
                if sol_file.is_file():
                    sol = parse_solution_file(sol_file)
                    if sol:
                        solutions.append(sol)

    # ── Infer title and tags ──
    title = infer_title(resources, markdown, session_num)
    topics = infer_tags(resources, markdown)

    return Session(
        id=session_id,
        date=date_str,
        num=session_num,
        title=title,
        topics=topics,
        markdown=markdown,
        solutions=[asdict(s) for s in solutions],
    )


def parse_sessions_root(root_path: str) -> list[dict]:
    """
    Walk the sessions/ root directory and parse every valid session folder.
    Returns a list of serialisable session dicts in chronological order.
    """
    root = Path(root_path).resolve()
    if not root.is_dir():
        print(f"[ERROR] Directory not found: {root}", file=sys.stderr)
        sys.exit(1)

    sessions: list[dict] = []
    folders = sorted(
        (f for f in root.iterdir() if f.is_dir()),
        key=lambda f: f.name,
    )

    for folder in folders:
        print(f"Parsing: {folder.name}")
        session = parse_session_folder(folder)
        if session:
            sessions.append(asdict(session))
            sol_count = len(session.solutions)
            tag_preview = ", ".join(session.topics[:4])
            print(f'  → "{session.title}"')
            print(
                f"    Topics: [{tag_preview}{'...' if len(session.topics) > 4 else ''}]"
            )
            print(f"    Solutions: {sol_count}")
        else:
            print(f"  → Skipped")
        print()

    print(f"{'=' * 56}")
    print(f"Parsed {len(sessions)} session(s) from {root}")
    print(f"{'=' * 56}")
    return sessions


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# JSON Export
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def sessions_to_json(sessions: list[dict], output_path: str) -> None:
    """Write the sessions list to a JSON file, creating parent dirs as needed."""
    out = Path(output_path).resolve()
    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        json.dump(sessions, f, indent=2, ensure_ascii=False)
    print(f"JSON written to: {out}  ({out.stat().st_size:,} bytes)")


def sessions_to_js(
    sessions: List[Dict], output_path: str, var_name: str = "SESSIONS"
) -> None:
    """
    Write the sessions list into a JavaScript file that assigns the data to a const variable.

    - sessions: list of dicts (JSON-serializable).
    - output_path: path to the .js file to write. Parent directories will be created.
    - var_name: JS variable name to assign (default "SESSIONS").
    """
    out = Path(output_path).resolve()
    out.parent.mkdir(parents=True, exist_ok=True)

    # Serialize JSON with safe formatting
    json_text = json.dumps(sessions, indent=2, ensure_ascii=False)

    # Create JS content: export const SESSIONS = <json>;
    js_content = f"const {var_name} = {json_text};\n"

    with open(out, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"JS written to: {out}  ({out.stat().st_size:,} bytes)")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Validation & Statistics
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def validate_sessions(sessions: list[dict]) -> list[str]:
    """
    Basic validation of the output schema.
    Returns a list of warning strings (empty = all good).
    """
    warnings: list[str] = []
    required_keys = {"id", "date", "num", "title", "topics", "markdown", "solutions"}
    sol_keys = {"lang", "file", "user", "content"}

    for i, s in enumerate(sessions):
        # Top-level keys
        missing = required_keys - set(s.keys())
        if missing:
            warnings.append(f"Session {i} ({s.get('id', '?')}): missing keys {missing}")

        # Types
        if not isinstance(s.get("num"), int):
            warnings.append(f"Session {s.get('id', '?')}: 'num' should be int")
        if not isinstance(s.get("topics"), list):
            warnings.append(f"Session {s.get('id', '?')}: 'topics' should be list")
        if not isinstance(s.get("solutions"), list):
            warnings.append(f"Session {s.get('id', '?')}: 'solutions' should be list")

        # Solutions
        for j, sol in enumerate(s.get("solutions", [])):
            sol_missing = sol_keys - set(sol.keys())
            if sol_missing:
                warnings.append(
                    f"Session {s.get('id', '?')} solution {j}: missing keys {sol_missing}"
                )

    return warnings


def print_stats(sessions: list[dict]) -> None:
    """Print summary statistics about the parsed sessions."""
    total_solutions = sum(len(s["solutions"]) for s in sessions)
    lang_counter: Counter = Counter()
    user_set: set[str] = set()
    topic_counter: Counter = Counter()
    no_tags: list[str] = []
    generic_titles: list[str] = []

    for s in sessions:
        for sol in s["solutions"]:
            lang_counter[sol["lang"]] += 1
            user_set.add(sol["user"])
        for t in s["topics"]:
            topic_counter[t] += 1
        if not s["topics"] or s["topics"] == ["general"]:
            no_tags.append(s["id"])
        if re.match(r"^Session \d+$", s["title"]):
            generic_titles.append(s["id"])

    print()
    print("┌──────────────────────────────────────────────────┐")
    print("│                 PARSING STATISTICS               │")
    print("├──────────────────────────────────────────────────┤")
    print(f"│  Sessions:        {len(sessions):>4}                          │")
    print(f"│  Total solutions: {total_solutions:>4}                          │")
    print(
        f"│  Unique users:    {len(user_set):>4}  {', '.join(sorted(user_set))[:30]:<30}│"
    )
    print("├──────────────────────────────────────────────────┤")
    print("│  Languages:                                       │")
    for lang, count in lang_counter.most_common():
        display = LANG_MAP.get(lang.lower(), lang)
        print(f"│    {display:<14} {count:>4}                              │")
    print("├──────────────────────────────────────────────────┤")
    print("│  Top topics:                                      │")
    for topic, count in topic_counter.most_common(10):
        print(f"│    {topic:<30} {count:>3}x                    │")
    print("└──────────────────────────────────────────────────┘")

    if no_tags:
        print(f"\n[WARN] {len(no_tags)} session(s) with no inferred tags:")
        for sid in no_tags:
            print(f"  - {sid}")
    if generic_titles:
        print(
            f"\n[WARN] {len(generic_titles)} session(s) with generic fallback titles:"
        )
        for sid in generic_titles:
            print(f"  - {sid}")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# CLI Entry Point
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(
        description="Parse sessions/ directory and generate JSON for the Session Browser UI.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python parse_sessions.py                          # parse ./sessions/ → sessions_data.json
  python parse_sessions.py ./my_sessions -o out.json
  python parse_sessions.py ./sessions --stats       # print detailed stats
        """,
    )
    parser.add_argument(
        "sessions_dir",
        nargs="?",
        default="sessions",
        help="Path to the sessions/ root directory (default: sessions/)",
    )
    parser.add_argument(
        "-o",
        "--output",
        default="../lib/data.js",
        help="Output JSON file path (default: data.js)",
    )
    parser.add_argument(
        "-f",
        "--format",
        choices=("js", "json"),
        default="js",
        help="Output format (default: js).",
    )
    parser.add_argument(
        "--stats",
        action="store_true",
        help="Print detailed statistics after parsing",
    )
    parser.add_argument(
        "--validate",
        action="store_true",
        help="Validate output schema and print warnings",
    )

    args = parser.parse_args()

    # Parse
    sessions = parse_sessions_root(args.sessions_dir)

    if not sessions:
        print("\nNo sessions found. Exiting.", file=sys.stderr)
        sys.exit(1)

    # Validate
    if args.validate:
        warnings = validate_sessions(sessions)
        if warnings:
            print("\nValidation warnings:")
            for w in warnings:
                print(f"  ! {w}")
        else:
            print("\nSchema validation: PASSED")

    # Stats
    if args.stats:
        print_stats(sessions)

    # Write as per format
    if args.format == "json":
        sessions_to_json(sessions, args.output)
    else:
        sessions_to_js(sessions, args.output)

    print()


if __name__ == "__main__":
    main()
