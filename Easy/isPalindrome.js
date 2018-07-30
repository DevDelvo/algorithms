//Palindrome Check
//Write a function that takes in non-empty string and 
//returns a boolean representing whether or not the string is a palindrome
//A palindrome is a string that is written the same forward and backward.

//Sample input: "racecar"
//Sample output: True(it is a palindrome)

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