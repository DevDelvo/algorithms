// The count-and-say sequence is the sequence of integers with the first five terms as following:
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:
// Input: 1
// Output: "1"

// Example 2:
// Input: 4
// Output: "1211"

const countAndSay = (n) => {
    if (n === 1) return '1';
    if (n === 2) return '11';

    let str = '11';
    for (let i = 3; i <= n; i++) {
        str += "$";
        let count = 1;
        let temp = '';
        let chars = str.split('');
        for (let j = 1; j < chars.length; j++) {
            let current = chars[j];
            let prev = chars[j - 1];
            if (current !== prev) {
                temp += count + 0; // the number of that number, ie one 1's, two 1's, one 2's etc.
                temp += prev; // the actual number, 1, 2, 3, etc
                count = 1; // reset count;
            } else {
                count++; // keep counting the numbers if theyre the same... like 111 is 3 ones.
            }
            str = temp; //
        }
    }
    return str;
}

console.log(countAndSay(1)); // '1'
console.log(countAndSay(4)) // '1211