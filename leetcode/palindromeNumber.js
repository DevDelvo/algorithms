// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:
// Input: 121
// Output: true

// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Don't convert number to a string.


// Time: O(log10(n)) We divide the input by 10 for each iteration | Space: O(1)
const isPalindrome = (num) => {
    if (num < 0 || (num % 10 === 0 && num !== 0)) return false; // if the number is negative || its last digit is 0  and it isnt 0 itself then it isnt a palindrome.

    let revertedNum = 0;
    while (num > revertedNum) {
        // this will get us the last half of the number reversed.
        // Ex: 1221 % 10 gets us 1 which is the last digit.
        // multiply it by 10 to move it over to the left: revertedNum = 10 + 122 % 2
        // the 2nd digit is (1221 / 10 ) = 122 => 122 % 10 = 2
        // revertedNum = 12;
        revertedNum = revertedNum * 10 + num % 10;
        num = Math.floor(num / 10); //round down because of Javascript floating shenanigans
    }
    // console.log('num: ', num)
    // console.log('revertedNum: ', revertedNum)

    // when the length of the num is odd, we can get rid of the middle digit with revertedNum / 10
    // Ex: when num = 12321, at the end of the loop we get num = 12, revertedNum = 123
    // so 12 === 123 will but false, but 12 === 123/10 since 123/10 is 12
    return num === revertedNum || num === Math.floor(revertedNum / 10);
}



const test1 = 121; // true
const test2 = -121; //false
const test3 = 10; //false
const test4 = 1221; // true

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));
console.log(isPalindrome(test3));
console.log(isPalindrome(test4));