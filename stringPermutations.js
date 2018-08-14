// Given a string, return an array of all the permutations of that string. 
// The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.
// The array that is returned should only contain unique values and its elements should be in alphabetical order.

// Examples
// stringPermutations('one')
// // should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// stringPermutations('app')
// // should return  [ 'app','pap','ppa']
// stringPermutations('nn') //should return  [ 'nn' ]


// O(n!)
// Solution 1
function stringPermutations(str) {
    let results = [];
    let letters = str.split('');
    results.push([letters.shift()]); //add first letter (as an array) to results
    while (letters.length) {
        let curLetter = letters.shift();
        let tmpResults = [];
        results.forEach((curResult) => {
            for (let i = 0; i <= curResult.length; i++) {
                let temp = curResult.slice() //make copy so we can modify it
                temp.splice(i, 0, curLetter); //insert leter at current position
                tmpResults.push(temp);
            }
        });
        results = tmpResults;
    }
    return results.map((letterArr) => {
        return letterArr.join('');
    }).filter((el, index, self) => {
        return self.indexOf(el) === index; //filter out non-unique words
    }).sort();
}

// Solution 2 recursive
function recursiveStringPermutations(str) {
    let res = [];
    getPerms(str, []);
    function getPerms(str, arr) {
        if (typeof str === 'string') {
            str = str.split('');
        }
        if (!str.length) { //base case
            res.push(arr.join(''));
        }
        for (let i = 0; i < str.length; i++) {
            let letter = str.splice(i, 1);
            arr.push(letter);
            getPerms(str, arr); //recusive call
            arr.pop();
            str.splice(i, 0, letter);
        }
    }
    return res.filter((el, index) => {
        return res.indexOf(el) === index; //filter out non-unique words
    }).sort();
}

// Solution 3 optimized
// if we sort before we do the recursive calls O(n*log(n)) Time
function optimizedStringPermutations(str) {
    if (str.length === 1) return [str]; //base case
    const all = [];
    let i = 0;
    while (i < str.length) {
        const letter = str[i]; //get each individual char
        const otherChars = str.slice(0, i) + str.slice(i + 1);
        optimizedStringPermutations(otherChars).forEach(subpermut => { //compute all permutations for the other characters
            all.push(letter + subpermut); //add the current letter to the front of each of these "sub-permutations"
        });
        while (str[i] === letter) i++;
    }
    return all;
}
function sortedStringPerm(str) {
    const sortedStr = str.split('').sort().join('');
    return stringPermutations(sortedStr); //find the ordered permutations of that sorted string
}

console.log(sortedStringPerm('cat')) //['act', 'atc', 'cat', 'cta', 'tac', 'tca']