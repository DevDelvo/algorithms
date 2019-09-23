// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

// Solution 1: Sliding Window
// Intuition
// The question asks us to return the minimum window from the string SS which has all the characters of the string T. Let us call a window desirable if it has all the characters from T.
// We can use a simple sliding window approach to solve this problem.
// In any sliding window based problem we have two pointers. One right pointer whose job is to expand the current window and then we have the left pointer whose job is to contract a given window.
// At any point in time only one of these pointers move and the other one remains fixed.

// The solution is pretty intuitive. We keep expanding the window by moving the right pointer.
// When the window has all the desired characters, we contract (if possible) and save the smallest window till now.

// The answer is the smallest desirable window.
// For eg. S = "ABAACBAB" T = "ABC". Then our answer window is "ACB" and shown below is one of the possible desirable windows.

// Algorithm
// 1. We start with two pointers, left and right initially pointing to the first element of the string S.
// 2. We use the right pointer to expand the window until we get a desirable window i.e. a window that contains all of the characters of T.
// 3. Once we have a window with all the characters, we can move the left pointer ahead one by one. If the window is still a desirable one we keep on updating the minimum window size.
// 4. If the window is not desirable any more, we repeat step 2 onwards.
function minWindow(strS, strT) {
    if (strS === "" || strT === "") return "";

    // map which contains a count of all the unique characters in strT
    const dict = new Map();
    for (let i = 0; i < strT.length; i++) {
        let count = dict.get(strT.charAt(i)) || 0;
        dict.set(strT.charAt(i), count + 1)
    }
    console.log('dict entries=> ', dict.entries())

    // number of unique characters in strT we need
    const required = dict.size
    console.log('required => ', required);

    // set left and right pointers for window
    let left = right = 0;

    // formed is used to keep track of how many unique characters in strT
    // are present in strT in the current window in its desired frequency.
    // e.g. if t is "AABC" then the window must have two A's, one B and one C.
    // Thus formed would be = 3 when all these conditions are met.
    let formed = 0;

    // dictionary which keeps track of all unique characters in the current window.
    const windowCounts = new Map();

    // ans list of the form (window length, left, right)
    let ans = [-1, 0, 0];

    while (right < strS.length) {
        // Add one char from right to the window
        let char = strS.charAt(right);
        let count = windowCounts.get(char) || 0;
        // console.log('window counts => ', count)
        windowCounts.set(char, count + 1);

        // if the frequency of the current char added equals to the desired count in strT then
        // increment the formedCount by 1
        if (dict.has(char) && windowCounts.get(char) === dict.get(char)) {
            formed++;
            console.log('formed => ', formed)
        }

        // try to contract window till the point it becomes no longer 'desirable'
        console.log('left => ', left);
        console.log('right => ', right);
        while (left <= right && formed === required) {
            char = strS.charAt(left);
            // save smallest window until now
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans[0] = right - left + 1;
                ans[1] = left;
                ans[2] = right;
                console.log('new ans => ', ans)
            }

            // The char at the position pointed to by the 'Left' pointer is no longer a part of the window.
            windowCounts.set(char, windowCounts.get(char) - 1);
            if (dict.has(char) && windowCounts.get(char) < dict.get(char)) {
                formed--;
            }
            // Move left pointer ahead, this will help look for a new window.
            left++;
        }
        // Expand window once we are done contracting
        right++;
    }
    console.log(ans)
    return ans[0] === -1 ? "" : strS.substring(ans[1], ans[2] + 1);
}

// Complexity Analysis
// Time Complexity: O(|S| + |T|)O(∣S∣+∣T∣) where |S| and |T| represent the lengths of strings SS and TT.
// In the worst case we might end up visiting every element of string SS twice, once by left pointer and once by right pointer. |T|∣T∣ represents the length of string TT.
// Space Complexity: O(|S| + |T|)O(∣S∣+∣T∣). |S|∣S∣ when the window size is equal to the entire string SS. |T|∣T∣ when TT has all unique characters.

// console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"


// Approach 2: Optimized Sliding Window
// Intuition
// A small improvement to the above approach can reduce the time complexity of the algorithm to O(2 ∗ ∣filtered_S∣ + ∣S∣ + ∣T∣),
// where filtered_S is the string formed from S by removing all the elements not present in T.

// This complexity reduction is evident when |filtered\_S| <<< |S|

// This kind of scenario might happen when length of string TT is way too small than the length of string S and string S consists of numerous characters which are not present in T.

// Algorithm
// We create a list called filtered_S which has all the characters from string S along with their indices in S, but these characters should be present in T.

// S = "ABCDDDDDDEEAFFBC" T = "ABC"
// filtered_S = [(0, 'A'), (1, 'B'), (2, 'C'), (11, 'A'), (14, 'B'), (15, 'C')]
// Here (0, 'A') means in string S character A is at index 0.

// We can now follow our sliding window approach on the smaller string filtered_S.
// function minWindowOptimized(strS, strT) {
//     if (strS === "" || strT === "") return "";
//     const dictT = new Map();
//     for (let i = 0; i < strT.length; i++) {
//         const char = strT.charAt(i);
//         const count = dictT.get(char) || 0;
//         dictT.set(char, count + 1);
//     }

//     const required = dictT.size;

//     const filteredS = new Map();
//     for (let i = 0; i < strS.length; i++) {
//         const char = strS.charAt(i);
//         console.log('char => ', char)
//         if (dictT.has(char)) {
//             filteredS.set(i, char);
//         }
//     }
//     console.log('dictT => ', dictT.entries());
//     console.log('filteredS => ', filteredS.entries())

//     let right = left = unique = 0;
//     const windowCounts = new Map();
//     const ans = [-1, 0, 0];

//     // Look for the characters only in the filtered list instead of entire s.
//     // This helps to reduce our search.
//     // Hence, we follow the sliding window approach on as small list.
//     while (right < filteredS.size) {
//         let char = filteredS.get(right);
//         console.log('filteredS.get(right) => ', right, char)
//         let count = windowCounts.get(char) || 0;
//         windowCounts.set(char, count + 1);

//         if (dictT.has(char) && windowCounts.get(char) === dictT.get(char)) {
//             unique++;
//         }
//         // Try and contract the window till the point where it ceases to be 'desirable'.
//         while (left <= right && required === unique) {
//             console.log('left => ', left);
//             console.log('right => ', right)
//             char = filteredS.get(left);
//             // Save the smallest window until now.
//             let end = filteredS.get(right);
//             let start = filteredS.get(left);
//             if (ans[0] === -1 || right - left + 1 < ans[0]) {
//                 ans[0] = right - left + 1;
//                 ans[1] = left;
//                 ans[2] = right;
//             }
//             windowCounts.set(char, windowCounts.get(char) - 1);
//             if (dictT.has(char) && windowCounts.get(char) < dictT.get(char)) {
//                 unique--;
//             }
//             left++;
//         }
//         right++;
//     }
//     console.log('windowCounts => ', windowCounts.entries())
//     console.log('ans => ', ans)
//     return ans[0] === -1 ? '' : strS.substring(ans[1], ans[2] + 1);
// }
function minWindowOptimized(strS, strT) {
    if (strS === "" || strT === "") return "";
    const dictT = new Map();
    for (let i = 0; i < strT.length; i++) {
        const char = strT.charAt(i);
        const count = dictT.get(char) || 0;
        dictT.set(char, count + 1);
    }

    const required = dictT.size;

    const filteredS = [];
    for (let i = 0; i < strS.length; i++) {
        const char = strS.charAt(i);
        console.log('char => ', char)
        if (dictT.has(char)) {
            filteredS[i] = char;
        }
    }
    console.log('dictT => ', dictT.entries());
    console.log('filteredS => ', filteredS);

    let right = left = unique = 0;
    const windowCounts = new Map();
    const ans = [-1, 0, 0];

    // Look for the characters only in the filtered list instead of entire s.
    // This helps to reduce our search.
    // Hence, we follow the sliding window approach on as small list.
    while (right < filteredS.length) {
        let char = filteredS[right];
        console.log('filteredS.get(right) => ', right, char)
        let count = windowCounts.get(char) || 0;
        windowCounts.set(char, count + 1);

        if (dictT.has(char) && windowCounts.get(char) === dictT.get(char)) {
            unique++;
        }
        // Try and contract the window till the point where it ceases to be 'desirable'.
        while (left <= right && required === unique) {
            console.log('left => ', left);
            console.log('right => ', right)
            char = filteredS[left];
            // Save the smallest window until now.
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans[0] = right - left + 1;
                ans[1] = left;
                ans[2] = right;
            }
            windowCounts.set(char, windowCounts.get(char) - 1);
            if (dictT.has(char) && windowCounts.get(char) < dictT.get(char)) {
                unique--;
            }
            left++;
        }
        right++;
    }
    console.log('windowCounts => ', windowCounts.entries())
    console.log('ans => ', ans)
    return ans[0] === -1 ? '' : strS.substring(ans[1], ans[2] + 1);
}

console.log('minWindow Optimized => ', minWindowOptimized("ADOBECODEBANC", "ABC")) // "BANC"