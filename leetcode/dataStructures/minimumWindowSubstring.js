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
            console.log('boop')
            char = strS.charAt(left);
            // save smallest window until now
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                console.log('boop')
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
        console.log(right)
    }
    console.log('windowCounts => ', windowCounts.entries())
    console.log(ans)
    return ans[0] === -1 ? "" : strS.substring(ans[1], ans[2] + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"