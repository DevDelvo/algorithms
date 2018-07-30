// Caesae Cipher Encryptor
// Given a non-empty string of lowercase letters and non-negative integer value representing a key,
// write a function that returns a new string obtained by shifting every letter in the input string by 
// k positions in the alphabet, where k is the key. Note that letters should "wrap" around the alphabet;
// in other words, the letter "z" shifter by 1 returns the letter "a"

// Sample input: "abcxyz", 2
// Sample output: "cdezab"

// Solution 1
// Time O(n) | Space O(n)
// function caesarCipherEncryptor (str, key) {
//     const newStr = [];
//     const newKey = key % 26;
//     for (const letter of string) {
//         newStr.push(converter(letter, newKey));
//     }
//     return newStr.join
// }

// function converter(str, key) {
//     const newLetterCode = letter.charCodeAt() + key;
//     if (newLetterCode <= 122) {
//         return String.fromCharCode(newLetterCode);
//     } else {
//         return String.fromCharCode(96 + newLetterCode % 122);
//     }
// }

// Solution 2 
// Time O(n) | Space O(n)
function caesarCipherEncryptor (str, key) {
    if (!key) return str;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const newKey = key % 26;
    const newString = [];

    for (let i = 0; i < str.length; i++) {
        newString.push(converter(str[i], newKey, alphabet))
    }
    // for (const letter of str) {
    //     newString.push(converter(letter, newKey, alphabet))
    // }
    console.log(newString.join(""))
    return newString.join("")
}

function converter (letter, key, alphabet) {
    const newLetterNum = alphabet.indexOf(letter) + key;
    if (newLetterNum <= 25) {
        return alphabet[newLetterNum]
    } else {
        return alphabet[newLetterNum % 25 - 1]
    }
}

// converter('z', 2, "abcdefghijklmnopqrstuvwxyz".split("") )
caesarCipherEncryptor("abcxyz", 2)
caesarCipherEncryptor('abc',2 )
