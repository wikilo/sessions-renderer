const SESSIONS = [
  {
    "id": "2025-12-29-session1",
    "date": "2025-12-29",
    "num": 1,
    "title": "Logic Building",
    "topics": [
      "general"
    ],
    "markdown": "\n# Logic Building : \n- https://www.geeksforgeeks.org/quizzes/dsa-tutorial-logic-building/\n\n# Time Complexity : \n- https://www.interviewbit.com/courses/programming/time-complexity/how-to-calculate-running-time/\n- https://www.interviewbit.com/courses/programming/time-complexity/asymptotic-notations/\n- https://www.interviewbit.com/courses/programming/time-complexity/how-to-calculate-time-complexity/\n- https://www.interviewbit.com/courses/programming/time-complexity/time-complexity-examples/\n- https://www.interviewbit.com/courses/programming/time-complexity/relevance-of-time-complexity/\n\n# Assignments : \n- https://www.interviewbit.com/courses/programming/time-complexity/space-complexity/#problems\n  - Basic Primer\n  - Math\n  - Compare Functions\n  - Amortized complexity\n- https://www.geeksforgeeks.org/quizzes/quiz-on-complexity-analysis-for-dsa/\n",
    "solutions": []
  },
  {
    "id": "2025-12-30-session2",
    "date": "2025-12-30",
    "num": 2,
    "title": "Space Complexity",
    "topics": [
      "arrays"
    ],
    "markdown": "# Space Complexity : \n- https://www.interviewbit.com/courses/programming/time-complexity/space-complexity/\n\n\n# Arrays : \n- https://www.geeksforgeeks.org/dsa/introduction-to-arrays-data-structure-and-algorithm-tutorials/\n- https://www.geeksforgeeks.org/dsa/applications-advantages-and-disadvantages-of-array-data-structure/\n- MCQs : \n  - https://www.geeksforgeeks.org/quizzes/dsa-tutorial-array\n\n# Coding Problem(s) : \n- https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1\n\n# Assignments :\n- https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1\n- https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n- https://leetcode.com/problems/running-sum-of-1d-array/description\n- https://leetcode.com/problems/left-and-right-sum-differences/description/\n- https://www.geeksforgeeks.org/problems/second-largest3735/1\n",
    "solutions": [
      {
        "lang": "js",
        "file": "find_minimum_and_maximum_element_in_an_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1\n\n/**\n * @param {number[]} nums - array of numbers\n * @returns {number[]} minimum and maximum elements\n */\nfunction getMinMax(nums) {\n  let min = Infinity;\n  let max = -Infinity;\n\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] < min) min = nums[i];\n    if (nums[i] > max) max = nums[i];\n  }\n\n  return [min, max];\n}\n"
      },
      {
        "lang": "js",
        "file": "find_the_smallest_and_second_smallest_element_in_an_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1\n\n/**\n * @param {number[]} nums - array of numbers\n * @returns {number[]} smallest and the second smallest element. [-1] if it doesn't exist.\n */\nfunction minAnd2ndMin(nums) {\n  let smallest = Infinity;\n  let secondSmallest = smallest;\n\n  for (let i = 0; i < nums.length; i++) {\n    const num = nums[i];\n\n    if (num < smallest) {\n      secondSmallest = smallest;\n      smallest = num;\n    } else if (num < secondSmallest && num !== smallest) {\n      secondSmallest = num;\n    }\n  }\n\n  return smallest === Infinity || secondSmallest === Infinity\n    ? [-1]\n    : [smallest, secondSmallest];\n}\n"
      },
      {
        "lang": "js",
        "file": "first_and_second_smallest_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1\nclass Solution {\n    minAnd2ndMin(arr) {\n        this.min = Infinity\n        this.secondMin = Infinity\n\n        for (let num of arr) {\n            if (this.min > num) this.min = num\n        }\n\n        for (let num of arr) {\n            if (this.secondMin > num && num !== this.min) this.secondMin = num\n        }\n        if (this.secondMin === Infinity) return [-1]\n        return [this.min, this.secondMin]\n    }\n}"
      },
      {
        "lang": "js",
        "file": "first_and_second_smallests_nitin_dixit.js",
        "user": "dixit",
        "content": "class Solution {\n  minAnd2ndMin(arr) {\n    // code here\n    if (arr.length <= 1) return [-1];\n\n    if (arr.length === 2) {\n      if (arr[0] === arr[1]) return [-1];\n      if (arr[0] < arr[1]) return [arr[0], arr[1]];\n      else return [arr[1], arr[0]];\n    }\n\n    let s = arr[0]; // assume smallest to be first arr element\n    let ss = Number.MAX_SAFE_INTEGER; //second smallest\n\n    for (let i = 1; i < arr.length; i++) {\n      // Found new smallest: set second smallest to smallest and smallest to the newly found element\n      if (arr[i] < s) {\n        ss = s;\n        s = arr[i];\n      }\n      //Else if the current number is greater than first but less than second: Update second smallest = current element.\n      else if (arr[i] > s && arr[i] < ss) {\n        ss = arr[i];\n      }\n    }\n\n    // if second was never updated, all elements were equal\n    if (ss === Number.MAX_SAFE_INTEGER) return [-1];\n\n    // return both smallest and second smallest\n    return [s, ss];\n  }\n}\n"
      },
      {
        "lang": "js",
        "file": "left_and_right_sum_diff_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\n\n// Time: O(n) \n// Space: O(n) \nvar leftRightDifference = function (nums) {\n    let arr = new Array(nums.length).fill(0)\n    let arr2 = [...arr]\n    let result = [...arr]\n\n    for (let i = 1; i < arr.length; i++) {\n        arr[i] = arr[i - 1] + nums[i - 1]\n    }\n\n    for (let i = arr2.length - 2; i >= 0; i--) {\n        arr2[i] = arr2[i + 1] + nums[i + 1]\n    }\n    for (let i = 0; i < result.length; i++) {\n        result[i] = Math.abs(arr[i] - arr2[i])\n    }\n    return result\n};\n\n// optimized\n// Time: O(n)\n// Space: O(1) \n\nvar leftRightDifference = function (arr) {\n    let result = new Array(arr.length).fill(0)\n\n    let leftSum = 0;\n    for (let i = 0; i < arr.length; i++) {\n        result[i] += leftSum\n        leftSum += arr[i]\n    }\n\n    let rightSum = 0;\n    for (let i = arr.length - 1; i >= 0; i--) {\n        result[i] = Math.abs(result[i] - rightSum)\n        rightSum += arr[i]\n    }\n\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "left_and_right_sum_differences_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/left-and-right-sum-differences/description/\n\n/**\n * @param {number[]} nums - array of numbers\n * @return {number[]} array of differences between left and right indices\n */\nfunction leftRightDifference(nums) {\n  let leftSumArr = [];\n  let rightSumArr = [];\n\n  let leftSum = 0;\n  let rightSum = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    leftSumArr.push(leftSum);\n    leftSum += nums[i];\n\n    rightSumArr.push(rightSum);\n    rightSum += nums[nums.length - 1 - i];\n  }\n\n  rightSumArr.reverse();\n\n  return nums.map((_, index) =>\n    Math.abs(leftSumArr[index] - rightSumArr[index])\n  );\n}\n"
      },
      {
        "lang": "js",
        "file": "min_and_max_in_array_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} arr\n * @returns {number[]}\n */\n\nclass Solution {\n    constructor() {\n        this.max = -Infinity;\n        this.min = Infinity;\n    }\n    getMinMax(arr) {\n        for (const element of arr) {\n            if (element > this.max) this.max = element\n            if (element < this.min) this.min = element\n        }\n        return [this.min, this.max]\n    }\n}"
      },
      {
        "lang": "js",
        "file": "running_sum_of_1D_array_aryan.js",
        "user": "aryan",
        "content": "// Problem Link : https://leetcode.com/problems/running-sum-of-1d-array/\n\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar runningSum = function (nums) {\n    const n = nums.length\n    const arr = new Array(n)\n    let count = 0\n    for (let i = 0; i < n; i++) {\n        count += nums[i]\n        arr[i] = count\n    }\n    return arr\n};"
      },
      {
        "lang": "js",
        "file": "running_sum_of_1d_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/running-sum-of-1d-array/description\n\n/**\n * @param {number[]} nums - array of numbers\n * @return {number[]} array with running sum of numbers\n */\nfunction runningSum(nums) {\n  const result = [nums[0]];\n\n  for (let i = 1; i < nums.length; i++) {\n    result.push(result[i - 1] + nums[i]);\n  }\n\n  return result;\n}\n"
      },
      {
        "lang": "js",
        "file": "second_largest_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/second-largest3735/1\n\n/**\n * @param {number[]} nums - array of numbers\n * @return {number} second largest element. -1 if it doesn't exist.\n */\nfunction getSecondLargest(nums) {\n  let largest = -Infinity;\n  let secondLargest = largest;\n\n  for (let i = 0; i < nums.length; i++) {\n    const num = nums[i];\n\n    if (num > largest) {\n      secondLargest = largest;\n      largest = num;\n    } else if (num > secondLargest && num !== largest) {\n      secondLargest = num;\n    }\n  }\n\n  return secondLargest === -Infinity ? -1 : secondLargest;\n}\n"
      },
      {
        "lang": "js",
        "file": "second_largest_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/problems/second-largest3735/1\n\nclass Solution {\n    getSecondLargest(arr) {\n        this.firstLarge = -1\n        this.secondLarge = -1\n\n        for (let num of arr) {\n            if (num > this.firstLarge) this.firstLarge = num\n        }\n\n        for (let num of arr) {\n            if (num > this.secondLarge && this.firstLarge !== num) this.secondLarge = num\n        }\n        return this.secondLarge\n    }\n}"
      },
      {
        "lang": "js",
        "file": "sum_of_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n\n/**\n * @param {number[]} nums - array of numbers\n * @return {number} sum of the array\n */\nfunction arraySum(nums) {\n  return nums.reduce((acc, curr) => acc + curr, 0);\n}\n"
      },
      {
        "lang": "js",
        "file": "sum_of_array_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n/**\n * @param {number[]} arr - The array of numbers to sum\n * @return {number} - The sum of the array elements\n */\nclass Solution {\n    arraySum(arr) {\n        let sum = 0;\n        for(let num of arr) sum += num\n        return sum\n    }\n}"
      },
      {
        "lang": "ts",
        "file": "find_minimum_and_maximum_element_in_an_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1\n\n/**\n * @param arr - array of numbers\n * @returns minimum and maximum elements\n */\nfunction getMinMax(arr: number[]): [number, number] {\n  let min = Infinity;\n  let max = -Infinity;\n\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] < min) min = arr[i];\n    if (arr[i] > max) max = arr[i];\n  }\n\n  return [min, max];\n}\n"
      },
      {
        "lang": "ts",
        "file": "find_the_smallest_and_second_smallest_element_in_an_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1\n\n/**\n * @param nums - array of numbers\n * @returns smallest and the second smallest element. [-1] if it doesn't exist.\n */\nfunction minAnd2ndMin(nums: number[]) {\n  let smallest = Infinity;\n  let secondSmallest = smallest;\n\n  for (let i = 0; i < nums.length; i++) {\n    const num = nums[i];\n\n    if (num < smallest) {\n      secondSmallest = smallest;\n      smallest = num;\n    } else if (num < secondSmallest && num !== smallest) {\n      secondSmallest = num;\n    }\n  }\n\n  return smallest === Infinity || secondSmallest === Infinity\n    ? [-1]\n    : [smallest, secondSmallest];\n}\n"
      },
      {
        "lang": "ts",
        "file": "left_and_right_sum_differences_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/left-and-right-sum-differences/description/\n\n/**\n * @param nums - array of numbers\n * @returns array of differences between left and right indices\n */\nfunction leftRightDifference(nums: number[]): number[] {\n  let leftSumArr: number[] = [];\n  let rightSumArr: number[] = [];\n\n  let leftSum = 0;\n  let rightSum = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    leftSumArr.push(leftSum);\n    leftSum += nums[i];\n\n    rightSumArr.push(rightSum);\n    rightSum += nums[nums.length - 1 - i];\n  }\n\n  rightSumArr.reverse();\n\n  return nums.map((_, index) =>\n    Math.abs(leftSumArr[index] - rightSumArr[index])\n  );\n}\n"
      },
      {
        "lang": "ts",
        "file": "running_sum_of_1d_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/running-sum-of-1d-array/description\n\n/**\n * @param nums - array of numbers\n * @returns array with running sum of numbers\n */\nfunction runningSum(nums: number[]): number[] {\n  const result = [nums[0]];\n\n  for (let i = 1; i < nums.length; i++) {\n    result.push(result[i - 1] + nums[i]);\n  }\n\n  return result;\n}\n"
      },
      {
        "lang": "ts",
        "file": "second_largest_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/second-largest3735/1\n\n/**\n * @param nums - array of numbers\n * @returns second largest element. -1 if it doesn't exist.\n */\nfunction getSecondLargest(nums: number[]): number {\n  let largest = -Infinity;\n  let secondLargest = largest;\n\n  for (let i = 0; i < nums.length; i++) {\n    const num = nums[i];\n\n    if (num > largest) {\n      secondLargest = largest;\n      largest = num;\n    } else if (num > secondLargest && num !== largest) {\n      secondLargest = num;\n    }\n  }\n\n  return secondLargest === -Infinity ? -1 : secondLargest;\n}\n"
      },
      {
        "lang": "ts",
        "file": "sum_of_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n\n/**\n * @param arr - array of numbers\n * @returns sum of the array\n */\nfunction arraySum(arr: number[]): number {\n  return arr.reduce((acc, curr) => acc + curr, 0);\n}\n"
      }
    ]
  },
  {
    "id": "2026-01-01-session3",
    "date": "2026-01-01",
    "num": 3,
    "title": "Coding Problem",
    "topics": [
      "arrays",
      "searching"
    ],
    "markdown": "# Coding Problem : \n- https://www.interviewbit.com/problems/pick-from-both-sides/\n\n# Assignments :\n- https://www.interviewbit.com/problems/array2d/\n- https://www.interviewbit.com/problems/arrayimpl1/\n- https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1\n- https://leetcode.com/problems/find-pivot-index/description/\n- https://www.interviewbit.com/problems/arraybug/\n\n# Pre-requisites for next session : \n- https://www.geeksforgeeks.org/problems/reverse-an-array/1\n- https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1\n  - Try the other variation of rotating by one place in an anti clock-wise direction.\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "reverse_an_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n *\n * Problem Link : https://www.geeksforgeeks.org/problems/reverse-an-array/1\n *\n * Short Description\n * You are given an array of integers arr[]. You have to reverse the given array.\n * Note: Modify the array in place.\n *\n * Input: arr = [1, 4, 3, 2, 6, 5]\n * Output: [5, 6, 2, 3, 4, 1]\n * Explanation: The elements of the array are [1, 4, 3, 2, 6, 5]. After reversing the array, the first element goes to the last\n * position, the second element goes to the second last position and so on. Hence, the answer is [5, 6, 2, 3, 4, 1].\n *\n *\n * Input: arr = [4, 5, 2]\n * Output: [2, 5, 4]\n * Explanation: The elements of the array are [4, 5, 2]. The reversed array will be [2, 5, 4].\n *\n * Input: arr = [1]\n * Output: [1]\n * Explanation: The array has only single element, hence the reversed array is same as the original.\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass Solution\n{\npublic:\n  // Brute Force: Extra Space\n  void reverse_array_brute(std::vector<int> &arr)\n  {\n    int n = arr.size();\n    std::vector<int> temp(n);\n\n    for (int i = 0; i < n; i++)\n    {\n      temp[i] = arr[n - 1 - i];\n    }\n\n    // Copy back to original array\n    for (int i = 0; i < n; i++)\n    {\n      arr[i] = temp[i];\n    }\n  }\n\n  // Better: STL\n  void reverse_array_better(std::vector<int> &arr)\n  {\n    std::reverse(arr.begin(), arr.end());\n  }\n\n  // Best: Two Pointer (In-place)\n  void reverse_array_best(std::vector<int> &arr)\n  {\n    // Init two variable to track swaping element index\n    int st = 0;\n    int end = arr.size() - 1;\n\n    while (st < end)\n    {\n      std::swap(arr[st], arr[end]);\n      st++;\n      end--;\n    }\n  }\n};\n\nint main()\n{\n  std::vector<int> v = {1, 4, 3, 2, 6, 5};\n\n  Solution sol;\n\n  // Choose ONE of the approaches to test\n\n  // sol.reverse_array_brute(v);   // Brute Force\n  // sol.reverse_array_better(v);  // Better (STL)\n  sol.reverse_array_best(v); // Best (Two Pointer)\n\n  // Print the reversed array\n  for (int x : v)\n  {\n    std::cout << x << \" \";\n  }\n  std::cout << \"\\n\";\n  return 0;\n}"
      },
      {
        "lang": "js",
        "file": "cyclically_rotate_an_array_by_one_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1\n\n/**\n * @param {number[]} nums - array of numbers\n */\nfunction rotateByOne(nums) {\n  let last = nums[nums.length - 1];\n\n  for (let i = nums.length - 1; i > 0; i--) {\n    nums[i] = nums[i - 1];\n  }\n\n  nums[0] = last;\n}\n"
      },
      {
        "lang": "js",
        "file": "cyclically_rotate_an_array_by_one_aryan.js",
        "user": "aryan",
        "content": "class Solution {\n\n    reverse(left, right, arr) {\n        while (left < right) {\n            [arr[right], arr[left]] = [arr[left], arr[right]]\n            left++\n            right--\n        }\n    }\n\n    rotate(arr) {\n        const n = arr.length\n        this.reverse(0, n - 1, arr)\n        this.reverse(1, n - 1, arr)\n        return arr\n    }\n}"
      },
      {
        "lang": "js",
        "file": "find_pivot_index_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/find-pivot-index/description/\n\n/**\n * @param {number[]} nums - array of numbers\n * @returns {number} pivot index, -1 if pivot index doesn't exist\n */\nfunction pivotIndex(nums) {\n  let sum = 0;\n  const leftSum = new Array(nums.length);\n\n  for (let i = 0; i < nums.length; i++) {\n    leftSum[i] = sum;\n    sum += nums[i];\n  }\n\n  sum = 0;\n  const rightSum = new Array(nums.length);\n\n  for (let i = nums.length - 1; i >= 0; i--) {\n    rightSum[i] = sum;\n    sum += nums[i];\n  }\n\n  return leftSum.findIndex((_, index) => leftSum[index] === rightSum[index]);\n}\n\n/**\n * @param {number[]} nums\n * @returns {number} - pivot index, -1 if pivot index doesn't exist\n */\nfunction pivotIndex_spaceOptimized(nums) {\n  // Compute the total sum of the array\n  // total = left + nums[i] + right (for any index)\n  const total = nums.reduce((acc, curr) => acc + curr, 0);\n\n  let leftSum = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    // Right sum can be derived instead of stored:\n    // rightSum = total - leftSum - nums[i]\n    if (leftSum === total - leftSum - nums[i]) {\n      return i;\n    }\n\n    leftSum += nums[i];\n  }\n\n  return -1;\n}\n"
      },
      {
        "lang": "js",
        "file": "find_pivot_index_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar pivotIndex = function (nums) {\n    const sum = nums.reduce((acc, curr) => acc + curr, 0)\n    let leftSum = 0\n\n    for (let i = 0; i < nums.length; i++) {\n        let rightSum = sum - leftSum - nums[i]\n        if (leftSum === rightSum) return i\n        leftSum += nums[i]\n    }\n    return -1\n};"
      },
      {
        "lang": "js",
        "file": "pick_from_both_sides_Vihar.js",
        "user": "Vihar",
        "content": "/**\n * @param {number[]} A - array of numbers\n * @param {number} B - number of elements to pick\n * @returns {number} maximum sum of picking B elements from either side\n */\nfunction pickFromBothSides_bruteForce(A, B) {\n  let fromLeft = B;\n  let maximumSum = -Infinity;\n\n  while (fromLeft >= 0) {\n    let sum = 0;\n\n    for (let i = 0; i < fromLeft; i++) {\n      sum += A[i];\n    }\n\n    let fromRight = B - fromLeft;\n\n    for (let i = 0; i < fromRight; i++) {\n      sum += A[A.length - 1 - i];\n    }\n\n    maximumSum = Math.max(sum, maximumSum);\n    fromLeft--;\n  }\n\n  return maximumSum;\n}\n\n/**\n * @param {number[]} A - array of numbers\n * @param {number} B - number of elements to pick\n * @returns {number} maximum sum of picking B elements from either side\n */\nfunction pickFromBothSides_slidingWindow(A, B) {\n  let sum = 0;\n\n  // First take all elements from left\n  for (let i = 0; i < B; i++) {\n    sum += A[i];\n  }\n\n  let maximumSum = sum;\n\n  // Replace elements from left with elements from right, one by one\n  for (let i = 1; i <= B; i++) {\n    sum -= A[B - i];\n    sum += A[A.length - i];\n\n    maximumSum = Math.max(sum, maximumSum);\n  }\n\n  return maximumSum;\n}\n"
      },
      {
        "lang": "js",
        "file": "reverse_an_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/reverse-an-array/1\n\n/**\n * @param {number[]} nums - array of numbers\n */\nfunction reverseArray(nums) {\n  for (let i = 0; i < Math.floor(nums.length / 2); i++) {\n    const reverseIndex = nums.length - 1 - i;\n\n    const temp = nums[i];\n    nums[i] = nums[reverseIndex];\n    nums[reverseIndex] = temp;\n  }\n}\n"
      },
      {
        "lang": "js",
        "file": "reverse_an_array_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} arr\n * @returns {void}\n */\n\nclass Solution {\n    reverseArray(arr) {\n        let i = 0, j = arr.length - 1;\n        while(i < j){\n            [arr[j], arr[i]] = [arr[i], arr[j]]\n            i++\n            j--\n        }\n        return arr\n    }\n}"
      },
      {
        "lang": "js",
        "file": "search_an_element_in_an_array_Vihar.js",
        "user": "Vihar",
        "content": "/**\n * @param {number[]} arr - array of number\n * @param {number} x - target number to search for\n * @returns {number} index of the target element. -1 if target element doesn't exist.\n */\nfunction search(arr, x) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === x) {\n      return i;\n    }\n  }\n  return -1;\n}\n"
      },
      {
        "lang": "js",
        "file": "search_an_element_in_an_array_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} arr\n * @param {number} x\n * @return {number}\n */\nclass Solution {\n    search(arr, x) {\n        // code here\n      for(let i = 0; i < arr.length; i++){\n          if(arr[i] === x) return i\n      }\n      return -1\n    }\n}\n"
      },
      {
        "lang": "ts",
        "file": "cyclically_rotate_an_array_by_one_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1\n\n/**\n * \n * @param nums - array of numbers\n */\nfunction rotateByOne(nums: number[]) {\n  let last = nums[nums.length - 1];\n\n  for (let i = nums.length - 1; i > 0; i--) {\n    nums[i] = nums[i - 1];\n  }\n\n  nums[0] = last;\n}\n"
      },
      {
        "lang": "ts",
        "file": "find_pivot_index_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/find-pivot-index/description/\n\n/**\n * @param nums - array of numbers\n * @returns pivot index, -1 if pivot index doesn't exist\n */\nfunction pivotIndex(nums: number[]): number {\n  let sum = 0;\n  const leftSum: number[] = new Array(nums.length);\n\n  for (let i = 0; i < nums.length; i++) {\n    leftSum[i] = sum;\n    sum += nums[i];\n  }\n\n  sum = 0;\n  const rightSum: number[] = new Array(nums.length);\n\n  for (let i = nums.length - 1; i >= 0; i--) {\n    rightSum[i] = sum;\n    sum += nums[i];\n  }\n\n  return leftSum.findIndex((_, index) => leftSum[index] === rightSum[index]);\n}\n\n/**\n * @param nums - array of numbers\n * @returns pivot index, -1 if pivot index doesn't exist\n */\nfunction pivotIndex_spaceOptimized(nums: number[]): number {\n  // Compute the total sum of the array\n  // total = left + nums[i] + right (for any index)\n  const total = nums.reduce((acc, curr) => acc + curr, 0);\n\n  let leftSum = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    // Right sum can be derived instead of stored:\n    // rightSum = total - leftSum - nums[i]\n    if (leftSum === total - leftSum - nums[i]) {\n      return i;\n    }\n\n    leftSum += nums[i];\n  }\n\n  return -1;\n}\n"
      },
      {
        "lang": "ts",
        "file": "pick_from_both_sides_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.interviewbit.com/problems/pick-from-both-sides/\n\n/**\n * @param A - array of numbers\n * @param B - number of elements to pick\n * @returns maximum sum of picking B elements from either side\n */\nfunction pickFromBothSides_bruteForce(A: number[], B: number) {\n  let fromLeft = B;\n  let maximumSum = -Infinity;\n\n  while (fromLeft >= 0) {\n    let sum = 0;\n\n    for (let i = 0; i < fromLeft; i++) {\n      sum += A[i];\n    }\n\n    let fromRight = B - fromLeft;\n\n    for (let i = 0; i < fromRight; i++) {\n      sum += A[A.length - i];\n    }\n\n    maximumSum = Math.max(sum, maximumSum);\n    fromLeft--;\n  }\n\n  return maximumSum;\n}\n\n/**\n * @param A - array of numbers\n * @param B - number of elements to pick\n * @returns maximum sum of picking B elements from either side\n */\nfunction pickFromBothSides_slidingWindow(A: number[], B: number) {\n  let sum = 0;\n\n  // First take all elements from left\n  for (let i = 0; i < B; i++) {\n    sum += A[i];\n  }\n\n  let maximumSum = sum;\n\n  // Replace elements from left with elements from right, one by one\n  for (let i = 1; i <= B; i++) {\n    sum -= A[B - i];\n    sum += A[A.length - i];\n\n    maximumSum = Math.max(sum, maximumSum);\n  }\n\n  return maximumSum;\n}\n"
      },
      {
        "lang": "ts",
        "file": "reverse_an_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/reverse-an-array/1\n\n/**\n * @param {number[]} nums - array of numbers\n */\nfunction reverseArray(nums: number[]) {\n  for (let i = 0; i < Math.floor(nums.length / 2); i++) {\n    const reverseIndex = nums.length - 1 - i;\n\n    const temp = nums[i];\n    nums[i] = nums[reverseIndex];\n    nums[reverseIndex] = temp;\n  }\n}\n"
      },
      {
        "lang": "ts",
        "file": "search_an_element_in_an_array_Vihar.ts",
        "user": "Vihar",
        "content": "/**\n * @param arr - array of number\n * @param x - target number to search for\n * @returns index of the target element. -1 if target element doesn't exist.\n */\nfunction search(arr: number[], x: number) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === x) {\n      return i;\n    }\n  }\n  return -1;\n}\n"
      }
    ]
  },
  {
    "id": "2026-01-02-session4",
    "date": "2026-01-02",
    "num": 4,
    "title": "Coding Problems",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problems : \n- https://leetcode.com/problems/rotate-array/description/\n- https://leetcode.com/problems/max-consecutive-ones/description/\n\n# Excalidraw Link : \n- https://excalidraw.com/#json=G27tROnf65aWFlyFux2bS,blUMDLGVcHAilrIyIM99UQ\n\n# Assignments : \n- https://leetcode.com/problems/plus-one/\n- https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1\n- https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/description/\n- https://leetcode.com/problems/array-partition/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "max_consecutive_ones_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/max-consecutive-ones/description/\n *\n * Short Description\n * Given a binary array nums, return the maximum number of consecutive 1's in the array.\n *\n * Input: nums = [1,1,0,1,1,1]\n * Output: 3\n * Explanation:\n * The first two digits or the last three digits are consecutive 1s.\n * The maximum number of consecutive 1s is 3.\n *\n *\n * Input: nums = [1,0,1,1,0,1]\n * Output: 2\n * Explanation:\n * At index 0, 2, 5 no of ones is repectively is 1, 2 and 1\n * The mazimum number of consecutive 1s is 2\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass Solution\n{\npublic:\n  // Brute Force: Check each subarray and try to find out how many consecutive 1s\n  // The inner loop run O(n) in worse case when every element is 1\n  // Time: O(n * n), Space: O(1)\n\n  int find_max_consecutive_ones1(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Init a variable to store max no consecutive 1s\n    int max_count = 0;\n\n    for (int i = 0; i < n; i++)\n    {\n\n      int current_count = 0;\n\n      for (int j = i; j < n; j++)\n      {\n        // In particular subarray we count the 1s\n        // and set to max_count\n\n        if (nums[j] == 1)\n        {\n          current_count++;\n          max_count = std::max(max_count, current_count);\n        }\n        else\n        {\n          break;\n        }\n      }\n    }\n\n    return max_count;\n  }\n\n  // Best Approach: Single Pass Counter\n  // Traverse into array if element is 1 then increase the current_counter by one\n  // and save into max_count\n  // if element is other than 1 then current_counter is zero\n  // Time: O(n), Space: O(1)\n\n  int find_max_consecutive_ones2(std::vector<int> &nums)\n  {\n    // Init a variable to store max no consecutive 1s\n    int max_count = 0;\n    int current_count = 0;\n\n    for (auto &ele : nums)\n    {\n      if (ele == 1)\n      {\n        current_count++;\n        max_count = std::max(max_count, current_count);\n      }\n      else\n      {\n        current_count = 0;\n      }\n    }\n\n    return max_count;\n  }\n\n  // Best Approach: Two pointer / zero-boundary method\n  // Split the array into parts separated by 0s and find the maximum length\n  // of consecutive 1s in those parts.\n  // Time: O(n), Space: O(1)\n\n  int find_max_consecutive_ones3(std::vector<int> &nums)\n  {\n\n    int n = nums.size();\n\n    // Init two pointer i, j\n    // i point a position in array where next sequence start from 1\n    // j show the current index and check for this element is 0 or 1\n    int i = -1;\n    int j = 0;\n    int count = 0;\n\n    while (j < n)\n    {\n\n      if (nums[j] != 0)\n      { // for ones\n        j++;\n        continue;\n      }\n\n      count = std::max(count, j - i - 1);\n      i = j;\n      j++;\n    }\n\n    count = std::max(count, j - i - 1);\n    return count;\n  }\n};\n\nint main()\n{\n  std::vector<int> nums = {1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0};\n\n  Solution sol;\n\n  // Choose one approach to test\n\n  // int result = sol.find_max_consecutive_ones1(nums);\n  int result = sol.find_max_consecutive_ones2(nums);\n  // int result = sol.find_max_consecutive_ones3(nums);\n\n  std::cout << \"Maximum consecutive 1s: \" << result << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "rotate_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https: // leetcode.com/problems/rotate-array/description/\n *\n * Short Description\n * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.\n * Note: Modify the array in place.\n *\n * Input: nums = [1,2,3,4,5,6,7], k = 3\n * Output: [5,6,7,1,2,3,4]\n * Explanation:\n * rotate 1 steps to the right: [7,1,2,3,4,5,6]\n * rotate 2 steps to the right: [6,7,1,2,3,4,5]\n * rotate 3 steps to the right: [5,6,7,1,2,3,4]\n *\n *\n * Input: nums = [-1,-100,3,99], k = 2\n * Output:  [3,99,-1,-100]\n * Explanation:\n * rotate 1 steps to the right: [99,-1,-100,3]\n * rotate 2 steps to the right: [3,99,-1,-100]\n *\n * Next:\n * Do the same problem for k = 1 and array rotate in left direction by k steps\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass Solution\n{\npublic:\n  // Brute Force: Rotate one step k times\n  // Time: O(n * k), Space: O(1)\n  void rotate_brute(std::vector<int> &nums, int k)\n  {\n    int n = nums.size();\n    if (n == 0)\n      return;\n\n    k = k % n;\n\n    for (int i = 0; i < k; i++)\n    {\n      int last = nums[n - 1];\n      for (int j = n - 1; j > 0; j--)\n      {\n        nums[j] = nums[j - 1];\n      }\n      nums[0] = last;\n    }\n  }\n\n  // Better: Using extra array\n  // Time: O(n), Space: O(n)\n  void rotate_better(std::vector<int> &nums, int k)\n  {\n    int n = nums.size();\n    if (n == 0)\n      return;\n\n    k = k % n;\n    std::vector<int> temp(n);\n\n    for (int i = 0; i < n; i++)\n    {\n      temp[(i + k) % n] = nums[i];\n    }\n\n    nums = temp;\n  }\n\n  // Best: Reversal Algorithm (In-place)\n  // Time: O(n), Space: O(1)\n  void rotate_best(std::vector<int> &nums, int k)\n  {\n    int n = nums.size();\n    if (n == 0)\n      return;\n\n    k = k % n;\n\n    // Reverse whole array\n    reverse_array(nums, 0, n - 1);\n\n    // Reverse first k elements\n    reverse_array(nums, 0, k - 1);\n\n    // Reverse remaining elements\n    reverse_array(nums, k, n - 1);\n  }\n\nprivate:\n  void reverse_array(std::vector<int> &nums, int st, int end)\n  {\n    while (st < end)\n    {\n      std::swap(nums[st], nums[end]);\n      st++;\n      end--;\n    }\n  }\n};\n\nint main()\n{\n  std::vector<int> v = {1, 2, 3, 4, 5, 6, 7};\n  int k = 3;\n\n  Solution sol;\n\n  // Choose ONE to test\n\n  // sol.rotateBrute(v, k);\n  // sol.rotateBetter(v, k);\n  sol.rotate_best(v, k);\n\n  // Print result\n  for (int x : v)\n  {\n    std::cout << x << \" \";\n  }\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "js",
        "file": "all_divisions_with_the_highest_score_of_a_binary_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/description/\n\n/**\n * @param {number[]} nums - Array of numbers\n * @returns {number[]} Indices with maximum score\n */\nfunction maxScoreIndices(nums) {\n  let onesOnRight = nums.reduce((acc, num) => acc + num, 0);\n  let zerosOnLeft = 0;\n\n  let maxScore = -Infinity;\n  let result = [];\n\n  for (let i = 0; i <= nums.length; i++) {\n    const score = onesOnRight + zerosOnLeft;\n    if (score > maxScore) {\n      result = [i];\n      maxScore = score;\n    } else if (score === maxScore) {\n      result.push(i);\n    }\n\n    if (i === nums.length) break;\n\n    if (nums[i] === 0) {\n      zerosOnLeft++;\n    } else {\n      onesOnRight--;\n    }\n  }\n\n  return result;\n}\n"
      },
      {
        "lang": "js",
        "file": "array_partition_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/array-partition/description/\n\n/**\n * @param {number[]} nums - array of numbers\n * @returns {number} the maximized sum of all pairs\n */\nfunction arrayPairSum(nums) {\n  nums.sort((a, b) => a - b);\n\n  let sum = 0;\n\n  for (let i = 0; i < nums.length; i += 2) {\n    sum += nums[i];\n  }\n\n  return sum;\n}\n\n/**\n * Constraints (important when considering counting sort approach):\n * 1 <= n <= 10^4\n * nums.length == 2 * n\n * -10^4 <= nums[i] <= 10^4\n */\n\n/**\n * @param {number[]} nums - array of numbers\n * @returns {number} the maximized sum of all pairs\n */\nfunction arrayPairSum_countingSort(nums) {\n  const offset = 10000;\n  const range = 10 ** 4 * 2;\n\n  const counts = new Array(range + 1).fill(0);\n\n  for (const num of nums) {\n    counts[num + offset]++;\n  }\n\n  let sum = 0;\n  let take = true;\n\n  for (let i = 0; i < counts.length; i++) {\n    const originalNum = i - offset;\n    const count = counts[i];\n\n    if (count > 0) {\n      sum += take\n        ? Math.ceil(count / 2) * originalNum\n        : Math.floor(count / 2) * originalNum;\n\n      if (count % 2 !== 0) {\n        take = !take;\n      }\n    }\n  }\n\n  return sum;\n}\n"
      },
      {
        "lang": "js",
        "file": "array_partition_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar arrayPairSum = function (nums) {\n    nums.sort((a, b) => a - b)\n\n    let sum = 0\n\n    for (let i = 0; i < nums.length; i += 2) {\n        sum += nums[i]\n    }\n\n    return sum\n};"
      },
      {
        "lang": "js",
        "file": "max_consecutive_ones_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/max-consecutive-ones/description/\n\n/**\n * @param {number[]} nums - array of numbers\n * @returns {number} length of the maximum consecutive ones\n */\nfunction findMaxConsecutiveOnes(nums) {\n  let max = 0;\n  let count = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === 1) {\n      count++;\n    } else {\n      count = 0;\n    }\n\n    max = Math.max(count, max);\n  }\n\n  return max;\n}\n"
      },
      {
        "lang": "js",
        "file": "max_consecutive_ones_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMaxConsecutiveOnes = function (arr) {\n    let maxOnesCount = 0, maxTillNow = 0\n\n    for (let i = 0; i < arr.length; i++) {\n        if (0 === arr[i]) maxOnesCount = 0\n        else {\n            maxOnesCount++\n            if (maxTillNow < maxOnesCount) maxTillNow = maxOnesCount\n        }\n    }\n    return maxTillNow\n};"
      },
      {
        "lang": "js",
        "file": "plus_one_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/plus-one/\n\n/**\n * @param {number[]} digits - array of digits (0–9) representing a non-negative integer\n * @returns {number[]} new array of digits representing the integer after adding 1\n */\nfunction plusOne(digits) {\n  for (let i = digits.length - 1; i >= 0; i--) {\n    if (digits[i] < 9) {\n      digits[i]++;\n      return digits;\n    }\n    digits[i] = 0;\n  }\n\n  digits.unshift(1);\n\n  return digits;\n}\n"
      },
      {
        "lang": "js",
        "file": "plus_one_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} digits\n * @return {number[]}\n */\nvar plusOne = function (digits) {\n    let i = digits.length - 1\n\n    while (i >= 0) {\n        if (digits[i] < 9) {\n            digits[i] += 1\n            return digits\n        }\n        else {\n            digits[i] = 0\n            i--\n        }\n    }\n    digits.unshift(1)\n    return digits\n};"
      },
      {
        "lang": "js",
        "file": "rotate_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/rotate-array/description/\n\n/**\n * Rotate array right / clockwise in place\n *\n * @param {number[]} nums - Array of numbers\n * @param {number} k - amount by which the array will be rotated right\n */\nfunction rotateRight(nums, k) {\n  const _k = k % nums.length;\n\n  if (_k === 0) return;\n\n  nums.unshift(...nums.splice(nums.length - _k, _k));\n}\n\n/**\n * Rotate array right / clockwise in place\n *\n * @param {number[]} nums - Array of numbers\n * @param {number} k - amount by which the array will be rotated right\n */\nfunction rotateRight_spaceOptimized(nums, k) {\n  const _k = k % nums.length;\n\n  if (_k === 0) return;\n\n  const reverse = (startIndex, endIndex) => {\n    while (startIndex < endIndex) {\n      const temp = nums[startIndex];\n      nums[startIndex] = nums[endIndex];\n      nums[endIndex] = temp;\n\n      startIndex++;\n      endIndex--;\n    }\n  };\n\n  reverse(0, nums.length - 1);\n  reverse(0, _k - 1);\n  reverse(_k, nums.length - 1);\n}\n"
      },
      {
        "lang": "js",
        "file": "rotate_array_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {void} Do not return anything, modify nums in-place instead.\n */\n\nfunction reverseArr(left, right, arr) {\n    while (left < right) {\n        [arr[left], arr[right]] = [arr[right], arr[left]]\n        left++\n        right--\n    }\n}\n\nvar rotate = function (nums, k) {\n    const n = nums.length;\n    k = k % n\n\n    reverseArr(0, n - 1, nums)\n    reverseArr(0, k - 1, nums)\n    reverseArr(k, n - 1, nums)\n\n    return nums\n};"
      },
      {
        "lang": "js",
        "file": "rotate_array_by_n_elements_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1\n\n/**\n * Rotate array left / counter-clockwise in place\n *\n * @param {number[]} nums - Array of numbers\n * @param {number} d - amount by which the array will be rotated left\n */\nfunction rotateLeft(nums, d) {\n  const _d = d % nums.length;\n\n  if (_d === 0) return;\n\n  nums.push(...nums.splice(0, _d));\n}\n\n/**\n * Rotate array left / counter-clockwise in place\n *\n * @param {number[]} nums - Array of numbers\n * @param {number} d - amount by which the array will be rotated left\n */\nfunction rotateLeft_spaceOptimized(nums, d) {\n  const _d = d % nums.length;\n\n  if (_d === 0) return;\n\n  const reverse = (startIndex, endIndex) => {\n    while (startIndex < endIndex) {\n      const temp = nums[startIndex];\n      nums[startIndex] = nums[endIndex];\n      nums[endIndex] = temp;\n\n      startIndex++;\n      endIndex--;\n    }\n  };\n\n  reverse(0, _d - 1);\n  reverse(_d, nums.length - 1);\n  reverse(0, nums.length - 1);\n}\n"
      },
      {
        "lang": "js",
        "file": "rotate_array_counter_clockwise_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} arr\n * @param {number} d\n */\n\nclass Solution {\n    reverse(left, right, arr){\n        while(left < right){\n            [arr[left], arr[right]] = [arr[right], arr[left]]\n            left++\n            right--\n        }\n    }\n    \n    rotateArr(arr, d) {\n        const n = arr.length\n        d = d % n\n        this.reverse(0, n - 1, arr)\n        this.reverse(0, n - d - 1, arr)\n        this.reverse(n - d, n - 1, arr)\n        return arr\n    }\n}"
      },
      {
        "lang": "ts",
        "file": "all_divisions_with_the_highest_score_of_a_binary_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/description/\n\n/**\n * @param nums - Array of numbers\n * @returns Indices with maximum score\n */\nfunction maxScoreIndices(nums: number[]): number[] {\n  let onesOnRight = nums.reduce((acc, num) => acc + num, 0);\n  let zerosOnLeft = 0;\n\n  let maxScore = -Infinity;\n  let result: number[] = [];\n\n  for (let i = 0; i <= nums.length; i++) {\n    const score = onesOnRight + zerosOnLeft;\n    if (score > maxScore) {\n      result = [i];\n      maxScore = score;\n    } else if (score === maxScore) {\n      result.push(i);\n    }\n\n    if (i === nums.length) break;\n\n    if (nums[i] === 0) {\n      zerosOnLeft++;\n    } else {\n      onesOnRight--;\n    }\n  }\n\n  return result;\n}\n"
      },
      {
        "lang": "ts",
        "file": "array_partition_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/array-partition/description/\n\n/**\n * @param nums - array of numbers\n * @returns the maximized sum of all pairs\n */\nfunction arrayPairSum(nums: number[]): number {\n  nums.sort((a, b) => a - b);\n\n  let sum = 0;\n\n  for (let i = 0; i < nums.length; i += 2) {\n    sum += nums[i];\n  }\n\n  return sum;\n}\n\n/**\n * Constraints (important when considering counting sort approach):\n * 1 <= n <= 10^4\n * nums.length == 2 * n\n * -10^4 <= nums[i] <= 10^4\n */\n\n/**\n * @param nums - array of numbers\n * @returns the maximized sum of all pairs\n */\nfunction arrayPairSum_countingSort(nums: number[]): number {\n  const offset = 10000;\n  const range = 10 ** 4 * 2;\n\n  const counts = new Array(range + 1).fill(0);\n\n  for (const num of nums) {\n    counts[num + offset]++;\n  }\n\n  let sum = 0;\n  let take = true;\n\n  for (let i = 0; i < counts.length; i++) {\n    const originalNum = i - offset;\n    const count = counts[i];\n\n    if (count > 0) {\n      sum += take\n        ? Math.ceil(count / 2) * originalNum\n        : Math.floor(count / 2) * originalNum;\n\n      if (count % 2 !== 0) {\n        take = !take;\n      }\n    }\n  }\n\n  return sum;\n}\n"
      },
      {
        "lang": "ts",
        "file": "max_consecutive_ones_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/max-consecutive-ones/description/\n\n/**\n * @param nums - array of numbers\n * @returns length of the maximum consecutive ones\n */\nfunction findMaxConsecutiveOnes(nums: number[]): number {\n  let max = 0;\n  let count = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === 1) {\n      count++;\n    } else {\n      count = 0;\n    }\n\n    max = Math.max(count, max);\n  }\n\n  return max;\n}\n"
      },
      {
        "lang": "ts",
        "file": "plus_one_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/plus-one/\n\n/**\n * @param digits - array of digits (0–9) representing a non-negative integer\n * @returns new array of digits representing the integer after adding 1\n */\nfunction plusOne(digits: number[]): number[] {\n  for (let i = digits.length - 1; i >= 0; i--) {\n    if (digits[i] < 9) {\n      digits[i]++;\n      return digits;\n    }\n    digits[i] = 0;\n  }\n\n  digits.unshift(1);\n\n  return digits;\n}\n"
      },
      {
        "lang": "ts",
        "file": "rotate_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/rotate-array/description/\n\n/**\n * Rotate array right / clockwise in place\n *\n * @param nums - Array of numbers\n * @param k - amount by which the array will be rotated right\n */\nfunction rotateRight(nums: number[], k: number): void {\n  const _k = k % nums.length;\n\n  if (_k === 0) return;\n\n  nums.unshift(...nums.splice(nums.length - _k, _k));\n}\n\n/**\n * Rotate array right / clockwise in place\n *\n * @param nums - Array of numbers\n * @param k - amount by which the array will be rotated right\n */\nfunction rotateRight_spaceOptimized(nums: number[], k: number): void {\n  const _k = k % nums.length;\n\n  if (_k === 0) return;\n\n  const reverse = (startIndex: number, endIndex: number) => {\n    while (startIndex < endIndex) {\n      const temp = nums[startIndex];\n      nums[startIndex] = nums[endIndex];\n      nums[endIndex] = temp;\n\n      startIndex++;\n      endIndex--;\n    }\n  };\n\n  reverse(0, nums.length - 1);\n  reverse(0, _k - 1);\n  reverse(_k, nums.length - 1);\n}\n"
      },
      {
        "lang": "ts",
        "file": "rotate_array_by_n_elements_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1\n\n/**\n * Rotate array left / counter-clockwise in place\n *\n * @param nums - Array of numbers\n * @param d - amount by which the array will be rotated left\n */\nfunction rotateLeft(nums: number[], d: number) {\n  const _d = d % nums.length;\n\n  if (_d === 0) return;\n\n  nums.push(...nums.splice(0, _d));\n}\n\n/**\n * Rotate array left / counter-clockwise in place\n *\n * @param nums - Array of numbers\n * @param d - amount by which the array will be rotated left\n */\nfunction rotateLeft_spaceOptimized(nums: number[], d: number) {\n  const _d = d % nums.length;\n\n  if (_d === 0) return;\n\n  const reverse = (startIndex: number, endIndex: number) => {\n    while (startIndex < endIndex) {\n      const temp = nums[startIndex];\n      nums[startIndex] = nums[endIndex];\n      nums[endIndex] = temp;\n\n      startIndex++;\n      endIndex--;\n    }\n  };\n\n  reverse(0, _d - 1);\n  reverse(_d, nums.length - 1);\n  reverse(0, nums.length - 1);\n}\n"
      }
    ]
  },
  {
    "id": "2026-01-05-session5",
    "date": "2026-01-05",
    "num": 5,
    "title": "Coding Problems",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problems : \n- https://www.geeksforgeeks.org/dsa/max-number-of-one-ii/\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=TTAo2riDTLPlRc-TmCRoZ,N3mrgz19299jlpKYn8zTiA\n\n# Assignments : \n- https://leetcode.com/problems/consecutive-characters/description/\n- https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "max_number_of_one_ii_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/dsa/max-number-of-one-ii/\n *\n * Short Description\n * You are given a binary array arr[], containing only 0s and 1s.\n * You are allowed to flip at most one 0 to 1.\n * Your task is to determine the maximum length of consecutive 1s that can be obtained\n * in the array after performing at most one such flip.\n *\n *\n * Input: arr[] = [0, 1, 0, 1, 1]\n * Output: 4\n * Explanation:\n * If we flip the first zero, nums becomes [1,1,0,1,1] and we have 2 consecutive ones.\n * If we flip the second zero, nums becomes [0,1,1,1,1] and we have 4 consecutive ones.\n * The max number of consecutive ones is 4.\n *\n *\n * Input: arr[] = [0, 1, 0]\n * Output: 2\n * Explanation:\n * If we flip the first zero, nums becomes [1,1,0] and we have 2 consecutive ones.\n * If we flip the second zero, nums becomes [0,1,1] and we have 2 consecutive ones.\n * The max number of consecutive ones is 2.\n *\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass Solution\n{\npublic:\n  // Sliding Window: At most one 0 can be flipped\n  // Time: O(n), Space: O(1)\n  int max_consecutive_one(std::vector<int> &arr, int N)\n  {\n    int left = 0;       // Left Pointer of sliding window\n    int zero_count = 0; // Count the no of zeroes in a sliding window\n    int max_len = 0;    // Track the max length of sliding window\n\n    for (int right = 0; right < N; right++)\n    {\n      // If current element is zero, increase the zero_count\n      if (arr[right] == 0)\n      {\n        zero_count++;\n      }\n\n      // If more than one zero in window, shrink from left\n      while (zero_count > 1)\n      {\n        if (arr[left] == 0)\n        {\n          zero_count--;\n        }\n        left++;\n      }\n\n      // Update maximum length\n      max_len = std::max(max_len, right - left + 1);\n    }\n\n    return max_len;\n  }\n};\n\nint main()\n{\n  std::vector<int> arr = {0, 1, 0, 1, 1};\n  int n = arr.size();\n\n  Solution sol;\n  int result = sol.max_consecutive_one(arr, n);\n\n  std::cout << \"Maximum consecutive 1s after at most one flip: \" << result << std::endl;\n\n  return 0;\n}"
      },
      {
        "lang": "js",
        "file": "consecutive_characters_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/consecutive-characters/description/\n\n/**\n * @param {string} s - input string\n * @returns {number} the power of the string \n */\nfunction maxPower(s) {\n    let currentPower = 0\n    let maxPower = 0\n\n    for (let i = 1; i < s.length; i++) {\n        if (s[i] === s[i - 1]) {\n            currentPower++\n        } else {\n            currentPower = 1\n        }\n\n        maxPower = Math.max(currentPower, maxPower)\n    }\n\n    return maxPower\n};"
      },
      {
        "lang": "js",
        "file": "maximize_number_of_1s_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1\n//             : https://leetcode.com/problems/max-consecutive-ones-iii/description/\n\n/**\n * @param {number[]} nums - array of 1s and 0s \n * @param {number} k - number of 0s that can be flipped to 1s\n * @returns {number} length of maximum consecutive 1s after flipping at most k zeros\n */\nfunction longestOnes(nums, k) {\n    let left = 0\n    let flipped = 0\n    let max = 0\n    \n    for (let right = 0; right < nums.length; right++) {\n        if (nums[right] === 0) {\n            flipped++\n\n            while(flipped > k) {\n                if (nums[left] === 0) {\n                    flipped--\n                }\n                left++\n            }\n        }\n\n        max = Math.max(right - left + 1, max)\n    }\n\n    return max\n}"
      },
      {
        "lang": "js",
        "file": "maximum_number_of_ones_ii_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/dsa/max-number-of-one-ii/\n\n/**\n * @param {number[]} arr - array of 1s and 0s \n * @returns {number} maximum consecutive 1s after flipping 1 zero\n */\nfunction maxConsecutiveOne(arr) {\n    let left = 0\n    let lastFlipped = -1\n    let max = 0\n\n    for (let right = 0; right < arr.length; right++) {\n        if (arr[right] === 0 && lastFlipped >= 0) {\n            left = lastFlipped + 1\n            lastFlipped = right\n        } else if (arr[right] === 0) {\n            lastFlipped = right\n        }\n\n        max = Math.max(right - left + 1, max)\n    }\n\n    return max\n}"
      },
      {
        "lang": "ts",
        "file": "consecutive_characters_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/consecutive-characters/\n\n/**\n * @param s - input string\n * @returns the power of the string \n */\nfunction maxPower(s: string): number {\n    let currentPower = 0\n    let maxPower = 0\n\n    for (let i = 1; i < s.length; i++) {\n        if (s[i] === s[i - 1]) {\n            currentPower++\n        } else {\n            currentPower = 1\n        }\n\n        maxPower = Math.max(currentPower, maxPower)\n    }\n\n    return maxPower\n};"
      },
      {
        "lang": "ts",
        "file": "maximize_number_of_1s_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1\n//             : https://leetcode.com/problems/max-consecutive-ones-iii/description/\n\n/**\n * @param nums - array of 1s and 0s \n * @param k - number of 0s that can be flipped to 1s\n * @returns length of maximum consecutive 1s after flipping at most k zeros\n */\nfunction longestOnes(nums: number[], k: number): number {\n    let left = 0\n    let flipped = 0\n    let max = 0\n    \n    for (let right = 0; right < nums.length; right++) {\n        if (nums[right] === 0) {\n            flipped++\n\n            while(flipped > k) {\n                if (nums[left] === 0) {\n                    flipped--\n                }\n                left++\n            }\n        }\n\n        max = Math.max(right - left + 1, max)\n    }\n\n    return max\n}"
      },
      {
        "lang": "ts",
        "file": "maximum_number_of_ones_ii_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/dsa/max-number-of-one-ii/\n\n/**\n * @param arr - array of 1s and 0s \n * @returns maximum consecutive 1s after flipping 1 zero\n */\nfunction maxConsecutiveOne(arr: number[]): number {\n    let left = 0\n    let lastFlipped = -1\n    let max = 0\n\n    for (let right = 0; right < arr.length; right++) {\n        if (arr[right] === 0 && lastFlipped >= 0) {\n            left = lastFlipped + 1\n            lastFlipped = right\n        } else if (arr[right] === 0) {\n            lastFlipped = right\n        }\n\n        max = Math.max(right - left + 1, max)\n    }\n\n    return max\n}"
      }
    ]
  },
  {
    "id": "2026-01-06-session6",
    "date": "2026-01-06",
    "num": 6,
    "title": "Coding Problems",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problems : \n- https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/description/\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=_GtJLwrLJCiIbZU2RCQ-3,L7256Db_FPKbnBDvMtaQCg\n\n# Assignments : \n- https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "all_divisions_with_the_highest_score_of_a_binary_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/description/\n *\n * Short Description\n * You are given a 0-indexed binary array nums of length n.\n * nums can be divided at index i (where 0 <= i <= n) into two arrays (possibly empty) numsleft and numsright:\n * 1. numsleft has all the elements of nums between index 0 and i - 1 (inclusive),\n *    while numsright has all the elements of nums between index i and n - 1 (inclusive).\n * 2. If i == 0, numsleft is empty, while numsright has all the elements of nums.\n * 3. If i == n, numsleft has all the elements of nums, while numsright is empty.\n *\n *\n * The division score of an index i is the sum of the number of 0's in numsleft and the number of 1's in numsright.\n * Return all distinct indices that have the highest possible division score. You may return the answer in any order.\n *\n * Input: nums = [0,0,1,0]\n * Output: [2,4]\n * Explanation:\n *  - 0: numsleft is []. numsright is [0,0,1,0]. The score is 0 + 1 = 1.\n    - 1: numsleft is [0]. numsright is [0,1,0]. The score is 1 + 1 = 2.\n    - 2: numsleft is [0,0]. numsright is [1,0]. The score is 2 + 1 = 3.\n    - 3: numsleft is [0,0,1]. numsright is [0]. The score is 2 + 0 = 2.\n    - 4: numsleft is [0,0,1,0]. numsright is []. The score is 3 + 0 = 3.\n    Indices 2 and 4 both have the highest possible division score 3.\n    Note the answer [4,2] would also be accepted.\n *\n *\n * Input: nums = [0,0,0]\n * Output: [3]\n * Explanation:\n * Division at index\n  - 0: numsleft is []. numsright is [0,0,0]. The score is 0 + 0 = 0.\n  - 1: numsleft is [0]. numsright is [0,0]. The score is 1 + 0 = 1.\n  - 2: numsleft is [0,0]. numsright is [0]. The score is 2 + 0 = 2.\n  - 3: numsleft is [0,0,0]. numsright is []. The score is 3 + 0 = 3.\n  Only index 3 has the highest possible division score 3.\n\n\n * Input: nums = [1,1]\n * Output: [0]\n * Explanation:\n * Division at index\n  - 0: numsleft is []. numsright is [1,1]. The score is 0 + 2 = 2.\n  - 1: numsleft is [1]. numsright is [1]. The score is 0 + 1 = 1.\n  - 2: numsleft is [1,1]. numsright is []. The score is 0 + 0 = 0.\n  Only index 0 has the highest possible division score 2.\n\n\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass Solution\n{\npublic:\n  // Brute Force\n  // Time: O(n^2), Space: O(1)\n  std::vector<int> solve_brute(std::vector<int> &nums)\n  {\n    int n = nums.size();\n    int max_score = -1;\n    std::vector<int> ans;\n\n    for (int i = 0; i <= n; i++)\n    {\n      int zeros_left = 0;\n      int ones_right = 0;\n\n      // Count zeros in left part [0 .. i-1]\n      for (int j = 0; j < i; j++)\n      {\n        if (nums[j] == 0)\n          zeros_left++;\n      }\n\n      // Count ones in right part [i .. n-1]\n      for (int j = i; j < n; j++)\n      {\n        if (nums[j] == 1)\n          ones_right++;\n      }\n\n      int score = zeros_left + ones_right;\n\n      if (score > max_score)\n      {\n        ans.clear();\n        max_score = score;\n        ans.push_back(i);\n      }\n      else if (score == max_score)\n      {\n        ans.push_back(i);\n      }\n    }\n\n    return ans;\n  }\n\n  // Better Approach: Prefix zeros + Suffix ones\n  // Time: O(n), Space: O(n)\n  std::vector<int> solve_better(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    std::vector<int> prefixZero(n + 1, 0);\n    std::vector<int> suffixOne(n + 1, 0);\n\n    // Build prefixZero\n    for (int i = 0; i < n; i++)\n    {\n      prefixZero[i + 1] = prefixZero[i] + (nums[i] == 0);\n    }\n\n    // Build suffixOne\n    for (int i = n - 1; i >= 0; i--)\n    {\n      suffixOne[i] = suffixOne[i + 1] + (nums[i] == 1);\n    }\n\n    int max_score = -1;\n    std::vector<int> ans;\n\n    for (int i = 0; i <= n; i++)\n    {\n      int score = prefixZero[i] + suffixOne[i];\n\n      if (score > max_score)\n      {\n        ans.clear();\n        max_score = score;\n        ans.push_back(i);\n      }\n      else if (score == max_score)\n      {\n        ans.push_back(i);\n      }\n    }\n\n    return ans;\n  }\n\n  // Best Approach: Single Pass (O(1) extra space)\n  // Time: O(n), Space: O(1)\n  std::vector<int> solve_best(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Count total number of 1s (initial right score at i = 0)\n    int totalOnes = 0;\n    for (int x : nums)\n    {\n      if (x == 1)\n        totalOnes++;\n    }\n\n    int left_score = 0;\n    int right_score = totalOnes;\n    int max_score = left_score + right_score;\n\n    std::vector<int> ans;\n\n    // Division at index 0\n    ans.push_back(0);\n\n    for (int i = 0; i < n; i++)\n    {\n      if (nums[i] == 0)\n      {\n        left_score++;\n      }\n      else\n      {\n        right_score--;\n      }\n\n      int current_score = left_score + right_score;\n\n      if (current_score > max_score)\n      {\n        ans.clear();\n        max_score = current_score;\n        ans.push_back(i + 1);\n      }\n      else if (current_score == max_score)\n      {\n        ans.push_back(i + 1);\n      }\n    }\n\n    return ans;\n  }\n};\n\nint main()\n{\n  std::vector<int> nums = {0, 0, 1, 0};\n\n  Solution sol;\n\n  // Choose one approach to test\n\n  // std::vector<int> result = sol.solve_brute(nums);\n  // std::vector<int> result = sol.solve_better(nums);\n  std::vector<int> result = sol.solve_best(nums);\n\n  std::cout << \"Indices with maximum score: \";\n  for (int idx : result)\n  {\n    std::cout << idx << \" \";\n  }\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      }
    ]
  },
  {
    "id": "2026-01-07-session7",
    "date": "2026-01-07",
    "num": 7,
    "title": "Coding Problems",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problems : \n- https://leetcode.com/problems/set-mismatch/\n- https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=3b1v2QjdJf1DcMqJR5o3q,A7xdoKBWq4q7uGpanqwsOg\n\n# Assignments : \n- https://leetcode.com/problems/squares-of-a-sorted-array/description/\n- https://leetcode.com/problems/merge-sorted-array/description/\n- https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-with-distinct-elements/1\n- Variation of https://leetcode.com/problems/set-mismatch/ where input array is sorted.\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "set_mismatch_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/set-mismatch/\n *\n * Short Description\n * You have a set of integers s, which originally contains all the numbers from 1 to n.\n * Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,\n * which results in repetition of one number and loss of another number.\n *\n * You are given an integer array nums representing the data status of this set after the error.\n * Find the number that occurs twice and the number that is missing and return them in the form of an array.\n *\n *\n * Input: nums = [1,2,2,4]\n * Output: [2,3]\n *\n *\n * Input: nums = [1,1]\n * Output: [1,2]\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <set>\n#include <unordered_map>\n\nclass Solution\n{\npublic:\n  // Brute Approach\n  // We go through in whole array to try to find out which is repeat\n  // and how much time repeat\n  // if counter == 2 it means, respective ele is duplicate\n  // if counter == 0 it means, respective ele is missing\n  // Time: O(n^2), Space: O(1)\n\n  std::vector<int> find_error_nums1(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Init two variable to store duplicate and missing number\n    int duplicate = -1;\n    int missing = -1;\n\n    for (int i = 1; i <= n; i++)\n    {\n      int counter = 0;\n\n      // Iterate in whole array or vector\n      for (int &ele : nums)\n      {\n        if (ele == i)\n        {\n          counter++;\n        }\n      }\n\n      if (counter == 2)\n      {\n        duplicate = i;\n      }\n      else if (counter == 0)\n      {\n        missing = i;\n      }\n    }\n\n    return {duplicate, missing};\n  }\n\n  // Better Approach\n  // Store the frequency of each elements\n  // frequency = 0 => missing\n  // frequency = 2 => duplicate\n  // Time: O(n), Space: O(n)\n\n  std::vector<int> find_error_nums2(std::vector<int> &nums)\n  {\n\n    // We save frequency of element and check which come\n    // mulitple and which element is missing\n\n    int missing = -1, duplicate = -1;\n\n    int n = nums.size();\n    std::vector<int> temp(n + 1, 0); // [0,0,0,........upto n]\n\n    // Make frequency storage\n    for (auto &it : nums)\n    {\n      temp[it]++;\n    }\n\n    for (int i = 1; i <= n; i++)\n    {\n      if (temp[i] == 0)\n        missing = i;\n      else if (temp[i] == 2)\n        duplicate = i;\n    }\n\n    return {duplicate, missing};\n  }\n\n  // Better Approach (Using Set and Sum Formula)\n  // Idea:\n  // 1. Use a set to store unique elements and compute the sum of unique elements.\n  // 2. Compute the sum of the given array.\n  // 3. Compute the expected sum = n * (n + 1) / 2.\n  // 4. Missing number = expected_sum - unique_sum\n  // 5. Duplicate number = array_sum - unique_sum\n  //\n  // Time Complexity: O(n)\n  // Space Complexity: O(n)\n\n  std::vector<int> find_error_nums3(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Init variable to store expected_sum, unique_sum, array_sum\n    int unique_sum = 0;\n    int array_sum = 0;\n    int expected_sum = (n * (n + 1)) / 2;\n\n    // Init set to store unique number of vector\n    // and find out unique sum of elements\n    std::set<int> st(nums.begin(), nums.end());\n\n    // calculate unique_sum\n    for (auto &it : st)\n    {\n      unique_sum += it;\n    }\n\n    // calculate array_sum\n    for (auto &it : nums)\n    {\n      array_sum += it;\n    }\n\n    int missing = expected_sum - unique_sum;\n    int duplicate = array_sum - unique_sum;\n\n    return {duplicate, missing};\n  }\n\n  // Better Approach (Using Hash Map)\n  // Idea:\n  // Store the frequency of each number from 1 to n in a hash map.\n  // 1. If frequency becomes -1 (or >1 depending on implementation), it is the duplicate.\n  // 2. If frequency remains 1 (or 0 depending on implementation), it is the missing number.\n  //\n  // Time Complexity: O(n)\n  // Space Complexity: O(n)\n\n  std::vector<int> find_error_nums4(std::vector<int> &nums)\n  {\n\n    int n = nums.size();\n\n    // Init two variable to store duplicate and missing number\n    int duplicate = -1;\n    int missing = -1;\n\n    // Declare map to store num from 1 to n and it's frequency\n    std::unordered_map<int, int> mp;\n    for (int i = 1; i <= n; i++)\n      mp[i]++;\n\n    for (auto &it : nums)\n      mp[it]--;\n\n    for (auto &it : mp)\n    {\n      int key = it.first;\n      int val = it.second;\n\n      if (val == -1)\n        duplicate = key;\n      if (val == 1)\n        missing = key;\n    }\n\n    return {duplicate, missing};\n  }\n\n  // Best / Optimal Approach (Using XOR)\n  // Idea:\n  // 1. XOR all numbers from 1 to n.\n  // 2. XOR all elements of the array.\n  // 3. The result will be XOR of (missing ^ duplicate).\n  // 4. Find the rightmost set bit to separate the numbers into two groups.\n  // 5. XOR both groups separately to get the two candidates.\n  // 6. Check which one is present in the array to identify duplicate and missing.\n  //\n  // Time Complexity: O(n)\n  // Space Complexity: O(1)\n\n  std::vector<int> find_error_nums5(std::vector<int> &nums)\n  {\n\n    int n = nums.size();\n\n    // Init two variable to store xor of natural number and all elements of vector\n    int xor_all = 0;\n    int xor_array = 0;\n\n    // XOR of all natural number (1,n)\n    for (int i = 1; i <= n; i++)\n      xor_all ^= i;\n\n    // XOR of all elements of vector\n    for (auto &it : nums)\n    {\n      xor_array ^= it;\n    }\n\n    // xor_res will contains xor of duplicate and missing value\n    int xor_res = (xor_all ^ xor_array);\n\n    int right_most_set_bit = (xor_res & (-xor_res));\n\n    int xor_set = 0, xor_not_set = 0;\n\n    for (int i = 1; i <= n; i++)\n    {\n      if (i & right_most_set_bit)\n      {\n        xor_set ^= i;\n      }\n      else\n      {\n        xor_not_set ^= i;\n      }\n    }\n\n    for (int num : nums)\n    {\n      if (num & right_most_set_bit)\n      {\n        xor_set ^= num;\n      }\n      else\n      {\n        xor_not_set ^= num;\n      }\n    }\n\n    for (int num : nums)\n    {\n      if (num == xor_set)\n      {\n        return {xor_set, xor_not_set};\n      }\n    }\n\n    return {xor_not_set, xor_set};\n  }\n};\n\nint main()\n{\n  std::vector<int> nums = {1, 2, 2, 4};\n\n  Solution sol;\n\n  // Uncomment to use\n  // std::vector<int> ans = sol.find_error_nums1(nums);\n  // std::vector<int> ans = sol.find_error_nums2(nums);\n  // std::vector<int> ans = sol.find_error_nums3(nums);\n  // std::vector<int> ans = sol.find_error_nums4(nums);\n\n  std::vector<int> ans = sol.find_error_nums5(nums);\n\n  std::cout << \"Duplicate: \" << ans[0] << \", Missing: \" << ans[1] << \"\\n\";\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "union_of_two_sorted_arrays_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1\n *\n * Short Description\n * Given two sorted arrays a[] and b[], where each array may contain duplicate elements ,\n * the task is to return the elements in the union of the two arrays in sorted order.\n * Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.\n *\n *\n *\n * Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]\n * Output: [1, 2, 3, 4, 5, 6, 7]\n * Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.\n *\n *\n * Input: a[] = [2, 2, 3, 4, 5], b[] = [1, 1, 2, 3, 4]\n * Output: [1, 2, 3, 4, 5]\n * Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.\n *\n * Input: a[] = [1, 1, 1, 1, 1], b[] = [2, 2, 2, 2, 2]\n * Output: [1, 2]\n * Explanation: Distinct elements including both the arrays are: 1 2.\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <set>\n\nclass Solution\n{\npublic:\n  // Brute Approach\n  // Insert all elements into set and find out\n  // union of both sorted array\n  // Time: O(m + n (log(m + n))), Space: O(m + n)\n\n  std::vector<int> find_union1(std::vector<int> &a, std::vector<int> &b)\n  {\n\n    // Declare set to store data value fo vector a,b\n    std::set<int> st;\n    std::vector<int> res;\n\n    // Push all elements of vector into set\n    for (auto &it : a)\n    {\n      st.insert(it);\n    }\n\n    // Push all elements of vector into set\n    for (auto &it : b)\n    {\n      st.insert(it);\n    }\n\n    for (auto &it : st)\n    {\n      res.push_back(it);\n    }\n\n    return res;\n  }\n\n  // Best Approach\n  // Init two pointer and track the elements of both the vector\n  // If same element appear then add in res(vector) and move both the pointer\n  // If first one is small then add small element and move resptive pointer\n  // Make sure res(vector) always unique\n  // Time: O(m + n), Space: O(1)\n\n  std::vector<int> find_union2(std::vector<int> &a, std::vector<int> &b)\n  {\n    int n = a.size();\n    int m = b.size();\n\n    std::vector<int> res;\n\n    // Init two pointer to track current value and index of both the array/vector\n    int i = 0, j = 0;\n\n    while (i < n && j < m)\n    {\n      if (a[i] == b[j])\n      {\n        add_if_not_duplicate(res, a[i]);\n        i++;\n        j++;\n      }\n\n      else if (a[i] < b[j])\n      {\n        add_if_not_duplicate(res, a[i]);\n        i++;\n      }\n\n      else\n      {\n        add_if_not_duplicate(res, b[j]);\n        j++;\n      }\n    }\n\n    // Add remaining elements of nums1 (if any)\n    add_remaining(a, i, res);\n\n    // Add remaining elements of nums2 (if any)\n    add_remaining(b, j, res);\n\n    return res;\n  }\n\nprivate:\n  // Adds remaining elements from an array starting at index 'idx'\n  void add_remaining(std::vector<int> &nums, int idx, std::vector<int> &res)\n  {\n    while (idx < nums.size())\n    {\n      add_if_not_duplicate(res, nums[idx]);\n      idx++;\n    }\n  }\n\n  // Adds an element to result if it is not a duplicate of the last inserted element\n  void add_if_not_duplicate(std::vector<int> &res, int ele)\n  {\n    if (res.empty() || res.back() != ele)\n    {\n      res.push_back(ele);\n    }\n  }\n};\n\nint main()\n{\n  std::vector<int> a = {1, 2, 3, 4, 5};\n  std::vector<int> b = {1, 2, 3, 6, 7};\n\n  Solution sol;\n\n  // Uncomment to test the code\n\n  std::vector<int> res = sol.find_union1(a, b);\n  // std::vector<int> res = sol.find_union2(a, b);\n\n  // Print the vector\n  std::cout << \"Union of both sorted array is : \";\n  for (auto &it : res)\n  {\n    std::cout << it << \" \";\n  }\n}"
      }
    ]
  },
  {
    "id": "2026-01-08-session8",
    "date": "2026-01-08",
    "num": 8,
    "title": "Coding Problems",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problems : \n- https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/\n- https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-array-1587115620/1\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=ijRg-VZ28LJ7wmFSggucI,Cl-jVzo6cgBjv9N2E9ihqQ\n\n# Assignments : \n- https://leetcode.com/problems/remove-element/\n- https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "intersection_of_two_sorted_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-array-1587115620/1\n *\n *\n * Short Description\n * Given two sorted arrays arr1[] and arr2[]. Your task is to return the intersection of both arrays.\n * Intersection of two arrays is said to be elements that are common in both arrays.\n * The intersection should not count duplicate elements.\n * Note: If there is no intersection then return an empty array.\n *\n *\n * Input: arr1[] = [1, 2, 3, 4], arr2[] = [2, 4, 6, 7, 8]\n * Output: [2,4]\n * Explanation:\n * 2 and 4 are only common elements in both the arrays.\n *\n * Input: arr1[] = [1, 2, 2, 3, 4], arr2[] = [2, 2, 4, 6, 7, 8]\n * Output: [2,4]\n * Explanation:\n * 2 and 4 are only common elements in both the arrays.\n *\n * Input: arr1[] = [1, 2], arr2[] = [3, 4]\n * Output: []\n * Explanation:\n * No commen elements.\n */\n\n#include <iostream>\n#include <vector>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach\n  // For each element in nums1, try to find it in nums2.\n  // Use a visited array to make sure we don't take the same element twice from nums2.\n  // Also avoid inserting duplicates into the result.\n  // Time: O(n*m), Space: O(m)\n\n  std::vector<int> intersection_array_brute(std::vector<int> &nums1, std::vector<int> &nums2)\n  {\n\n    int n = nums1.size();\n    int m = nums2.size();\n\n    // Init a vector to store common elements of both the vector\n    std::vector<int> temp;\n\n    // Init a visted vector to mark visited item of vector\n    std::vector<int> visited(m, 0);\n\n    // Travase in both the vector\n    for (int i = 0; i < n; i++)\n    {\n      for (int j = 0; j < m; j++)\n      {\n\n        // If nums1[i] == nums2[j] and nums2[j] is not visited\n        if (nums1[i] == nums2[j] && visited[j] == 0)\n        {\n          temp.push_back(nums1[i]);\n          visited[j] = 1;\n          break;\n        }\n        // If num2[j] is greater than nums1[i] break out of the loop\n        else if (nums2[j] > nums1[i])\n          break;\n      }\n    }\n\n    return temp;\n  }\n\n  // Best Approach (Two Pointers)\n  // Since both arrays are sorted, use two pointers.\n  // When elements are equal, add to result and skip all duplicates of that element in both arrays.\n  // Time: O(n + m), Space: O(1)\n\n  std::vector<int> intersection_array_best(std::vector<int> &nums1, std::vector<int> &nums2)\n  {\n\n    int n = nums1.size();\n    int m = nums2.size();\n\n    // Init two pointer to track or travase in both the vector/array\n    int i = 0, j = 0;\n\n    // Init a vector to store common elements of both the vector\n    std::vector<int> temp;\n\n    while (i < n && j < m)\n    {\n      if (nums1[i] == nums2[j])\n      {\n        temp.push_back(nums1[i]);\n        i++;\n        j++;\n      }\n      else if (nums1[i] < nums2[j])\n        i++;\n      else\n        j++;\n    }\n\n    return temp;\n  }\n};\n\nint main()\n{\n  std::vector<int> nums1 = {1, 2, 3, 4};\n  std::vector<int> nums2 = {2, 4, 6, 7, 8};\n\n  Solution sol;\n  // std::vector<int> ans = sol.intersection_array_brute(nums1, nums2);\n  std::vector<int> ans = sol.intersection_array_best(nums1, nums2);\n\n  // Print the vector\n  std::cout << \"Intersection of both the array : \";\n  for (auto &it : ans)\n  {\n    std::cout << it << \" \";\n  }\n  std::cout << \"\\n\";\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "remove_duplicates_from_sorted_array_ii_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/\n *\n * Short Description\n * Given an integer array nums sorted in non-decreasing order,\n * remove some duplicates in-place such that each unique element appears at most twice.\n * The relative order of the elements should be kept the same.\n *\n *\n * Since it is impossible to change the length of the array in some languages,\n * you must instead have the result be placed in the first part of the array nums.\n * More formally, if there are k elements after removing the duplicates,\n * then the first k elements of nums should hold the final result.\n * It does not matter what you leave beyond the first k elements.\n *\n * Return k after placing the final result in the first k slots of nums.\n *\n *\n * Input: nums = [1,1,1,2,2,3]\n * Output: 5, nums = [1,1,2,2,3,_]\n * Explanation:\n * Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.\n * It does not matter what you leave beyond the returned k (hence they are underscores).\n *\n * Input: nums = [0,0,1,1,1,1,2,3,3]\n * Output: 7, nums = [0,0,1,1,2,3,3,_,_]\n * Explanation:\n * Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.\n * It does not matter what you leave beyond the returned k (hence they are underscores).\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <set>\n#include <unordered_map>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach - Using Extra Array\n  // Traverse the array and keep at most two copies of each number in a temp array.\n  // Then copy the temp array back to nums.\n  // Time: O(n), Space: O(n)\n\n  int remove_duplicates_brute(std::vector<int> &nums)\n  {\n    int n = nums.size();\n    if (n == 0)\n      return 0;\n\n    std::vector<int> temp;\n\n    // count of current number\n    int count = 1;\n\n    temp.push_back(nums[0]);\n\n    for (int i = 1; i < n; i++)\n    {\n      if (nums[i] == nums[i - 1])\n      {\n        count++;\n      }\n      else\n      {\n        count = 1;\n      }\n\n      if (count <= 2)\n      {\n        temp.push_back(nums[i]);\n      }\n    }\n\n    // Copy back to nums\n    for (int i = 0; i < temp.size(); i++)\n    {\n      nums[i] = temp[i];\n    }\n\n    return temp.size();\n  }\n\n  // Better Approach - Using Hash Map\n  // Use a map to store frequency of each number.\n  // Traverse nums, and keep the number only if its frequency is less than 2.\n  // Time: O(n), Space: O(n)\n  int remove_duplicates_better(std::vector<int> &nums)\n  {\n    std::unordered_map<int, int> freq;\n\n    // write index\n    int k = 0;\n\n    for (int i = 0; i < nums.size(); i++)\n    {\n      if (freq[nums[i]] < 2)\n      {\n        freq[nums[i]]++;\n        nums[k] = nums[i];\n        k++;\n      }\n    }\n\n    return k;\n  }\n\n  // Best/Optimal Approach - Two Pointers, In-Place\n  // Since the array is sorted, duplicates are adjacent.\n  // Always keep the first two elements.\n  // For each next element, keep it only if it is different from nums[k-2].\n  // Time: O(n), Space: O(1)\n  int remove_duplicates_best(std::vector<int> &nums)\n  {\n    int n = nums.size();\n    if (n <= 2)\n      return n;\n\n    // position to place next valid element\n    int k = 2;\n\n    for (int i = 2; i < n; i++)\n    {\n      if (nums[i] != nums[k - 2])\n      {\n        nums[k] = nums[i];\n        k++;\n      }\n    }\n\n    return k;\n  }\n};\n\nint main()\n{\n  std::vector<int> nums = {1, 1, 1, 2, 2, 3};\n\n  Solution sol;\n\n  // Choose one approach to test\n  // int k = sol.remove_duplicates_brute(nums);\n  // int k = sol.remove_duplicates_better(nums);\n  int k = sol.remove_duplicates_best(nums);\n\n  std::cout << \"New length: \" << k << \"\\n\";\n  std::cout << \"Modified array: \";\n  for (int i = 0; i < k; i++)\n  {\n    std::cout << nums[i] << \" \";\n  }\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      }
    ]
  },
  {
    "id": "2026-01-09-session9",
    "date": "2026-01-09",
    "num": 9,
    "title": "Coding Problems",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problems : \n- https://leetcode.com/problems/move-zeroes/description/\n- https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=FpUkHbdf4GpJlVWhiadLs,VOhng5y9UUGyUOPXTyMvEA\n\n# Assignments : \n- https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/\n- https://www.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1\n- https://www.geeksforgeeks.org/problems/intersection-of-two-arrays-with-duplicate-elements/1\n- https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-arrays-with-distinct-elements/1\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "leaders_in_an_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1\n *\n * Short Description\n * You are given an array arr of positive integers.\n * Your task is to find all the leaders in the array.\n * An element is considered a leader if it is greater than or equal to all elements to its right.\n * The rightmost element is always a leader.\n *\n *\n * Input: arr = [16, 17, 4, 3, 5, 2]\n * Output: [17, 5, 2]\n * Explanation:\n * Note that there is nothing greater on the right side of 17, 5 and, 2.\n *\n *\n * Input: arr = [10, 4, 2, 4, 1]\n * Output: [10, 4, 4, 1]\n * Explanation:\n * Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right. side\n *\n *\n * Input: arr = [5, 10, 20, 40]\n * Output: [40]\n * Explanation:\n * When an array is sorted in increasing order, only the rightmost element is leader.\n *\n *\n * Input: arr = [30, 10, 10, 5]\n * Output: [30, 10, 10, 5]\n * Explanation:\n * When an array is sorted in non-increasing order, all elements are leaders.\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach\n  // For every element of vector, we serach in entire vector\n  // if any element which have greater then right side element\n  // then store in res vector\n  // Time: O(n * n) , Space: O(1)\n\n  std::vector<int> array_leaders_brute(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Edge case\n    if (n == 1)\n    {\n      return nums;\n    }\n\n    // Init a vector to store leaders of a vector\n    std::vector<int> res;\n\n    for (int i = 0; i < n; i++)\n    {\n      int ele = nums[i];\n\n      int j = i + 1;\n      while (j < n)\n      {\n        if (nums[j] > ele)\n          break;\n        j++;\n      }\n\n      if (j == n)\n        res.push_back(ele);\n    }\n    return res;\n  }\n\n  // Best Approach - Move from right side\n  // We init a pointer and start tracking next leader of vector\n  // by traversing right to left\n  // Note: rightmost element always a leader element of vector\n  // After that we reverse that res vector\n  // Time: O(n), Space: O(1)\n\n  std::vector<int> array_leaders_best(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Edge case\n    if (n == 1)\n    {\n      return nums;\n    }\n\n    // Init a vector to store leaders of a vector\n    std::vector<int> res;\n\n    // Rightmost element always an array leader\n    int maxi = nums[n - 1];\n    res.push_back(maxi);\n\n    for (int idx = n - 2; idx >= 0; idx--)\n    {\n      if (nums[idx] >= maxi)\n      {\n        maxi = nums[idx];\n        res.push_back(maxi);\n      }\n    }\n\n    std::reverse(res.begin(), res.end());\n\n    return res;\n  }\n};\n\nint main()\n{\n\n  std::vector<int> nums = {16, 17, 4, 3, 5, 2};\n\n  Solution sol;\n  // std::vector<int> ans = sol.array_leaders_brute(nums);\n  std::vector<int> ans = sol.array_leaders_best(nums);\n\n  // Print the vector\n  std::cout << \"Array of leaders : \";\n  for (auto &it : ans)\n  {\n    std::cout << it << \" \";\n  }\n\n  std::cout << \"\\n\";\n}"
      },
      {
        "lang": "cpp",
        "file": "move_zeroes_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/move-zeroes/description/\n *\n * Short Description\n * Given an integer array nums, move all 0's to the end of it while\n * maintaining the relative order of the non-zero elements.\n * Note: that you must do this in-place without making a copy of the array.\n *\n *\n * Input: nums = [0,1,0,3,12]\n * Output: [1,3,12,0,0]\n *\n *\n * Input: nums = [0]\n * Output: [0]\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach\n  // We compare adjcent elements if non desirble element\n  // come then we swap both the numbers (Bubble sort)\n  // Time: O(n^2), Space: O(1)\n\n  void move_zeroes_brute(std::vector<int> &nums)\n  {\n\n    int n = nums.size();\n\n    // Edge case\n    if (n == 1)\n      return;\n\n    for (int i = 0; i < n - 1; i++)\n    {\n      bool flag = false;\n      for (int j = 0; j < n - i - 1; j++)\n      {\n        if (nums[j] == 0 && nums[j + 1] != 0)\n        {\n          std::swap(nums[j], nums[j + 1]);\n          flag = true;\n        }\n      }\n\n      if (!flag)\n      { // Flag not change, means swaping never happend\n        break;\n      }\n    }\n  }\n\n  // Better Approach\n  // Use extra space and save non zero elements\n  // Also count no of zeroes while looping\n  // push no of zeroes into extra space\n  // Time: O(n), Space: O(n)\n\n  void move_zeroes_better(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Edge case\n    if (n == 1)\n      return;\n\n    // count the zeroes\n    int count_zeroes = 0;\n\n    // push all non-zero element into new array\n    std::vector<int> ans;\n    for (auto it : nums)\n    {\n      if (it != 0)\n        ans.push_back(it);\n      else\n        count_zeroes++;\n    }\n\n    // Move all zeroes to end of an array\n    while (count_zeroes--)\n    {\n      ans.push_back(0);\n    }\n\n    // Combine the result\n    for (int i = 0; i < n; i++)\n    {\n      nums[i] = ans[i];\n    }\n  }\n\n  // Best Approach\n  // We init two pointer i and j\n  // Divide the whole array into two parts\n  // 0 =>  i-1 which have only non zero elements\n  // i => n - 1 which have only zeroes\n  // Time: O(n), Space: O(1)\n\n  void move_zeroes_best(std::vector<int> &nums)\n  {\n\n    int n = nums.size();\n\n    // Edge case\n    if (n == 1)\n      return;\n\n    // init two pointer to track\n    // 0 => i-1 non zero elements\n    // i => zero elements\n\n    int i = -1, j = 0;\n\n    while (j < n)\n    {\n      if (nums[j])\n      {\n        std::swap(nums[j], nums[i + 1]);\n        i++;\n      }\n      j++;\n    }\n  }\n};\n\nint main()\n{\n  std::vector<int> nums = {0, 1, 2, 0, 0, 3, 12, 0};\n\n  // Create an object of class Solution\n  Solution sol;\n\n  sol.move_zeroes_brute(nums);\n  sol.move_zeroes_better(nums);\n  sol.move_zeroes_best(nums);\n\n  std::cout << \"After moving zeroes to end : \";\n  for (auto &it : nums)\n  {\n    std::cout << it << \" \";\n  }\n}"
      }
    ]
  },
  {
    "id": "2026-01-12-session10",
    "date": "2026-01-12",
    "num": 10,
    "title": "Coding Problems",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problems : \n- https://leetcode.com/problems/two-sum/description/\n- https://www.geeksforgeeks.org/dsa/smallest-difference-pair-values-two-unsorted-arrays/\n\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=uS_wLLM3p8321ujsjNC44,zziz_QwcjzN2Ri4PELtqkA\n\n# Assignments : \n- https://www.geeksforgeeks.org/problems/key-pair5616/1\n- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/\n- https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum--150253/1\n- https://www.geeksforgeeks.org/problems/find-the-closest-pair-from-two-arrays4215/1\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "smallest_difference_pair_values_two_unsorted_arrays_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/dsa/smallest-difference-pair-values-two-unsorted-arrays/\n *\n * Short Description\n * Given two arrays of integers, compute the pair of values\n * (one value in each array) with the smallest (non-negative) difference.\n * Return the difference.\n *\n *\n * Input:  A[] = {1, 3, 15, 11, 2}, B[] = {23, 127, 235, 19, 8}\n * Output: 3\n * Explanation: That is, the pair (11, 8)\n *\n *\n * Input: A[] = {10, 5, 40}, B[] = {50, 90, 80}\n * Output: 10\n * Explanation: That is, the pair (40, 50)\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <climits>\n#include <cmath>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach\n  // 1. We run two loop for every elements of vectors\n  // 2. If any pair has diff then store it\n  // 3. Always try to minimise the store diff\n  // Time: O(n*m) , Space: O(1)\n\n  int find_smallest_difference_brute(std::vector<int> &nums1, std::vector<int> &nums2, int n, int m)\n  {\n    // Init a variable to store minimum diff of elements from both the vector\n    int res = INT_MAX;\n\n    // Outer loop\n    for (int i = 0; i < n; i++)\n    {\n      // Inner loop\n      for (int j = 0; j < m; j++)\n      {\n        // Find minimum diff of both the number\n        int diff = std::abs(nums1[i] - nums2[j]);\n        res = std::min(res, diff);\n      }\n    }\n\n    return res;\n  }\n\n  // Best Approach\n  // 1. For removing the two loop we can sort the both the vector\n  // 2. Init two pointer i and j and start track elements of vectors\n  // 3. Store the diff (diff = nums1[i] - nums2[j])\n  // 4. Always try to minimise the store diff\n  // Time: O(n log n + m log m), Space: O(1)\n\n  int find_smallest_difference_best(std::vector<int> &nums1, std::vector<int> &nums2, int n, int m)\n  {\n\n    // Sort the both the vector\n    std::sort(nums1.begin(), nums1.end());\n    std::sort(nums2.begin(), nums2.end());\n\n    // Init a variable to store minimum diff of elements from both the vector\n    int res = INT_MAX;\n\n    // Init two pointer so we can track both the vectors\n    int i = 0, j = 0;\n    while (i < n && j < m)\n    {\n      // Find minimum diff of both the number\n      int diff = std::abs(nums1[i] - nums2[j]);\n      res = std::min(res, diff);\n\n      if (nums1[i] < nums2[j])\n        i++;\n      else\n        j++;\n    }\n\n    return res;\n  }\n};\n\nint main()\n{\n  std::vector<int> nums1 = {1, 3, 15, 11, 2};\n  std::vector<int> nums2 = {23, 127, 235, 19, 8};\n\n  int n = nums1.size();\n  int m = nums2.size();\n\n  Solution sol;\n\n  int ans = sol.find_smallest_difference_brute(nums1, nums2, n, m);\n  // int ans = sol.find_smallest_difference_best(nums1, nums2, n, m);\n\n  std::cout << ans << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "two_sum_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/two-sum/description/\n *\n * Short Description\n * Given an array of integers nums and an integer target,\n * return indices of the two numbers such that they add up to target.\n * You may assume that each input would have exactly one solution, and you may not use the same element twice.\n * You can return the answer in any order.\n *\n *\n * Input: nums = [2,7,11,15], target = 9\n * Output: [0,1]\n * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n *\n *\n * Input: nums = [3,2,4], target = 6\n * Output: [1,2]\n *\n * Input:  nums = [3,3], target = 6\n * Output: [0,1]\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_map>\n\nclass Solution\n{\npublic:\n  // Brute Force\n  // Using of two loops we try to find out current pair\n  // of element is equal to target\n  // Time: O(n^2), Space: O(1)\n\n  std::vector<int> two_sum_brute(std::vector<int> &nums, int target)\n  {\n    int n = nums.size();\n\n    for (int i = 0; i < n; i++)\n    {\n      // Find target-nums[i] in next part of vector\n      for (int j = i + 1; j < n; j++)\n      {\n        if (nums[i] + nums[j] == target)\n        {\n          return {i, j};\n        }\n      }\n    }\n\n    // dummy return statement\n    return {-1, -1};\n  }\n\n  // Best Approach\n  // Init a map and store (ele , index) of vector\n  // If a compliment exist for an element, then return the ans\n  // otherwise store inside of map (ele , index)\n  // Time: O(n), Space: (n)\n\n  std::vector<int> two_sum_best(std::vector<int> &nums, int target)\n  {\n    int n = nums.size();\n\n    std::unordered_map<int, int> mp;\n\n    for (int i = 0; i < n; i++)\n    {\n      int ele = nums[i];\n      int compliment = target - ele;\n\n      if (mp.count(compliment))\n      {\n        return {mp[compliment], i};\n      }\n      mp[ele] = i;\n    }\n\n    return {-1, -1};\n  }\n};\n\nint main()\n{\n\n  std::vector<int> nums = {2, 7, 11, 15};\n  int target = 9;\n  int n = nums.size();\n\n  Solution sol;\n\n  // std::vector<int> res = sol.two_sum_brute(nums, target);\n  std::vector<int> res = sol.two_sum_best(nums, target);\n\n  // Print the vector\n  std::cout << \"Result is : [\";\n  for (int i = 0; i < res.size() - 1; i++)\n  {\n    std::cout << res[i] << \", \";\n  }\n\n  std::cout << res[res.size() - 1] << \"]\\n\";\n\n  return 0;\n}"
      }
    ]
  },
  {
    "id": "2026-01-13-session11",
    "date": "2026-01-13",
    "num": 11,
    "title": "Coding Problems",
    "topics": [
      "strings"
    ],
    "markdown": "# Coding Problems : \n- https://www.geeksforgeeks.org/problems/equal-to-product3836/1\n- https://www.geeksforgeeks.org/problems/two-numbers-with-sum-closest-to-zero1737/1\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=lxAgGz6qvc-wdEhkPCks0,AEAOp4qxOK1gxsT9o3UEng\n\n# Assignments : \n- https://www.geeksforgeeks.org/problems/find-all-pairs-whose-sum-is-x5808/1\n- https://www.geeksforgeeks.org/problems/reverse-a-string-with-spaces-intact5213/1\n- https://www.geeksforgeeks.org/problems/count-pairs-whose-sum-is-less-than-target/1\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "equal_to_product_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/equal-to-product3836/1\n *\n * Short Description\n * Given an array, arr[] of positive integers, and a number x,\n * find if there is a pair in arr[] with a product equal to x.\n * Return true if there exists such pair otherwise false.\n *\n *\n * Input: arr[] = [10, 20, 9, 40], x = 400\n * Output: true\n * Explanation: As 10 * 40 = 400, the answer is true.\n *\n *\n * Input: arr[] = [-10, 20, 9, -40], x = 30\n * Output: false\n * Explanation: No pair exists with product 30.\n *\n * Expected Time Complexity: O(n)\n * Expected Space Complexity: O(n)\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <algorithm>\n#include <vector>\n#include <unordered_set>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach\n  // Try all possible pairs and check if their product equals x.\n  // Time: O(n^2), Space: O(1)\n\n  bool is_product_brute(std::vector<int> arr, long long x)\n  {\n    int n = arr.size();\n\n    // A single element can't make a pair\n    if (n == 1)\n      return false;\n\n    for (int i = 0; i < n; i++)\n    {\n      for (int j = i + 1; j < n; j++)\n      {\n        long long product = 1LL * arr[i] * arr[j];\n\n        if (product == x)\n        {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  // Better/Optimal Approach Using Hash Set\n  //\n  // For each element a:\n  //  1. If a == 0, then we need x == 0 and another 0 already seen.\n  //  2. Otherwise, if x % a == 0 and (x / a) exists in the set, we found the pair.\n  // Store elements in a set while traversing.\n  //\n  // Time: O(n), Space: O(n)\n\n  bool is_product_hash(const std::vector<int> &arr, long long x)\n  {\n    int n = arr.size();\n    if (n < 2)\n      return false;\n\n    std::unordered_set<long long> st;\n\n    for (int a : arr)\n    {\n      if (a == 0)\n      {\n        // else just insert 0 and continue\n        if (x == 0 && st.count(0))\n          return true;\n      }\n      else\n      {\n        if (x % a == 0)\n        {\n          long long need = x / a;\n          if (st.count(need))\n            return true;\n        }\n      }\n      st.insert(a);\n    }\n    return false;\n  }\n\n  // Best Approach - Two Pointers after Sorting\n  // This approach works correctly when all numbers are NON-NEGATIVE / POSITIVE.\n  // For mixed negatives, hash-based approach is safer.\n  //\n  // Sort the array, use two pointers left and right.\n  // Compare product and move pointers accordingly.\n  //\n  // Time: O(n log n), Space: O(1)\n\n  bool is_product_two_pointers(std::vector<int> arr, long long x)\n  {\n    int n = arr.size();\n    if (n < 2)\n      return false;\n\n    std::sort(arr.begin(), arr.end());\n\n    // Init two pointer to track vector from left and right\n    int i = 0, j = n - 1;\n\n    while (i < j)\n    {\n      long long product = 1LL * arr[i] * arr[j];\n\n      if (product == x)\n        return true;\n      else if (product < x)\n        i++;\n      else\n        j--;\n    }\n\n    return false;\n  }\n};\n\nint main()\n{\n\n  std::vector<int> arr1 = {10, 20, 9, 40};\n  long long x1 = 400;\n\n  std::vector<int> arr2 = {-10, 20, 9, -40};\n  long long x2 = 30;\n\n  Solution sol;\n\n  std::cout << \"Brute (arr1): \" << sol.is_product_brute(arr1, x1) << \"\\n\";\n  std::cout << \"Hash  (arr1): \" << sol.is_product_hash(arr1, x1) << \"\\n\";\n  std::cout << \"2Ptr  (arr1): \" << sol.is_product_two_pointers(arr1, x1) << \"\\n\\n\";\n\n  std::cout << \"Brute (arr2): \" << sol.is_product_brute(arr2, x2) << \"\\n\";\n  std::cout << \"Hash  (arr2): \" << sol.is_product_hash(arr2, x2) << \"\\n\";\n\n  // Two pointers may not work correctly for mixed negatives, so we skip it here.\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "two_numbers_with_sum_closet_to_zero_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/two-numbers-with-sum-closest-to-zero1737/1\n *\n * Short Description\n * Given an integer array of N elements.\n * You need to find the maximum sum of two elements such that sum is closest to zero.\n *\n *\n * Input: N = 3, arr[] = {-8 -66 -60}\n * Output: -68\n * Explanation:\n * Sum of two elements closest to\n * zero is -68 using numbers -60 and -8.\n *\n *\n * Input: N = 6, arr[] = {-21 -67 -37 -18 4 -65}\n * Output: -14\n * Explanation:\n * Sum of two elements closest to\n * zero is -14 using numbers -18 and 4.\n *\n * Expected Time Complexity: O(N*logN).\n * Expected Auxiliary Space: O(1).\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <algorithm>\n#include <vector>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach\n  // Try all possible pairs and compute their sum.\n  // Track the sum whose absolute value is minimum.\n  // Time: O(n^2), Space: O(1)\n\n  int two_sum_closest_to_zero_brute(std::vector<int> &arr)\n  {\n    int n = arr.size();\n\n    // Edge case\n    if (n < 2)\n      return 0;\n\n    int best_sum = arr[0] + arr[1];\n    int min_abs = std::abs(best_sum);\n\n    // Travrase the vector, outer loop\n    for (int i = 0; i < n; i++)\n    {\n      for (int j = i + 1; j < n; j++)\n      {\n        int curr_sum = arr[i] + arr[j];\n        int curr_abs = std::abs(curr_sum);\n\n        if (curr_abs < min_abs)\n        {\n          min_abs = curr_abs;\n          best_sum = curr_sum;\n        }\n      }\n    }\n\n    return best_sum;\n  }\n\n  // Best/Optimal Approach\n  // 1. Sort the array\n  // 2. Use two pointers: left at start, right at end\n  // 3. Compute sum = arr[left] + arr[right]\n  // 4. Update answer if abs(sum) is smaller\n  // 5. If sum < 0, move left++ to increase sum\n  //    else move right-- to decrease sum\n  // Time: O(n log n), Space: O(1)\n\n  int two_sum_closest_to_zero_best(std::vector<int> &arr)\n  {\n    int n = arr.size();\n    if (n < 2)\n      return 0;\n\n    std::sort(arr.begin(), arr.end());\n\n    // Init left and right pointer to track vector from both side\n    int left = 0, right = n - 1;\n    int best_sum = arr[left] + arr[right];\n    int min_abs = std::abs(best_sum);\n\n    // Travrase the vector\n    while (left < right)\n    {\n      int curr_sum = arr[left] + arr[right];\n      int curr_abs = std::abs(curr_sum);\n\n      if (curr_abs < min_abs)\n      {\n        min_abs = curr_abs;\n        best_sum = curr_sum;\n      }\n\n      if (curr_sum < 0)\n        left++;\n      else\n        right--;\n    }\n\n    return best_sum;\n  }\n};\n\nint main()\n{\n\n  std::vector<int> arr1 = {-8, -66, -60};\n  std::vector<int> arr2 = {-21, -67, -37, -18, 4, -65};\n\n  Solution sol;\n\n  // int ans1 = sol.two_sum_closest_to_zero_brute(arr1);\n  int ans1 = sol.two_sum_closest_to_zero_best(arr1);\n\n  // int ans2 = sol.two_sum_closest_to_zero_brute(arr2);\n  int ans2 = sol.two_sum_closest_to_zero_best(arr2);\n\n  std::cout << \"Answer for arr1: \" << ans1 << \"\\n\";\n  std::cout << \"Answer for arr2: \" << ans2 << \"\\n\";\n\n  return 0;\n}"
      }
    ]
  },
  {
    "id": "2026-01-14-session12",
    "date": "2026-01-14",
    "num": 12,
    "title": "Coding Problems",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problems\n- https://leetcode.com/problems/3sum/description/\n- https://leetcode.com/problems/sort-colors/description/\n\n# Excalidraw Link\nhttps://excalidraw.com/#json=q7Srxham8xgU-MNNDNuFz,BX3UkZ58nG6GYKK3MgbK8Q\n\n# Assignments\n- https://www.geeksforgeeks.org/problems/pair-in-array-whose-sum-is-closest-to-x1124/1\n- https://leetcode.com/problems/3sum-closest/description/\n- https://leetcode.com/problems/4sum/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "sort_colors_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/sort-colors/description/\n *\n * Short Description\n * Given an array nums with n objects colored red, white, or blue,\n * sort them in-place so that objects of the same color are adjacent,\n * with the colors in the order red, white, and blue.\n *\n * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n * You must solve this problem without using the library's sort function.\n *\n *\n * Input: nums = [2,0,2,1,1,0]\n * Output: [0,0,1,1,2,2]\n * Explanation:\n *\n *\n * Input: nums = [2,0,1]\n * Output: [0,1,2]\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <algorithm>\n#include <vector>\n\nclass Solution\n{\npublic:\n  void sort_colors(std::vector<int> &nums)\n  {\n    // Standard method sort the array\n    std::sort(nums.begin(), nums.end());\n  }\n\n  /*\n   * Use Bubble Sort\n   * Time Complexity: O(n^2)\n   * Space Complexity: O(1)\n   */\n  void sort_colors_brute(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    for (int i = 0; i < n - 1; i++)\n    {\n      for (int j = 0; j < n - i - 1; j++)\n      {\n        if (nums[j] > nums[j + 1])\n        {\n          std::swap(nums[j], nums[j + 1]);\n        }\n      }\n    }\n  }\n\n  /**\n   * Using linear approach\n   * Initilize three variable to store count\n   * of 1,2 and O's.\n   *\n   * After that, we place O,1 and 2 excat count\n   * of each number.\n   *\n   * Time: O(n) , Space: O(1)\n   */\n  void sort_colors_better(std::vector<int> &nums)\n  {\n\n    // Init three variable to count 1's, 2's and 0's.\n    int count_one = 0, count_two = 0, count_zero = 0;\n\n    for (auto &it : nums)\n    {\n      if (it == 0)\n        count_zero++;\n      else if (it == 1)\n        count_one++;\n      else\n        count_two++;\n    }\n\n    // Place 0's, 1's and 2's and correct possition\n    int k = 0;\n    while (count_zero--)\n    {\n      nums[k] = 0;\n      k++;\n    }\n\n    while (count_one--)\n    {\n      nums[k] = 1;\n      k++;\n    }\n\n    while (count_two--)\n    {\n      nums[k] = 2;\n      k++;\n    }\n  }\n\n  /*\n   * Use 3 pointers\n   * low -> position of next 0\n   * mid -> current element\n   * high -> position of next 2\n   *\n   * Time: O(n), Space: O(1)\n   */\n  void sort_colors_best(std::vector<int> &nums)\n  {\n    int low = 0, mid = 0;\n    int high = nums.size() - 1;\n\n    while (mid <= high)\n    {\n      if (nums[mid] == 0)\n      {\n        std::swap(nums[low], nums[mid]);\n        low++;\n        mid++;\n      }\n      else if (nums[mid] == 1)\n      {\n        mid++;\n      }\n      else // nums[mid] == 2\n      {\n        std::swap(nums[mid], nums[high]);\n        high--;\n      }\n    }\n  }\n};\n\nint main()\n{\n  std::vector<int> nums = {2, 0, 2, 1, 1, 0};\n\n  Solution sol;\n\n  // sol.sort_colors_brute(nums);\n  // sol.sort_colors_better(nums);\n  sol.sort_colors_best(nums);\n\n  std::cout << \"Sorted Colors: \";\n  for (int num : nums)\n    std::cout << num << \" \";\n\n  std::cout << \"\\n\";\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "three_sum_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/3sum/description/\n *\n * Short Description\n * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]\n * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n * Notice that the solution set must not contain duplicate triplets.\n *\n *\n * Input: nums = [-1,0,1,2,-1,-4]\n * Output: [[-1,-1,2],[-1,0,1]]\n * Explanation:\n * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\n * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\n * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\n * The distinct triplets are [-1,0,1] and [-1,-1,2].\n * Notice that the order of the output and the order of the triplets does not matter.\n *\n *\n * Input: nums = [0,0,0]\n * Output: [[0,0,0]]\n * Explanation: The only possible triplet sums up to 0.\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <algorithm>\n#include <vector>\n#include <set>\n\nclass Solution\n{\npublic:\n  // Brute Force Approach\n  // Try all triplets and store unique ones in a set\n  // Time: O(n^3 * log k), Space: O(k) where k is number of unique triplets\n\n  std::vector<std::vector<int>> three_sum_brute(std::vector<int> &nums)\n  {\n    // Init n to store size of vector\n    int n = nums.size();\n\n    // Init st set of vector<int> to store unique triplet\n    std::set<std::vector<int>> st;\n\n    // Check all possible triplet\n    for (int i = 0; i < n - 2; i++)\n    {\n      for (int j = i + 1; j < n - 1; j++)\n      {\n        for (int k = j + 1; k < n; k++)\n        {\n          if (nums[i] + nums[j] + nums[k] == 0)\n          {\n            // Found a triplet which sum is zero\n            std::vector<int> temp = {nums[i], nums[j], nums[k]};\n\n            // Sort the triplet and store into set\n            std::sort(temp.begin(), temp.end());\n            st.insert(temp);\n          }\n        }\n      }\n    }\n\n    // convert set to vector\n    return std::vector<std::vector<int>>(st.begin(), st.end());\n  }\n\n  // Better Approach Using Hash Set\n  // Fix one element, and find two-sum for the rest using a set\n  // Time: O(n^2 * log k), Space: O(n) + O(k)\n\n  std::vector<std::vector<int>> three_sum_better(std::vector<int> &nums)\n  {\n    int n = nums.size();\n\n    // Set to store unique triplets\n    std::set<std::vector<int>> result;\n\n    // Check all possible triplets\n    for (int i = 0; i < n; i++)\n    {\n      // Set to store all unique elements far in the loop\n      std::set<int> seen;\n      for (int j = i + 1; j < n; j++)\n      {\n        // Calculate compliment element of triplet\n        int third = -(nums[i] + nums[j]);\n\n        if (seen.count(third))\n        {\n          // Found a triplet which sum is zero\n          // Sort the triplet ans insert inot set\n          std::vector<int> temp = {nums[i], nums[j], third};\n          std::sort(temp.begin(), temp.end());\n          result.insert(temp);\n        }\n\n        // Insert the current element\n        // into seen set for future checks\n        seen.insert(nums[j]);\n      }\n    }\n    // Covert set to vector\n    return std::vector<std::vector<int>>(result.begin(), result.end());\n  }\n\n  // Best Approach using Sorting and Two Pointers\n  // Time: O(n^2), Space: O(1)\n  std::vector<std::vector<int>> three_sum_best(std::vector<int> &nums)\n  {\n    std::vector<std::vector<int>> res;\n    int n = nums.size();\n\n    std::sort(nums.begin(), nums.end());\n\n    for (int i = 0; i < n; i++)\n    {\n      if (i > 0 && nums[i] == nums[i - 1])\n        continue; // skip duplicates for i\n\n      int left = i + 1;\n      int right = n - 1;\n\n      while (left < right)\n      {\n        int sum = nums[i] + nums[left] + nums[right];\n\n        if (sum == 0)\n        {\n          res.push_back({nums[i], nums[left], nums[right]});\n\n          left++;\n          right--;\n\n          // skip duplicates for left and right\n          while (left < right && nums[left] == nums[left - 1])\n            left++;\n          while (left < right && nums[right] == nums[right + 1])\n            right--;\n        }\n        else if (sum < 0)\n        {\n          left++;\n        }\n        else\n        {\n          right--;\n        }\n      }\n    }\n\n    return res;\n  }\n};\n\nint main()\n{\n  std::vector<int> nums = {-1, 0, 1, 2, -1, -4};\n\n  Solution sol;\n\n  // std::vector<std::vector<int>> res = sol.three_sum_brute(nums);\n  // std::vector<std::vector<int>> res = sol.three_sum_better(nums);\n  std::vector<std::vector<int>> res = sol.three_sum_best(nums);\n\n  std::cout << \"Triplets:\\n\";\n  for (auto &triplet : res)\n  {\n    std::cout << \"[ \";\n    for (int x : triplet)\n      std::cout << x << \" \";\n    std::cout << \"]\\n\";\n  }\n\n  return 0;\n}"
      }
    ]
  },
  {
    "id": "2026-01-15-session13",
    "date": "2026-01-15",
    "num": 13,
    "title": "Coding Problems",
    "topics": [
      "strings"
    ],
    "markdown": "# Coding Problems\n- https://leetcode.com/problems/majority-element/description/\n- https://leetcode.com/problems/majority-element-ii/description/\n\n\n# Excalidraw Link\nhttps://excalidraw.com/#json=JOnr-GM386NJS2qYVwR1Y,dbLeE3ikY7-8rXNm4ODD_g\n\n# Assignments\n- https://leetcode.com/problems/compare-version-numbers/\n- https://leetcode.com/problems/reverse-words-in-a-string/\n- https://leetcode.com/problems/valid-palindrome/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "majority_element_ii_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class Solution\n{\npublic:\n    vector<int> majorityElement(vector<int> &nums)\n    {\n        unordered_map<int, int> mapp;\n        vector<int> ans;\n\n        for (int i = 0; i < nums.size(); i++)\n        {\n            mapp[nums[i]]++;\n        }\n\n        for (const auto &pair : mapp)\n        {\n            if (pair.second > nums.size() / 3)\n            {\n                ans.emplace_back(pair.first);\n            }\n        }\n\n        return ans;\n    }\n};"
      },
      {
        "lang": "cpp",
        "file": "majority_element_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class Solution\n{\npublic:\n    int majorityElement(vector<int> &nums)\n    {\n        int majorityElement = nums[0];\n        int majorityCount = 1;\n\n        for (int i = 1; i < nums.size(); i++)\n        {\n            if (majorityCount == 0)\n            {\n                majorityElement = nums[i];\n                majorityCount = 1;\n            }\n            else if (nums[i] == majorityElement)\n            {\n                majorityCount++;\n            }\n            else\n            {\n                majorityCount--;\n            }\n        }\n\n        return majorityElement;\n    }\n};"
      }
    ]
  },
  {
    "id": "2026-01-16-session14",
    "date": "2026-01-16",
    "num": 14,
    "title": "Coding Problems",
    "topics": [
      "backtracking"
    ],
    "markdown": "# Coding Problems :\nhttps://leetcode.com/problems/next-permutation/description/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=VtFir96cV2eOvgkbwk5-6,fwYDztSpONN83A9jtzCiug\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "next_permutation_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class Solution\n{\npublic:\n    void nextPermutation(vector<int> &nums)\n    {\n        int n = nums.size();\n        int PivotIndex = -1;\n        for (int i = n - 2; i >= 0; i--)\n        {\n            if (nums[i] < nums[i + 1])\n            {\n                PivotIndex = i;\n                break;\n            }\n        }\n        // if aray is sorted in decending order\n        if (PivotIndex == -1)\n        {\n            reverse(nums.begin(), nums.end());\n            return;\n        }\n        for (int i = n - 1; i >= PivotIndex; i--)\n        {\n            if (nums[i] > nums[PivotIndex])\n            {\n                int temp = nums[i];\n                nums[i] = nums[PivotIndex];\n                nums[PivotIndex] = temp;\n                break;\n            }\n        }\n        reverse(nums.begin() + PivotIndex + 1, nums.end());\n    }\n};"
      }
    ]
  },
  {
    "id": "2026-01-20-session15",
    "date": "2026-01-20",
    "num": 15,
    "title": "Hashing Theory",
    "topics": [
      "hash map"
    ],
    "markdown": "# Hashing Theory :\n- https://leetcode.com/explore/learn/card/hash-table/\n- https://leetcode.com/explore/learn/card/hash-table/182/practical-applications/1109/\n- https://leetcode.com/explore/learn/card/hash-table/182/practical-applications/1110/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=8WdxI_B_CsGov4qeBQn9u,YiCbMzVSltzduA97vOquww\n\n# Assignment Problems :\n- https://leetcode.com/problems/contains-duplicate/description/\n- https://leetcode.com/problems/single-number/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "contains_duplicate_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class Solution\n{\npublic:\n    bool containsDuplicate(vector<int> &nums)\n    {\n        unordered_map<int, int> seen;\n        for (int num : nums)\n        {\n            if (seen[num] >= 1)\n                return true;\n            seen[num]++;\n        }\n        return false;\n    }\n};"
      }
    ]
  },
  {
    "id": "2026-01-21-session16",
    "date": "2026-01-21",
    "num": 16,
    "title": "Load Factor & Rehashing",
    "topics": [
      "hash map"
    ],
    "markdown": "# Load Factor & Rehashing : \nhttps://www.geeksforgeeks.org/dsa/introduction-to-hashing-2/\n\n# Collision Resolution :\n- https://www.geeksforgeeks.org/dsa/collision-resolution-techniques/\n- https://www.geeksforgeeks.org/dsa/separate-chaining-collision-handling-technique-in-hashing/\n- https://www.geeksforgeeks.org/dsa/open-addressing-collision-handling-technique-in-hashing/\n- https://www.geeksforgeeks.org/dsa/implementing-hash-table-open-addressing-linear-probing-cpp/\n\n# Excalidraw link : \nhttps://excalidraw.com/#json=qwIyfAMnsnuESjSqfBGOF,-Sq8sdzZX0Az6U4oURKYzg\n",
    "solutions": []
  },
  {
    "id": "2026-01-22-session17",
    "date": "2026-01-22",
    "num": 17,
    "title": "Theory",
    "topics": [
      "hash map"
    ],
    "markdown": "# Theory :\n- https://www.geeksforgeeks.org/dsa/quadratic-probing-in-hashing/\n- https://www.geeksforgeeks.org/dsa/double-hashing/\n\n# Coding Problem : \nhttps://leetcode.com/problems/group-anagrams/description/\n",
    "solutions": []
  },
  {
    "id": "2026-01-23-session18",
    "date": "2026-01-23",
    "num": 18,
    "title": "Coding Problem",
    "topics": [
      "hash set"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/design-hashset/\n  - Implemented using one-to-one mapping (no collisions)\n  - Implemented using separate chaining to resolve collisions.\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=GBEvIgk1XNLmye7IRSWf7,ARNEHKWuMhg7wkr1y8MTEg\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "design_hashset_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class MyHashSet\n{\nprivate:\n    static constexpr int SIZE = 1'000'001;\n    vector<int> HashMap;\n\npublic:\n    MyHashSet() : HashMap(SIZE, -1) {}\n\n    void add(int key)\n    {\n        HashMap[key] = key;\n    }\n\n    void remove(int key)\n    {\n        HashMap[key] = -1;\n    }\n\n    bool contains(int key)\n    {\n        int value = HashMap[key];\n        if (value != -1 && value == key)\n        {\n            return true;\n        }\n        return false;\n    }\n};\n\n/**\n * Your MyHashSet object will be instantiated and called as such:\n * MyHashSet* obj = new MyHashSet();\n * obj->add(key);\n * obj->remove(key);\n * bool param_3 = obj->contains(key);\n */"
      },
      {
        "lang": "java",
        "file": "design_hashset_KumarNirupam.java",
        "user": "KumarNirupam",
        "content": "/*\nProblem link :-https://leetcode.com/problems/design-hashset/\n*/\n\n\nimport java.util.LinkedList;\n\nclass MyHashSet {\n\n    private int tableSize = 1009; // hashtable size\n    private LinkedList<Integer>[] buckets; // ech buket in hashtable is a linked list \n\n    public MyHashSet() {\n        buckets = new LinkedList[tableSize];\n        for(int i=0 ; i< tableSize ; i++){\n            buckets[i] = new LinkedList<>();\n        } // each bucket is LinkedList assigment\n    }\n\n    // hashfunction\n\n    private int hashFunc (int key){\n        return key % tableSize ;\n    }\n    \n    public void add(int key) {\n        int index  = hashFunc(key); // we get the index of after the key is passed via hash-function\n\n        if(!buckets[index].contains(key)){\n\n            buckets[index].add(key);\n        }\n    }\n    \n    public void remove(int key) {\n        int index = hashFunc(key);\n\n        buckets[index].remove((Integer)key);\n    }\n    \n    public boolean contains(int key) {\n        int index = hashFunc(key);\n        return buckets[index].contains(key);\n    }\n}\n\n/**\n * Your MyHashSet object will be instantiated and called as such:\n * MyHashSet obj = new MyHashSet();\n * obj.add(key);\n * obj.remove(key);\n * boolean param_3 = obj.contains(key);\n */"
      }
    ]
  },
  {
    "id": "2026-01-27-session19",
    "date": "2026-01-27",
    "num": 19,
    "title": "Coding problem",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding problem :\nhttps://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=vhJj-fcUFdzhkKN_Grs8Q,CglgvQX5EQNynr4VkrO5lA\n",
    "solutions": []
  },
  {
    "id": "2026-01-28-session20",
    "date": "2026-01-28",
    "num": 20,
    "title": "Coding Problem",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problem :\nhttps://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1\n  - Optimized solution considering array doesn't have negative elements\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=KZy3J2RR8m_7qDc0gXtaw,CiX5Jrd4ZYMOKB0U_pNL6g\n\n# Assignment :\nhttps://leetcode.com/problems/subarray-sum-equals-k/description/\n",
    "solutions": []
  },
  {
    "id": "2026-01-29-session21",
    "date": "2026-01-29",
    "num": 21,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/longest-substring-without-repeating-characters/description/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=uXotFeeLN_fVVUR01W4q5,TnDSl4uCv8LL8I5JNPnsFA\n\n# Assignment :\nhttps://leetcode.com/problems/jewels-and-stones/description/\n",
    "solutions": []
  },
  {
    "id": "2026-01-30-session22",
    "date": "2026-01-30",
    "num": 22,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem :\nhttps://www.geeksforgeeks.org/dsa/longest-substring-with-at-most-two-distinct-characters/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=4j7xKF-HYAVUeQNybYwWU,8UuL57S5MVovQNWLAmHi5w\n\n# Assignment :\n- https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1\n- https://www.naukri.com/code360/problems/distinct-characters_2221410\n",
    "solutions": [
      {
        "lang": "java",
        "file": "longest-k-unique-characters-substring_Kumar-Nirupam.java",
        "user": "Kumar-Nirupam",
        "content": "import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public int longestKSubstr(String s, int k) {\n        //optimized        \n        int left = 0 ;\n        int res = -1 ;\n        \n        Map<Character,Integer> map = new HashMap<>();\n        \n        for(int right = 0 ; right<s.length();right++){\n            \n            //add the charatceer with its freq\n            map.put(s.charAt(right) , map.getOrDefault(s.charAt(right),0)+1);\n        \n            // reduce the left from the window for k elements\n            while(map.size()>k){\n                char c = s.charAt(left); // left character\n                \n                map.put(c, map.get(c)-1); // reduce its freq\n                \n                //remove left\n                if(map.get(c)==0)\n                    map.remove(c);\n                \n                left++;\n            }\n            \n            // add the max left of substring\n            if(map.size() == k ){\n                res = Math.max(res , right-left+1);\n            }\n        }\n        return res;\n    }\n}"
      }
    ]
  },
  {
    "id": "2026-02-02-session23",
    "date": "2026-02-02",
    "num": 23,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=foUNkgiuJeL25XBs4ydOf,kEWaBRnnTy6tk0jGwDphtg\n\n# Assignment :\nhttps://leetcode.com/problems/repeated-dna-sequences/description/\n",
    "solutions": []
  },
  {
    "id": "2026-02-03-session24",
    "date": "2026-02-03",
    "num": 24,
    "title": "Coding Problem",
    "topics": [
      "searching",
      "arrays"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/binary-search/description/\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=_PsKnnwn8DSHCipvM3wuQ,aHgotYprv5iUTbyT7VGJpQ\n\n# Assignment : \nhttps://www.geeksforgeeks.org/problems/search-insert-position-of-k-in-a-sorted-array/1\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "binary_search_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/binary-search/description/\n *\n * Short Description\n * Given an array of integers nums which is sorted in ascending order,\n * and an integer target, write a function to search target in nums.\n * If target exists, then return its index. Otherwise, return -1.\n * You must write an algorithm with O(log n) runtime complexity.\n *\n *\n * Input: nums = [-1,0,3,5,9,12], target = 9\n * Output: 4\n * Explanation:\n * 9 exists in nums and its index is 4\n *\n *\n * Input: nums = [-1,0,3,5,9,12], target = 2\n * Output: -1\n * Explanation:\n * 2 does not exist in nums so return -1\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n\nclass Solution\n{\npublic:\n  /**\n   * Implement Binary Search using iterative approach\n   * Time Complexity: O(logn)\n   * Space Complexity: O(1)\n   */\n  int binary_search_iterative(const std::vector<int> &nums, int target)\n  {\n\n    int n = nums.size();\n\n    /* Init two pointer to track\n    start and end position on nums */\n    int st = 0, end = n - 1;\n\n    while (st <= end)\n    {\n      // Middle index of search space\n      int mid = st + (end - st) / 2;\n\n      // if target at middle index\n      if (nums[mid] == target)\n      {\n        return mid;\n      }\n      else if (nums[mid] < target)\n      {\n        /* Target lie in left side of vector\n        move start pointer next to mid index */\n        st = mid + 1;\n      }\n      else\n      {\n        end = mid - 1;\n      }\n    }\n\n    // Target not found\n    return -1;\n  }\n\n  /**\n   * Implement Binary Search using recursion\n   * Time Complexity: O(logn)\n   * Space Complexity: O(logn)\n   */\n  int binary_search_recursive(const std::vector<int> &nums, int st, int end, int target)\n  {\n    // Base Case\n    if (st > end)\n    {\n      return -1;\n    }\n\n    // Self Work\n    int mid = st + (end - st) / 2;\n    if (nums[mid] == target)\n    {\n      return mid;\n    }\n\n    // Recursive Work\n    if (nums[mid] < target)\n    {\n      return binary_search_recursive(nums, mid + 1, end, target);\n    }\n    return binary_search_recursive(nums, st, mid - 1, target);\n  }\n};\n\nint main()\n{\n\n  std::vector<int> nums = {-1, 0, 3, 5, 9, 12};\n  int n = nums.size();\n\n  // Create an instance of Class Solution\n  Solution sol;\n\n  std::cout << \"[Iterative] Index of 3 in nums : \" << sol.binary_search_iterative(nums, 3) << std::endl;\n  std::cout << \"[Iterative] Index of 6 in nums : \" << sol.binary_search_iterative(nums, 6) << std::endl;\n\n  std::cout << \"[Recursive] Index of 3 in nums : \" << sol.binary_search_recursive(nums, 0, n - 1, 3) << std::endl;\n  std::cout << \"[Recursive] Index of 6 in nums : \" << sol.binary_search_recursive(nums, 0, n - 1, 6) << std::endl;\n\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "search_insert_position_of_k_in_a_sorted_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/search-insert-position-of-k-in-a-sorted-array/1\n *\n * Short Description\n * Given a sorted array arr[] (0-index based) of distinct\n * integers and an integer k, find the index of k if it is present\n * in the arr[]. If not, return the index where k should be\n * inserted to maintain the sorted order.\n *\n *\n * Input: arr[] = [1, 3, 5, 6], k = 5\n * Output: 2\n * Explanation:\n * Since 5 is found at index 2 as arr[2] = 5, the output is 2.\n *\n *\n * Input: arr[] = [1, 3, 5, 6], k = 2\n * Output: 1\n * Explanation:\n * The element 2 is not present in the array, but inserting it at\n * index 1 will maintain the sorted order.\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n\nclass Solution\n{\npublic:\n  /**\n   * Linear Approach\n   * Traverse the array and find the first index i such that nums[i] >= k.\n   * That index is the correct insert position.\n   *\n   * Time: O(n)\n   * Space: O(1)\n   */\n  int search_insert_k_linear(const std::vector<int> &nums, int k)\n  {\n\n    int n = nums.size();\n\n    for (int i = 0; i < n; i++)\n    {\n      if (nums[i] >= k)\n        return i;\n    }\n\n    // If k is greater than all elements, insert at end\n    return n;\n  }\n\n  /**\n   * Binary Search Approach\n   * Use binary search to find the first position where nums[mid] >= k.\n   * If k is found, return its index.\n   * Otherwise, return the position where it should be inserted.\n   *\n   * Time: O(log n)\n   * Space: O(1)\n   */\n  int search_insert_k_binary(const std::vector<int> &nums, int k)\n  {\n\n    int n = nums.size();\n\n    int st = 0, end = n - 1;\n\n    while (st <= end)\n    {\n      int mid = st + (end - st) / 2;\n\n      if (nums[mid] == k)\n        return mid;\n      else if (nums[mid] < k)\n        st = mid + 1;\n      else\n        end = mid - 1;\n    }\n\n    return st;\n  }\n};\n\nint main()\n{\n\n  std::vector<int> nums = {1, 3, 5, 6};\n\n  Solution sol;\n\n  std::cout << \"Linear (k = 5): \" << sol.search_insert_k_linear(nums, 5) << std::endl;\n  std::cout << \"Linear (k = 2): \" << sol.search_insert_k_linear(nums, 2) << std::endl;\n\n  std::cout << \"Binary (k = 5): \" << sol.search_insert_k_binary(nums, 5) << std::endl;\n  std::cout << \"Binary (k = 2): \" << sol.search_insert_k_binary(nums, 2) << std::endl;\n\n  return 0;\n}"
      }
    ]
  },
  {
    "id": "2026-02-04-session25",
    "date": "2026-02-04",
    "num": 25,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/capacity-to-ship-packages-within-d-days/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=vTo03307kcFlfi8YLlh5U,L7yAHbDPVSTPRzmiyfff9Q\n\n# Assignments :\n- https://www.geeksforgeeks.org/problems/implement-lower-bound/1\n- https://www.geeksforgeeks.org/problems/implement-upper-bound/1\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "capacity_to_ship_packages_within_d_days_sankesingh.cpp",
        "user": "sankesingh",
        "content": "class Solution\n{\nprivate:\n    int getDays(vector<int> &nums, int maxWeight)\n    {\n        int days = 1;\n        int currentWeight = 0;\n        for (int i = 0; i < nums.size(); i++)\n        {\n            if (currentWeight + nums[i] > maxWeight)\n            {\n                days++;\n                currentWeight = nums[i];\n            }\n            else\n            {\n                currentWeight += nums[i];\n            }\n        }\n        return days;\n    }\n\npublic:\n    int shipWithinDays(vector<int> &weights, int days)\n    {\n        int minWeight = *max_element(weights.begin(), weights.end());\n        int maxWeight = accumulate(weights.begin(), weights.end(), 0);\n        while (minWeight < maxWeight)\n        {\n            int mid = minWeight + (maxWeight - minWeight) / 2;\n            int currDays = getDays(weights, mid);\n            if (currDays <= days)\n            {\n                maxWeight = mid;\n            }\n            else\n            {\n                minWeight = mid + 1;\n            }\n        }\n        return maxWeight;\n    }\n};"
      }
    ]
  },
  {
    "id": "2026-02-05-session26",
    "date": "2026-02-05",
    "num": 26,
    "title": "Coding Problem",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problem : \nhttps://algo.monster/liteproblems/1891\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=tVJDdLaF7UznYpeM07Gj1,n6Yg5mtffud8cgmzlMYdvw\n\n# Assignemnt : \nhttps://leetcode.com/problems/count-complete-subarrays-in-an-array/\n",
    "solutions": []
  },
  {
    "id": "2026-02-06-session27",
    "date": "2026-02-06",
    "num": 27,
    "title": "Coding Probelm",
    "topics": [
      "matrix",
      "searching",
      "arrays"
    ],
    "markdown": "# Coding Probelm : \nhttps://leetcode.com/problems/search-a-2d-matrix/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=HHUn9XbeXqEIubdMdDLY1,zJVjVvuctomatTnxYDFr5Q\n\n# Assignment :\n- https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/\n- https://www.geeksforgeeks.org/problems/aggressive-cows/1\n- Variation on top of (https://leetcode.com/problems/search-a-2d-matrix/)\n  - Each column is sorted in non-decreasing order.\n  - The first integer of each col is greater than the last integer of the previous col.\n",
    "solutions": [
      {
        "lang": "python",
        "file": "aggressive_cows_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def isFess(self ,mid, stalls, k):\n        cow_pos = 0\n        i = 1\n        cow_cnt = 1\n        \n        # to check if k cows can be placed in the list we use greedy approach\n        while i < len(stalls):\n            xAI = stalls[i] - stalls[cow_pos]\n            if xAI >= mid:\n                cow_cnt += 1\n                cow_pos = i\n            i += 1\n            \n        \n        if cow_cnt >= k:\n            return True\n        \n        return False\n        \n        \n        \n    def aggressiveCows(self, stalls, k):\n        # code here\n        lenn = len(stalls)\n        res = -1\n        \n        # we sort since the minimum distance between 2 cows will always be consecutive in a sorted array\n        stalls.sort()\n        \n        # The range for the search 1 to (max(stalls) - min(stalls))\n        l = 1\n        r = stalls[lenn - 1] - stalls[0]\n        \n        while l <= r:\n            mid = (l + r)//2\n            \n            if self.isFess(mid, stalls, k):\n                res = mid\n                l = mid + 1\n            else:\n                r = mid - 1\n        \n        return res\n            \n            \n        "
      },
      {
        "lang": "python",
        "file": "first_and_last_pos_element_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def bs(self, l: int, r: int, target: int, nums: List[int]):\n\n        while l <= r:\n            mid = (l+r)//2\n\n            if nums[mid] == target:\n                return mid\n            elif nums[mid] > target:\n                r = mid - 1\n            else:\n                l = mid + 1\n        \n        return -1\n\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        lenn = len(nums) - 1\n        res = [-1,-1]\n\n        firstF = self.bs(0, lenn, target, nums)\n\n        if firstF == -1:\n            return res\n\n        leftP = self.bs(0, firstF-1, target, nums)\n        while leftP >= 1 and nums[leftP-1] == nums[leftP]:\n            leftP -= 1\n        \n        rightP = self.bs(firstF+1, lenn ,target, nums)\n        while rightP < lenn and nums[rightP+1] == nums[rightP]:\n            rightP += 1\n        \n        res[0] = firstF if leftP == -1 else leftP\n        res[1] = firstF if rightP == -1 else rightP\n\n        return res\n"
      }
    ]
  },
  {
    "id": "2026-02-10-session28",
    "date": "2026-02-10",
    "num": 28,
    "title": "Coding Problem",
    "topics": [
      "arrays",
      "matrix",
      "searching"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/median-of-two-sorted-arrays/description/\n  - Note: Optimised solution for this to be covered in next session.\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=P9axJapYfvUs_M_L4NJPw,CQeJg0ygzsdhd96vMLR1Og\n\n# Assignments :\n- https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1\n- https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1\n- https://leetcode.com/problems/search-a-2d-matrix-ii/\n",
    "solutions": []
  },
  {
    "id": "2026-02-11-session29",
    "date": "2026-02-11",
    "num": 29,
    "title": "Coding Problem",
    "topics": [
      "searching",
      "binary search",
      "matrix",
      "control flow"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/median-of-two-sorted-arrays/description/\n  - Optimised solution using Binary Search\n\n# Solution :\n```java\nclass Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        int n1 = nums1.length, n2 = nums2.length, n = n1 + n2;\n        if(n1 > n2) \n            return findMedianSortedArrays(nums2, nums1);\n        int noOfElementsInLeftPart = (n + 1) / 2;\n        int low = 0, high = n1, mid1 = -1, mid2 = -1;\n\n        while(low <= high) {\n            mid1 = (low + high) / 2;\n            mid2 = noOfElementsInLeftPart - mid1;\n            int la = Integer.MIN_VALUE, lb = Integer.MIN_VALUE;\n            int ra = Integer.MAX_VALUE, rb = Integer.MAX_VALUE;\n            if(mid1 > 0)\n                la = nums1[mid1 - 1];\n            if(mid2 > 0)\n                lb = nums2[mid2 - 1];\n            if(mid1 < n1)\n                ra = nums1[mid1];\n            if(mid2 < n2)\n                rb = nums2[mid2];\n            if(la <= rb && lb <= ra) {\n                if(n % 2 == 0) {\n                    int x = Math.max(la, lb) + Math.min(ra, rb);\n                    return x / 2.0;\n                } else {\n                    return Math.max(la, lb);\n                }\n            } \n            if(la > rb) {\n                high = mid1 - 1;\n            } else if(lb > ra) {\n                low = mid1 + 1;\n            }\n        }\n        return -1;\n    }\n}\n```\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=mjGqDduWgboF8Dy_U2KUe,n2LpGQP8nQgjIXj6L3BlyQ\n\n# Assignment :\nhttps://www.geeksforgeeks.org/problems/search-in-a-row-wise-sorted-matrix/1\n",
    "solutions": []
  },
  {
    "id": "2026-02-16-session30",
    "date": "2026-02-16",
    "num": 30,
    "title": "Coding Problem",
    "topics": [
      "arrays",
      "searching"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=4jbFccZmyy3kmZiOgcg4M,mBuSDnGo_gGrBOE_x5KmEg\n\n# Assignments :\n- https://leetcode.com/problems/search-in-rotated-sorted-array/\n- https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/\n",
    "solutions": [
      {
        "lang": "java",
        "file": "find-minimum-in-rotated-sorted-array_Kumar-Nirupam.java",
        "user": "Kumar-Nirupam",
        "content": "/*\n This solution uses Binary Search to find the minimum element \n in a rotated sorted array.\n\n Key Idea:\n - In a rotated sorted array, at least one half (left or right)\n   is always sorted.\n - The minimum element always lies in the unsorted half.\n - At each step, we:\n     1. Calculate mid.\n     2. Update the minimum value if nums[mid] is smaller.\n     3. Check whether the right half is sorted.\n        - If right half is sorted, move to the left half.\n        - Otherwise, move to the right half.\n - Continue this process until the search space is exhausted.\n\n Time Complexity: O(log n)\n Space Complexity: O(1)\n*/\n\nclass Solution {\n    public int findMin(int[] nums) {\n        int low = 0 ;\n        int high = nums.length-1;\n        int min = Integer.MAX_VALUE;\n\n        while(low<=high){\n            int mid = low+((high-low)/2);\n\n            if(nums[mid]<= min){\n                min = nums[mid];\n            }\n\n            // right part sorted check - move to unsorted\n            if(nums[mid]<=nums[high]){\n                high = mid-1;\n            }\n            else {\n                low = mid+1;\n            }\n        }\n\n        return min;\n    }\n}"
      },
      {
        "lang": "python",
        "file": "find_min_in_rotated_list_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def findMin(self, nums: list[int]) -> int:\n        l = 0\n        r = len(nums) - 1 \n\n        while l < r:\n            mid = (l+r)//2\n\n            if nums[mid] > nums[r]:\n                l = mid + 1\n            else:\n                r = mid\n        \n        return nums[l]\n\n            "
      },
      {
        "lang": "python",
        "file": "search_in_a_rotated_sorted_list_2_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def search(self, nums: list[int], target: int) -> bool:\n        l = 0\n        r = len(nums) - 1 \n\n        # check for duplicates, we are incrementing l as its a right rotated list\n        while l != r and nums[l] == nums[r]:\n            l += 1\n\n        while l <= r:\n            mid = (l+r)//2\n\n            if nums[mid] == target:\n                return True\n            # check if list [l,mid] is sorted\n            elif nums[l] <= nums[mid]:\n                # check if target lies in the list\n                if nums[l] <= target and target < nums[mid]:\n                    r = mid - 1\n                else:\n                    l = mid + 1\n            # check if list [mid, r] is sorted\n            elif nums[mid] <= nums[r]:\n                # check if target lies in the list\n                if nums[mid] < target and target <= nums[r]:\n                    l = mid + 1\n                else:\n                    r = mid - 1\n            \n        \n        return False"
      },
      {
        "lang": "python",
        "file": "search_in_rotated_sorted_array_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        l = 0\n        r = len(nums) - 1 \n\n        while l <= r:\n            mid = (l+r)//2\n\n            if nums[mid] == target:\n                return mid\n            # check if list [l,mid] is sorted\n            elif nums[l] <= nums[mid]:\n                # check if target lies in the list\n                if nums[l] <= target and target < nums[mid]:\n                    r = mid - 1\n                else:\n                    l = mid + 1\n            # check if list [mid, r] is sorted\n            elif nums[mid] <= nums[r]:\n                # check if target lies in the list\n                if nums[mid] < target and target <= nums[r]:\n                    l = mid + 1\n                else:\n                    r = mid - 1\n            \n        \n        return -1"
      }
    ]
  },
  {
    "id": "2026-02-17-session31",
    "date": "2026-02-17",
    "num": 31,
    "title": "Coding Problem",
    "topics": [
      "arrays",
      "searching"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/\n\n# Excalidraw link :\nhttps://excalidraw.com/#json=tatW1JHJZOjYAoyqKJyf5,xUuRac5UhAZmGvYAzWsmPQ\n\n# Assignment :\n- https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "min_days_for_m_bouqets_ritwik.cpp",
        "user": "ritwik",
        "content": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <limits>\n#include <climits>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    // helper function to find the min and max in an array\n    vector<int> findMinMax(vector<int>& bloomDay) {\n        int minEle = INT_MAX;\n        int maxEle = INT_MIN;\n\n        for(int i = 0; i < bloomDay.size(); i++) {\n            if(bloomDay[i] > maxEle) {\n                maxEle = bloomDay[i];\n            }\n            if(bloomDay[i] < minEle) {\n                minEle = bloomDay[i];\n            }\n        }\n\n        return {minEle, maxEle};\n    }\n\n\n    // Greedy helper function \n    bool canMakeBouquets(vector<int>& bloomDay, int m, int k, int currentDay) {\n        int bouquets = 0;\n        int consecutive_flowers = 0;\n\n        for (int day : bloomDay) {\n            if (day <= currentDay) {\n                consecutive_flowers++;\n                if (consecutive_flowers == k) {\n                    bouquets++;\n                    consecutive_flowers = 0; // Greedily reset\n                }\n            } else {\n                consecutive_flowers = 0;\n            }\n        }\n        return bouquets >= m;\n    }\n    \n    // brute force: greedy + linear search\n    int minDaysBrute(vector<int>& bloomDay, int m, int k) {\n        long long flowers = (long long)m * k;\n        if(flowers > bloomDay.size()) {\n            return -1;\n        }\n\n        vector<int> minMax = findMinMax(bloomDay); // ans is in form of {min, max}\n        int minEle = minMax[0];\n        int maxEle = minMax[1];\n        \n\n        // brute force: Linear Search \n        // We check every single day from minEle to maxEle\n        for(int day = minEle; day <= maxEle; day++) {\n            \n            // The first day that works is guaranteed to be the minimum day\n            if(canMakeBouquets(bloomDay, m, k, day)) {\n                return day; \n            }\n        }\n        \n        return -1;\n\n        /*\n            TC: O(n*(max-min)): due to nested loops (outer loop from 0 to n and inner loop from min to max) \n            SC: O(1): no extra space used\n\n            NOTE: Gives TLE for large input sizes\n        */\n    }\n\n    // optimal solution: greedy + binary search\n    int minDaysOpt(vector<int>& bloomDay, int m, int k) {\n        // m = number of bouquets\n        // k = no. of flowers in each bouquet\n        // each bloomDay[i] corresponds to a flower and when it will bloom\n\n        // bouquets can only be made from adjacent flowers\n        // if the number of flowers required: m*k > total flowers, we return -1\n        long long flowers = (long long)m * k;\n        if(flowers > bloomDay.size()) {\n            return -1;\n        }\n\n        // binary search on answers: the search space is min day and max day\n        // first we find the minimum and maximum blooming time\n        vector<int> minMax = findMinMax(bloomDay); // ans is in form of {min, max}\n\n        // since the search space is the range of blooming days\n        // we initialize our binary search as such\n        int low = minMax[0];\n        int high = minMax[1];\n\n        while(low < high) {\n            int mid = low + (high - low)/2;\n\n            if(canMakeBouquets(bloomDay, m, k, mid)) {\n                high = mid;\n            }\n            else {\n                low = mid + 1;\n            }\n        }\n        return low;\n    }\n\n    /*\n        TC: O(n* log (max-min) + O(n)) : where n = size of bloomDay array, max = maxEle in bloomDay, min = minEle in bloomDay\n        n because of outer loop form 0 to n-1, log(max-min) because of binary search in the range [min, max] and O(n) to find minEle and maxEle\n        SC: O(1): no extra space used\n    */\n};\n\nint main() {\n    vector<int> bloomDay = {7,7,7,7,12,7,7};\n    int m = 2, k = 3;\n\n    Solution s;\n\n    int ans = s.minDaysOpt(bloomDay, m, k); // expected: 12\n    cout<<ans<<endl;\n}"
      },
      {
        "lang": "cpp",
        "file": "search_in_sorted_rotate_array_ii_ritwik.cpp",
        "user": "ritwik",
        "content": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <limits>\n\nusing namespace std;\n\n\nclass Solution {\npublic:\n    // brute force solution using linear search\n    bool searchBrute(vector<int>& nums, int target) {\n        // brute force solution: binary search\n\n        // edge cases\n        if(nums[0] == target || nums[nums.size()-1] == target) {\n            return true;\n        }\n\n        for(int i = 1; i < nums.size()-1; i++) {\n            if(nums[i] == target) {\n                return true;\n            }\n        }\n\n        return false;\n\n        // TC: O(n) : linear search checks every element => O(n) for array containing n elements\n        // SC: O(1) : No extra space used\n    }\n\n\n    // optimal solution using binary search\n    bool searchOpt(vector<int>& nums, int target) {\n        // optimal solution: binary search because at either side of pivot element, the search space is sorted\n\n        // if first or the last element is the target\n        if(nums[0] == target || nums[nums.size()-1] == target) {\n            return true;\n        }\n\n        int low = 0;\n        int high = nums.size()-1;\n\n        while(low <= high) {\n            int mid = low + (high - low)/2;\n\n            // checking the conditions\n            // case 1: nums[mid] is the target\n            if(nums[mid] == target) {\n                return true;\n            }\n\n            // due to rotation and repetition, there is a \n            // chance that elements at both ends are equal to mid\n            if((nums[mid] == nums[low]) && (nums[high] == nums[mid])) {\n                low++;\n                high--;\n            }\n            else if(nums[low] <= nums[mid]) {\n                // first half is sorted => implement binary search\n                if((nums[low] <= target) && (target < nums[mid])) {\n                    // target is present in first half\n                    high = mid - 1;\n                }\n                else {\n                    // target is not present in first half\n                    low = mid + 1;\n                }\n            }\n            else {\n                // second half is sorted => apply binary search\n                if((nums[mid] < target) && (target <= nums[high])) {\n                    // target is in 2nd half\n                    low = mid + 1;\n                }\n                else {\n                    // target is not in 2nd half\n                    high = mid - 1;\n                }\n            }\n        } \n\n        return false;\n\n        /*\n            TC: O(log n): binary search halves the search space at each iteration hence log2(n) number of operations\n            SC: O(1): no extra space has been used\n        */\n    }\n};\n\n\nint main() {\n        vector<int> nums = {2,5,6,0,0,1,2};\n        int target1 = 3;\n        int target2 = 0;\n\n        Solution s;\n        bool ans = s.searchOpt(nums, target1);\n        cout<<ans<<endl; // expected 0 => false\n\n\n        bool ans2 = s.searchOpt(nums, target2);\n        cout<<ans2<<endl; // expected 1 => True\n    return 0;\n}"
      },
      {
        "lang": "java",
        "file": "minimum_number_of_days_bouquets_brute_force_Kumar_Nirupam.java",
        "user": "Nirupam",
        "content": " /*\n     Note: This is a brute-force approach\n    \n     We try to find the minimum day required to make m bouquets.\n\n     Process:\n     1. First, find the smallest and largest bloom day in the array.(Range of the min and max for making a bouquet)\n     2. Then, start checking from the smallest possible day.\n     3. For each day:\n        - Count how many flowers have bloomed on or before that day.\n        - Check how many bouquets we can form using k consecutive bloomed flowers.\n     4. If we can make at least m bouquets, return that day.\n     5. Otherwise, increase the day and try again.\n     6. If no day works, return -1.\n\n    */\n\n\nclass Solution {\n    public int minDays(int[] bloomDay, int m, int k) {\n\n        int day = Integer.MAX_VALUE;\n        int maxDay = Integer.MIN_VALUE;\n        \n        for(int i =0 ; i< bloomDay.length ; i++){\n\n            day = Math.min(day,bloomDay[i]);\n            maxDay = Math.max(maxDay,bloomDay[i]);\n\n        }\n\n        while(day<=maxDay){\n\n        int count = 0 ;\n        int TotalBouque = 0 ;\n        for(int i = 0 ; i< bloomDay.length ; i++){\n            if(bloomDay[i] <= day){\n                count++;\n            }\n            else {\n                TotalBouque += count / k;\n                count=0;\n            }\n        }\n        // at the last count if not 0\n        TotalBouque += count / k;\n        if(TotalBouque >= m) return day ;\n         day++;\n        }\n        return -1;\n    }\n}\n"
      },
      {
        "lang": "java",
        "file": "minimum_number_of_days_to_make_m_bouquets_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Link : https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/\n */\n\nclass Solution {\n    public int minDays(int[] bloomDay, int m, int k) {\n        int low = Integer.MAX_VALUE, high = Integer.MIN_VALUE, res = -1, mid = 0;\n\n        // N iterations to find min and max day in array\n        for(int day : bloomDay) {\n            low = Math.min(low, day);\n            high = Math.max(high, day);\n        }\n\n        while(low <= high) {\n            mid = (low + high) / 2;\n            if(isPossible(mid, bloomDay, m, k)) {\n                res = mid;\n                high = mid - 1;\n            } else {\n                low = mid + 1;\n            }\n        }\n        return res;\n    }\n\n    private boolean isPossible(int day, int[] bloomDay, int m, int k) {\n        int count = 0, bouquets = 0, i = 0;\n        while(i < bloomDay.length) {\n            if(bloomDay[i] <= day) {\n                count++;\n                if(count == k) {\n                    count = 0;\n                    bouquets++;\n                }\n            } else {\n                count = 0;\n            }\n            i++;\n        }\n        if(bouquets >= m)\n            return true;\n        return false;\n    }\n}\n\n/*\nTime Complexity : N*log(max - min)\nSpace Complexity : constant\n */"
      },
      {
        "lang": "python",
        "file": "minimum_no_of_days_bouquets_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def createBq(self,day: int, bd: list[int], m: int, k: int) -> bool:\n        cnt = 0\n        bq = 0\n\n        for i in range(len(bd)):\n            if bd[i] > day:\n                cnt = 0\n                continue\n\n            if bd[i] <= day:\n                cnt += 1\n\n            if cnt == k:\n                bq += 1\n                cnt = 0\n        \n        return bq\n\n\n\n    def minDays(self, bloomDay: list[int], m: int, k: int) -> int:\n        l = min(bloomDay)\n        r = max(bloomDay)\n        res = -1\n\n        while l <= r:\n            mid = (l+r)//2\n            possible_bq = self.createBq(mid, bloomDay, m, k)\n\n            if possible_bq >= m:\n                res = mid\n                r = mid - 1\n            else:\n                l = mid + 1\n        \n        return res\n\n            "
      }
    ]
  },
  {
    "id": "2026-02-18-session32",
    "date": "2026-02-18",
    "num": 32,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/find-peak-element/description/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=_vU6sbd3dMzICGONlCdCB,UfxYJE3c_YDgEylTTGxAgw\n\n# Assignment :\nhttps://leetcode.com/problems/sqrtx/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "sqrt(x)_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class Solution\n{\npublic:\n    int mySqrt(int x)\n    {\n        int start = 0;\n        int end = x;\n\n        while (start <= end)\n        {\n            long long mid = start + (end - start) / 2;\n            long long val = mid * mid;\n\n            if (val <= x)\n            {\n                start = mid + 1;\n            }\n            else\n            {\n                end = mid - 1;\n            }\n        }\n        return end;\n    }\n};"
      },
      {
        "lang": "java",
        "file": "Find Peak Element_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public int findPeakElement(int[] nums) \n    {\n        int low =1,high = nums.length-2,mid;\n        mid = (high + low) /2;\n\n        if(nums.length ==1)\n        return mid;\n        else if(nums[0] > nums[1])\n        return 0;\n        else if(nums[nums.length-1] > nums[nums.length-2])\n        return nums.length-1;\n        \n        while(low<=high)\n        {\n            mid = (high + low) /2;\n            if((nums[mid-1] < nums[mid] && nums[mid] > nums[mid+1]))\n            return mid;\n\n            if(nums[mid-1] < nums[mid])\n            {\n                low = mid +1;\n            }\n            else\n            {\n                high = mid -1;\n            }\n        } \n        return mid;\n    }\n}"
      },
      {
        "lang": "java",
        "file": "Sqrt(x)_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public int mySqrt(int x) \n    {\n        long low = 1,high = x/2,mid;\n        mid = (low+high) / 2;\n        if(x==0 || x==1)\n        return x;\n        while(low<=high)\n        {\n            mid = (low + high) / 2;\n            \n            if(mid*mid == x)\n            return (int)mid;\n\n            if(( (mid-1)*(mid-1) < x) && ( (mid+1)*(mid+1) >x ) && mid*mid < x)\n            return (int)mid;\n\n            if(mid*mid > x)\n            {\n                high = mid-1;\n            }\n            else\n            low = mid+1;\n        }\n        return (int)Math.floor(mid);\n    }\n}"
      },
      {
        "lang": "java",
        "file": "Sqrt(x)_Kumar_Nirupam.java",
        "user": "Nirupam",
        "content": "class Solution {\n    public int mySqrt(int x) {\n\n         if (x < 2) return x;\n\n        int low = 0 ; \n        int high = x;\n\n        int res =0;\n        while(low<=high){\n            int mid = low + ((high -low)/2);\n\n            if( mid <= x / mid){  // integer overflow - (mid * mid) <= x \n                res = mid;\n                low = mid+1;\n            }\n            else {\n                high = mid-1;\n            }\n        }\n        return res;\n    }\n}"
      },
      {
        "lang": "js",
        "file": "sqrtx_aryan.js",
        "user": "aryan",
        "content": "// https://leetcode.com/problems/sqrtx/description/\n\n/**\n * @param {number} x\n * @return {number}\n */\nvar mySqrt = function (x) {\n    if (x < 2) return x\n\n    let l = 2, r = Math.floor(x / 2)\n    while (l <= r) {\n        let mid = l + Math.floor((r - l) / 2)\n        if (mid ** 2 === x) return mid\n        else if (mid ** 2 > x) r = mid - 1\n        else l = mid + 1\n    }\n    return r\n};"
      }
    ]
  },
  {
    "id": "2026-02-20-session33",
    "date": "2026-02-20",
    "num": 33,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem : \nhttps://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=qF4-XT6RmIqJ3KwR1Fwh2,e6blRrh3NtSLx6mKwlSgng\n\n# Assignment :\nhttps://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "median_of_row_wise_sorted_matrix_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class Solution\n{\nprivate:\n    // Returns count of elements <= target in the matrix\n    // Each row is sorted, so we binary search in every row\n    int upperBound(vector<vector<int>> &mat, int n, int m, int target)\n    {\n        int count = 0;\n\n        for (int i = 0; i < n; i++)\n        {\n            int low = 0, high = m - 1;\n            int pos = m; // stores first index where element > target\n\n            // Binary search in row i\n            while (low <= high)\n            {\n                int mid = low + (high - low) / 2;\n\n                if (mat[i][mid] > target)\n                {\n                    pos = mid;\n                    high = mid - 1;\n                }\n                else\n                {\n                    low = mid + 1;\n                }\n            }\n\n            // pos = number of elements <= target in this row\n            count += pos;\n        }\n        return count;\n    }\n\npublic:\n    int median(vector<vector<int>> &mat)\n    {\n        int n = mat.size();\n        int m = mat[0].size();\n\n        // We want the element at this index in sorted order\n        int requiredIndex = (n * m) / 2;\n\n        // STEP 1: Find global min and max in matrix\n        int low = INT_MAX, high = INT_MIN;\n\n        for (int i = 0; i < n; i++)\n        {\n            low = min(low, mat[i][0]);       // first element of row\n            high = max(high, mat[i][m - 1]); // last element of row\n        }\n\n        // STEP 2: Binary search on VALUE RANGE\n        // Not on indices, but on numbers themselves\n\n        int ans = -1;\n\n        while (low <= high)\n        {\n            int mid = low + (high - low) / 2;\n\n            // Count how many elements <= mid\n            int count = upperBound(mat, n, m, mid);\n\n            // If enough elements are <= mid,\n            // mid could be the median\n            if (count > requiredIndex)\n            {\n                ans = mid;\n                high = mid - 1; // try smaller value\n            }\n            else\n            {\n                low = mid + 1; // need bigger value\n            }\n        }\n\n        return ans;\n    }\n};"
      }
    ]
  },
  {
    "id": "2026-02-23-session34",
    "date": "2026-02-23",
    "num": 34,
    "title": "Arrays Problems",
    "topics": [
      "arrays",
      "searching",
      "recursion",
      "binary search"
    ],
    "markdown": "# Excalidraw Link : \nhttps://excalidraw.com/#json=-Bv7DX8vOgAQZeJ3wyaDQ,TZ3CURrPu6D1kfuV1_93vA\n\n# Assignments : \nSolve following using recursion :\n- https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n- https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1\n    - Solve using both Linear and Binary Search\n- https://leetcode.com/problems/running-sum-of-1d-array/description/",
    "solutions": [
      {
        "lang": "cpp",
        "file": "running_sum_of_1d_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/running-sum-of-1d-array/description/\n *\n * Short Description\n * Given an array nums. We define a running sum of an array as\n * runningSum[i] = sum(nums[0]…nums[i]).\n * Return the running sum of nums.\n *\n *\n * Input: arr[] = [1, 2, 3, 4]\n * Output: [1,3,6,10]\n * Explanation:\n * Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].\n *\n *\n * Input: nums = [1,1,1,1,1]\n * Output: [1,2,3,4,5]\n * Explanation:\n * Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].\n *\n * Input: nums = [3,1,2,10,1]\n * Output: [3,4,6,16,17]\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <algorithm>\n#include <vector>\n\nclass Solution\n{\npublic:\n  /**\n   * Find running sum using itreative approach\n   * Run a loop from i = 1 to n - 1\n   * nums[i - 1] += nums[i]\n   *\n   * Time: O(n), Space: O(1)\n   */\n\n  std::vector<int> running_sum_iterative(std::vector<int> &nums)\n  {\n    int n = nums.size();\n    for (int i = 1; i < n; i++)\n    {\n      nums[i] += nums[i - 1];\n    }\n\n    return nums;\n  }\n\n  /**\n   * Running sum by recursive approach\n   * Sub problem for this running sum proble is\n   * Calcuate running sum from next index\n   *\n   * So, f(nums, i + 1 , nums[i]) is subproblem\n   * of f(nums ,i , 0)\n   *\n   * When index cross the size of array then return\n   *\n   * Time: O(n) , Space: O(n)\n   */\n  std::vector<int> running_sum_recursive(std::vector<int> &nums)\n  {\n\n    helper(nums, 0, 0);\n    return nums;\n  }\n\nprivate:\n  void helper(std::vector<int> &nums, int i, int ans)\n  {\n\n    // Base case\n    if (i >= nums.size())\n    {\n      return;\n    }\n\n    // Self Work\n    nums[i] += ans;\n    ans = nums[i];\n\n    // Recursive Work\n    helper(nums, i + 1, ans);\n  }\n};\n\nvoid print(const std::vector<int> &nums)\n{\n  for (auto &it : nums)\n  {\n    std::cout << it << \" \";\n  }\n}\n\nint main()\n{\n\n  std::vector<int> nums1 = {1, 2, 3, 4};\n  std::vector<int> nums2 = {1, 1, 1, 1, 1};\n\n  // Create an object of class Solution\n  Solution sol;\n\n  sol.running_sum_iterative(nums1);\n  sol.running_sum_recursive(nums2);\n\n  // Print the vector\n  std::cout << \"Running sum of nums1 : \";\n  print(nums1);\n\n  std::cout << \"\\nRunning sum of nums2 : \";\n  print(nums2);\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "serach_an_element_in_an_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1\n *\n * Short Description\n * Given an array, arr[] of n integers, and an integer element x,\n * find whether element x is present in the array. Return the index of the\n * first occurrence of x in the array, or -1 if it doesn't exist.\n *\n *\n * Input: arr[] = [1, 2, 3, 4], x = 3\n * Output: 2\n * Explanation:\n * For array [1, 2, 3, 4], the element to be searched is 3.\n * Since 3 is present at index 2, the output is 2.\n *\n *\n * Input: arr[] = [10, 8, 30, 4, 5], x = 5\n * Output: 4\n * Explanation:\n * For array [10, 8, 30, 4, 5], the element to be searched is 5\n * and it is at index 4. So, the output is 4.\n *\n * Input: arr[] = [10, 8, 30], x = 6\n * Output: -1\n * Explanation:\n * The element to be searched is 6 and it is not present, so we return -1.\n *\n * Time Complexity: O(n)\n * Auxiliary Space: O(1)\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <algorithm>\n#include <vector>\n\nclass Solution\n{\npublic:\n  /**\n   * Search Linear by Recursive Approach\n   * Sub-problem is find target ele in\n   * idx + 1 to n - 1 index of nums\n   *\n   * So, f(nums , x , idx + 1) is sub-problem\n   * for f(nums, x, idx)\n   *\n   * When current index crosses size of array\n   * return -1 (Because target not found in array)\n   *\n   * Time: O(n), Space: O(n)\n   */\n\n  int search_linear_recursive_helper(const std::vector<int> &nums, int x, int idx)\n  {\n\n    // Base Case\n    if (idx >= nums.size())\n    {\n      return -1;\n    }\n\n    // Self Work\n    if (nums[idx] == x)\n      return idx;\n\n    // Recursive Work\n    return search_linear_recursive_helper(nums, x, idx + 1);\n  }\n\n  /**\n   * Linearly Traverse the vector\n   * If any one element is equal to search element\n   * It means we found out, return index\n   * If x is not present is nums, return -1\n   *\n   * Time: O(n), Space: O(1)\n   */\n\n  int search_linear_iterative(const std::vector<int> &nums, int x)\n  {\n    int n = nums.size();\n\n    // Traverse the vector nums\n    for (int i = 0; i < n; i++)\n    {\n      if (nums[i] == x)\n        return i;\n    }\n\n    return -1;\n  }\n\n  int search_linear_recursive(const std::vector<int> &nums, int x)\n  {\n\n    int ans = search_linear_recursive_helper(nums, x, 0);\n    return ans;\n  }\n\n  /**\n   * While array may be sorted so we first sorted\n   * After sorting original index can be change\n   *\n   * So, we store (ele , original index) as\n   * pair of vector\n   *\n   * After sort the array, we can apply binary search\n   * Time: O(n log n), Space: O(n)\n   */\n\n  int search_binary(const std::vector<int> &nums, int x)\n  {\n\n    int n = nums.size();\n\n    // Store ele with original index\n    std::vector<std::pair<int, int>> arr;\n\n    // Store into vector of pair\n    for (int i = 0; i < n; i++)\n    {\n      arr.push_back({nums[i], i});\n    }\n\n    // Sort the array, so we can apply binary search\n    std::sort(arr.begin(), arr.end());\n\n    // Applied Binary Search on Sorted arr value based\n    int st = 0, end = n - 1;\n\n    while (st <= end)\n    {\n      int mid = st + (end - st) / 2;\n\n      int ele = arr[mid].first;\n      int idx = arr[mid].second;\n\n      if (ele == x)\n      {\n        return idx;\n      }\n      else if (ele < x)\n      {\n        st = mid + 1;\n      }\n      else\n      {\n        end = mid - 1;\n      }\n    }\n\n    // Target not found\n    return -1;\n  }\n};\n\nint main()\n{\n\n  std::vector<int> nums1 = {1, 2, 3, 4, 5, 6, 7};\n  std::vector<int> nums2 = {1, 2, 3, -1, -4, 5, 60, 7};\n\n  // Create an object of class Solution\n  Solution sol;\n\n  std::cout << \"Linear Iterative (find 4 in nums1): \"\n            << sol.search_linear_iterative(nums1, 4) << std::endl;\n\n  std::cout << \"Linear Recursive (find 5 in nums2): \"\n            << sol.search_linear_recursive(nums2, 5) << std::endl;\n\n  std::cout << \"Binary Search (find 5 in nums2): \"\n            << sol.search_binary(nums2, 5) << std::endl;\n\n  std::cout << \"Binary Search (find 6 in nums2): \"\n            << sol.search_binary(nums2, 6) << std::endl;\n\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "sum_of_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n *\n * Short Description\n * You are given an integer array arr[].\n * The task is to find the sum of it.\n *\n *\n * Input: arr[] = [1, 2, 3, 4]\n * Output: 10\n * Explanation: 1 + 2 + 3 + 4 => 10\n *\n *\n * Input: arr[] = [1,3,3]\n * Output: 7\n * Explanation:  1 + 3 + 3 = 7.\n *\n * Time Complexity: O(n)\n * Auxiliary Space: O(1)\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <algorithm>\n#include <vector>\n\nclass Solution\n{\npublic:\n  /**\n   * Linearly Travrase the vector\n   * and add the value of each elemenets\n   * into ans\n   *\n   * Time: O(n), Space: O(1)\n   */\n  int array_sum(const std::vector<int> &nums)\n  {\n\n    int n = nums.size();\n\n    // Init a variable to store sum of elements of nums\n    int ans = 0;\n\n    // Travrase the vector nums\n    for (auto &it : nums)\n    {\n      ans += it;\n    }\n\n    return ans;\n  }\n\n  /**\n   * Calculate sum of array using recursive approach\n   *\n   * Sub proble is here, sum of array from next to\n   * current index\n   * so, f(nums , idx) = nums[idx] + f(nums , idx + 1)\n   *\n   * When index cross the size of nums then return the\n   * zero and terminate the recursion\n   *\n   * Time: O(1) * n => O(n)\n   * Space: O(n)\n   */\n  int array_sum_rec(const std::vector<int> &nums, int idx)\n  {\n\n    // Base Case\n    if (idx >= nums.size())\n    {\n      return 0;\n    }\n\n    // Recursive Work\n    int small_ans = array_sum_rec(nums, idx + 1);\n\n    // Self Work\n    int big_ans = small_ans + nums[idx];\n    return big_ans;\n  }\n};\n\nint main()\n{\n\n  std::vector<int> nums1 = {1, 2, 3, 4, 5, 6, 7};\n  std::vector<int> nums2 = {1, 2, 3, -1, -4, 5, 6, 7};\n\n  // Create an object of class Solution\n  Solution sol;\n\n  std::cout << \"Iterative Approach : \" << sol.array_sum(nums1) << std::endl;\n  std::cout << \"Recursive Approach : \" << sol.array_sum_rec(nums2, 0) << std::endl;\n\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "js",
        "file": "running_sum_of_1d_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/running-sum-of-1d-array/\n\n/**\n * Computes the running sum of an array using a recursive helper.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (result array + recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[]} A new array where each element is the sum of all previous elements including itself.\n */\nfunction runningSum_helperBased(nums) {\n    const sum = (index, result) => {\n        if (index >= nums.length) {\n            return result\n        }\n\n        const previous = result[index - 1] ?? 0\n\n        result.push(previous + nums[index])\n\n        return sum(index + 1, result)\n    }\n    \n    return sum(0, [])\n}\n\n/**\n * Computes the running sum of an array using reverse recursion.\n * Modifies the original array in place.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to transform.\n * @returns {number[]} The same array instance containing running sums.\n */\nfunction runningSum_inPlace(nums) {\n    if (nums.length <= 1) {\n        return nums\n    }\n\n    const current = nums.pop()\n    const previous = runningSum_inPlace(nums)\n    previous.push(previous[previous.length - 1] + current)\n\n    return previous\n}\n\n"
      },
      {
        "lang": "js",
        "file": "search_an_element_in_an_array_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1\n\n/**\n * Performs a recursive linear search to find the index of a target value.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to search.\n * @param {number} target - The value to find.\n * @param {number} [index=0] - The current index (used internally).\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction linearSearch(nums, target, index = 0) {\n    if (index >= nums.length) {\n        return -1\n    }\n\n    if (nums[index] === target) {\n        return index\n    }\n\n    return linearSearch(nums, target, index + 1)\n}\n\n/**\n * Performs a recursive linear search using a helper function.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to search.\n * @param {number} target - The value to find.\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction linearSearch_helperBased(nums, target) {\n    const search = (index) => {\n        if (index >= nums.length) {\n            return -1\n        }\n\n        if (nums[index] === target) {\n            return index\n        }\n\n        return search(index + 1)\n    }\n\n    return search(0)\n}\n\n/**\n * Performs a recursive binary search on a sorted array.\n *\n * Time Complexity: O(log n)\n * Space Complexity: O(log n) (recursive call stack)\n *\n * @param {number[]} nums - The sorted array to search.\n * @param {number} target - The value to find.\n * @param {number} [left=0] - The left boundary index (used internally).\n * @param {number} [right=nums.length - 1] - The right boundary index (used internally).\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction binarySearch(nums, target, left = 0, right) {\n    // Set default if right is undefined\n    right = right ?? nums.length - 1\n\n    if (left > right) {\n        return -1\n    }\n\n    const mid = Math.floor((left + right) / 2)\n\n    if (nums[mid] === target) {\n        return mid\n    } else if (nums[mid] < target) {\n        return binarySearch(nums, target, mid + 1, right)\n    } else {\n        return binarySearch(nums, target, left, mid - 1)\n    }\n}\n\n/**\n * Performs a recursive binary search using a helper function.\n *\n * Time Complexity: O(log n)\n * Space Complexity: O(log n) (recursive call stack)\n *\n * @param {number[]} nums - The sorted array to search.\n * @param {number} target - The value to find.\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction binarySearch_helperBased(nums, target) {\n    const search = (left, right) => {\n        if (left > right) {\n            return -1\n        }\n\n        const mid = Math.floor((left + right) / 2)\n\n        if (nums[mid] === target) {\n            return mid\n        } else if (nums[mid] < target) {\n            return search(mid + 1, right)\n        } else {\n            return search(left, mid - 1)\n        }\n    }\n\n    return search(0, nums.length - 1)\n}"
      },
      {
        "lang": "js",
        "file": "sum_of_array_Vihar.js",
        "user": "Vihar",
        "content": "// Probilem link: https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n\n/**\n * Calculates the sum of all elements in an array using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @returns {number} The total sum of the array elements.\n */\nfunction sumOfArray(nums, index = 0) {\n    if (index >= nums.length) {\n        return 0\n    }\n\n    return nums[index] + sumOfArray(nums, index + 1)\n}\n\n/**\n * Calculates the sum of all elements in an array using a recursive helper.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @returns {number} The total sum of the array elements.\n */\nfunction sumOfArray_helperBased(nums) {   \n    const sum = (index) => {\n        if (index >= nums.length) {\n            return 0\n        }\n\n        return nums[index] + sum(index + 1)\n    }\n\n    return sum(0)\n}"
      },
      {
        "lang": "ts",
        "file": "running_sum_of_1d_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/running-sum-of-1d-array/\n\n/**\n * Computes the running sum of an array using a recursive helper.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (result array + recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[]} A new array where each element is the sum of all previous elements including itself.\n */\nfunction runningSum_helperBased(nums: number[]) {\n    const sum = (index: number, result: number[]) => {\n        if (index >= nums.length) {\n            return result\n        }\n\n        const previous = result[index - 1] ?? 0\n\n        result.push(previous + nums[index])\n\n        return sum(index + 1, result)\n    }\n    \n    return sum(0, [])\n}\n\n/**\n * Computes the running sum of an array using reverse recursion.\n * Modifies the original array in place.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to transform.\n * @returns {number[]} The same array instance containing running sums.\n */\nfunction runningSum_inPlace(nums: number[]): number[] {\n    if (nums.length <= 1) {\n        return nums\n    }\n\n    const current = nums.pop()\n    const previous = runningSum_inPlace(nums)\n    previous.push(previous[previous.length - 1] + current)\n\n    return previous\n}\n\n"
      },
      {
        "lang": "ts",
        "file": "search_an_element_in_an_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1\n\n/**\n * Performs a recursive linear search to find the index of a target value.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to search.\n * @param {number} target - The value to find.\n * @param {number} [index=0] - The current index (used internally).\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction linearSearch(nums: number[], target: number, index: number = 0) {\n    if (index >= nums.length) {\n        return -1\n    }\n\n    if (nums[index] === target) {\n        return index\n    }\n\n    return linearSearch(nums, target, index + 1)\n}\n\n/**\n * Performs a recursive linear search using a helper function.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to search.\n * @param {number} target - The value to find.\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction linearSearch_helperBased(nums: number[], target: number) {\n    const search = (index: number) => {\n        if (index >= nums.length) {\n            return -1\n        }\n\n        if (nums[index] === target) {\n            return index\n        }\n\n        return search(index + 1)\n    }\n\n    return search(0)\n}\n\n/**\n * Performs a recursive binary search on a sorted array.\n *\n * Time Complexity: O(log n)\n * Space Complexity: O(log n) (recursive call stack)\n *\n * @param {number[]} nums - The sorted array to search.\n * @param {number} target - The value to find.\n * @param {number} [left=0] - The left boundary index (used internally).\n * @param {number} [right=nums.length - 1] - The right boundary index (used internally).\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction binarySearch(nums: number[], target: number, left: number = 0, right?: number) {\n    // Set default if right is undefined\n    right = right ?? nums.length - 1\n\n    if (left > right) {\n        return -1\n    }\n\n    const mid = Math.floor((left + right) / 2)\n\n    if (nums[mid] === target) {\n        return mid\n    } else if (nums[mid] < target) {\n        return binarySearch(nums, target, mid + 1, right)\n    } else {\n        return binarySearch(nums, target, left, mid - 1)\n    }\n}\n\n/**\n * Performs a recursive binary search using a helper function.\n *\n * Time Complexity: O(log n)\n * Space Complexity: O(log n) (recursive call stack)\n *\n * @param {number[]} nums - The sorted array to search.\n * @param {number} target - The value to find.\n * @returns {number} The index of the target if found, otherwise -1.\n */\nfunction binarySearch_helperBased(nums: number[], target: number) {\n    const search = (left: number, right: number) => {\n        if (left > right) {\n            return -1\n        }\n\n        const mid = Math.floor((left + right) / 2)\n\n        if (nums[mid] === target) {\n            return mid\n        } else if (nums[mid] < target) {\n            return search(mid + 1, right)\n        } else {\n            return search(left, mid - 1)\n        }\n    }\n\n    return search(0, nums.length - 1)\n}"
      },
      {
        "lang": "ts",
        "file": "sum_of_array_Vihar.ts",
        "user": "Vihar",
        "content": "// Probilem link: https://www.geeksforgeeks.org/problems/sum-of-array2326/1\n\n/**\n * Calculates the sum of all elements in an array using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @returns {number} The total sum of the array elements.\n */\nfunction sumOfArray(nums: number[], index: number = 0) {\n    if (index >= nums.length) {\n        return 0\n    }\n\n    return nums[index] + sumOfArray(nums, index + 1)\n}\n\n/**\n * Calculates the sum of all elements in an array using a recursive helper.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @returns {number} The total sum of the array elements.\n */\nfunction sumOfArray_helperBased(nums: number[]) {   \n    const sum = (index: number): number => {\n        if (index >= nums.length) {\n            return 0\n        }\n\n        return nums[index] + sum(index + 1)\n    }\n\n    return sum(0)\n}"
      }
    ]
  },
  {
    "id": "2026-02-24-session35",
    "date": "2026-02-24",
    "num": 35,
    "title": "Coding Problem",
    "topics": [
      "recursion",
      "arrays"
    ],
    "markdown": "# Coding Problem \nhttps://leetcode.com/problems/subsets/\n\n# Excalidraw Link \nhttps://excalidraw.com/#json=ezttWKzvQ9AqMa0r01TTG,nnjy1xXG1jAnA4HW0d4RtQ\n\n# Assignments\nSolve following using recursion\n- https://www.geeksforgeeks.org/problems/factorial5739/1\n- https://www.geeksforgeeks.org/problems/reverse-an-array/1",
    "solutions": [
      {
        "lang": "cpp",
        "file": "factorial_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/factorial5739/1\n *\n * Short Description\n * Given a positive integer, n. Find the factorial of n.\n * n! = n*(n-1)*(n-2).....1\n *\n *\n * Input: n = 5\n * Output: 120\n * Explanation:\n * 1 x 2 x 3 x 4 x 5 = 120\n *\n *\n * Input: nums = 4\n * Output: 24\n * Explanation:\n * 1 x 2 x 3 x 4 = 24\n *\n * Note: 1 <= n <= 12\n * Try for 1 <= n <= 25\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n\nclass Solution\n{\npublic:\n  // Using of recursion\n  /**\n   * Sub problem is here find the factorial\n   * of n-1\n   * So f(n) = n * f(n-1), f(n) respresent n!\n   * Base case of f(n) at n = 0, and n = 1\n   *\n   *\n   * Time: time of one call * no of call total\n   * Time: 1 * n => O(n)\n   *\n   * Space: O(n), n stack frame we used to\n   * calculate n!\n   */\n  long long factorial_by_rec(int n)\n  {\n    // Base Case\n    // 0! = 1, 1! = 1\n    if (n == 0 || n == 1)\n    {\n      return 1;\n    }\n\n    // Recursive work\n    long long small_ans = factorial_by_rec(n - 1);\n\n    // Selft Work\n    long long ans = n * small_ans;\n\n    return ans;\n  }\n\n  /**\n   * Best Approach using loop\n   * We know n! = n*(n-1)*(n-2).....1\n   * So we can run a loop from i = 1 to i = n\n   * and multiply the num and store into result\n   *\n   * Time: O(n), Space: O(1)\n   */\n  long long factorial(int n)\n  {\n\n    // 0! = 1, 1! = 1\n    if (n == 0 || n == 1)\n    {\n      return 1;\n    }\n\n    long long res = 1;\n\n    for (int i = 2; i <= n; i++)\n    {\n      res *= i;\n    }\n    return res;\n  }\n};\n\nint main()\n{\n  int n = 12;\n\n  Solution sol;\n  std::cout << sol.factorial(n) << std::endl;\n  std::cout << sol.factorial_by_rec(n) << std::endl;\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "reverse_an_array_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/problems/reverse-an-array/1\n *\n * Short Description\n * You are given an array of integers arr[]. You have to reverse the given array.\n * Note: Modify the array in place\n *\n *\n * Input: arr = [1, 4, 3, 2, 6, 5]\n * Output: [5, 6, 2, 3, 4, 1]\n * Explanation:\n * The elements of the array are [1, 4, 3, 2, 6, 5].\n * After reversing the array, the first element goes to the last position,\n * the second element goes to the second last position and so on. Hence,\n * the answer is [5, 6, 2, 3, 4, 1].\n *\n *\n * Input: arr = [4, 5, 2]\n * Output: [2, 5, 4]\n * Explanation: The elements of the array are [4, 5, 2]. The reversed array will be [2, 5, 4].\n *\n * Input: arr = [1]\n * Output: [1]\n * Explanation: The array has only single element, hence the reversed array is same as the original.\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass Solution\n{\npublic:\n  /**\n   * Iterative Approach\n   * Init two index st and end\n   * continue swaping nums[st], nums[end]\n   * move both pointer\n   *\n   * Time: O(n), Space: O(1)\n   */\n  void reverse_array(std::vector<int> &nums, int st, int end)\n  {\n\n    while (st < end)\n    {\n      std::swap(nums[st], nums[end]);\n      st++;\n      end--;\n    }\n  }\n\n  /**\n   * Recursive Approach\n   * Sub problem is here, swapping is done by recursion\n   * from index st + 1 to end - 1\n   * Self work is swapping nums[st], nums[end]\n   *\n   * Base Case: When st index cross end index\n   * or came at same position\n   *\n   * Time: O(n), Space: O(n)\n   * In recursion time complexity is => Time of one call * Total no of call\n   * In recursion space complexity is => Total stack space + extra space\n   */\n\n  void reverse_array_by_rec(std::vector<int> &nums, int st, int end)\n  {\n\n    // Base Case\n    if (st >= end)\n      return;\n\n    // Self Work\n    std::swap(nums[st], nums[end]);\n\n    // Recursive Work\n    reverse_array_by_rec(nums, st + 1, end - 1);\n  }\n\n  void print(std::vector<int> &nums)\n  {\n    for (int &it : nums)\n    {\n      std::cout << it << \" \";\n    }\n  }\n};\n\nint main()\n{\n\n  std::vector<int> nums1 = {1, 4, 3, 2, 6, 5};\n  std::vector<int> nums2 = {1, 6, 9, 7, 3, 5};\n\n  Solution sol;\n\n  sol.reverse_array(nums1, 0, nums1.size());\n  sol.reverse_array_by_rec(nums2, 0, nums2.size());\n\n  // Print the reversed array\n  sol.print(nums1);\n  std::cout << \"\\n\";\n\n  sol.print(nums2);\n  std::cout << \"\\n\";\n\n  return 0;\n}"
      },
      {
        "lang": "java",
        "file": "Subsets_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<Integer>> subsets(int[] nums) \n    {\n        List<List<Integer>> result = new ArrayList<>();\n        //int n = nums.length;\n        //result.add(new ArrayList());\n        sets(nums, 0, new ArrayList(), result);\n\n        return result;\n    }\n\n    static void sets(int[] nums, int index,List<Integer> subsets ,List<List<Integer>> result)\n    {\n        //List<Integer> subsets = new ArrayList<>();\n        if(index>=nums.length)\n        {\n            result.add(new ArrayList<>(subsets));\n            return;\n        }\n\n        subsets.add(nums[index]);\n        sets(nums, index+1 ,subsets, result);\n        \n        subsets.remove((Integer)nums[index]);\n        //subsets.remove(Integer.valueOf(nums[index]));\n        sets(nums, index+1 ,subsets ,result);\n    }\n}"
      },
      {
        "lang": "java",
        "file": "factorial_Kumar Nirupam.java",
        "user": "Kumar Nirupam",
        "content": "/*\nApproach Used: Recursive (Top-Down) Approach\n\n1. The factorial(int n) function acts as a wrapper function.\n2. The actual logic is implemented in a helper function fact(n).\n3. We use recursion to break the problem into smaller subproblems.\n4. Base Condition:\n   - If n <= 1, return 1.\n   - This stops the recursion.\n5. Recursive Case:\n   - Return n * fact(n - 1)\n   - This means factorial of n is n multiplied by factorial of (n-1).\n6. The recursion continues until it reaches the base condition.\n\nTime Complexity: O(n)\nSpace Complexity: O(n) due to recursive call stack.\n*/\n\n\nclass Solution {\n    // Function to calculate factorial of a number.\n    int factorial(int n) {\n        // code here\n        return fact(n);\n    }\n    private int fact(int n){\n        \n        //base condition\n        if(n<=1) \n        {\n            return 1;\n        }\n        \n        return n * fact(n-1);\n    }\n}\n"
      },
      {
        "lang": "java",
        "file": "reverse_an_array_Kumar Nirupam.java",
        "user": "Kumar Nirupam",
        "content": "/*\nApproach Used: Recursive Backtracking with Extra Space\n\n1. The reverseArray() function checks if the array size is less than 2.\n   - If yes, no reversal is needed and we return immediately.\n\n2. We create an ArrayList 'res' to temporarily store reversed elements.\n\n3. The reverse() function is a recursive helper method.\n   - It traverses the array from index 0 to n using recursion.\n   - Base Condition: When index == arr.length, recursion stops.\n   - This ensures we do not access out-of-bounds index.\n\n4. Recursive Flow:\n   - First, recursion goes till the end of the array.\n   - While returning from recursive calls (backtracking phase),\n     elements are added to 'res'.\n   - Since elements are added during the return phase,\n     they are stored in reverse order.\n\n5. Finally, we copy elements from 'res' back into the original array.\n\nTime Complexity: O(n)\n- Each element is visited once.\n\nSpace Complexity: O(n)\n- O(n) for recursion call stack.\n- O(n) for the extra ArrayList used to store reversed elements.\n*/\n\n\n\nimport java.util.ArrayList;\n\nclass Solution {\n    public void reverseArray(int arr[]) {\n        // code here\n        \n        \n        int n = arr.length;\n        \n        if(n<2){\n            return ;\n        }\n        \n        ArrayList<Integer> res = new ArrayList<>();\n        reverse(arr , res , 0);\n        \n        int j =0;\n        for(int i =0 ; i<res.size() ; i++){\n            arr[j] = res.get(i);\n            j++;\n        }\n        \n        return  ;\n    }\n    \n    private void reverse(int[] arr ,ArrayList<Integer> res ,int index){\n        \n        if(index == arr.length ){\n           return;\n        }\n        \n        reverse(arr , res , index+1);\n        // Last Recursion \n         res.add(arr[index]);\n    }\n}"
      },
      {
        "lang": "js",
        "file": "factorial_Vihar.js",
        "user": "Vihar",
        "content": "/**\n * Calculates the factorial of a number using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (due to recursive call stack)\n *\n * @param {number} n - A non-negative integer.\n * @returns The factorial of the given number.\n */\nfunction factorial(n) {\n    if (n <= 1) {\n        return 1\n    }\n\n    return n * this.factorial(n - 1)\n}"
      },
      {
        "lang": "js",
        "file": "factorial_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/problems/factorial5739/1\n/**\n * @param {number} n\n * @returns {number}\n */\n\nclass Solution {\n    factorial(n) {\n       if(n == 1) return 1 // code here \n       return n * this.factorial(n - 1)\n    }\n}\n"
      },
      {
        "lang": "js",
        "file": "reverse_an_array_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/problems/reverse-an-array/1\n\n/**\n * @param {number[]} arr\n * @returns {void}\n */\n\nclass Solution {\n    rev(arr, i, j) {\n        if (i < j) {\n            [arr[j], arr[i]] = [arr[i], arr[j]]\n            return this.rev(arr, i + 1, j - 1)\n        }\n    }\n\n    reverseArray(arr) {\n        this.rev(arr, 0, arr.length - 1)\n        return arr\n    }\n}"
      },
      {
        "lang": "js",
        "file": "reverse_array_Vihar.js",
        "user": "Vihar",
        "content": "/**\n * Reverses an array using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack + result array)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @param {number[]} [result=[]] - The array that stores the reversed result.\n * @returns {number[]} A new array containing the elements in reverse order.\n */\nfunction reverseArray(nums, index = 0, result = []) {\n    if (index >= nums.length) {\n        return result\n    }\n\n    reverseArray(nums, index + 1, result)\n    result.push(nums[index])\n\n    return result\n}\n\n/**\n * Reverses an array in place using recursion.\n *\n * Time Complexity: O(n²) (due to repeated `shift()` operations)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to reverse.\n * @returns {number[]} The same array instance with elements reversed.\n */\nfunction reverseArray_inPlace(nums) {\n    if (nums.length === 0) {\n        return nums\n    }\n\n    const current = nums.shift()\n    reverseArray(nums)\n    nums.push(current)\n\n    return nums\n}"
      },
      {
        "lang": "js",
        "file": "subset_aryan.js",
        "user": "aryan",
        "content": "// https://leetcode.com/problems/subsets/\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\n\n\nvar subsets = function (nums) {\n    let result = []\n    function explore(arr, i, temp) {\n        if (arr.length == i) {\n            result.push([...temp])\n            return\n        }\n        temp.push(arr[i])\n        explore(arr, i + 1, temp)\n        temp.pop()\n        explore(arr, i + 1, temp)\n    }\n    explore(nums, 0, [])\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "subsets_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/subsets/\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @param {number[]} [currentSet=[]] - The current subset being built (used internally).\n * @param {number[][]} [result=[]] - The array storing all subsets (used internally).\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets(nums, index = 0, currentSet = [], result = []) {\n    if (index >= nums.length) {\n        result.push(currentSet.slice())\n        return result\n    }\n\n    currentSet.push(nums[index])\n    subsets(nums, index + 1, currentSet, result)\n    currentSet.pop()\n    subsets(nums, index + 1, currentSet, result)\n\n    return result\n}\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets_helperBased(nums) {\n    const result = []\n    const subsets = (index, currentSet) => {\n        if (index >= nums.length) {\n            result.push(currentSet.slice())\n            return\n        }\n\n        currentSet.push(nums[index])\n        subsets(index + 1, currentSet)\n        currentSet.pop()\n        subsets(index + 1, currentSet)\n    }\n\n    subsets(0, [])\n\n    return result\n}"
      },
      {
        "lang": "ts",
        "file": "factorial_Vihar.ts",
        "user": "Vihar",
        "content": "/**\n * Calculates the factorial of a number using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (due to recursive call stack)\n *\n * @param {number} n - A non-negative integer.\n * @returns The factorial of the given number.\n */\nfunction factorial(n: number) {\n    if (n <= 1) {\n        return 1\n    }\n\n    return n * this.factorial(n - 1)\n}"
      },
      {
        "lang": "ts",
        "file": "reverse_array_Vihar.ts",
        "user": "Vihar",
        "content": "/**\n * Reverses an array using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack + result array)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @param {number[]} [result=[]] - The array that stores the reversed result.\n * @returns {number[]} A new array containing the elements in reverse order.\n */\nfunction reverseArray(nums: number[], index: number = 0, result: number[] = []) {\n    if (index >= nums.length) {\n        return result\n    }\n\n    reverseArray(nums, index + 1, result)\n    result.push(nums[index])\n\n    return result\n}\n\n/**\n * Reverses an array in place using recursion.\n *\n * Time Complexity: O(n²) (due to repeated `shift()` operations)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number[]} nums - The array to reverse.\n * @returns {number[]} The same array instance with elements reversed.\n */\nfunction reverseArray_inPlace(nums: number[]) {\n    if (nums.length === 0) {\n        return nums\n    }\n\n    const current = nums.shift()\n    reverseArray(nums)\n    nums.push(current)\n\n    return nums\n}"
      },
      {
        "lang": "ts",
        "file": "subsets_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/subsets/\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @param {number[]} [currentSet=[]] - The current subset being built (used internally).\n * @param {number[][]} [result=[]] - The array storing all subsets (used internally).\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets(nums: number[], index: number = 0, currentSet: number[] = [], result: number[][] = []) {\n    if (index >= nums.length) {\n        result.push(currentSet.slice())\n        return result\n    }\n\n    currentSet.push(nums[index])\n    subsets(nums, index + 1, currentSet, result)\n    currentSet.pop()\n    subsets(nums, index + 1, currentSet, result)\n\n    return result\n}\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets_helperBased(nums: number[]) {\n    const result: number[][] = []\n    const subsets = (index: number, currentSet: number[]) => {\n        if (index >= nums.length) {\n            result.push(currentSet.slice())\n            return\n        }\n\n        currentSet.push(nums[index])\n        subsets(index + 1, currentSet)\n        currentSet.pop()\n        subsets(index + 1, currentSet)\n    }\n\n    subsets(0, [])\n\n    return result\n}"
      }
    ]
  },
  {
    "id": "2026-02-26-session36",
    "date": "2026-02-26",
    "num": 36,
    "title": "Coding Problem",
    "topics": [
      "recursion"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/subsets/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=jjtFYrXBTgQeOB7l35K07,15HI7oWTq-mweW7ooFR2lA\n\n# Assignments :\n- https://www.geeksforgeeks.org/sum-of-natural-numbers-using-recursion/\n- https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/",
    "solutions": [
      {
        "lang": "cpp",
        "file": "nth_fibonacci_number_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/\n *\n * Short Description\n * Given a positive integer n, find the nth Fibonacci number.\n * The Fibonacci series is a sequence where a term is the sum of previous two terms.\n * The first two terms of the Fibonacci sequence are 0 followed by 1.\n * The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21.\n *\n *\n * Input: n = 2\n * Output: 1\n * Explanation: 1 is the 2nd number of Fibonacci series.\n *\n *\n * Input: n = 5\n * Output: 5\n * Explanation: 5 is the 5th number of Fibonacci series.\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n\nclass Solution\n{\npublic:\n  /**\n   * Base Case F(n) = n, where n = 0, 1\n   * F(n) = F(n - 1) + F(n - 2) where n >= 2\n   *\n   * Time: O(2^n) , T(n) = T(n - 1) + T(n - 2) + k\n   * When we calcualte time complexity\n   * we can assume T(n - 2) approx T(n - 1)\n   *\n   * So, T(n) = 2T(n - 1) + k\n   * Space: O(n)\n   */\n  int nth_fibonacci_by_recursive(int n)\n  {\n\n    // Base Case\n    if (n == 0 || n == 1)\n      return n;\n\n    // Recursive Work\n    int prev = nth_fibonacci_by_recursive(n - 1);\n    int prev_last = nth_fibonacci_by_recursive(n - 2);\n\n    // Self Work\n    int ans = prev + prev_last;\n    return ans;\n  }\n\n  /**\n   * Using linear approach\n   * Store current and previous and last previous-last value\n   * and travrase from n = 2 -> n = n\n   *\n   * Time: O(n), Space: O(1)\n   */\n\n  int nth_fibonacci_by_iterative(int n)\n  {\n    if (n == 0 || n == 1)\n      return n;\n\n    // Current store or track the current fibo number\n    int current = 0;\n\n    // Store last two previous fibo number\n    int prev1 = 1, prev2 = 0;\n\n    for (int i = 2; i <= n; i++)\n    {\n      current = prev2 + prev1;\n      prev2 = prev1;\n      prev1 = current;\n    }\n\n    return current;\n  }\n\n  /**\n   * Iterative bottom up approach\n   * Use the extra space to store previous\n   * fibo number.\n   * By this it is easy to calculate next\n   * fibo number\n   *\n   * Time: O(n), Space: (n)\n   */\n\n  int nth_fibonacci_by_bottom_up(int n)\n  {\n    // Base Case\n    if (n == 0 || n == 1)\n      return n;\n\n    /* Init a store variable (v) to store\n    fibonacci number and start from 0 and 1 */\n    std::vector<int> v(n + 1, -1);\n    v[0] = 0, v[1] = 1;\n\n    /* Travrase from i = 2 -> n to\n    store fibonacci number */\n    for (int i = 2; i <= n; i++)\n    {\n      v[i] = v[i - 1] + v[i - 2];\n    }\n\n    return v[n];\n  }\n\n  /**\n   * Using memoization approach\n   * See very carefully, we make multiple call\n   * for calculating big fibonacci number\n   *\n   * for ex n = 5, we call f(3) two times\n   * that's why we can store result of function\n   * call and use it in future\n   *\n   * F(n) = n, for n = 1,0 is Base Case\n   * Time: O(n) , Space: O(n)\n   */\n\n  int nth_fibonacci_by_memoization(int n)\n  {\n    std::vector<int> v(n + 1, -1);\n\n    return helper(n, v);\n  }\n\nprivate:\n  int helper(int n, std::vector<int> &dp)\n  {\n    // Base Case\n    if (n == 0 || n == 1)\n    {\n      return n;\n    }\n\n    /* Check if result already store in utility\n    vector if yes then use it or return it */\n    if (dp[n] != -1)\n      return dp[n];\n\n    /* Calculate fibo number and store it */\n    dp[n] = helper(n - 1, dp) + helper(n - 2, dp);\n\n    return dp[n];\n  }\n};\n\nint main()\n{\n\n  int n = 20;\n\n  // Create an instance of class Solution\n  Solution sol;\n\n  std::cout << \"Using iterative approach : \" << sol.nth_fibonacci_by_iterative(n) << std::endl;\n  std::cout << \"Using recursive approach : \" << sol.nth_fibonacci_by_recursive(n) << std::endl;\n  std::cout << \"Using bottom-up approach : \" << sol.nth_fibonacci_by_bottom_up(n) << std::endl;\n  std::cout << \"Using Memoization approach : \" << sol.nth_fibonacci_by_memoization(n) << std::endl;\n\n  return 0;\n}"
      },
      {
        "lang": "cpp",
        "file": "subsets_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://leetcode.com/problems/subsets/\n *\n * Short Description\n * Given an integer array nums of unique elements, return all possible (the power set).\n * The solution set must not contain duplicate subsets. Return the solution in any order.\n *\n * Input: nums = [1, 2, 3]\n * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n *\n *\n * Input: nums = [1, 2]\n * Output: [ [ ], [1] , [2] , [1, 2] , [2, 1] ]\n *\n * Follow Back\n * Array of nums can have duplicates elements.\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\ntypedef std::vector<int> vi;\n\nclass Solution\n{\nprivate:\n  /**\n   * Backtracking approach\n   * 1. Sort the array\n   * 2. At each level, generate subsets\n   * 3. Skip duplicate elements\n   *\n   * Time Complexity: O(2^n)\n   * Space Complexity: O(n) recursion stack\n   */\n\n  void helper(vi &nums, int start, std::vector<vi> &res, vi &temp)\n  {\n    // Every state is a valid subset\n    res.push_back(temp);\n\n    for (int i = start; i < nums.size(); i++)\n    {\n      // Skip duplicates\n      if (i > start && nums[i] == nums[i - 1])\n        continue;\n\n      // Self work + recursive work\n      temp.push_back(nums[i]);\n      helper(nums, i + 1, res, temp);\n      temp.pop_back();\n    }\n  }\n\npublic:\n  std::vector<std::vector<int>> subsets(vi &nums)\n  {\n    std::vector<vi> res;\n    vi temp;\n\n    // Sort to handle duplicates\n    std::sort(nums.begin(), nums.end());\n\n    helper(nums, 0, res, temp);\n    return res;\n  }\n};\n\nint main()\n{\n\n  vi v = {1, 2, 2};\n\n  Solution sol;\n  std::vector<vi> res = sol.subsets(v);\n\n  // Print all subsets\n  std::cout << \"[ \" << std::endl;\n  for (auto &row : res)\n  {\n    std::cout << \"\\t[ \";\n    for (auto &ele : row)\n    {\n      std::cout << ele << \" \";\n    }\n\n    std::cout << \" ]\" << std::endl;\n  }\n\n  std::cout << \" ]\" << std::endl;\n  return 0;\n}\n"
      },
      {
        "lang": "cpp",
        "file": "sum_of_natural_numbers_using_recursion_JasrajChouhan.cpp",
        "user": "JasrajChouhan",
        "content": "/**\n * Problem Link : https://www.geeksforgeeks.org/sum-of-natural-numbers-using-recursion/\n *\n * Short Description\n * Given a number n, find the sum of the first n natural numbers using recursion.\n *\n *\n * Input: n = 3\n * Output: 6\n * Explanation: 1 + 2 + 3 = 6\n *\n *\n * Input: n = 5\n * Output: 15\n * Explanation: 1 + 2 + 3 + 4 + 5 = 15\n *\n */\n\n/************************************* Solution **************************************************** */\n\n#include <iostream>\n\nclass Solution\n{\npublic:\n  /**\n   * Using standare farmula of\n   * sum of n natural number\n   * sum = (n * (n + 1))/2\n   *\n   * Time: O(1), Space: O(1)\n   */\n  int sum(int n)\n  {\n    /* Sum of n natural number is\n    sum = (n * (n + 1))/2 */\n\n    int ans = (n * (n + 1)) / 2;\n    return ans;\n  }\n\n  /**\n   * Travrase linearly form n = 1 to n = N\n   * and store into a res\n   *\n   * res = 1 + 2 + 3 ..... n\n   *\n   * Time: O(n), Space: O(1)\n   */\n  int sum_by_itertaive(int n)\n  {\n\n    /* Init a variable to store sum\n    of n natural number */\n    int ans = 0;\n\n    // Travrase from n = 1 to n = N\n    for (int i = 1; i <= n; i++)\n    {\n      ans += i;\n    }\n\n    return ans;\n  }\n\n  /**\n   * Calcualte sum of n natural number\n   * using recursion\n   *\n   * Sub problem is f(n - 1) is for f(n)\n   * When n is 0 base case is hit and return 0\n   *\n   * Time: O(n), Space: O(n)\n   */\n\n  int sum_by_recursive(int n)\n  {\n\n    // Base Case\n    if (n == 0)\n      return 0;\n\n    // Recursive Work\n    int small_ans = sum_by_recursive(n - 1);\n\n    // Self Work\n    int ans = small_ans + n;\n    return ans;\n  }\n};\n\nint main()\n{\n  int n = 12;\n\n  Solution sol;\n  std::cout << \"Using standrand farmula : \" << sol.sum(n) << std::endl;\n  std::cout << \"Using itertavie approach : \" << sol.sum_by_itertaive(n) << std::endl;\n  std::cout << \"Using recursive approach : \" << sol.sum_by_recursive(n) << std::endl;\n  return 0;\n}"
      },
      {
        "lang": "java",
        "file": "nth_fibonacci_number_KumarNirupam.java",
        "user": "KumarNirupam",
        "content": "/*\n\nlink :- https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1\n\n This program returns the nth Fibonacci number using recursion.\n\n - The function nthFibonacci(n) calls a helper function fibo(n).\n - The fibo function recursively calculates Fibonacci numbers.\n - If n == 0, it returns 0 (base case).\n - If n < 0, it returns 1 (this condition is logically incorrect for Fibonacci).\n - Otherwise, it returns fibo(n-1) + fibo(n-2),\n   which follows the Fibonacci formula:\n   F(n) = F(n-1) + F(n-2).\n\n*/\nclass Solution {\n    public int nthFibonacci(int n) {\n        // code here\n        return fibo(n);\n    }\n    \n    private int fibo(int n){\n        if(n == 0) return 0;\n        if( n < 0 ) return 1;\n        \n        return fibo(n-1) + fibo(n-2);\n    }\n}"
      },
      {
        "lang": "js",
        "file": "nth_fibonacci_number_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/dsa/program-for-nth-fibonacci-number/\n\nfunction nthFibonacci(n) {\n    if (n <= 1) return n\n    return nthFibonacci(n - 1) + nthFibonacci(n - 2)\n}"
      },
      {
        "lang": "js",
        "file": "program_for_nth_fibonacci_number_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/\n\n/**\n * Calculates the nth Fibonacci number using recursion.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number} n - The position in the Fibonacci sequence (0-based).\n * @returns {number} The nth Fibonacci number.\n */\nfunction nthFibonacci(n) {\n    if (n <= 1) {\n        return n\n    }\n\n    return nthFibonacci(n - 1) + nthFibonacci(n - 2)\n}\n\n/**\n * Calculates the nth Fibonacci number using recursion with memoization.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (cache + recursive call stack)\n *\n * @param {number} n - The position in the Fibonacci sequence (0-based).\n * @param {Map<number, number>} [cache=new Map()] - Stores previously computed Fibonacci values.\n * @returns {number} The nth Fibonacci number.\n */\nfunction nthFibonacci_memoized(n, cache = new Map()) {\n    if (n <= 1) {\n        return n\n    }\n    if (cache.has(n)) {\n        return cache.get(n)\n    }\n\n    const result = nthFibonacci_memoized(n - 1, cache) + nthFibonacci_memoized(n - 2, cache)\n    \n    cache.set(n, result)\n\n    return result\n}"
      },
      {
        "lang": "js",
        "file": "subsets_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/subsets/\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @param {number[]} [currentSet=[]] - The current subset being built (used internally).\n * @param {number[][]} [result=[]] - The array storing all subsets (used internally).\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets(nums, index = 0, currentSet = [], result = []) {\n    if (index >= nums.length) {\n        result.push(currentSet.slice())\n        return result\n    }\n\n    currentSet.push(nums[index])\n    subsets(nums, index + 1, currentSet, result)\n    currentSet.pop()\n    subsets(nums, index + 1, currentSet, result)\n\n    return result\n}\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets_helperBased(nums) {\n    const result = []\n    const subsets = (index, currentSet) => {\n        if (index >= nums.length) {\n            result.push(currentSet.slice())\n            return\n        }\n\n        currentSet.push(nums[index])\n        subsets(index + 1, currentSet)\n        currentSet.pop()\n        subsets(index + 1, currentSet)\n    }\n\n    subsets(0, [])\n\n    return result\n}"
      },
      {
        "lang": "js",
        "file": "sum_of_n_natural_number_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/dsa/sum-of-natural-numbers-using-recursion/\n\n/**\n * @param {number}\n * @return {number}\n */\n\n// first\nfunction recursion(n, sum = 0) {\n    if (n === 0) return sum\n    sum += n\n    return recursion(n - 1, sum)\n}\n\n// second (improved version)\n\nfunction recursionTwo(n) {\n    if (n === 0) return 0\n    return n + recursion(n - 1)\n}\n"
      },
      {
        "lang": "js",
        "file": "sum_of_nautral_numbers_using_recursion_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/sum-of-natural-numbers-using-recursion/\n\n/**\n * Calculates the sum of all numbers from n down to 0 using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number} n - A non-negative integer.\n * @returns {number} The sum of numbers from n to 0.\n */\nfunction recurSum(n) {\n    if (n === 0) {\n        return n\n    }\n\n    return n + recurSum(n - 1)\n}"
      },
      {
        "lang": "ts",
        "file": "program_for_nth_fibonacci_number_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/\n\n/**\n * Calculates the nth Fibonacci number using recursion.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number} n - The position in the Fibonacci sequence (0-based).\n * @returns {number} The nth Fibonacci number.\n */\nfunction nthFibonacci(n: number) {\n    if (n <= 1) {\n        return n\n    }\n\n    return nthFibonacci(n - 1) + nthFibonacci(n - 2)\n}\n\n/**\n * Calculates the nth Fibonacci number using recursion with memoization.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (cache + recursive call stack)\n *\n * @param {number} n - The position in the Fibonacci sequence (0-based).\n * @param {Map<number, number>} [cache=new Map()] - Stores previously computed Fibonacci values.\n * @returns {number} The nth Fibonacci number.\n */\nfunction nthFibonacci_memoized(n: number, cache: Map<number, number> = new Map()) {\n    if (n <= 1) {\n        return n\n    }\n    if (cache.has(n)) {\n        return cache.get(n)\n    }\n\n    const result = nthFibonacci_memoized(n - 1, cache) + nthFibonacci_memoized(n - 2, cache)\n    \n    cache.set(n, result)\n\n    return result\n}"
      },
      {
        "lang": "ts",
        "file": "subsets_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/subsets/\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @param {number} [index=0] - The current index (used internally).\n * @param {number[]} [currentSet=[]] - The current subset being built (used internally).\n * @param {number[][]} [result=[]] - The array storing all subsets (used internally).\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets(nums: number[], index: number = 0, currentSet: number[] = [], result: number[][] = []) {\n    if (index >= nums.length) {\n        result.push(currentSet.slice())\n        return result\n    }\n\n    currentSet.push(nums[index])\n    subsets(nums, index + 1, currentSet, result)\n    currentSet.pop()\n    subsets(nums, index + 1, currentSet, result)\n\n    return result\n}\n\n/**\n * Generates all possible subsets (the power set) of a given array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(n) (recursive call stack, excluding output space)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[][]} An array containing all subsets of the input array.\n */\nfunction subsets_helperBased(nums: number[]) {\n    const result: number[][] = []\n    const subsets = (index: number, currentSet: number[]) => {\n        if (index >= nums.length) {\n            result.push(currentSet.slice())\n            return\n        }\n\n        currentSet.push(nums[index])\n        subsets(index + 1, currentSet)\n        currentSet.pop()\n        subsets(index + 1, currentSet)\n    }\n\n    subsets(0, [])\n\n    return result\n}"
      },
      {
        "lang": "ts",
        "file": "sum_of_nautral_numbers_using_recursion_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.geeksforgeeks.org/sum-of-natural-numbers-using-recursion/\n\n/**\n * Calculates the sum of all numbers from n down to 0 using recursion.\n *\n * Time Complexity: O(n)\n * Space Complexity: O(n) (recursive call stack)\n *\n * @param {number} n - A non-negative integer.\n * @returns {number} The sum of numbers from n to 0.\n */\nfunction recurSum(n: number) {\n    if (n === 0) {\n        return n\n    }\n\n    return n + recurSum(n - 1)\n}"
      }
    ]
  },
  {
    "id": "2026-02-27-session37",
    "date": "2026-02-27",
    "num": 37,
    "title": "Coding Problem",
    "topics": [
      "backtracking"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/subsets-ii/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=N04st035zeC02YBp3kXxi,Ob9oQXfl28BJdrt1oGe43w\n\n# Assignments :\n- https://www.naukri.com/code360/problems/subset-sum_3843086",
    "solutions": [
      {
        "lang": "cpp",
        "file": "subsets_ii_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "class Solution\n{\nprivate:\n    void helper(vector<int> &nums, vector<vector<int>> &ans, vector<int> currSubset, int index)\n    {\n        if (index >= nums.size())\n        {\n            ans.push_back(currSubset);\n            return;\n        }\n\n        currSubset.push_back(nums[index]);\n        helper(nums, ans, currSubset, index + 1);\n        currSubset.pop_back();\n        while (index < nums.size() - 1 && nums[index] == nums[index + 1])\n        {\n            index++;\n        }\n        helper(nums, ans, currSubset, index + 1);\n    }\n\npublic:\n    vector<vector<int>> subsetsWithDup(vector<int> &nums)\n    {\n        sort(nums.begin(), nums.end());\n        vector<vector<int>> ans;\n        helper(nums, ans, {}, 0);\n        return ans;\n    }\n};"
      },
      {
        "lang": "java",
        "file": "SubSet II_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<Integer>> subsetsWithDup(int[] nums) \n    {\n        List<List<Integer>> res = new ArrayList<>();\n        Arrays.sort(nums);\n        subsets(0,nums,new ArrayList(),res);\n        return res;\n    }\n    static void subsets(int index,int[] nums, List<Integer> subset, List<List<Integer>> res)\n    {\n        if(index >= nums.length)\n        {\n            //if(!res.contains(subset))\n            res.add(new ArrayList(subset));\n            return;\n        }\n\n        subset.add(nums[index]);\n        subsets(index+1 , nums, subset, res);\n        subset.remove((Integer)nums[index]);\n        while(index<nums.length-1 && nums[index]==nums[index + 1])\n        {\n            index++;\n        }\n        subsets(index+1, nums, subset, res);\n    }\n}"
      },
      {
        "lang": "js",
        "file": "subset_sum_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://www.naukri.com/code360/problems/subset-sum_3843086\n\n/**\n * Generates the sums of all possible subsets of an array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(2^n) (result array + recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[]} An array containing the sum of every subset (sorted in ascending order).\n */\nfunction subsetSum(nums) {\n    const result = []\n\n    const subsets = (index, currentSum) => {\n        if (index >= nums.length) {\n            result.push(currentSum)\n            return\n        }\n\n        subsets(index + 1, currentSum + nums[index])\n        subsets(index + 1, currentSum)\n    }\n\n    subsets(0, 0)\n    result.sort((a,b) => a - b)\n\n    return result\n}"
      },
      {
        "lang": "js",
        "file": "subset_sum_aryan.js",
        "user": "aryan",
        "content": "// not optimized\n\nvar subsets = function (nums) {\n    let result = []\n\n    function explore(arr, i, temp) {\n        if (i === arr.length) {\n            let sum = temp.reduce((acc, curr) => acc + curr, 0)\n            result.push(sum)\n            return\n        }\n        temp.push(arr[i])\n        explore(arr, i + 1, temp)\n        temp.pop()\n        explore(arr, i + 1, temp)\n    }\n    explore(nums, 0, [])\n    result.sort((a, b) => a - b)\n    return result\n};\n\n\n// optimized\nvar subsets = function (nums) {\n    let result = []\n\n    function explore(i, sum) {\n        if (i === nums.length) {\n            result.push(sum)\n            return\n        }\n\n        explore(i + 1, sum + nums[i])\n        explore(i + 1, sum)\n    }\n\n    explore(0, 0)\n\n    result.sort((a, b) => a - b)\n\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "subset_two_aryan.js",
        "user": "aryan",
        "content": "// https://leetcode.com/problems/subsets-ii/\n\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsetsWithDup = function (arr) {\n    arr.sort((a, b) => a - b)\n    let result = []\n    function explore(arr, i, temp) {\n        if (arr.length == i) {\n\n            result.push([...temp])\n            return\n        }\n        temp.push(arr[i])\n        explore(arr, i + 1, temp)\n        temp.pop()\n        // skip duplicates\n        while (i + 1 < arr.length && arr[i] === arr[i + 1]) i++\n        explore(arr, i + 1, temp)\n    }\n    explore(arr, 0, [])\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "subsets_ii_Vihar.js",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/subsets-ii/\n\n/**\n * Generates all unique subsets of an array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(2^n)\n *\n * @param {number[]} nums - The input array (may contain duplicate values).\n * @returns {number[][]} A 2D array containing all unique subsets.\n */\nfunction subsetsWithDup(nums) {\n    const result = []\n    \n    const subsets = (index, currentSet) => {\n        if (index >= nums.length) {\n            result.push(currentSet.slice())\n            return result\n        }\n\n        currentSet.push(nums[index])\n        subsets(index + 1, currentSet)\n        currentSet.pop()\n        while(index < nums.length && nums[index] === nums[index + 1]) {\n            index++\n        }\n        subsets(index + 1, currentSet)\n\n        return result\n    }\n\n    nums.sort((a,b) => a - b)\n    subsets(0, [])\n\n    return result\n}\n\n/**\n * Generates all unique subsets by grouping elements based on their frequency.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(2^n)\n *\n * @param {number[]} nums - The input array (may contain duplicate values).\n * @returns {number[][]} A 2D array containing all unique subsets.\n */\nfunction subsetsWithDup_groupByFrequency(nums) {\n    const result = []\n    const frequency = new Map()\n\n    for (let i = 0; i < nums.length; i++) {\n        frequency.set(nums[i], (frequency.get(nums[i]) ?? 0) + 1)\n    }\n\n    const uniqueNums = Array.from(frequency.keys())\n\n    const subsets = (index, currentSet) => {\n        if (index >= uniqueNums.length) {\n            result.push(currentSet.slice())\n            return\n        }\n\n        const num = uniqueNums[index]\n        const numFrequency = frequency.get(num)\n\n        for (let count = 0; count <= numFrequency; count++) {\n            for (let i = 0; i < count; i++) {\n                currentSet.push(num)                \n            }\n\n            subsets(index + 1, currentSet)\n\n            for (let i = 0; i < count; i++) {\n                currentSet.pop()                \n            }\n        }\n    }\n\n    subsets(0, [])\n\n    return result\n}\n"
      },
      {
        "lang": "python",
        "file": "subset_sum_sounak.py",
        "user": "sounak",
        "content": "from sys import *\nfrom collections import *\nfrom math import *\n\nfrom typing import List\n\ndef subsetSum(num: List[int]) -> List[int]:\n    # Write your code here.\n    n = len(num)\n    i = 0\n    subset = []\n    res = []\n    summ = 0\n    def df(i, summ):\n        if i >= n:\n            res.append(summ)\n            return\n        \n        subset.append(num[i])\n        # carry over the sum to avoid re-calculating everytime\n        df(i+1, summ+num[i])\n\n        # pop the added element\n        subset.pop()\n        df(i+1, summ)\n\n    df(i, summ)\n\n    res.sort()\n\n    return res"
      },
      {
        "lang": "ts",
        "file": "subset_sum_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://www.naukri.com/code360/problems/subset-sum_3843086\n\n/**\n * Generates the sums of all possible subsets of an array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(2^n) (result array + recursive call stack)\n *\n * @param {number[]} nums - The input array.\n * @returns {number[]} An array containing the sum of every subset (sorted in ascending order).\n */\nfunction subsetSum(nums: number[]) {\n    const result: number[] = []\n\n    const subsets = (index: number, currentSum: number) => {\n        if (index >= nums.length) {\n            result.push(currentSum)\n            return\n        }\n\n        subsets(index + 1, currentSum + nums[index])\n        subsets(index + 1, currentSum)\n    }\n\n    subsets(0, 0)\n    result.sort((a,b) => a - b)\n\n    return result\n}"
      },
      {
        "lang": "ts",
        "file": "subsets_ii_Vihar.ts",
        "user": "Vihar",
        "content": "// Problem link: https://leetcode.com/problems/subsets-ii/\n\n/**\n * Generates all unique subsets of an array.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(2^n)\n *\n * @param {number[]} nums - The input array (may contain duplicate values).\n * @returns {number[][]} A 2D array containing all unique subsets.\n */\nfunction subsetsWithDup(nums: number[]) {\n    const result: number[][] = []\n    \n    const subsets = (index: number, currentSet: number[]) => {\n        if (index >= nums.length) {\n            result.push(currentSet.slice())\n            return result\n        }\n\n        currentSet.push(nums[index])\n        subsets(index + 1, currentSet)\n        currentSet.pop()\n        while(index < nums.length && nums[index] === nums[index + 1]) {\n            index++\n        }\n        subsets(index + 1, currentSet)\n\n        return result\n    }\n\n    nums.sort((a,b) => a - b)\n    subsets(0, [])\n\n    return result\n}\n\n/**\n * Generates all unique subsets by grouping elements based on their frequency.\n *\n * Time Complexity: O(2^n)\n * Space Complexity: O(2^n)\n *\n * @param {number[]} nums - The input array (may contain duplicate values).\n * @returns {number[][]} A 2D array containing all unique subsets.\n */\nfunction subsetsWithDup_groupByFrequency(nums: number[]) {\n    const result: number[][] = []\n    const frequency: Map<number, number> = new Map()\n\n    for (let i = 0; i < nums.length; i++) {\n        frequency.set(nums[i], (frequency.get(nums[i]) ?? 0) + 1)\n    }\n\n    const uniqueNums = Array.from(frequency.keys())\n\n    const subsets = (index: number, currentSet: number[]) => {\n        if (index >= uniqueNums.length) {\n            result.push(currentSet.slice())\n            return\n        }\n\n        const num = uniqueNums[index]\n        const numFrequency = frequency.get(num)\n\n        for (let count = 0; count <= numFrequency; count++) {\n            for (let i = 0; i < count; i++) {\n                currentSet.push(num)                \n            }\n\n            subsets(index + 1, currentSet)\n\n            for (let i = 0; i < count; i++) {\n                currentSet.pop()                \n            }\n        }\n    }\n\n    subsets(0, [])\n\n    return result\n}\n"
      }
    ]
  },
  {
    "id": "2026-03-02-session38",
    "date": "2026-03-02",
    "num": 38,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/combination-sum/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=_X6GSq0QR-aVqenggfMNz,TPSNvEQV5WcsrkQZn9hmGg",
    "solutions": [
      {
        "lang": "java",
        "file": "Combination Sum_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) \n    {\n        //whenever we need to find combinations or subsets related problem - RECURSION is needed\n        List<List<Integer>> res = new ArrayList<>();\n        int sum_now=0;\n        sum(target, 0, 0, candidates, new ArrayList<>(), res);\n        return res;    \n    }\n\n    public static void sum(int target, int sum_now, int index, int[] candidates ,List<Integer> subsets, List<List<Integer>> res)\n    {\n        if(index>=candidates.length || sum_now>target)\n        return;\n        else if(sum_now==target)\n        {\n            //if(!res.contains(subsets)); //FailSafe\n            res.add(new ArrayList<>(subsets));\n            return;\n        }\n\n        subsets.add(candidates[index]);\n        sum(target, (sum_now + candidates[index]), index, candidates, subsets, res);\n        subsets.remove((Integer)candidates[index]);\n        sum(target, (sum_now), index+1, candidates, subsets, res);\n        \n    }\n}"
      }
    ]
  },
  {
    "id": "2026-03-05-session39",
    "date": "2026-03-05",
    "num": 39,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/combination-sum/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=R6V1zlJb-_oY_iZxrh-Cp,XCUxKqsE4Z_ym8eYXsAEqw\n\n# Assignment :\nhttps://leetcode.com/problems/combination-sum-ii/description/",
    "solutions": [
      {
        "lang": "java",
        "file": "Combination Sum II_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<Integer>> combinationSum2(int[] candidates, int target) \n    {\n        List<List<Integer>> list = new ArrayList<>();\n        Arrays.sort(candidates);\n        subset(candidates , target , new ArrayList<>() , 0 , 0 , list);\n        return list;\n    }\n\n    public static void subset(int[] candidates , int target, List<Integer> subsets, int index, int sum , List<List<Integer>> res)\n    {\n        if(sum==target)\n        {\n            //if(res.contains(subsets))\n            //return;\n            res.add(new ArrayList<>(subsets));\n            return;\n        }\n        else if(index>=candidates.length || sum>target)\n        return;\n\n        subsets.add(candidates[index]);\n        subset(candidates , target , subsets , index+1 , sum + candidates[index] , res);\n\n        //subsets.remove((Integer) candidates[index]);\n        subsets.remove(subsets.size()-1);\n        while(index<candidates.length-1 && candidates[index] == candidates[index+1])\n        index++;\n        subset(candidates , target , subsets , index+1  , sum , res);\n\n    }\n}"
      },
      {
        "lang": "java",
        "file": "combination sum_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) \n    {\n        //whenever we need to find combinations or subsets related problem - RECURSION is needed\n        List<List<Integer>> res = new ArrayList<>();\n        int sum_now=0;\n        sum(target, 0, 0, candidates, new ArrayList<>(), res);\n        return res;    \n    }\n\n    public static void sum(int target, int sum_now, int index, int[] candidates ,List<Integer> subsets, List<List<Integer>> res)\n    {\n        if(index>=candidates.length || sum_now>target)\n        return;\n        else if(sum_now==target)\n        {\n            res.add(new ArrayList<>(subsets));\n            return;\n        }\n        subsets.add(candidates[index]);\n        sum(target, (sum_now + candidates[index]), index, candidates, subsets, res);\n        \n        subsets.remove(subsets.size()-1);\n        //subsets.remove((Integer)candidates[index]);\n        sum(target, (sum_now), index+1, candidates, subsets, res);\n        \n    }\n}"
      },
      {
        "lang": "js",
        "file": "combination_sum_2_aryan.js",
        "user": "aryan",
        "content": "// https://namastedev.com/learn/namaste-dsa/combination-sum-ii\n\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum2 = function (candidates, target) {\n    let result = []\n    candidates.sort((a, b) => a - b)\n\n    function backtrack(remainingSum, path, start) {\n        if (remainingSum === 0) result.push([...path])\n        if (remainingSum <= 0) return\n\n        for (let i = start; i < candidates.length; i++) {\n            if (i > start && candidates[i] === candidates[i - 1]) continue\n            path.push(candidates[i])\n            backtrack(remainingSum - candidates[i], path, i + 1)\n            path.pop()\n        }\n    }\n    backtrack(target, [], 0)\n\n    return result;\n};"
      },
      {
        "lang": "js",
        "file": "combination_sum_aryan.js",
        "user": "aryan",
        "content": "// https://leetcode.com/problems/combination-sum/\n\n/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum = function (candidates, target) {\n    let result = []\n\n    function backtrack(remainingSum, path, start) {\n        if (remainingSum === 0) result.push([...path])\n        if (remainingSum <= 0) return\n\n        for (let i = start; i < candidates.length; i++) {\n            path.push(candidates[i])\n            backtrack(remainingSum - candidates[i], path, i)\n            path.pop()\n        }\n    }\n    backtrack(target, [], 0)\n\n    return result;\n};"
      },
      {
        "lang": "python",
        "file": "combo_sum_ii_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def combinationSum2(self, candidates: list[int], target: int) -> List[List[int]]:\n        candidates.sort()\n\n        res = []\n        subset = []\n        \n        def df(i, summ):\n            if summ == target:\n                res.append(subset.copy())\n                return\n            elif summ > target:\n                return\n            \n            if i == len(candidates):\n                return\n\n            \n            subset.append(candidates[i])\n            df(i+1, summ + candidates[i])\n            subset.pop()\n\n            while i < len(candidates) - 1 and candidates[i] == candidates[i+1]:\n                i += 1\n            \n            df(i+1, summ)\n        \n        df(0, 0)\n        return res\n\n\n         \n\n\n        "
      },
      {
        "lang": "python",
        "file": "combo_sum_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def combinationSum(self, candidates: list[int], target: int) -> List[List[int]]:\n        res = []\n        subset = []\n        def df(i, summ):\n            if i >= len(candidates):\n                return\n            if summ > target:\n                return\n            elif summ == target:\n                res.append(subset.copy())\n                return\n            \n\n            subset.append(candidates[i])\n            df(i, summ + candidates[i])\n            subset.pop()\n            df(i+1, summ)\n        \n        df(0, 0)\n        return res"
      }
    ]
  },
  {
    "id": "2026-03-06-session40",
    "date": "2026-03-06",
    "num": 40,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/combination-sum-iii/",
    "solutions": [
      {
        "lang": "java",
        "file": "Combination Sum III_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<Integer>> combinationSum3(int k, int n) \n    {\n        List<List<Integer>> res = new ArrayList<>();\n\n        int[] arr = {1,2,3,4,5,6,7,8,9};\n        Combination(0,0, k , n , new ArrayList<>() , arr ,res  );\n\n        return res;\n    }\n\n    public static void Combination(int index ,int sum, int len , int target , List<Integer> subsets , int[] arr, List<List<Integer>> res)\n    {\n        if(sum==target && subsets.size()==len)\n        {\n            res.add(new ArrayList<>(subsets));\n            return;\n        }\n        else if(index>=arr.length || subsets.size() > len || sum>target)\n        return;\n        \n\n        subsets.add(arr[index]);\n        Combination(index+1,sum+arr[index],len,target,subsets,arr,res);\n\n        subsets.remove((Integer)arr[index]);\n        Combination(index+1,sum,len,target,subsets,arr,res);\n    }\n}"
      },
      {
        "lang": "js",
        "file": "combination_sum_3_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number} k\n * @param {number} n\n * @return {number[][]}\n */\nvar combinationSum3 = function (k, n) {\n    let result = []\n\n    function backtrack(remainingSum, path, start) {\n        if (remainingSum === 0 && path.length === k) result.push([...path])\n        if (path.length === k) return\n\n        for (let i = start; i <= 9; i++) {\n            path.push(i)\n            backtrack(remainingSum - i, path, i + 1)\n            path.pop()\n        }\n    }\n    backtrack(n, [], 1)\n\n    return result;\n};"
      },
      {
        "lang": "python",
        "file": "combo_sum_iii_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    def combinationSum3(self, k: int, n: int) -> List[List[int]]:\n        res = []\n        ans = []\n        def df(i, summ):\n            if summ > n or len(ans) > k:\n                return\n            elif summ == n and len(ans) == k:\n                res.append(ans.copy())\n                return\n            \n            # if the numbers needed to complete the required list is more than the available numbers, we can return\n            if abs(k - len(ans)) > 9 - i:\n                return\n\n            if i >= 9:\n                return\n\n            el = i + 1\n            ans.append(el)\n            \n\n            df(i+1, summ + el)\n            ans.pop()\n            df(i+1, summ)\n        \n        df(0,0)\n\n        return res\n    \n\n\n\n\n    "
      }
    ]
  },
  {
    "id": "2026-03-10-session41",
    "date": "2026-03-10",
    "num": 41,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem :\nhttps://www.geeksforgeeks.org/problems/merge-sort/1\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=lRjxQuMHs34scHCsHX0BI,dDsre5T5VnEbblFTYvPLAQ",
    "solutions": [
      {
        "lang": "js",
        "file": "merge_sort_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number[]} arr\n * @param {number} l\n * @param {number} r\n */\nclass Solution {\n    merge(arr, l, m, r) {\n        let n1 = m - l + 1\n        let n2 = r - m\n        let L = new Array(n1)\n        let R = new Array(n2)\n\n        let k = l\n\n        for (let i = 0; i < n1; i++) {\n            L[i] = arr[k++]\n        }\n\n        for (let j = 0; j < n2; j++) {\n            R[j] = arr[k++]\n        }\n\n        let i = 0, j = 0;\n        k = l;\n\n        while (i < n1 && j < n2) {\n            if (L[i] <= R[j]) arr[k++] = L[i++]\n            else arr[k++] = R[j++]\n        }\n\n        while (i < n1) {\n            arr[k++] = L[i++]\n        }\n\n        while (j < n2) {\n            arr[k++] = R[j++]\n        }\n\n    }\n\n    mergeSort(arr, l, r) {\n        if (l >= r) return\n        let m = Math.floor(l + (r - l) / 2)\n\n        this.mergeSort(arr, l, m)\n        this.mergeSort(arr, m + 1, r)\n        this.merge(arr, l, m, r)\n    }\n}"
      },
      {
        "lang": "python",
        "file": "merge_sort_python.py",
        "user": "python",
        "content": "class Solution:\n    def mergeSorted(self, arr, l,mid, r):\n        temp = []\n        right = mid+1\n        left = l\n        \n        while left <= mid and right <= r:\n            if arr[left] <= arr[right]:\n                temp.append(arr[left])\n                left += 1\n            else:\n                temp.append(arr[right])\n                right += 1\n        \n        while left <= mid:\n            temp.append(arr[left])\n            left += 1\n        \n        while right <= r:\n            temp.append(arr[right])\n            right += 1\n            \n        \n        for i in range(len(temp)):\n            arr[i+l] = temp[i]\n                \n                \n    \n \n    def mergeSort(self, arr, l, r):\n        \n        if l == r:\n            return\n        \n        #code here\n        mid = (l+r)//2\n        \n        self.mergeSort(arr, l, mid)\n        self.mergeSort(arr, mid+1, r)\n        self.mergeSorted(arr, l, mid, r)\n        \n        "
      }
    ]
  },
  {
    "id": "2026-03-12-session42",
    "date": "2026-03-12",
    "num": 42,
    "title": "Coding Problem",
    "topics": [
      "arrays",
      "sorting",
      "control flow"
    ],
    "markdown": "# Coding Problem : \nhttps://www.geeksforgeeks.org/problems/quick-sort/1\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=GFHqdPIWS_tCuoq40HoDO,5cHLLHD7--Hw5IbasNvkMg\n\n# Assignment :\n- How'd the solution for merge sort change if array is to be sorted in decreasing order?\n- How'd the solution change for quick sort if :\n    - sort array in ascending order considering last element as pivot?\n    - sort array in descending order considering first element as pivot?\n    - sort array in descending order considering last element as pivot?",
    "solutions": []
  },
  {
    "id": "2026-03-16-session43",
    "date": "2026-03-16",
    "num": 43,
    "title": "Coding Problem",
    "topics": [
      "arrays"
    ],
    "markdown": "# Coding Problem :\nhttps://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=XjRXatzUMtw6PQib0wMKV,P_Es_4aKodijWXec37ikCA",
    "solutions": [
      {
        "lang": "python",
        "file": "inversion_count_sounak.py",
        "user": "sounak",
        "content": "class Solution:\n    \n    count = 0\n    \n    def countI(self, arr, s, mid, e):\n        i = s\n        j = mid + 1\n        \n        while i <= mid and j <= e:\n            if arr[i] > arr[j] and i < j:\n                self.count += 1\n                self.count += (mid - i)\n                j += 1\n            else:\n                i += 1\n        \n    def mergeL(self, arr, s, mid, e):\n        i = s\n        j = mid + 1\n        temp = []\n        \n        \n        while i <= mid and j <= e:\n            if arr[i] <= arr[j]:\n                temp.append(arr[i])\n                i += 1\n            else:\n                temp.append(arr[j])\n                j += 1\n                \n        \n        while i <= mid:\n            temp.append(arr[i])\n            i += 1\n            \n        while j <= e:\n            temp.append(arr[j])\n            j += 1\n            \n        for i in range(len(temp)):\n            arr[i+s] = temp[i]\n                \n        \n        \n    def sortandm(self, arr, s , e):\n        if s == e:\n            return\n        \n        mid = (s+e)//2\n        \n        self.sortandm(arr ,s, mid)\n        self.sortandm(arr ,mid+1, e)\n        self.countI(arr, s, mid, e)\n        self.mergeL(arr, s, mid, e)\n        \n    \n    def inversionCount(self, arr):\n        # Code Here\n        \n        lenn = len(arr)\n        strt = 0\n        end = lenn - 1\n        \n        self.sortandm(arr, strt, end)\n        \n        return self.count\n        \n        \n        \n        "
      }
    ]
  },
  {
    "id": "2026-03-17-session44",
    "date": "2026-03-17",
    "num": 44,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/merge-close-characters/description/\n",
    "solutions": []
  },
  {
    "id": "2026-03-24-session45",
    "date": "2026-03-24",
    "num": 45,
    "title": "Coding Problem",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Problem : \nhttps://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=FCutAks83lxXPUSX3FRax,8oaDHqstH2itLHQXM25wkA\n\n# Note :\nVariations possible on top of \"Rat in a Maze\" :\n- The rat is allowed to move in diagonal direction as well.\n- \"k\" number of revisits are allowed to a cell in a path.\n",
    "solutions": [
      {
        "lang": "java",
        "file": "rat_in_a_maze_Nirupam.java",
        "user": "Nirupam",
        "content": "class Solution {\n    public ArrayList<String> ratInMaze(int[][] maze ,int k) {\n        // code here\n        ArrayList<String> res = new ArrayList<>();\n        \n        if (maze[0][0] == 0) return res;\n        \n        int n = maze.length;\n\n        int[][] visitCount = new int[n][n];\n        \n        resc(maze , 0 , 0 , \"\" , res ,visitCount,k);\n        Collections.sort(res); // sorting important\n        return res;\n    }\n    \n    private void resc(int[][]maze , int row , int col , String currPath , ArrayList<String> res ,int[][] visitCount, int k) {\n        \n        int n = maze.length;\n        \n        if(row < 0 || row > n-1 || col <0 || col > n-1) {\n            return ;\n        }\n        // revisit limit check\n        if (visitCount[row][col] >= k) {\n            return;\n        }\n        \n        if(maze[row][col] == 0){\n            return;\n        }\n        \n        if(row ==n-1 && col == n-1) {\n           res.add(currPath);\n            \n            return;\n        }\n        \n\n        // Increase the visitcount of the current cell\n        visitCount[row][col]++;\n        \n        //up\n        resc(maze , row-1 , col , currPath+\"U\" , res ,visitCount , k);\n        //down\n        resc(maze , row+1 , col , currPath+\"D\" , res,visitCount , k);\n        //right\n        resc(maze , row , col+1 , currPath+\"R\" , res,visitCount , k);\n        //left\n        resc(maze , row , col-1 , currPath+\"L\" , res,visitCount , k);\n        \n        // backtrack\n        visitCount[row][col]--; // drease the visitCount of the cell\n    }\n}"
      },
      {
        "lang": "java",
        "file": "rat_in_a_maze_diagonal_variation_Nirupam.java",
        "user": "Nirupam",
        "content": "/*\n    Variations possible on top of \"Rat in a Maze\" :\n    The rat is allowed to move in diagonal direction as well.\n */\n\nclass Solution {\n    public ArrayList<String> ratInMaze(int[][] maze) {\n        // code here\n        ArrayList<String> res = new ArrayList<>();\n        \n        \n        resc(maze , 0 , 0 , \"\" , res);\n        Collections.sort(res); // sorting important\n        return res;\n    }\n    \n    private void resc(int[][]maze , int row , int col , String currPath , ArrayList<String> res) {\n        \n        int n = maze.length;\n        \n        if(row < 0 || row > n-1 || col <0 || col > n-1) {\n            return ;\n        }\n        \n        if(maze[row][col] == 0){\n            return;\n        }\n        \n        if(row ==n-1 && col == n-1) {\n           res.add(currPath);\n            \n            return;\n        }\n        \n        \n        \n        maze[row][col]=0;\n        \n        //up\n        resc(maze , row-1 , col , currPath+\"U\" , res);\n        //down\n        resc(maze , row+1 , col , currPath+\"D\" , res);\n        //right\n        resc(maze , row , col+1 , currPath+\"R\" , res);\n        //left\n        resc(maze , row , col-1 , currPath+\"L\" , res);\n\n        //diagonals check \n        \n        //up-right\n        resc(maze , row-1 , col+1 , currPath+\"UR\" , res);\n        //up-left\n        resc(maze , row-1 , col-1 , currPath+\"UL\" , res);\n        //down-right\n        resc(maze , row+1 , col+1 , currPath+\"DR\" , res);\n        //down-left\n        resc(maze , row+1 , col-1 , currPath+\"DL\" , res);\n        \n        maze[row][col]=1;\n    }\n}"
      },
      {
        "lang": "java",
        "file": "rat_in_a_maze_problem_Nirupam.java",
        "user": "Nirupam",
        "content": "// This solution for Rat in a Maze Problem in Java\n// Question link :- https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1\n\nclass Solution {\n    public ArrayList<String> ratInMaze(int[][] maze) {\n        // code here\n        ArrayList<String> res = new ArrayList<>();\n        \n        \n        resc(maze , 0 , 0 , \"\" , res);\n        Collections.sort(res); // sorting important\n        return res;\n    }\n    \n    private void resc(int[][]maze , int row , int col , String currPath , ArrayList<String> res) {\n        \n        int n = maze.length;\n        \n        if(row < 0 || row > n-1 || col <0 || col > n-1) {\n            return ;\n        }\n        \n        if(maze[row][col] == 0){\n            return;\n        }\n        \n        if(row ==n-1 && col == n-1) {\n           res.add(currPath);\n            \n            return;\n        }\n        \n        \n        \n        maze[row][col]=0;\n        \n        //up\n        resc(maze , row-1 , col , currPath+\"U\" , res);\n        //down\n        resc(maze , row+1 , col , currPath+\"D\" , res);\n        //right\n        resc(maze , row , col+1 , currPath+\"R\" , res);\n        //left\n        resc(maze , row , col-1 , currPath+\"L\" , res);\n        \n        maze[row][col]=1;\n    }\n}"
      }
    ]
  },
  {
    "id": "2026-03-25-session46",
    "date": "2026-03-25",
    "num": 46,
    "title": "Coding Problem",
    "topics": [
      "strings"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/palindrome-partitioning/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=fvLs9KStYglajVCaR2Fva,Ah1fpfZ879ESNmxG5_zieg",
    "solutions": [
      {
        "lang": "java",
        "file": "Palindrome Partitioning_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<String>> partition(String s) \n    {\n        List<List<String>> res = new ArrayList<>();\n        substring(0,res,new ArrayList<>(),s);\n\n        return res;\n    }\n    public static void substring(int index ,List<List<String>> res ,List<String> list ,String s)\n    {\n        if(index>=s.length())\n        {\n            res.add(new ArrayList<>(list));\n            return;\n        }\n        for(int i = index;i<s.length() ; i++)\n        {\n            String substring = s.substring(index,i+1); \n            if(palindrome(substring))\n            {\n                list.add(substring);\n\n                substring(i+1, res, list, s);\n                list.remove(list.size()-1);\n            }\n        }\n    }\n    public static boolean palindrome(String s)\n    {\n        //char[] array = s.toCharArray();\n        int left=0 , right = s.length()-1; \n        //int right = array.length-1;\n        while(left<=right)\n        {\n            if(s.charAt(right)==s.charAt(left))\n            {\n                left++;\n                right--;\n            }\n            else\n            return false;\n        }\n        // while(left<=right)\n        // {\n        //     if(array[left] == (array[right]))\n        //     {\n        //         left++;\n        //         right--;\n        //     }\n        //     else\n        //     return false;\n        // }\n        return true;\n\n\n        \n    }\n\n\n}"
      },
      {
        "lang": "js",
        "file": "palindrome_partitioning_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {string} s\n * @return {string[][]}\n */\n\nfunction isPalindrome(s) {\n    let i = 0, j = s.length - 1;\n    while (i < j) {\n        if (s[i] === s[j]) {\n            i++\n            j--\n        }\n        else return false\n    }\n    return true\n}\nvar partition = function (s) {\n    let result = []\n    function backtrack(path, remainingStr) {\n        if (remainingStr.length === 0) result.push([...path])\n        for (let i = 1; i <= remainingStr.length; i++) {\n            let choice = remainingStr.substring(0, i)\n            if (!isPalindrome(choice)) continue\n            path.push(choice)\n            backtrack(path, remainingStr.substring(i))\n            path.pop()\n        }\n    }\n    backtrack([], s)\n\n    return result\n};"
      }
    ]
  },
  {
    "id": "2026-03-26-session47",
    "date": "2026-03-26",
    "num": 47,
    "title": "Coding Problem",
    "topics": [
      "control flow"
    ],
    "markdown": "# Coding Problem : \nhttps://leetcode.com/problems/n-queens/\n- Solution discussed in session places queens col by col, strating from 1st col.\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=GBUKHTHBs9ZBfYQ7klTKR,J3EziUU-5S6M9g8GBBwb6w\n\n# Assignment : \nHow'd the solution for N-Queens change if we try to place queens :\n- row by row starting from 1st row, moving towards nth row.\n- row by row starting from nth row, moving towards 1st row.\n- col by col starting from nth col, moving towards 1st col.",
    "solutions": [
      {
        "lang": "cpp",
        "file": "n_queens_col_approach_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "// This is the row by col approach to solve n queens problem where we traverse through each col.\nclass Solution\n{\nprivate:\n    int isPossible(vector<vector<bool>> &maze, int row, int col)\n    {\n        // Horizontall check\n        for (int i = 0; i < col; i++)\n        {\n            if (maze[row][i])\n                return false;\n        }\n\n        // Top vertically check\n        int top = min(row, col);\n        for (int i = 1; i <= top; i++)\n        {\n            if (maze[row - i][col - i])\n                return false;\n        }\n\n        // bottom verticall check\n        int bottom = min((int)maze.size() - row - 1, col);\n        for (int i = 1; i <= bottom; i++)\n        {\n            if (maze[row + i][col - i])\n                return false;\n        }\n        return true;\n    }\n    void helper(vector<vector<bool>> &maze, vector<vector<string>> &ans, vector<string> &ds, int col, int n)\n    {\n        if (col >= maze[0].size())\n        {\n            // reverse(ds.begin(), ds.end());\n            ans.push_back(ds);\n            return;\n        }\n\n        string s;\n        for (int i = 0; i < n; i++)\n        {\n            s.push_back('.');\n        }\n\n        for (int row = 0; row < maze.size(); row++)\n        {\n            if (isPossible(maze, row, col))\n            {\n                maze[row][col] = true;\n                s[row] = 'Q';\n                ds.push_back(s);\n                helper(maze, ans, ds, col + 1, n);\n                maze[row][col] = false;\n                s[row] = '.';\n                ds.pop_back();\n            }\n        }\n    }\n\npublic:\n    vector<vector<string>> solveNQueens(int n)\n    {\n        vector<string> ds;\n        vector<vector<string>> ans;\n        vector<vector<bool>> maze(n, vector<bool>(n, false));\n        helper(maze, ans, ds, 0, n);\n        return ans;\n    }\n};"
      },
      {
        "lang": "cpp",
        "file": "n_queens_row_approach_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "// This is the row by row approach to solve n queens problem where we traverse through each row.\nclass Solution\n{\nprivate:\n    bool isPossible(vector<vector<bool>> &maze, int row, int col)\n    {\n        // checking vertically\n        for (int i = 0; i < row; i++)\n        {\n            if (maze[i][col])\n                return false;\n        }\n\n        // checking left horizontally\n        int maxleft = min(row, col);\n        for (int i = 1; i <= maxleft; i++)\n        {\n            if (maze[row - i][col - i])\n                return false;\n        }\n\n        // checking right horizontally\n        int maxRight = min(row, (int)maze.size() - col - 1);\n        for (int i = 1; i <= maxRight; i++)\n        {\n            if (maze[row - i][col + i])\n                return false;\n        }\n        return true;\n    }\n\n    void helper(vector<vector<bool>> &maze, vector<vector<string>> &ans, vector<string> &ds, int row, int n)\n    {\n        if (row >= maze.size())\n        {\n            ans.push_back(ds);\n            return;\n        }\n\n        string s;\n        for (int i = 0; i < n; i++)\n        {\n            s.push_back('.');\n        }\n\n        for (int col = 0; col < maze.size(); col++)\n        {\n            if (isPossible(maze, row, col))\n            {\n                maze[row][col] = true;\n                s[col] = 'Q';\n                ds.push_back(s);\n                helper(maze, ans, ds, row + 1, n);\n                maze[row][col] = false;\n                s[col] = '.';\n                ds.pop_back();\n            }\n        }\n    }\n\npublic:\n    vector<vector<string>> solveNQueens(int n)\n    {\n        vector<string> ds;\n        vector<vector<string>> ans;\n        vector<vector<bool>> maze(n, vector<bool>(n, false));\n        helper(maze, ans, ds, 0, n);\n        return ans;\n    }\n};"
      },
      {
        "lang": "java",
        "file": "N-Queens_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public List<List<String>> solveNQueens(int n) \n    {\n        List<List<String>> res = new ArrayList<>();\n        String[][] matrix = new String[n][n];\n        \n        for(int i = 0;i<n;i++)      //careful - forgot to add \".\" in every matrix got error\n            {\n                for(int j = 0;j<n;j++)\n                {\n                    matrix[i][j] = \".\";\n                }\n            }\n        queen(0 ,0 ,n ,matrix, res);\n\n        return res;\n    }\n\n    public static void queen(int column, int row ,int n,String[][] matrix, List<List<String>> res)\n    {\n        if(column>=n)  //careful got error\n        {\n            List<String> list = new ArrayList<>();\n            for(int i = 0;i<n;i++)\n            {\n                String str=\"\";\n                for(int j = 0;j<n;j++)\n                {\n                    str = str + matrix[i][j];\n                }\n                list.add(str);\n            }            \n            res.add(new ArrayList<>(list));\n            return;\n        }\n\n        for(int i = row;i<n;i++)\n        {\n            if(check(i, column, n, matrix) && row < n && column< n)\n            {   \n                matrix[i][column] = \"Q\";\n                queen(column+1,0 ,n, matrix, res);\n\n                matrix[i][column] = \".\";\n\n            }\n        }\n    }\n    public static boolean check(int i, int j, int n, String[][] matrix)\n    {\n        int row=i, column=j;  //careful got error\n        while(row>=0 && column>=0 && row<n && column<n)  //LeftTop\n        {\n            if((matrix[row][column]).equals(\"Q\"))   //careful got error\n            return false;\n            else\n            {\n                row--; column--;\n            }\n        }\n        row=i;column=j;\n        while(row>=0 && column>=0 && row<n && column<n)  //Left\n        {\n            if((matrix[row][column]).equals(\"Q\"))\n            return false;\n            else\n            {\n                column--;\n            }\n        }\n        row=i;column=j;\n        while(row>=0 && column>=0 && row<n && column<n)  //LeftDown\n        {\n            if((matrix[row][column]).equals(\"Q\"))\n            return false;\n            else\n            {\n                column--; row++;\n            }\n        }\n        return true;\n    }\n}"
      },
      {
        "lang": "java",
        "file": "n_queens_col_by_col_Nirupam.java",
        "user": "Nirupam",
        "content": "// col by col starting from 1st col, moving towards nth col.\n\nclass Solution {\n    public List<List<String>> solveNQueens(int n) {\n        \n        List<List<String>> res = new ArrayList<>();\n\n        char[][] board = new char[n][n];\n        for(char[] row : board){\n            Arrays.fill(row , '.');\n        }\n\n        resc(0 , board , res , n);\n        return res;\n    }\n\n    private void resc(int col , char[][] board , List<List<String>> res, int n){\n\n        if(col == n){\n            res.add(construct(board));\n            return;\n        }\n        // move to each row one by one in each col\n        for(int row=0; row < n ; row++)\n        {\n            if(isPossible(row , col , board ,n)){\n                board[row][col] ='Q';\n\n                resc(col+1,board,res,n); // move to next col\n\n                board[row][col] = '.';\n            }\n        }\n    }\n\n    private boolean isPossible(int row , int col , char[][]board , int n){\n        int r= row, c = col;\n\n        // top left check;\n        while(r>=0 && c>=0) {\n            if(board[r][c] == 'Q'){\n                return false;\n            }\n            c--;\n            r--;\n        }\n\n        // bottom left;\n        r=row;\n         c=col;\n        while(r<n && c>=0){\n            if(board[r][c]=='Q')\n            return false;\n\n            c--;\n            r++;\n        }\n\n        // left\n        r=row;\n        c=col;\n        while(c>=0){\n            if(board[r][c] == 'Q'){\n                return false;\n            }\n            c--;\n        }\n\n        return true;\n    }\n\n// coverting the rows to list\n    private List<String> construct(char[][] board){\n        List<String> list = new ArrayList<>();\n        for(char[] row:board){\n            list.add(new String(row));\n        }\n        return list;\n    }\n}"
      },
      {
        "lang": "java",
        "file": "n_queens_row_by_row_Kumar_Nirupam.java",
        "user": "Nirupam",
        "content": "//row by row starting from 1st row, moving towards nth row.\nclass Solution {\n    public List<List<String>> solveNQueens(int n) {\n        \n        List<List<String>> res = new ArrayList<>();\n\n        char[][] board = new char[n][n];\n        for(char[] row : board){\n            Arrays.fill(row , '.');\n        }\n\n        resc(0 , board , res , n);\n        return res;\n    }\n\n    private void resc(int row , char[][] board , List<List<String>> res, int n){\n\n        if(row == n){\n            res.add(construct(board));\n            return;\n        }\n        // move to each col one by one in each row\n        for(int col=0; col < n ; col++)\n        {\n            if(isPossible(row , col , board ,n)){\n                board[row][col] ='Q';\n\n                resc(row+1,board,res,n); // move to next col\n\n                board[row][col] = '.';\n            }\n        }\n    }\n\n    private boolean isPossible(int row , int col , char[][]board , int n){\n        int r= row, c = col;\n\n        // top left check;\n        while(r>=0 && c>=0) {\n            if(board[r][c] == 'Q'){\n                return false;\n            }\n            c--;\n            r--;\n        }\n\n        // top right;\n        r=row;\n         c=col;\n        while(c<n && r>=0){\n            if(board[r][c]=='Q')\n            return false;\n\n            c++;\n            r--;\n        }\n\n        // up\n        r=row;\n        c=col;\n        while(r>=0){\n            if(board[r][c] == 'Q'){\n                return false;\n            }\n            r--;\n        }\n\n        return true;\n    }\n\n// coverting the rows to list\n    private List<String> construct(char[][] board){\n        List<String> list = new ArrayList<>();\n        for(char[] row:board){\n            list.add(new String(row));\n        }\n        return list;\n    }\n}"
      },
      {
        "lang": "js",
        "file": "n_queens_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {number} n\n * @return {string[][]}\n */\n\nfunction transformBoard(board) {\n    const result = []\n    for (let item of board) {\n        result.push(item.join(''))\n    }\n    return result\n}\n\nvar solveNQueens = function (n) {\n    const board = []\n    for (let i = 0; i < n; i++) {\n        board.push(new Array(n).fill('.'))\n    }\n\n    const result = []\n    function backtrack(board, row, colSet, diagSet, antiDiagSet) {\n        if (row === n) result.push(transformBoard(board))\n\n        for (let col = 0; col < n; col++) {\n            if (colSet.has(col) || diagSet.has(row - col) || antiDiagSet.has(row + col)) continue\n\n            board[row][col] = 'Q'\n            colSet.add(col)\n            diagSet.add(row - col)\n            antiDiagSet.add(row + col)\n\n            backtrack(board, row + 1, colSet, diagSet, antiDiagSet)\n\n            board[row][col] = '.'\n            colSet.delete(col)\n            diagSet.delete(row - col)\n            antiDiagSet.delete(row + col)\n        }\n    }\n    backtrack(board, 0, new Set(), new Set(), new Set())\n    return result\n};"
      }
    ]
  },
  {
    "id": "2026-03-30-session48",
    "date": "2026-03-30",
    "num": 48,
    "title": "Coding Probelm",
    "topics": [
      "general"
    ],
    "markdown": "# Coding Probelm : \nhttps://leetcode.com/problems/n-queens/description/\n\n# Excalidraw Link :\nhttps://excalidraw.com/#json=c33g23N9qOftZVLWvPZQl,y8YM5SjpLE1qn2aiL2Y3uw\n\n",
    "solutions": [
      {
        "lang": "java",
        "file": "isValidSudoku_Ayush Kumar.java",
        "user": "Ayush Kumar",
        "content": "class Solution {\n    public boolean isValidSudoku(char[][] board) \n    {\n        \n        for(int row=0;row<9;row++)\n        {\n            for(int column=0;column<9;column++)\n            {\n                if(board[row][column] != '.')\n                {\n                    if( isPossible(board, row, column) == false)\n                    return false;\n\n                }\n            }\n        }\n        return true;\n    }\n    \n    public static boolean isPossible(char[][] board, int row, int column)\n    {\n        //int i = row,j = column;\n        for(int i = 0;i<9;i++)  //checking row\n        {\n            if(i == row)\n            continue;\n            else if( board[i][column] == board[row][column])\n            {\n                return false;\n            }\n        }\n\n        for(int j = 0;j<9;j++)\n        {\n            if(j == column)\n            continue;\n            else if( board[row][j] == board[row][column])\n            {\n                return false;\n            }\n        }\n\n        int m = row/3;\n        m = m*3;\n\n        int n = column/3;\n        n=n*3;\n        for(int i=m;i<m+3  ;i++)\n        {\n            for(int j=n;j<n+3 ;j++)\n            {\n                if(board[i][j] != '.')\n                {\n                    if(i==row && j==column)\n                    continue;\n                    else if( board[i][j] == board[row][column])\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n}"
      }
    ]
  },
  {
    "id": "2026-03-31-session49",
    "date": "2026-03-31",
    "num": 49,
    "title": "Trees Problems",
    "topics": [
      "trees"
    ],
    "markdown": "# Excalidraw Link :\nhttps://excalidraw.com/#json=2UywP2FK14fGHinR8ZDHe,DjMxaAPp2KOicozmgpLgvA\n\n# Assignment :\nhttps://www.geeksforgeeks.org/dsa/properties-of-binary-tree/\n",
    "solutions": []
  },
  {
    "id": "2026-04-03-session50",
    "date": "2026-04-03",
    "num": 50,
    "title": "Trees Problems",
    "topics": [
      "trees",
      "binary tree",
      "dfs"
    ],
    "markdown": "# Topic Covered :\nDFS traversal in general, followed by the different types of DFS traversal in a binary tree.\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=JQal0SbdSqNNRYoNX7eNT,PKp6j1qHzNEiWJsH36E75w\n\n# Assignment :\n- https://leetcode.com/problems/binary-tree-preorder-traversal/\n- https://leetcode.com/problems/binary-tree-inorder-traversal/\n- https://leetcode.com/problems/binary-tree-postorder-traversal/description/\n",
    "solutions": [
      {
        "lang": "cpp",
        "file": "binary_tree_preorder_traversal_sanketsingh.cpp",
        "user": "sanketsingh",
        "content": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution\n{\nprivate:\n    void helper(TreeNode *node, vector<int> &res)\n    {\n        if (node == nullptr)\n            return;\n        if (node->left == nullptr && node->right == nullptr)\n        {\n            res.push_back(node->val);\n            return;\n        }\n\n        res.push_back(node->val);\n        helper(node->left, res);\n        helper(node->right, res);\n    }\n\npublic:\n    vector<int> preorderTraversal(TreeNode *root)\n    {\n        vector<int> res;\n        helper(root, res);\n        return res;\n    }\n};"
      },
      {
        "lang": "java",
        "file": "binary_tree_inorder_traversal_soumava.java",
        "user": "soumava",
        "content": "class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        inorder(root, result);\n        return result;\n    }\n\n    private void inorder(TreeNode node, List<Integer> result) {\n        if (node == null) return;\n\n        inorder(node.left, result);\n        result.add(node.val);\n        inorder(node.right, result); \n    }\n}"
      },
      {
        "lang": "java",
        "file": "binary_tree_postorder_traversal_soumava.java",
        "user": "soumava",
        "content": "class Solution {\n    public void traversal(TreeNode root, List<Integer> res)\n    {\n        if (root != null) {\n            traversal(root.left, res);\n            traversal(root.right, res);\n            res.add(root.val);\n        }\n    }\n\n    public List<Integer> postorderTraversal(TreeNode root)\n    {\n        List<Integer> res = new ArrayList<>();\n        traversal(null, res);\n        return res;\n    }\n}"
      },
      {
        "lang": "java",
        "file": "binary_tree_preorder_traversal_soumava.java",
        "user": "soumava",
        "content": "class Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        traverse(root, result);\n        return result;\n    }\n\n    private void traverse(TreeNode node, List<Integer> result) {\n        if (node == null) return;\n\n        result.add(node.val);\n        traverse(node.left, result);\n        traverse(node.right, result);\n    }\n}"
      },
      {
        "lang": "js",
        "file": "binary_tree_inorder_traversal_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function (root) {\n    let result = []\n\n    function traverse(currNode) {\n        if (!currNode) return\n        traverse(currNode.left)\n        result.push(currNode.val)\n        traverse(currNode.right)\n    }\n\n    traverse(root)\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "binary_tree_postorder_traversal_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar postorderTraversal = function (root) {\n    const result = []\n\n    function traverse(currNode) {\n        if (!currNode) return\n        traverse(currNode.left)\n        traverse(currNode.right)\n        result.push(currNode.val)\n    }\n    traverse(root)\n\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "binary_tree_preorder_traversal_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar preorderTraversal = function (root) {\n    if (!root) return []\n    const result = []\n    function traverse(currNode) {\n        result.push(currNode.val)\n        currNode.left && traverse(currNode.left)\n        currNode.right && traverse(currNode.right)\n    }\n\n    traverse(root)\n    return result\n};"
      }
    ]
  },
  {
    "id": "2026-04-06-session51",
    "date": "2026-04-06",
    "num": 51,
    "title": "Coding Problem",
    "topics": [
      "trees"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/maximum-depth-of-binary-tree/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=e7KrrVIPW4R1jOAY_R1gw,TR_eqVeWktzcZrsBrjht_A\n\n# Assignment :\n- https://www.geeksforgeeks.org/problems/level-of-a-node-in-binary-tree/1\n",
    "solutions": [
      {
        "lang": "js",
        "file": "level_of_a_node_in_binary_tree_aryan.js",
        "user": "aryan",
        "content": "/**\n * @param {Node} root\n * @param {number} target\n * @return {number}\n */\nclass Solution {\n    getLevel(root, target) {\n        let result = 0\n        function traverse(curr, level) {\n            if (!curr) return\n\n            if (curr.data === target) result = level\n\n            traverse(curr.left, level + 1)\n            traverse(curr.right, level + 1)\n        }\n        traverse(root, 1)\n\n        return result\n    }\n}\n\n// optimized\n// As soon as target is found immediately return level\n\nclass Solution {\n    getLevel(root, target) {\n        function traverse(curr, level) {\n            if (!curr) return 0\n\n            if (curr.data === target) return level\n\n            const left = traverse(curr.left, level + 1)\n\n            if (left) return left\n\n            return traverse(curr.right, level + 1)\n        }\n        return traverse(root, 1)\n    }\n}"
      },
      {
        "lang": "js",
        "file": "max_depth_of_tree_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\n\n// top down approach\nvar maxDepth = function (root) {\n    let maximumDepth = 0;\n\n    function traverse(currNode, depth) {\n        if (!currNode) return currNode\n        maximumDepth = Math.max(depth, maximumDepth)\n        traverse(currNode.left, depth + 1)\n        traverse(currNode.right, depth + 1)\n    }\n\n    traverse(root, 1)\n\n    return maximumDepth\n\n};\n\n// bottom up approach\n\nvar maxDepth = function (root) {\n    function traverse(currNode) {\n        if (!currNode) return 0\n        let left = traverse(currNode.left)\n        let right = traverse(currNode.right)\n        return 1 + Math.max(left, right)\n    }\n    return traverse(root)\n};"
      }
    ]
  },
  {
    "id": "2026-04-07-session52",
    "date": "2026-04-07",
    "num": 52,
    "title": "Coding Problem",
    "topics": [
      "trees"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/diameter-of-binary-tree/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=yMRfJ6lWYClUERE99603Z,ZN56lmVVP3sa_wbDer41ng\n\n# Assignment :\nhttps://leetcode.com/problems/minimum-depth-of-binary-tree/description/\n",
    "solutions": [
      {
        "lang": "js",
        "file": "diameter_of_binary_tree_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar diameterOfBinaryTree = function (root) {\n    let diameter = 0\n\n    function traverse(currNode) {\n        if (!currNode) return 0\n\n        let left = traverse(currNode.left)\n        let right = traverse(currNode.right)\n        \n        diameter = Math.max(diameter, left + right)\n\n        return 1 + Math.max(left, right)\n    }\n\n    traverse(root)\n\n    return diameter\n};"
      },
      {
        "lang": "js",
        "file": "minimum_depth_of_binary_tree_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar minDepth = function (root) {\n    function traverse(currNode) {\n        if (!currNode) return 0\n        let left = traverse(currNode.left)\n        let right = traverse(currNode.right)\n\n        if (left === 0) return 1 + right\n        if (right === 0) return 1 + left\n        return 1 + Math.min(left, right)\n    }\n    return traverse(root)\n};"
      },
      {
        "lang": "python",
        "file": "diameter_of_b_tree_sounak.py",
        "user": "sounak",
        "content": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    maxx = -1\n\n    def ab(self, root: Optional[TreeNode]) -> int:\n        if root == None:\n            return 0\n        \n        l = self.ab(root.left)\n        r = self.ab(root.right)\n\n        self.maxx = max(self.maxx, l+r)\n        return 1 + max(l,r)\n\n\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        m = self.ab(root)\n        return self.maxx\n\n        "
      }
    ]
  },
  {
    "id": "2026-04-08-session53",
    "date": "2026-04-08",
    "num": 53,
    "title": "Trees Problems",
    "topics": [
      "trees",
      "bfs"
    ],
    "markdown": "# Topic Covered :\nBFS traversal in general, followed by the same in trees.\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=Fjbozata8sKmRwZoXE4mw,L67B5-PyO01kYNJhImpcZw\n\n# Assignment :\n- https://www.naukri.com/code360/problems/level-order-traversal_796002\n- https://leetcode.com/problems/binary-tree-level-order-traversal/description/",
    "solutions": [
      {
        "lang": "js",
        "file": "level_order_traversal_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function (root) {\n    if (!root) return []\n    let q = [root]\n    let result = []\n    while (q.length) {\n\n        const level = []\n        const levelSize = q.length;\n\n        for (let i = 0; i < levelSize; i++) {\n            let lastItem = q.shift()\n            level.push(lastItem.val)\n            lastItem.left && q.push(lastItem.left)\n            lastItem.right && q.push(lastItem.right)\n        }\n\n        result.push(level)\n    }\n\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "level_order_traversal_two_aryan.js",
        "user": "aryan",
        "content": "// Input --> [3,9,20,null,null,15,7]\n// Ouptut --> [3, 9, 20, 15, 7]\n// https://www.naukri.com/code360/problems/level-order-traversal_796002\n\nvar levelOrder = function (root) {\n    if (!root) return []\n\n    let q = [root]\n    let result = []\n\n    while (q.length) {\n        let curr = q.shift()\n        result.push(curr.val)\n\n        if (curr.left) q.push(curr.left)\n        if (curr.right) q.push(curr.right)\n    }\n\n    return result\n};"
      }
    ]
  },
  {
    "id": "2026-04-09-session54",
    "date": "2026-04-09",
    "num": 54,
    "title": "Session 54",
    "topics": [
      "general"
    ],
    "markdown": "LIVE Problem Solving Session :\n- https://leetcode.com/problems/path-sum/description/\n- https://leetcode.com/problems/path-sum-ii/description/",
    "solutions": [
      {
        "lang": "java",
        "file": "Path_Sum_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Statement : https://leetcode.com/problems/path-sum/description/\n*/\n\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    public boolean hasPathSum(TreeNode root, int targetSum) {\n        return hasTarget(root, 0, targetSum);\n    }\n\n    private boolean hasTarget(TreeNode root, int sum, int targetSum) {\n        if(root == null)\n            return false;\n\n        if(root.left == null && root.right == null) {\n            if(sum + root.val == targetSum)\n                return true;\n            return false;\n        }\n\n        return hasTarget(root.left, sum + root.val, targetSum) || hasTarget(root.right, sum + root.val, targetSum);\n    }\n}\n\n/*\nApproach : Bottom Up\nTime Complexity : O(N) - Every node is visited only once\nSpae Complexity : O(H), where H is the height of the tree\n */"
      },
      {
        "lang": "java",
        "file": "Path_Sum_II_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Statement : https://leetcode.com/problems/path-sum-ii/description/\n*/\n\nimport java.util.List;\nimport java.util.ArrayList;\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    List<List<Integer>> res;\n    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {\n        res = new ArrayList<>();\n        getPaths(root, 0, targetSum, new ArrayList<>());\n        return res;\n    }\n\n    private void getPaths(TreeNode root, int sum, int target, List<Integer> currList) {\n        if(root == null)\n            return;\n        \n        currList.add(root.val);\n\n        if(root.left == null && root.right == null) {\n            if(root.val + sum == target) {\n                res.add(new ArrayList<>(currList));\n            }\n            currList.remove(currList.size() - 1);\n            return;\n        }\n        getPaths(root.left, sum + root.val, target, currList);\n        getPaths(root.right, sum + root.val, target, currList);\n        currList.remove(currList.size() - 1);\n    }\n}\n\n/*\nApproach : Bottom Up\nTime Complexity : O(N^2); every node is visited once and copying the current list in res\nSpae Complexity : O(H), where H is the height of the tree\n */\n"
      },
      {
        "lang": "js",
        "file": "path_sum_2_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} targetSum\n * @return {number[][]}\n */\nvar pathSum = function (root, targetSum) {\n    let result = []\n\n    function traverse(curr, sum, arr) {\n        if (!curr) return\n        arr.push(curr.val)\n        sum += curr.val\n\n        const isLeaf = !curr.left && !curr.right\n        if (isLeaf) {\n            if (sum === targetSum) result.push([...arr])\n            return\n        }\n\n        traverse(curr.left, sum, [...arr])\n        traverse(curr.right, sum, [...arr])\n    }\n\n    traverse(root, 0, [])\n    return result\n};\n\n// improved version with backtracking\n\nvar pathSum = function (root, targetSum) {\n    let result = []\n\n    function traverse(curr, sum, arr) {\n        if (!curr) return\n        arr.push(curr.val)\n        sum += curr.val\n\n        const isLeaf = !curr.left && !curr.right\n        if (isLeaf && sum === targetSum) result.push([...arr])\n        traverse(curr.left, sum, arr)\n        traverse(curr.right, sum, arr)\n        arr.pop()\n    }\n\n    traverse(root, 0, [])\n    return result\n};"
      },
      {
        "lang": "js",
        "file": "path_sum_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} targetSum\n * @return {boolean}\n */\nvar hasPathSum = function (root, targetSum) {\n    if (!root) return false\n    function traverse(curr, sum) {\n        sum = sum + curr.val\n        if (!curr.left && !curr.right) return sum === targetSum\n        let left = curr?.left ? traverse(curr.left, sum) : false\n        let right = curr?.right ? traverse(curr.right, sum) : false\n        return left || right\n    }\n    return traverse(root, 0)\n};"
      },
      {
        "lang": "python",
        "file": "path_sum_11_sounak.py",
        "user": "sounak",
        "content": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def ab(self, root: Optional[TreeNode], targetSum: int, curr: int, path: list[int], res: list[list[int]]):\n        if root == None:\n            return\n\n        curr += root.val\n        path.append(root.val)\n\n        if root.left == None and root.right == None and curr == targetSum:\n            res.append(path.copy())\n        \n        self.ab(root.left, targetSum, curr, path, res)\n        self.ab(root.right, targetSum, curr, path, res)\n        path.pop()\n\n        \n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:\n        res = []\n        self.ab(root, targetSum, 0, [], res)\n        return res"
      },
      {
        "lang": "python",
        "file": "path_sum_sounak.py",
        "user": "sounak",
        "content": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def ab(self, curr: int, targetSum: int, root: Optional[TreeNode]):\n        if root == None:\n            return False\n\n        curr += root.val\n        print(curr, targetSum)\n        \n        if root.left == None and root.right == None and curr == targetSum:\n            return True\n\n\n        l = self.ab(curr, targetSum, root.left)\n        if l is not True:\n            r = self.ab(curr, targetSum, root.right)\n        return l or r\n\n    \n    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:\n        return self.ab(0, targetSum, root)\n        \n        "
      }
    ]
  },
  {
    "id": "2026-04-10-session55",
    "date": "2026-04-10",
    "num": 55,
    "title": "Coding Problem",
    "topics": [
      "trees"
    ],
    "markdown": "# Coding Problem :\nhttps://leetcode.com/problems/binary-tree-maximum-path-sum/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=dtvkmAQoziKuFoFOZ0JC2,Ny_qSNi6kaQEHxqysPdKKQ\n\n# Assignment :\n- https://leetcode.com/problems/binary-tree-paths/description/\n",
    "solutions": [
      {
        "lang": "java",
        "file": "Binary_Tree_Paths_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Statement : https://leetcode.com/problems/binary-tree-paths/\n*/\n\nimport java.util.List;\nimport java.util.ArrayList;\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    public List<String> binaryTreePaths(TreeNode root) {\n        List<String> res = new ArrayList<>();\n        List<Integer> currPath = new ArrayList<>();\n        findPaths(root, res, currPath);\n        return res;\n    }\n\n    private void findPaths(TreeNode root, List<String> res, List<Integer> currPath) {\n        if(root == null)\n            return;\n\n        currPath.add(root.val);\n\n        if(root.left == null && root.right == null) {\n            StringBuilder currPathStr = new StringBuilder();\n\n            for(int x : currPath) {\n                currPathStr.append(String.valueOf(x));\n                currPathStr.append(\"->\");\n            }\n            String st = currPathStr.toString();\n            st = st.substring(0, st.length() - 2);\n            res.add(st);\n\n            currPath.remove(currPath.size() - 1);\n            return;\n        }\n\n        findPaths(root.left, res, currPath);\n        findPaths(root.right, res, currPath);\n        currPath.remove(currPath.size() - 1);\n    }\n}\n\n/*\nApproach : Bottom Up\nTime Complexity : O(N^2)\nSpae Complexity : O(H), where H is the height of the tree\n */"
      },
      {
        "lang": "java",
        "file": "Maximum_Path_Sum_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Statement : https://leetcode.com/problems/binary-tree-maximum-path-sum/description/\n*/\n\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    int res = Integer.MIN_VALUE;\n    public int maxPathSum(TreeNode root) {\n        getMaxPathSum(root);\n        return res;\n    }\n\n    private int getMaxPathSum(TreeNode root) {\n        if(root == null)\n            return 0;\n        \n        int leftPathSum = Math.max(0, getMaxPathSum(root.left));\n        int rightPathSum = Math.max(0, getMaxPathSum(root.right));\n        res = Math.max(res, root.val + leftPathSum + rightPathSum);\n        return root.val + Math.max(leftPathSum, rightPathSum);\n    }\n}\n\n/*\nApproach : Bottom Up\nTime Complexity : O(N) - Every node is visited only once\nSpae Complexity : O(H), where H is the height of the tree\n */"
      },
      {
        "lang": "js",
        "file": "binary_tree_max_path_sum_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxPathSum = function (root) {\n    let maxSum = -Infinity\n\n    function traverse(curr) {\n        if (!curr) return 0\n        const left = traverse(curr.left)\n        const right = traverse(curr.right)\n\n        const pathThroughNode = left + right + curr.val\n        const oneSidePath = Math.max(left, right) + curr.val\n        const currNodeOnly = curr.val\n\n        maxSum = Math.max(maxSum, pathThroughNode, oneSidePath, currNodeOnly)\n\n        return Math.max(oneSidePath, currNodeOnly)\n    }\n    traverse(root)\n\n    return maxSum\n};"
      },
      {
        "lang": "js",
        "file": "binary_tree_paths_aryan.js",
        "user": "aryan",
        "content": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {string[]}\n */\nvar binaryTreePaths = function (root) {\n    let result = []\n\n    function traverse(curr, path) {\n        if (!curr) return\n\n        let newPath = path === '' ? \"\" + `${curr.val}` : path + '->' + curr.val\n        const isLeafNode = !curr.left && !curr.right\n\n        if (isLeafNode) result.push(newPath)\n\n        traverse(curr.left, newPath)\n        traverse(curr.right, newPath)\n    }\n\n    traverse(root, '')\n\n    return result\n};"
      },
      {
        "lang": "python",
        "file": "binary_tree_path_sounak.py",
        "user": "sounak",
        "content": "\n# Problem Statement : https://leetcode.com/problems/binary-tree-maximum-path-sum/description/\n\n\n\nclass Solution:\n    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:\n\n        res = []\n        if root == None:\n            return res\n\n        val = root.val\n        \n        l1 = self.binaryTreePaths(root.left)\n        l2 = self.binaryTreePaths(root.right)\n\n        l = l1 + l2\n\n        if len(l) == 0:\n            return [f\"{val}\"]\n            \n        for i in range(len(l)):\n            p = f\"{val}->{l[i]}\"\n            res.append(p)\n        \n        return res"
      }
    ]
  },
  {
    "id": "2026-04-13-session56",
    "date": "2026-04-13",
    "num": 56,
    "title": "Coding Problem",
    "topics": [
      "trees"
    ],
    "markdown": "# Coding Problem\nhttps://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=lQeE2Z9VtN52QGZ7RZGeF,S7-u_fMsh7FN3dSVkuVmcg\n\n# Assignment :\nhttps://leetcode.com/problems/sum-root-to-leaf-numbers/\n",
    "solutions": [
      {
        "lang": "java",
        "file": "Boundary_Traversal_DFS_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Link: https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1\n*/\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n\nclass Solution {\n    public List<Integer> boundaryOfBinaryTree(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        List<Integer> rightBoundaryNodesList = new ArrayList<>();\n        \n        if(!isLeaf(root)) {\n            res.add(root.val);\n        }\n\n        if(root.left != null) \n            addLeftBoundaryNodes(root.left, res);\n\n        addLeaves(root, res);\n\n        if(root.right != null) \n            addRightBoundaryNodes(root.right, res);\n            \n        return res;\n    }\n\n    private void addLeftBoundaryNodes(TreeNode root, List<Integer> res) {\n        if(root == null)\n            return;\n\n        if(!isLeaf(root)) {\n            res.add(root.val);\n        }\n\n        if(root.left != null) {\n            addLeftBoundaryNodes(root.left, res);\n        } else {\n            addLeftBoundaryNodes(root.right, res);\n        }\n    }\n\n    private void addLeaves(TreeNode root, List<Integer> res) {\n        if(root == null)\n            return;\n\n        if(isLeaf(root)) {\n            res.add(root.val);\n        }\n\n        addLeaves(root.left, res);\n        addLeaves(root.right, res);\n    }\n\n    private void addRightBoundaryNodes(TreeNode root, List<Integer> res) {\n        if(root == null)\n            return;\n\n        if(root.right != null) {\n            addRightBoundaryNodes(root.right, res);\n        } else {\n            addRightBoundaryNodes(root.left, res);\n        }\n\n        if(!isLeaf(root)) {\n            res.add(root.val);\n        }\n    }\n\n    private boolean isLeaf(TreeNode root) {\n        return root.left == null && root.right == null;\n    }\n}\n\n/*\n    Time Complexity : O(N) - Every node is visited only once\n    Space Complexity : O(H), where H is the height of the tree\n*/\n"
      },
      {
        "lang": "java",
        "file": "Boundary_Traversal_Iterative_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Link: https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1\n*/\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public List<Integer> boundaryOfBinaryTree(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        \n        if(!isLeaf(root)) {\n            res.add(root.val);\n        }\n\n        addLeftBoundaryNodes(root, res);\n        addLeaves(root, res);\n        addRightBoundaryNodes(root, res);\n        return res;\n    }\n\n    private void addLeftBoundaryNodes(TreeNode root, List<Integer> res) {\n        TreeNode temp = root.left;\n        while(temp != null) {\n            if(!isLeaf(temp)) {\n                res.add(temp.val);\n            }\n            if(temp.left != null) {\n                temp = temp.left;\n            } else {\n                temp = temp.right;\n            }\n        }\n    }\n\n    private void addLeaves(TreeNode root, List<Integer> res) {\n        if(root == null)\n            return;\n\n        if(isLeaf(root)) {\n            res.add(root.val);\n        }\n\n        addLeaves(root.left, res);\n        addLeaves(root.right, res);\n    }\n\n    private void addRightBoundaryNodes(TreeNode root, List<Integer> res) {\n        TreeNode temp = root.right;\n        List<Integer> list = new ArrayList<>();\n        while(temp != null) {\n            if(!isLeaf(temp)) {\n                list.add(temp.val);\n            }\n            if(temp.right != null) {\n                temp = temp.right;\n            } else {\n                temp = temp.left;\n            }\n        }\n        Collections.reverse(list);\n        for(int i : list) {\n            res.add(i);\n        }\n    }\n\n    private boolean isLeaf(TreeNode root) {\n        return root.left == null && root.right == null;\n    }\n}\n\n/*\n    Time Complexity : O(N) - Every node is visited only once\n    Space Complexity : O(H), where H is the height of the tree\n*/\n"
      },
      {
        "lang": "java",
        "file": "Sum_Root_To_Leaf_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Statement : https://leetcode.com/problems/sum-root-to-leaf-numbers/\n*/\n\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    int res = 0;\n    public int sumNumbers(TreeNode root) {\n        getAllSum(root, 0);\n        return res;\n    }\n\n    private void getAllSum(TreeNode root, int currSum) {\n        if(root.left == null && root.right == null) {\n            currSum = currSum * 10 + root.val;\n            res += currSum;\n            return;\n        }\n\n        if(root.left != null)\n            getAllSum(root.left, currSum*10 + root.val);\n        if(root.right != null)\n           getAllSum(root.right, currSum*10 + root.val);\n    }\n}\n\n/*\n    Time Complexity : O(N) - Every node is visited only once\n    Space Complexity : O(H), where H is the height of the tree\n*/"
      },
      {
        "lang": "js",
        "file": "boundary_traversal_binary_tree_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1\n/**\n * @param {Node} root\n * @returns {number[]}\n */\n\n/*\nclass Node{\n    constructor(data){\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n*/\n\nclass Solution {\n    boundaryTraversal(root) {\n        if (!root) return []\n\n        let result = []\n\n        function isLeaf(node) {\n            return !node.left && !node.right\n        }\n\n        function addLeftBoundary(node) {\n            let curr = node.left\n            while (curr) {\n                if (!isLeaf(curr)) result.push(curr.data)\n                curr = curr.left ? curr.left : curr.right\n            }\n        }\n\n        function addLeaves(node) {\n            if (!node) return\n\n            if (isLeaf(node)) result.push(node.data)\n\n            addLeaves(node.left)\n            addLeaves(node.right)\n        }\n\n        function addRightBoundary(node) {\n            let curr = node.right\n            let temp = []\n            while (curr) {\n                if (!isLeaf(curr)) temp.push(curr.data)\n                curr = curr.right ? curr.right : curr.left\n            }\n            for (let i = temp.length - 1; i >= 0; i--) {\n                result.push(temp[i]);\n            }\n        }\n\n        if (!isLeaf(root)) result.push(root.data)\n\n        addLeftBoundary(root)\n        addLeaves(root)\n        addRightBoundary(root)\n\n        return result\n\n    }\n}"
      },
      {
        "lang": "js",
        "file": "sum_root_to_leaf_aryan.js",
        "user": "aryan",
        "content": "// https://leetcode.com/problems/sum-root-to-leaf-numbers/\n/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar sumNumbers = function (root) {\n    let sum = 0;\n\n    function traverse(curr, pathStr) {\n        if (!curr) return\n\n        const isLeafNode = !curr.right && !curr.left\n        const updatedPathStr = pathStr + curr.val\n\n        if (isLeafNode) {\n            sum += +updatedPathStr\n        }\n        traverse(curr.left, updatedPathStr)\n        traverse(curr.right, updatedPathStr)\n    }\n\n    traverse(root, \"\")\n\n    return sum\n};"
      }
    ]
  },
  {
    "id": "2026-04-14-session57",
    "date": "2026-04-14",
    "num": 57,
    "title": "Coding Problem",
    "topics": [
      "trees"
    ],
    "markdown": "# Coding Problem\nhttps://leetcode.com/problems/binary-tree-right-side-view/description/\n\n# Excalidraw Link : \nhttps://excalidraw.com/#json=b6PyD3253ObeKF9Hl-Dmx,0xXyj6EOaMbGN6WMtu1p0Q\n\n# Assignment :\nhttps://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1\n",
    "solutions": [
      {
        "lang": "java",
        "file": "Tree_Right_View_Garima.java",
        "user": "Garima",
        "content": "/*\nProblem Link: https://leetcode.com/problems/binary-tree-right-side-view/description/\n*/\n\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        if(root == null)\n            return res;\n        \n        // Preorder traversal - root, left, right\n        getRightSideViewNodes(root, 0, res);\n\n        // Preorder traversal - root, right, left\n        getRightSideViewNodesRightLeft(root, 0, res);\n        return res;\n    }\n\n    private void getRightSideViewNodes(TreeNode root, int currLevel, List<Integer> res) {\n        if(root == null)\n            return;\n\n        if(res.size() == currLevel) {\n            res.add(root.val);\n        } else {\n            res.set(currLevel, root.val);\n        }\n        \n        getRightSideViewNodes(root.left, currLevel + 1, res);\n        getRightSideViewNodes(root.right, currLevel + 1, res);\n    }\n\n    private void getRightSideViewNodesRightLeft(TreeNode root, int currLevel, List<Integer> res) {\n        if(root == null)\n            return;\n\n        if(res.size() == currLevel) {\n            res.add(root.val);\n        }\n        \n        getRightSideViewNodesRightLeft(root.right, currLevel + 1, res);\n        getRightSideViewNodesRightLeft(root.left, currLevel + 1, res);\n    }\n}\n\n/*\n    Time Complexity : O(N) - Every node is visited only once\n    Space Complexity : O(H), where H is the height of the tree\n*/"
      },
      {
        "lang": "js",
        "file": "tree_left_view_aryan.js",
        "user": "aryan",
        "content": "// https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1\n/**\n * @param {Node} root\n * @returns {number[]}\n */\n\n/*\nclass Node {\n    constructor(data) {\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n*/\n\nclass Solution {\n    leftView(root) {\n        if (!root) return []\n        let q = [root]\n        const result = []\n\n        while (q.length) {\n            let qLen = q.length;\n            for (let i = 0; i < qLen; i++) {\n                let curr = q.shift()\n                if (i === 0) result.push(curr.data)\n                curr.left && q.push(curr.left)\n                curr.right && q.push(curr.right)\n            }\n        }\n        return result\n\n    }\n}"
      },
      {
        "lang": "js",
        "file": "tree_right_view_aryan.js",
        "user": "aryan",
        "content": "// https://leetcode.com/problems/binary-tree-right-side-view/\n\n/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function (root) {\n    if (!root) return []\n    let q = [root]\n    const result = []\n\n    while (q.length) {\n        let qLen = q.length;\n        for (let i = 0; i < qLen; i++) {\n            let curr = q.shift()\n            if (i === qLen - 1) result.push(curr.val)\n            curr.left && q.push(curr.left)\n            curr.right && q.push(curr.right)\n        }\n    }\n    return result\n};"
      },
      {
        "lang": "python",
        "file": "tree_left_view_sounak.py",
        "user": "sounak",
        "content": "''' \nclass Node:\n\n    def __init__(self, val):\n        self.data = val\n        self.right = None\n        self.left = None \n'''\nfrom collections import deque\n\nclass Solution:\n    def leftView(self, root):\n        # code here\n        q = deque()\n        \n        if root == None:\n            return []\n        \n        q.append(root)\n        res = []\n        \n        while q:\n            leen = len(q)\n            \n            sw = 0\n            for i in range(leen):\n                t = q.popleft()\n                if sw == 0:\n                    res.append(t.data)\n                    sw = 1\n                \n                if t.left:\n                    q.append(t.left)\n                \n                if t.right:\n                    q.append(t.right)\n        \n        return res\n                \n                \n        "
      },
      {
        "lang": "python",
        "file": "tree_right_view_sounak.py",
        "user": "sounak",
        "content": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nfrom collections import deque\n\nclass Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        q = deque()\n        \n        if root == None:\n            return []\n        \n        q.append(root)\n        res = []\n        \n        while q:\n            leen = len(q)\n            \n            sw = 0\n            for i in range(leen):\n                t = q.popleft()\n                if sw == 0:\n                    res.append(t.val)\n                    sw = 1\n                \n                if t.right:\n                    q.append(t.right)\n                \n                if t.left:\n                    q.append(t.left)\n        \n        return res\n        "
      }
    ]
  },
  {
    "id": "2026-04-15-session58",
    "date": "2026-04-15",
    "num": 58,
    "title": "Coding Problem",
    "topics": [
      "trees"
    ],
    "markdown": "# Coding Problem\nhttps://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1\n\n# Excalidraw Link\nhttps://excalidraw.com/#json=gBRRS0yw5sFCs3ADemcxP,o_oUZYY2AZFrAwBU7mXdXA",
    "solutions": []
  },
  {
    "id": "2026-06-24-session59",
    "date": "2026-06-24",
    "num": 59,
    "title": "Coding Problem",
    "topics": [
      "trees"
    ],
    "markdown": "# Coding Problem\nhttps://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/\n\n# Excalidraw Link\nhttps://excalidraw.com/#json=oCar8TojtSktHhWREDF8t,rZ0owFdJshWxehAM1_5wqg",
    "solutions": []
  }
];
