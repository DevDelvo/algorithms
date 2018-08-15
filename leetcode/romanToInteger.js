const romanToIntger = (romanNum) => {
    var result = 0;
    const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i <= decimal.length; i++) {
        while (romanNum.indexOf(romanNums[i]) === 0) { //check for first chars of the string
            result += decimal[i]; // add the numerical value to our result
            romanNum = romanNum.replace(romanNums[i], ''); //remove the roman character from our roman numeral string
        }
    }
    return result;
}

// console.log(romanToInteger("III")); // 3
// console.log(romanToIntger("IV")); // 4
// console.log(romanToIntger("IX")); // 9
// console.log(romanToIntger("LVIII")); // 58
console.log(romanToIntger("MCMXCIV")) // 1994