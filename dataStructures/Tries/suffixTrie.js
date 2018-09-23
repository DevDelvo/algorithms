// Write a class for a suffix-trie-like data structure.
// The class should have a "root" property set to be the root node of the trie.
// The class should support creation from a string and the searching of strings. 
// The creation method (called populateSuffixTrieFrom()) will be called when the class is instantiated
// and should populate the "root" property of the class. Note that every string added to the trie
// should end with the special "endSymbol" character: "*".

// Sample input(for creation): "babc"
// Sample output(for creation):
// {
//     "c": {"*": True},
//     b: {
//         "c": {"*": True},
//         "a"" {"b": {"c":{"*": True"}}}
//     },
//     "a":{"b": {"c": {"*": True}}}
// }
// Sample input (for searching in the suffix trie above): "abc"
// Samput output (for searchin in the suffix trie above): True

class SuffixTrie {
    constructor(str) {
        this.root = {};
        this.endSymbol = "*";
        this.populateSuffixTrieFrom(str);
    }

    // O(n^2) time | O(n^2) space
    populateSuffixTrieFrom(str) {
        for (let i = 0; i < str.length; i++) {
            this.insertSubstringStartingAt(i, str);
        }
    }

    insertSubstringStartingAt(i , str) {
        let node = this.root;
        for (let j = i; j < str.length; j++) {
            const letter = str[j];
            if (!(letter in node)) node[letter] = {};
            node = node[letter];
        }
        node[this.endSymbol] = true;
    }

    // O(m) time | O(1) space
    contains(str) {
        let node = this.root;
        for (const letter of str) {
            if (!(letter in node)) return false;
            node = node[letter];
        }
        return this.endSymbol in node;
    }
}

const trie = new SuffixTrie("babc");
console.log(trie);