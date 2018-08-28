
const reverseString = (str) => {
    strArr = str.split(''); // ['l', 'i', 'g', 'm', 'a']

    for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
        swap(i, strArr.length - 1 - i, strArr); //length - 1 - i gives you counterpart of i 
    }
    return strArr.join('');
} 

const swap = (i1, i2, str) => {
    [str[i1], str[i2]] = [str[i2], str[i1]];
}

const test1 = 'ligma';
const test2 = 'sugma';
const test3 = 'bofa';

console.log(reverseString(test3))
