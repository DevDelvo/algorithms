// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Solution 1: Brute Force
// Intuition
// Check all the substring one by one to see if it has no duplicate character.
// Algorithm
// Suppose we have a function boolean allUnique(String substring) which will return true if the characters in the substring are all unique, otherwise false.
// We can iterate through all the possible substrings of the given string s and call the function allUnique.
// If it turns out to be true, then we update our answer of the maximum length of substring without duplicate characters.

// Now let's fill the missing parts:
// To enumerate all substrings of a given string, we enumerate the start and end indices of them. Suppose the start and end indices are ii and jj, respectively.
// Then we have 0 \leq i \lt j \leq n0≤i<j≤n (here end index jj is exclusive by convention). Thus, using two nested loops with ii from 0 to n - 1n−1 and jj from i+1i+1 to nn, we can enumerate all the substrings of s.

// To check if one string has duplicate characters, we can use a set. We iterate through all the characters in the string and put them into the set one by one.
// Before putting one character, we check if the set already contains it. If so, we return false. After the loop, we return true.


function lengthOfLongestSubString(str) {
    let longest = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (isAllUniqueHelper(str, i, j)) longest = Math.max(longest, j - i)
        }
    }
    return longest;
}

function isAllUniqueHelper(str, start, end) {
    let set = new Set();
    for (let i = start; i < end; i++) {
        const char = str[i]
        if (set.has(char)) {
            return false;
        } else {
            set.add(char);
        }
    }
    return true;
}
// Big O
// O(n^3) Time | O(min(n,m)) Space

console.log('Brute force => ', lengthOfLongestSubString("abcabcbb")); // 3
console.log('Brute force => ', lengthOfLongestSubString("bbbbb")); // 1
console.log('Brute force => ', lengthOfLongestSubString("pwwkew")); // 3

// Solution 2: Sliding Window
// Big O
// Algorithm
// The naive approach is very straightforward. But it is too slow. So how can we optimize it?
// In the naive approaches, we repeatedly check a substring to see if it has duplicate character. But it is unnecessary. If a substring s{ij} from index i to j−1 is already checked to have no duplicate characters.
// We only need to check if s[j]is already in the substring s{ij}.

// To check if a character is already in the substring, we can scan the substring, which leads to an O(n^2) algorithm. But we can do better.

// By using HashSet as a sliding window, checking if a character in the current can be done in O(1).

// A sliding window is an abstract concept commonly used in array/string problems.
// A window is a range of elements in the array/string which usually defined by the start and end indices, i.e. [i, j) (left-closed, right-open).
// A sliding window is a window "slides" its two boundaries to the certain direction. For example, if we slide [i, j) to the right by 1 element, then it becomes [i+1,j+1) (left-closed, right-open).

// Back to our problem. We use HashSet to store the characters in current window [i, j) (j = i initially). Then we slide the index j to the right.
// If it is not in the HashSet, we slide j further.
// Doing so until s[j] is already in the HashSet.
// At this point, we found the maximum size of substrings without duplicate characters start with index ii. If we do this for all ii, we get our answer.

function lengthOfLongestSubString2(str) {
    const hashMap = new Map(); // will have character to integer association.
    let longest = 0;
    let i = 0, j = 0;
    while (i < str.length && j < str.length) {
        // try to extend range of [i, j)
        if (!hashMap.has(str.charAt(i))) {
            hashMap.set(str.charAt(i++))
            longest = Math.max(longest, i - j);
        } else {
            hashMap.delete(str.charAt(j++));
        }
    }
    console.log(hashMap.entries())
    return longest;
}
// Big O
// Time complexity : O(2n) = O(n). In the worst case each character will be visited twice by i and j.
// Space complexity : O(min(m, n)). Same as the previous approach.
// We need O(k) space for the sliding window, where k is the size of the Set.
// The size of the Set is upper bounded by the size of the string n and the size of the charset/alphabet m.

console.log('Sliding Window => ', lengthOfLongestSubString2("abcabcbb")); // 3
console.log('Sliding Window => ', lengthOfLongestSubString2("bbbbb")); // 1
console.log('Sliding Window => ', lengthOfLongestSubString2("pwwkew")); // 3

// Solution 3: Sliding Window Optimized
// The above solution requires at most 2n steps. In fact, it could be optimized to require only n steps.
// Instead of using a set to tell if a character exists or not, we could define a mapping of the characters to its index.
// Then we can skip the characters immediately when we found a repeated character.

// The reason is that if s[j] have a duplicate in the range [i, j) with index j',
// we don't need to increase ii little by little.
// We can skip all the elements in the range [i, j']and let i to be j' + 1 directly.
function lengthOfLongestSubString3(str) {
    const hashMap = new Map(); // will have character to integer association.
    let longest = 0;
    for (let i = 0, j = 0; i < str.length; i++) { // i and j for our window.
        if (hashMap.has(str.charAt(i))) {
            j = Math.max(hashMap.get(str.charAt(i)), j); // slide end of window or set it back to j
        }
        longest = Math.max(longest, i - j + 1); // i - j + 1 is the length of the current substr
        hashMap.set(str.charAt(i), i + 1)
    }
    return longest;
}
// Complexity Analysis
// Time complexity : O(n) Index j will iterate n times.
// Space complexity (HashMap) : O(min(m, n)) Same as the previous approach.

console.log('Sliding Window Optimized => ', lengthOfLongestSubString3("abcabcbb")); // 3
console.log('Sliding Window Optimized => ', lengthOfLongestSubString3("bbbbb")); // 1
console.log('Sliding Window Optimized => ', lengthOfLongestSubString3("pwwkew")); // 3