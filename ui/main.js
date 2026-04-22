// ========== DATA PARSING ==========

/** Parse solution filename: problem_name_user_name.ext */
function parseFilename(filename) {
  const dotIdx = filename.lastIndexOf(".");
  const ext = dotIdx >= 0 ? filename.slice(dotIdx + 1) : "";
  const name = dotIdx >= 0 ? filename.slice(0, dotIdx) : filename;
  const parts = name.split("_");
  const user = parts.length > 1 ? parts.pop() : "unknown";
  const problem = parts.join("_");
  return { problem, user, ext };
}

/** Extract structured resources from session markdown */
function parseResources(markdown) {
  const lines = markdown.split("\n");
  const resources = {
    problems: [],
    quizzes: [],
    assignments: [],
    excalidraw: [],
  };
  let section = null;

  for (const line of lines) {
    const trimmed = line.trim();
    const hMatch = trimmed.match(/^#{1,6}\s*(.+)/i);
    if (hMatch) {
      const t = hMatch[1].toLowerCase();
      if (/🔗|problem|coding/i.test(t)) section = "problems";
      else if (/📝|quiz/i.test(t)) section = "quizzes";
      else if (/📚|assignment/i.test(t)) section = "assignments";
      else if (/excalidraw/i.test(t)) section = "excalidraw";
      else section = null;
      continue;
    }
    if (!section) continue;

    // Extract markdown links [text](url)
    const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
    let m;
    while ((m = linkRegex.exec(trimmed)) !== null) {
      const url = m[2];
      if (url.includes("excalidraw.com")) {
        if (!resources.excalidraw.some((e) => e.url === url))
          resources.excalidraw.push({
            text: m[1] || "Excalidraw Diagram",
            url,
          });
      } else {
        resources[section].push({ text: m[1] || url, url });
      }
    }

    // Extract bare URLs not already captured as markdown links
    const capturedUrls = new Set();
    linkRegex.lastIndex = 0;
    while ((m = linkRegex.exec(trimmed)) !== null) capturedUrls.add(m[2]);

    const urlRegex = /https?:\/\/[^\s)]+/g;
    while ((m = urlRegex.exec(trimmed)) !== null) {
      const url = m[0];
      if (capturedUrls.has(url)) continue;
      if (url.includes("excalidraw.com")) {
        if (!resources.excalidraw.some((e) => e.url === url))
          resources.excalidraw.push({
            text: "Excalidraw Diagram",
            url,
          });
      } else {
        if (!resources[section].some((r) => r.url === url))
          resources[section].push({ text: url, url });
      }
    }

    // Plain text lines in resource sections (no URLs found)
    if (
      trimmed &&
      !linkRegex.test(trimmed) &&
      !urlRegex.test(trimmed) &&
      trimmed.length > 1
    ) {
      if (!/^[–—:.,\-–\s]+$/.test(trimmed)) {
        resources[section].push({
          text: trimmed,
          url: null,
        });
      }
    }
  }
  return resources;
}

/** Group solutions by language */
function groupByLanguage(solutions) {
  const groups = {};
  for (const sol of solutions) {
    if (!groups[sol.lang]) groups[sol.lang] = [];
    groups[sol.lang].push(sol);
  }
  return groups;
}

/** Sanitize HTML - remove dangerous elements */
function sanitizeHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  div
    .querySelectorAll("script, iframe, object, embed, form")
    .forEach((el) => el.remove());
  // Convert excalidraw URLs to links instead of bare URLs
  div.querySelectorAll("a").forEach((a) => {
    if (a.href && a.href.includes("excalidraw.com")) {
      a.classList.add("excalidraw-ref");
    }
  });
  return div.innerHTML;
}

/** Highlight text matches */
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

/** Count total solutions across all sessions */
function totalSolutions() {
  return SESSIONS.reduce((sum, s) => sum + s.solutions.length, 0);
}

// ========== STATE ==========
const state = {
  selectedSessionId: null,
  activeTab: "notes", // 'notes' | 'excalidraw' | 'solutions'
  selectedLang: null,
  viewingSolution: null, // single solution being viewed
  compareSolution: null, // second solution for compare mode
  compareMode: false,
  searchQuery: "",
  searchResults: [],
  searchFocusedIndex: -1,
  sidebarOpen: false,
};

// ========== DOM REFERENCES ==========
const $sessionList = document.getElementById("sessionList");
const $mainContent = document.getElementById("mainContent");
const $searchModal = document.getElementById("searchOverlay");
const $searchInput = document.getElementById("searchInput");
const $searchResults = document.getElementById("searchResults");
const $searchBackdrop = document.getElementById("searchBackdrop");
const $searchTrigger = document.getElementById("searchTrigger");
const $sidebar = document.getElementById("sidebar");
const $sidebarOverlay = document.getElementById("sidebarOverlay");
const $mobileClose = document.getElementById("mobileClose");
const $sessionCount = document.getElementById("sessionCount");
const $solutionCount = document.getElementById("solutionCount");

// ========== RENDERING ==========

function renderSessionList() {
  $sessionCount.textContent = SESSIONS.length;
  $solutionCount.textContent = totalSolutions();

  $sessionList.innerHTML = SESSIONS.map((s) => {
    const isActive = state.selectedSessionId === s.id;
    const solCount = s.solutions.length;
    const hasExcalidraw = parseResources(s.markdown).excalidraw.length > 0;
    return `
        <div class="session-item rounded-lg border border-transparent px-3 py-3 ${isActive ? "active" : ""}"
             role="listitem" tabindex="0" data-session-id="${s.id}"
             aria-label="Session ${s.num}: ${s.title}">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[10px] font-mono text-muted bg-card px-1.5 py-0.5 rounded">${new Date(s.date).toLocaleDateString("en", { day: "2-digit", month: "short" }) || s.date.slice(5)}</span>
            <span class="text-[10px] font-mono text-muted">S${s.num}</span>
            ${hasExcalidraw ? '<span class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" title="Has Excalidraw diagram"></span>' : ""}
          </div>
          <h3 class="text-sm font-medium text-fg leading-snug mb-1.5 line-clamp-2">${s.title}</h3>
          <div class="flex flex-wrap gap-1 mb-1.5">
            ${s.topics
              .slice(0, 4)
              .map(
                (t) =>
                  `<span class="text-[10px] px-1.5 py-0.5 rounded bg-accent-dim text-accent font-medium">${t}</span>`,
              )
              .join("")}
            ${s.topics.length > 4 ? `<span class="text-[10px] text-muted">+${s.topics.length - 4}</span>` : ""}
          </div>
          <div class="flex items-center gap-2 text-[10px] text-muted">
            <span><i class="fa-solid fa-code text-[8px] mr-1"></i>${solCount} solution${solCount !== 1 ? "s" : ""}</span>
          </div>
        </div>
      `;
  }).join("");
}

function renderMainContent() {
  if (!state.selectedSessionId) {
    renderWelcome();
    return;
  }
  const session = SESSIONS.find((s) => s.id === state.selectedSessionId);
  if (!session) {
    renderWelcome();
    return;
  }
  renderSessionDetail(session);
}

function renderWelcome() {
  $mainContent.innerHTML = `
      <div class="flex items-center justify-center h-full">
        <div class="text-center max-w-md px-6 animate-fade-slide">
          <div class="w-16 h-16 rounded-2xl bg-accent-dim flex items-center justify-center mx-auto mb-6">
            <i class="fa-solid fa-book-open text-accent text-xl"></i>
          </div>
          <h2 class="text-xl font-bold text-fg mb-2">Session Browser</h2>
          <p class="text-sm text-muted leading-relaxed mb-6">
            Browse learning sessions, view notes and Excalidraw diagrams, and explore multi-user solutions across programming languages.
          </p>
          <div class="flex items-center justify-center gap-6 text-xs text-muted">
            <span class="flex items-center gap-1.5"><kbd class="font-mono border border-border rounded px-1.5 py-0.5">⌘K</kbd> Search</span>
            <span class="flex items-center gap-1.5"><kbd class="font-mono border border-border rounded px-1.5 py-0.5">↑↓</kbd> Navigate</span>
            <span class="flex items-center gap-1.5"><kbd class="font-mono border border-border rounded px-1.5 py-0.5">Enter</kbd> Open</span>
          </div>
        </div>
      </div>
    `;
}

function renderSessionDetail(session) {
  const resources = parseResources(session.markdown);
  const solGroups = groupByLanguage(session.solutions);
  const langs = Object.keys(solGroups);
  if (!state.selectedLang && langs.length > 0) state.selectedLang = langs[0];

  const langIcons = {
    python: "fa-python",
    cpp: "fa-c++",
    java: "fa-java",
    js: "fa-js",
    ts: "fa-ts",
  };
  const langLabels = {
    python: "Python",
    cpp: "C++",
    java: "Java",
    js: "JavaScript",
    ts: "TypeScript",
  };
  const langBrands = {
    python: "fa-brands",
    cpp: "fa-brands",
    java: "fa-brands",
    js: "fa-brands",
    ts: "fa-brands",
  };

  const totalRes =
    resources.problems.length +
    resources.quizzes.length +
    resources.assignments.length;

  $mainContent.innerHTML = `
      <div class="animate-fade-slide">
        <!-- Mobile back button -->
        <div class="md:hidden px-4 pt-4">
          <button id="mobileBack" class="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors" aria-label="Back to session list">
            <i class="fa-solid fa-arrow-left text-xs"></i> Sessions
          </button>
        </div>

        <!-- Session Header -->
        <div class="px-6 md:px-10 pt-6 md:pt-10 pb-6">
          <div class="flex items-center gap-2 text-xs text-muted mb-3 font-mono">
            <span>sessions/</span><span class="text-fg">${session.id}/</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-fg leading-tight mb-3">${session.title}</h2>
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="text-xs font-mono text-muted bg-card border border-border px-2.5 py-1 rounded-md">
              <i class="fa-regular fa-calendar mr-1.5"></i>${session.date}
            </span>
            <span class="text-xs font-mono text-muted bg-card border border-border px-2.5 py-1 rounded-md">
              Session ${session.num}
            </span>
          </div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${session.topics.map((t) => `<span class="text-xs px-2 py-0.5 rounded-md bg-accent-dim text-accent font-medium">${t}</span>`).join("")}
          </div>
          <div class="flex items-center gap-4 text-xs text-muted">
            <span><i class="fa-solid fa-code mr-1.5"></i>${session.solutions.length} solutions</span>
            ${totalRes > 0 ? `<span><i class="fa-solid fa-link mr-1.5"></i>${totalRes} resources</span>` : ""}
            ${resources.excalidraw.length > 0 ? `<span><i class="fa-solid fa-pen-ruler mr-1.5 text-accent"></i>${resources.excalidraw.length} diagram${resources.excalidraw.length > 1 ? "s" : ""}</span>` : ""}
          </div>
        </div>

        <!-- Resource Cards (always visible) -->
        ${
          totalRes > 0
            ? `
        <div class="px-6 md:px-10 pb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${
              resources.problems.length > 0
                ? `
            <div class="bg-card border border-border rounded-xl p-4">
              <div class="flex items-center gap-2 mb-3">
                <span class="w-7 h-7 rounded-lg bg-accent-dim flex items-center justify-center text-accent text-xs">🔗</span>
                <h3 class="text-xs font-semibold text-fg uppercase tracking-wider">Problems</h3>
                <span class="text-[10px] text-muted ml-auto">${resources.problems.length}</span>
              </div>
              <div class="space-y-1.5">
                ${resources.problems
                  .map(
                    (r) => `
                  <div class="resource-item flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer" ${r.url ? `onclick="window.open('${r.url}', '_blank')"` : ""}>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-muted flex-shrink-0"></i>
                    <span class="text-xs text-fg truncate">${r.text}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }
            ${
              resources.quizzes.length > 0
                ? `
            <div class="bg-card border border-border rounded-xl p-4">
              <div class="flex items-center gap-2 mb-3">
                <span class="w-7 h-7 rounded-lg bg-accent-dim flex items-center justify-center text-accent text-xs">📝</span>
                <h3 class="text-xs font-semibold text-fg uppercase tracking-wider">Quizzes</h3>
                <span class="text-[10px] text-muted ml-auto">${resources.quizzes.length}</span>
              </div>
              <div class="space-y-1.5">
                ${resources.quizzes
                  .map(
                    (r) => `
                  <div class="resource-item flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer" ${r.url ? `onclick="window.open('${r.url}', '_blank')"` : ""}>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-muted flex-shrink-0"></i>
                    <span class="text-xs text-fg truncate">${r.text}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }
            ${
              resources.assignments.length > 0
                ? `
            <div class="bg-card border border-border rounded-xl p-4">
              <div class="flex items-center gap-2 mb-3">
                <span class="w-7 h-7 rounded-lg bg-accent-dim flex items-center justify-center text-accent text-xs">📚</span>
                <h3 class="text-xs font-semibold text-fg uppercase tracking-wider">Assignments</h3>
                <span class="text-[10px] text-muted ml-auto">${resources.assignments.length}</span>
              </div>
              <div class="space-y-1.5">
                ${resources.assignments
                  .map(
                    (r) => `
                  <div class="resource-item flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer" ${r.url ? `onclick="window.open('${r.url}', '_blank')"` : ""}>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-muted flex-shrink-0"></i>
                    <span class="text-xs text-fg truncate">${r.text}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }
          </div>
        </div>
        `
            : ""
        }

        <!-- Tab Bar -->
        <div class="px-6 md:px-10 border-b border-border">
          <div class="flex gap-6 -mb-px" role="tablist" aria-label="Session content views">
            <button class="tab-btn pb-3 text-sm font-medium ${state.activeTab === "notes" ? "active text-accent" : "text-muted"}" role="tab" aria-selected="${state.activeTab === "notes"}" data-tab="notes">
              <i class="fa-solid fa-file-lines mr-1.5 text-xs"></i>Notes
            </button>
            <button class="tab-btn pb-3 text-sm font-medium ${state.activeTab === "excalidraw" ? "active text-accent" : "text-muted"}" role="tab" aria-selected="${state.activeTab === "excalidraw"}" data-tab="excalidraw">
              <i class="fa-solid fa-pen-ruler mr-1.5 text-xs"></i>Excalidraw
              ${resources.excalidraw.length > 0 ? `<span class="ml-1.5 text-[10px] bg-accent-dim text-accent rounded-full px-1.5 py-0.5">${resources.excalidraw.length}</span>` : ""}
            </button>
            <button class="tab-btn pb-3 text-sm font-medium ${state.activeTab === "solutions" ? "active text-accent" : "text-muted"}" role="tab" aria-selected="${state.activeTab === "solutions"}" data-tab="solutions">
              <i class="fa-solid fa-code mr-1.5 text-xs"></i>Solutions
              <span class="ml-1.5 text-[10px] bg-card border border-border rounded-full px-1.5 py-0.5 text-muted">${session.solutions.length}</span>
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="px-6 md:px-10 py-6" id="tabContent" role="tabpanel">
          ${renderTabContent(session, resources, solGroups, langs, langIcons, langLabels, langBrands)}
        </div>
      </div>
    `;

  // Wire up mobile back button
  const mobileBack = document.getElementById("mobileBack");
  if (mobileBack)
    mobileBack.addEventListener("click", () => {
      state.selectedSessionId = null;
      renderSessionList();
      renderMainContent();
      closeSidebar();
    });

  // Wire up tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeTab = btn.dataset.tab;
      state.viewingSolution = null;
      state.compareSolution = null;
      state.compareMode = false;
      renderMainContent();
    });
  });

  // Wire up solution interactions
  wireUpSolutionEvents(session, solGroups);
}

function renderTabContent(
  session,
  resources,
  solGroups,
  langs,
  langIcons,
  langLabels,
  langBrands,
) {
  if (state.activeTab === "notes") return renderNotesTab(session);
  if (state.activeTab === "excalidraw") return renderExcalidrawTab(resources);
  if (state.activeTab === "solutions")
    return renderSolutionsTab(session, solGroups, langs, langLabels);
  return "";
}

function renderNotesTab(session) {
  const html = marked.parse(session.markdown);
  const sanitized = sanitizeHtml(html);
  return `<div class="md-content max-w-3xl">${sanitized}</div>`;
}

function renderExcalidrawTab(resources) {
  if (resources.excalidraw.length === 0) {
    return `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mb-4">
            <i class="fa-solid fa-pen-ruler text-muted text-lg"></i>
          </div>
          <p class="text-sm text-muted">No Excalidraw diagrams found for this session.</p>
        </div>
      `;
  }

  if (resources.excalidraw.length === 1) {
    return `
        <div class="animate-fade-slide">
          <div class="bg-card border border-border rounded-xl overflow-hidden" style="height: 600px;">
            <iframe src="${resources.excalidraw[0].url}" width="100%" height="100%" style="border:none;" allowfullscreen title="Excalidraw diagram" loading="lazy"></iframe>
          </div>
        </div>
      `;
  }

  // Multiple diagrams
  return `
      <div class="animate-fade-slide">
        <div class="flex gap-2 mb-4 flex-wrap">
          ${resources.excalidraw
            .map(
              (d, i) => `
            <button class="excalidraw-tab-btn text-xs px-3 py-1.5 rounded-lg border transition-colors ${i === 0 ? "bg-accent-dim border-accent/30 text-accent" : "bg-card border-border text-muted hover:text-fg"}" data-excal-idx="${i}">
              Diagram ${i + 1}
            </button>
          `,
            )
            .join("")}
        </div>
        <div class="bg-card border border-border rounded-xl overflow-hidden" style="height: 600px;">
          ${resources.excalidraw
            .map(
              (d, i) => `
            <iframe src="${d.url}" width="100%" height="100%" style="border:none; display:${i === 0 ? "block" : "none"};" allowfullscreen title="Excalidraw diagram ${i + 1}" loading="lazy"></iframe>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
}

function renderSolutionsTab(session, solGroups, langs, langLabels) {
  if (session.solutions.length === 0) {
    return `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mb-4">
            <i class="fa-solid fa-code text-muted text-lg"></i>
          </div>
          <p class="text-sm text-muted">No solutions submitted for this session yet.</p>
        </div>
      `;
  }

  const currentSols = solGroups[state.selectedLang] || [];
  const viewerSolution = state.viewingSolution
    ? session.solutions.find((s) => s.file === state.viewingSolution)
    : null;
  const compareSol = state.compareSolution
    ? session.solutions.find((s) => s.file === state.compareSolution)
    : null;

  return `
      <div class="animate-fade-slide">
        <!-- Language tabs + compare toggle -->
        <div class="flex items-center gap-2 mb-4 flex-wrap">
          ${langs
            .map(
              (l) => `
            <button class="lang-tab-btn text-xs px-3 py-1.5 rounded-lg border transition-colors font-medium ${state.selectedLang === l ? "bg-accent-dim border-accent/30 text-accent" : "bg-card border-border text-muted hover:text-fg"}" data-lang="${l}" role="tab" aria-selected="${state.selectedLang === l}">
              ${langLabels[l] || l}
              <span class="ml-1 opacity-60">${solGroups[l].length}</span>
            </button>
          `,
            )
            .join("")}
          <div class="ml-auto">
            <button id="compareToggle" class="text-xs px-3 py-1.5 rounded-lg border transition-colors font-medium ${state.compareMode ? "bg-accent text-white border-accent" : "bg-card border-border text-muted hover:text-fg"}" aria-label="Toggle compare mode">
              <i class="fa-solid fa-columns mr-1.5"></i>Compare
            </button>
          </div>
        </div>

        ${state.compareMode ? `<p class="text-xs text-muted mb-3 -mt-2"><i class="fa-solid fa-info-circle mr-1"></i>Select two solutions to compare side by side.</p>` : ""}

        <!-- Solution list -->
        <div class="bg-card border border-border rounded-xl overflow-hidden mb-4">
          <div class="px-4 py-2.5 border-b border-border flex items-center text-[10px] text-muted uppercase tracking-wider font-semibold">
            <span class="flex-1">Filename</span>
            <span class="w-24 text-center">User</span>
            <span class="w-48 text-right">Actions</span>
          </div>
          ${currentSols
            .map((sol) => {
              const parsed = parseFilename(sol.file);
              const isSelected = state.viewingSolution === sol.file;
              const isCompare = state.compareSolution === sol.file;
              return `
              <div class="solution-row flex items-center px-4 py-2.5 border-b border-border last:border-b-0 ${isSelected ? "selected" : ""}" data-sol-file="${sol.file}">
                <div class="flex-1 flex items-center gap-2 min-w-0">
                  <i class="fa-solid fa-file-code text-[10px] text-muted flex-shrink-0"></i>
                  <span class="text-xs text-fg font-mono truncate" title="${sol.file}">${sol.file}</span>
                </div>
                <div class="w-24 text-center">
                  <span class="text-xs text-muted">${parsed.user}</span>
                </div>
                <div class="w-48 flex items-center justify-end gap-1.5">
                  <button class="sol-view-btn text-[10px] px-2 py-1 rounded-md ${isSelected ? "bg-accent text-white" : "bg-elevated text-muted hover:text-fg"} transition-colors" data-action="view" data-sol="${sol.file}" aria-label="View ${sol.file}">
                    View
                  </button>
                  <button class="sol-action-btn text-[10px] px-2 py-1 rounded-md bg-elevated text-muted hover:text-fg transition-colors" data-action="raw" data-sol="${sol.file}" aria-label="View raw ${sol.file}">
                    Raw
                  </button>
                  <button class="sol-action-btn text-[10px] px-2 py-1 rounded-md bg-elevated text-muted hover:text-fg transition-colors" data-action="download" data-sol="${sol.file}" aria-label="Download ${sol.file}">
                    <i class="fa-solid fa-download"></i>
                  </button>
                  ${
                    state.compareMode
                      ? `
                    <button class="sol-compare-btn text-[10px] px-2 py-1 rounded-md ${isCompare ? "bg-accent text-white" : "bg-elevated text-muted hover:text-fg"} transition-colors" data-action="compare" data-sol="${sol.file}" aria-label="Compare ${sol.file}">
                      Pin
                    </button>
                  `
                      : ""
                  }
                </div>
              </div>
            `;
            })
            .join("")}
        </div>

        <!-- Solution Viewer -->
        ${
          viewerSolution
            ? `
          <div class="animate-fade-slide">
            ${
              compareSol
                ? `
              <!-- Compare view -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-[10px] font-mono text-muted bg-card border border-border px-2 py-0.5 rounded truncate max-w-xs">${viewerSolution.file}</span>
                  </div>
                  <div class="bg-[#141414] border border-border rounded-xl overflow-hidden">
                    <div class="flex items-center gap-2 px-4 py-2 border-b border-border">
                      <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                      <span class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                      <span class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                      <span class="text-[10px] text-muted ml-2 font-mono">${viewerSolution.file}</span>
                    </div>
                    <div class="overflow-x-auto p-0">
                      ${renderCodeWithLines(viewerSolution.content)}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-[10px] font-mono text-muted bg-card border border-border px-2 py-0.5 rounded truncate max-w-xs">${compareSol.file}</span>
                  </div>
                  <div class="bg-[#141414] border border-border rounded-xl overflow-hidden">
                    <div class="flex items-center gap-2 px-4 py-2 border-b border-border">
                      <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                      <span class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                      <span class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                      <span class="text-[10px] text-muted ml-2 font-mono">${compareSol.file}</span>
                    </div>
                    <div class="overflow-x-auto p-0">
                      ${renderCodeWithLines(compareSol.content)}
                    </div>
                  </div>
                </div>
              </div>
            `
                : `
              <!-- Single view -->
              <div class="bg-[#141414] border border-border rounded-xl overflow-hidden">
                <div class="flex items-center gap-2 px-4 py-2 border-b border-border">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                  <span class="text-[10px] text-muted ml-2 font-mono">${viewerSolution.file}</span>
                  <span class="text-[10px] text-muted ml-auto">${viewerSolution.content.split("\n").length} lines</span>
                </div>
                <div class="overflow-x-auto">
                  ${renderCodeWithLines(viewerSolution.content)}
                </div>
              </div>
            `
            }
          </div>
        `
            : `
          <div class="flex flex-col items-center justify-center py-10 text-center">
            <p class="text-xs text-muted">Select a solution above to view its contents.</p>
          </div>
        `
        }
      </div>
    `;
}

function renderCodeWithLines(content) {
  const lines = content.split("\n");
  // Remove trailing empty line if present
  if (lines.length > 0 && lines[lines.length - 1].trim() === "") lines.pop();
  const maxLineNum = String(lines.length).length;
  return `
      <table class="w-full border-collapse text-xs font-mono">
        <tbody>
          ${lines
            .map(
              (line, i) => `
            <tr class="hover:bg-white/[0.02] transition-colors">
              <td class="line-num px-3 py-0 text-right select-none" style="min-width:${maxLineNum * 0.6 + 2}rem; color:#3a3632; font-size:11px; vertical-align:top;">${i + 1}</td>
              <td class="px-3 py-0" style="color:#b0aaa2; white-space:pre; font-size:12px; line-height:1.6;">${escapeHtml(line)}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    `;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wireUpSolutionEvents(session, solGroups) {
  // Language tab clicks
  document.querySelectorAll(".lang-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedLang = btn.dataset.lang;
      state.viewingSolution = null;
      state.compareSolution = null;
      renderMainContent();
    });
  });

  // Compare toggle
  const compareToggle = document.getElementById("compareToggle");
  if (compareToggle) {
    compareToggle.addEventListener("click", () => {
      state.compareMode = !state.compareMode;
      if (!state.compareMode) state.compareSolution = null;
      renderMainContent();
    });
  }

  // Excalidraw tab switching (multiple diagrams)
  document.querySelectorAll(".excalidraw-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.excalIdx);
      const container = btn.closest("#tabContent");
      const iframes = container.querySelectorAll("iframe");
      const buttons = container.querySelectorAll(".excalidraw-tab-btn");
      iframes.forEach(
        (f, i) => (f.style.display = i === idx ? "block" : "none"),
      );
      buttons.forEach((b, i) => {
        b.className = `excalidraw-tab-btn text-xs px-3 py-1.5 rounded-lg border transition-colors ${i === idx ? "bg-accent-dim border-accent/30 text-accent" : "bg-card border-border text-muted hover:text-fg"}`;
      });
    });
  });

  // Solution action buttons
  document.querySelectorAll(".sol-view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const solFile = btn.dataset.sol;
      state.viewingSolution = solFile;
      renderMainContent();
    });
  });

  document.querySelectorAll(".sol-action-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const solFile = btn.dataset.sol;
      const action = btn.dataset.action;
      const sol = session.solutions.find((s) => s.file === solFile);
      if (!sol) return;

      if (action === "raw") {
        // Open raw in new tab
        const blob = new Blob([sol.content], {
          type: "text/plain",
        });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      } else if (action === "download") {
        const blob = new Blob([sol.content], {
          type: "text/plain",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = sol.file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    });
  });

  document.querySelectorAll(".sol-compare-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const solFile = btn.dataset.sol;
      if (state.compareSolution === solFile) {
        state.compareSolution = null;
      } else {
        state.compareSolution = solFile;
        if (!state.viewingSolution) state.viewingSolution = solFile;
      }
      renderMainContent();
    });
  });
}

// ========== SEARCH ==========

function openSearch() {
  $searchModal.classList.remove("hidden");
  $searchModal.classList.add("flex");
  $searchInput.value = "";
  $searchInput.focus();
  state.searchQuery = "";
  state.searchResults = [];
  state.searchFocusedIndex = -1;
  renderSearchResults();
}

function closeSearch() {
  $searchModal.classList.add("hidden");
  $searchModal.classList.remove("flex");
}

function performSearch(query) {
  state.searchQuery = query.trim().toLowerCase();
  if (!state.searchQuery) {
    state.searchResults = [];
    state.searchFocusedIndex = -1;
    renderSearchResults();
    return;
  }

  const q = state.searchQuery;
  state.searchResults = SESSIONS.map((s) => {
    // Score-based ranking
    let score = 0;
    let matchedTopics = [];

    // Title match (highest weight)
    if (s.title.toLowerCase().includes(q)) score += 10;

    // Topic matches
    for (const t of s.topics) {
      if (t.includes(q)) {
        score += 5;
        matchedTopics.push(t);
      }
    }

    // Markdown content match
    const contentLower = s.markdown.toLowerCase();
    if (contentLower.includes(q)) score += 2;

    // Also find topics that share words with the query
    const queryWords = q.split(/\s+/);
    for (const t of s.topics) {
      for (const w of queryWords) {
        if (w.length > 2 && t.includes(w) && !matchedTopics.includes(t)) {
          score += 1;
          matchedTopics.push(t);
        }
      }
    }

    return {
      session: s,
      score,
      matchedTopics: [...new Set(matchedTopics)],
    };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  state.searchFocusedIndex = -1;
  renderSearchResults();
}

function renderSearchResults() {
  if (state.searchResults.length === 0) {
    $searchResults.innerHTML = state.searchQuery
      ? `<div class="px-3 py-8 text-center text-muted text-sm">No sessions found for "${escapeHtml(state.searchQuery)}"</div>`
      : `<div class="px-3 py-8 text-center text-muted text-sm">Type to search across sessions...</div>`;
    return;
  }

  $searchResults.innerHTML = state.searchResults
    .map((r, i) => {
      const s = r.session;
      const isFocused = i === state.searchFocusedIndex;
      return `
        <div class="search-result flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${isFocused ? "bg-accent-dim" : "hover:bg-card"}"
             data-session-id="${s.id}" data-result-index="${i}" role="option" aria-selected="${isFocused}">
          <div class="flex-shrink-0 mt-0.5">
            <span class="text-[10px] font-mono text-muted bg-card border border-border px-1.5 py-0.5 rounded">S${s.num}</span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium text-fg truncate">${highlight(s.title, state.searchQuery)}</div>
            <div class="flex flex-wrap gap-1 mt-1">
              ${s.topics.map((t) => `<span class="text-[10px] px-1.5 py-0.5 rounded ${r.matchedTopics.includes(t) ? "bg-accent-dim text-accent font-medium" : "bg-card text-muted"}">${highlight(t, state.searchQuery)}</span>`).join("")}
            </div>
            <div class="text-[10px] text-muted mt-1.5">
              ${s.date} &middot; ${s.solutions.length} solutions
            </div>
          </div>
          <i class="fa-solid fa-arrow-right text-[10px] text-muted flex-shrink-0 mt-1.5 opacity-0 group-hover:opacity-100"></i>
        </div>
      `;
    })
    .join("");

  // Wire result clicks
  $searchResults.querySelectorAll(".search-result").forEach((el) => {
    el.addEventListener("click", () => {
      selectSession(el.dataset.sessionId);
      closeSearch();
    });
  });
}

// ========== SIDEBAR MOBILE ==========

function openSidebar() {
  state.sidebarOpen = true;
  $sidebar.classList.add("open");
  $sidebarOverlay.classList.remove("hidden");
}

function closeSidebar() {
  state.sidebarOpen = false;
  $sidebar.classList.remove("open");
  $sidebarOverlay.classList.add("hidden");
}

// ========== SESSION SELECTION ==========

function selectSession(id) {
  state.selectedSessionId = id;
  state.activeTab = "notes";
  state.selectedLang = null;
  state.viewingSolution = null;
  state.compareSolution = null;
  state.compareMode = false;

  // Set default language
  const session = SESSIONS.find((s) => s.id === id);
  if (session) {
    const groups = groupByLanguage(session.solutions);
    const langs = Object.keys(groups);
    if (langs.length > 0) state.selectedLang = langs[0];
  }

  renderSessionList();
  renderMainContent();
  closeSidebar();

  // Scroll main content to top
  $mainContent.scrollTop = 0;
}

// ========== EVENT HANDLERS ==========

// Session list clicks (event delegation)
$sessionList.addEventListener("click", (e) => {
  const item = e.target.closest(".session-item");
  if (item) selectSession(item.dataset.sessionId);
});

$sessionList.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const item = e.target.closest(".session-item");
    if (item) selectSession(item.dataset.sessionId);
  }
});

// Search trigger
$searchTrigger.addEventListener("click", openSearch);

// Search modal close
$searchBackdrop.addEventListener("click", closeSearch);

// Search input
$searchInput.addEventListener("input", (e) => {
  performSearch(e.target.value);
});

// Search keyboard navigation
$searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (state.searchResults.length > 0) {
      state.searchFocusedIndex = Math.min(
        state.searchFocusedIndex + 1,
        state.searchResults.length - 1,
      );
      renderSearchResults();
      scrollSearchResultIntoView();
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (state.searchResults.length > 0) {
      state.searchFocusedIndex = Math.max(state.searchFocusedIndex - 1, -1);
      renderSearchResults();
      scrollSearchResultIntoView();
    }
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (
      state.searchFocusedIndex >= 0 &&
      state.searchFocusedIndex < state.searchResults.length
    ) {
      const sessionId =
        state.searchResults[state.searchFocusedIndex].session.id;
      selectSession(sessionId);
      closeSearch();
    }
  }
});

function scrollSearchResultIntoView() {
  const focused = $searchResults.querySelector(
    `[data-result-index="${state.searchFocusedIndex}"]`,
  );
  if (focused) focused.scrollIntoView({ block: "nearest" });
}

// Global keyboard shortcut: Cmd/Ctrl+K for search
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    openSearch();
  }
  if (e.key === "Escape" && !$searchModal.classList.contains("hidden")) {
    closeSearch();
  }
});

// Mobile sidebar
$sidebarOverlay.addEventListener("click", closeSidebar);
$mobileClose.addEventListener("click", closeSidebar);

// Add a mobile menu button to main content (we'll inject it)
// Actually, let's add a floating mobile menu button
const mobileMenuBtn = document.createElement("button");
mobileMenuBtn.id = "mobileMenuBtn";
mobileMenuBtn.className =
  "fixed top-4 left-4 z-20 md:hidden w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-fg transition-colors shadow-lg";
mobileMenuBtn.setAttribute("aria-label", "Open session list");
mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-sm"></i>';
mobileMenuBtn.addEventListener("click", openSidebar);
document.body.appendChild(mobileMenuBtn);

// Show/hide mobile menu button based on whether a session is selected
const observer = new MutationObserver(() => {
  mobileMenuBtn.style.display = state.selectedSessionId ? "flex" : "none";
});
observer.observe($mainContent, { childList: true, subtree: true });

// ========== INITIALIZATION ==========

// Configure marked
marked.setOptions({ breaks: true, gfm: true });

// Initial render
SESSIONS.reverse();
renderSessionList();
renderMainContent();
mobileMenuBtn.style.display = "none";
