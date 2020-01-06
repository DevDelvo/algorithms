// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (const char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

console.log(getCount("abracadabra")) // 5
console.log(getCount("abracAdabrA")) // 5