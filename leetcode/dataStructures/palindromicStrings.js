// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".


// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


// Note:

// The input string length won't exceed 1000.

// Approach #1: Expand Around Center [Accepted]

// Intuition
// Let N be the length of the string. The middle of the palindrome could be in one of 2N - 1 positions: either at letter or between two letters.

// For each center, let's count all the palindromes that have this center. Notice that if [a, b] is a palindromic interval (meaning S[a], S[a+1], ..., S[b] is a palindrome), then [a+1, b-1] is one too.

// Algorithm
// For each possible palindrome center, let's expand our candidate palindrome on the interval [left, right] as long as we can. The condition for expanding is left >= 0 and right < N and S[left] == S[right].
// That means we want to count a new palindrome S[left], S[left+1], ..., S[right].


function substringCount(str) {
    if (!str.length) return 0;
    let count = 0;

    for (let center = 0; center <= 2 * str.length - 1; center++) {
        let left = Math.floor(center / 2);
        let right = left + center % 2;
        while (left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)) {
            count++;
            left--;
            right++;
        }
    }
    return count;
}
// Complexity Analysis
// Time Complexity: O(N^2) where N is the length of S. Each expansion might do O(N) work.
// Space Complexity: O(1).

console.log('Expand around center => ', substringCount('abc')); // 3
console.log('Expand around center => ', substringCount('aaa')) // 6


function substringCountDynamic(str) {
    if (!str.length) return 0;

    let DP = [...Array(str.length)].map(el => Array(str.length).fill(false));
    let count = 0;
    // all length 1 substrings are palindromes by default
    for (let i = 0; i < str.length; i++) {
        DP[i][i] = true;
        count++;
    }
    // if there are more than 1 substrings
    for (let i = 2; i <= str.length; i++) {
        for (let j = 0; j <= str.length; j++) {
            let endIdx = i + j - 1 //ending index;
            if (i === 2) {
                if (str.charCodeAt(j) === str.charCodeAt(endIdx)) {
                    DP[j][endIdx] = true;
                    count++
                }
            }
            // check equalit of first and last characters and if substring between them is palindrome
            if (str.charCodeAt(j) === str.charCodeAt(endIdx) && DP[j + 1][endIdx - 1] === true) {
                DP[j][endIdx] = true;
                count++;
            }
        }
    }
    return count;
}

console.log('Dynamic programming => ', substringCountDynamic('abc')); // 3
console.log('Dynamic programming => ', substringCountDynamic('aaa')) // 6

function subStringCountManachers(str) {
    if (!str.length) return 0;
    let strArr = '#' + str.split('').join("#") + '#';
    // manacher's algorithm
    let C = 0;
    let R = 0;
    let count = 0;
    let P = new Array(strArr.length);

    for (let i = 1; i <= strArr.length; i++) {
        let mirror = C * 2 - i;
        P[i] = (i < R) ? Math.min(R - i, P[mirror]) : 0;
        while (i + 1 + P[i] < strArr.length && i - 1 - P[i] >= 0 && strArr.charAt(i + 1 + P[i]) === strArr.charAt(i - 1 - P[i])) {
            P[i]++;
        }
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
        // console.log(P[i] % 2)
        if (P[i] % 2 !== 0) {
            count += Math.floor(P[i] / 2) + 1;
        } else {
            count += Math.floor(P[i] / 2);
        }
    }

    return count;
}

// O(n) time | O(n) space

console.log('Manacher\'s algorithm =>', subStringCountManachers('abc')); // 3
console.log('Manacher\'s algorithm =>', subStringCountManachers('aaa')) // 6