// Given an alphabetical array of dictionary entries and a word to search for, find that word's definition (if it exists). A dictionary entry is just a string where the word's name appears first, followed by - [definition].

const dictionary = [
    'a - Used when mentioning someone or something for the first time in a text or conversation',
    'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
    'be - Exist',
    'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
    'of - Expressing the relationship between a part and a whole',
    'that - Used to identify a specific person or thing observed or heard by the speaker',
    'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
    'to - Expressing motion in the direction of (a particular location)'
  ];
  
  // O(n) time complexity and O(m) space complexity
  // const definitionOf = (target, dictionary) => {
  //   const res = dictionary.filter(word => word.split(' - ')[0] === target)
  //   return res.length ? res : undefined;
  // }
  
  //BINARY SEARCH 
  // const definitionOf = (word, dictionary) => {
  //   //start at beginning and end of dictionary array, these define the bounds of our "search window"
  //   let left = 0
  //   let right = dictionary.length - 1
  //   let index
  //   //keep going as long as index hasnt changed since last cycle
  //   while (index !== left && index !== right) {
  //     //start at middle 
  //     index = Math.floor((left + right) / 2)
  //     if (dictionary[index].startsWith(word + " - ")) { // startsWith() is a string comparison which is O(1)
  //       return dictionary[index].slice(word.length + 3) //remove word plus ' - ' which is the word length plus 3 spaces
  //     }
  //     if (word < dictionary[index]) {
  //       //"shrink" right half of the search window
  //       right = index - 1;
  //     }
  //     if (word > dictionary[index]) {
  //       left = index + 1;
  //     }
  //   }
  // }
  
  //CACHING SOLUTION O(n) for first run, O(1) every subsequent run, O(n) for space
  const cache = new Map();
  function findOrCreateHashMap (dictionary) {
    if (cache.has(dictionary)) return cache.get(dictionary)
    const hashMap = {}
    dictionary.forEach(entry => {
      const [word, definition] = entry.split(" - ")
      hashMap[word] = definition
    })
    cache.set(dictionary, hashMap)
    return hashMap
  }
  
  function definitionOf(word, dictionary) {
    const hashMap = findOrCreateHashMap(dictionary)
    return hashMap[word];
  }
  
  const test1 = definitionOf('be', dictionary); // should return 'Exist'
  const test2 = definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
  const test3 = definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
  const test4 = definitionOf('wizbing', dictionary); // should return undefined
  // findOrCreateHashMap(dictionary)

  console.log('test1', test1);
  console.log('test2', test2);
  console.log('test3', test3);
  console.log('test4', test4);