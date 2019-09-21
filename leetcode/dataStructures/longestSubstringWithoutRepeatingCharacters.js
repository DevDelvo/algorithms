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

// Big O
// O(n^3) Time | O(min(n,m)) Space
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
// Big O
// Time complexity : O(2n) = O(n). In the worst case each character will be visited twice by i and j.
// Space complexity : O(min(m, n)). Same as the previous approach.
// We need O(k) space for the sliding window, where k is the size of the Set.
// The size of the Set is upper bounded by the size of the string n and the size of the charset/alphabet m.
function lengthOfLongestSubString2(str) {
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

console.log('Sliding Window => ', lengthOfLongestSubString2("abcabcbb")); // 3
console.log('Sliding Window => ', lengthOfLongestSubString2("bbbbb")); // 1
console.log('Sliding Window => ', lengthOfLongestSubString2("pwwkew")); // 3