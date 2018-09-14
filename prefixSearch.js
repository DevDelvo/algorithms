const book = {
    id: 1,
    text: `Once upon a time, there was a book with words.
    The book had not been catalogued, but would catch the
    eyes of onlookers nonetheless.`
  };
  

// naive approach
// const findWordsStartingWith = (book, prefix) => {
//     const text = book.text.toLowerCase();
//     prefix = prefix.toLowerCase();
//     const finds = [];

//     for (let i = 0; i < text.length - prefix.length; i++) {
//         if (i !== 0 && text[i-1] !== ' ') continue;

//         for (let j = 0; j < prefix.length; j++) {
//             if (prefix[j] !== text[i + j]) break;
//             if (j + 1 === prefix.length) {
//                 finds.push(i);
//             }
//         }
//     }
//     return finds;
// }

// better naive approach
// function findWordsStartingWith(book, prefix) {
//     const text = book.text.toLowerCase();
//     prefix = prefix.toLowerCase();
//     const finds = [];

//     for (let i = 0; i < text.prefix - prefix.length; i++) {
//         if (i !== 0 && text[i - 1] !== '') continue;
//         if (text.slice(i).startsWith(prefix)) finds.push(i)
//     }
//     return finds;
// }

// more optimal approach
// Trie -> tree-like structure that stores successive prfixes of a word.
// Also referred to as digital trees, radix trees, or prefix trees.
// Expensive at setup, but yields dividends in repeated look-ups.
// Searching an existing tries is at most O(n) with n being the length of the prefix

// NOTES ON TRIES
// used for re(trie)val
// essentially a tree for storing strings
// root associated with an empty string
// each node is a character that points to the next
// all node descendants have a common prefix of the string associated with that node 

// BUILDING AND USING THE TRIE
const tries = {};

function buildTrie (text) {
    const trie = {};
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let node = trie;
        const starting = i;

        while (text[i] && text[i] !== ' ' && text[i] !== ',' && text[i] !== '.') {
            const char = text[i];
            node[char] = node[char] || {indices: []};
            node[char].indices.push(starting);
            node = node[char];
            i++
        }
    }
    return trie;
}

function findOrCreateTrie (book) {
    if (!tries.hasOwnProperty(book.id)) {
        tries[book.id] = buildTrie(book.text);
    }
    return tries[book.id];
}

function findWordsStartingWith (book, prefix) {
    prefix = prefix.toLowerCase();
    const trie = findOrCreateTrie(book);
    let node = trie;

    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        node = node[char];
        if (!node) return [];
    }
    return node.indices;
}


tries.book = buildTrie(book.text)
console.log('tries ', tries)

const test1 = findWordsStartingWith(book, 'the'); // should return [ 18, 47, 97 ]
const test2 = findWordsStartingWith(book, 'cat'); // should return [ 69, 91 ]

console.log(test1);
console.log(test2);