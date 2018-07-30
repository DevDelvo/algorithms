//Palindrome Check
//Write a function that takes in non-empty string and 
//returns a boolean representing whether or not the string is a palindrome
//A palindrome is a string that is written the same forward and backward.

//Sample input: "racecar"
//Sample output: True(it is a palindrome)

//SOLUTION 1
// O(n^2) time | O(n) space
function isPalindrome1(str) {
    let reversed = "";
    for (let i = str.length -1; i >= 0; i--) {
        reversed += str[i]; //when you concatenate the string you are creating a new string each time making O(n^2)
    }
    return str === reversed;
}
// Solution 2
// O(n) time | O(n space)
function isPalindrome2(str) {
    const reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return str === reversed.join("");
}

// Solution 3
// O(n) time | O(n) space
function isPalindrome3(str, i = 0) {
    const j = str.length - 1 - i;
    if (i >= j) {
        console.log('recursion', true)
        return true;
    } else {
        return str[i] === str[j] && isPalindrome3(str, i + 1);
    }
}

isPalindrome3('racecar')


// O(n) time | O(1) space
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
}

isPalindrome('racecar')
isPalindrome('glipglops')
isPalindrome('()()')
isPalindrome('())(')