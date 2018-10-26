// Write function that takes in "big" string and an array of "small" strings,
// all of which are smaller in length than the big string. 
// The function should return an array of booleans, where each boolean represents whether or not the small string at that index in the array of small strings is contained in the big string
// Cant use built in string matching methods.

// Sample input: "this is a big string", ["this", "yo", "is", "bigger", "string", "kappa"]
// Sample output: [True, False, True, True, False, True, False]

// Solution 1
// O(bns) time | O(n) space where b is the length of the big string and ns is the number of strings
function multiStringSearchIterative (bigString, smallStrings) {
    return smallStrings.map(smallString => isInBigStringIterative(bigString, smallString));
}

function isInBigStringIterative(bigString, smallString) {
    for (let i = 0; i < bigString.length; i++) {
        if (i + smallString.length > bigString.length) break;
        if (isInBigStringHelperIterative(bigString, smallString, i)) return true;
    }
    return false;
}

function isInBigStringHelperIterative(bigString, smallString, startIdx) {
    let leftBigIdx = startIdx;
    let rightBigIdx = startIdx + smallString.length - 1;
    let leftSmallIdx = 0;
    let rightSmallIdx = smallString.length - 1;
    while (leftBigIdx <= rightBigIdx) {
        if (
            bigString[leftBigIdx] != smallString[leftSmallIdx] ||
            bigString[rightBigIdx] != smallString[rightSmallIdx]
        ) {
            return false;
        }
        leftBigIdx++;
        rightBigIdx--;
        leftSmallIdx++;
        rightSmallIdx--;
    }
    return true;
}

// Solution 2
// O(b^2 + ns) time | O(b^2 + n) space
function multiStringSearchTrie(bigString, smallStrings) {
    const modifiedSuffixTrie = new ModifiedSuffixTrie(bigString)
    return smallStrings.map(string => modifiedSuffixTrie.contains(string));
}

class ModifiedSuffixTrie {
    constructor(string) {
        this.root = {};
        this.populateModifiedSuffixTrieFrom(string);
    }

    populateModifiedSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string);
        }
    }

    insertSubstringStartingAt(i, string) {
        let node = this.root;
        for (let j = i; j < string.length; j++) {
            const letter = string[j];
            if (!(letter in node)) node[letter] = {};
            node = node[letter];
        }
    }
    
    contains(string) {
        let node = this.root;
        for (const letter of string) {
            if (!(letter in node)) return false;
            node = node[letter];
        }
        return true;
    }
}

// Solution 3
// O(ns + bs) time | O(ns) space
// Builds a trie based on the small strings
function multiStringSearch(bigString, smallStrings) {
    const trie = new Trie();
    for (const string of smallStrings) {
        trie.insert(string);
    }
    const containedStrings = {};
    for (let i = 0; i < bigString.length; i++) {
        findSmallStringsIn(bigString, i, trie, containedStrings);
    }
    return smallStrings.map(string => string in containedStrings);
}

function findSmallStringsIn(string, startIdx, trie, containedStrings) {
    let currentNode = trie.root;
    for (let i = startIdx; i < string.length; i++) {
        const currentChar = string[i];
        if (!(currentChar in currentNode)) break;
        currentNode = currentNode[currentChar];
        if (trie.endSymbol in currentNode) containedStrings[currentNode[trie.endSymbol]] = true;
    }
}

class Trie {
    constructor() {
        this.root = {};
        this.endSymbol = "*";
    }

    insert(string) {
        let current = this.root;
        for (let i = 0; i < string.length; i++) {
            if (!(string[i] in current)) {
                current[string[i]] = {};
            }
            current = current[string[i]];
        }
        current[this.endSymbol] = string;
    }
}

const test1 = multiStringSearchIterative("this is a big string", ["this", "yo", "is", "bigger", "string", "kappa"]);
console.log(test1); // [True, False, True, False, True, False]

const test2 = multiStringSearchTrie("this is a big string", ["this", "yo", "is", "bigger", "string", "kappa"]);
console.log(test2); // [True, False, True, False, True, False]

const test3 = multiStringSearch("this is a big string", ["this", "yo", "is", "bigger", "string", "kappa"]);
console.log(test3); //