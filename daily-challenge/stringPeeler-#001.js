// Your goal is to create a function that removes the first and last letters of a string.
// Strings with two characters or less are considered invalid.
// You can choose to have your function return null or simply ignore.

function removeChar(str) {
    return str.length > 2 ? str.slice(1, str.length - 1) : "";
}

console.log(removeChar('eloquent')) // 'loquen'
console.log(removeChar('country')) // 'ountr'
console.log(removeChar('person')) // 'erso'
console.log(removeChar('place')) // 'lac'