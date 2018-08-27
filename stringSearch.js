// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

const indexOf = (substr, str) => {
    for (let strIdx = 0; strIdx <= str.length; strIdx++) { //O(n * ...) n is number of letters in str
      for (let subIdx = 0; subIdx < substr.length; subIdx++) { //O(m * ...) m is number of letters in substr
        if (substr[subIdx] !== str[subIdx + strIdx]) break //O(1) constant
        if (subIdx + 1 === substr.length) return strIdx //O(1) constant
      }
    }
    return -1 //O(n)
  }
  
  //BOYER-MOORE Algorithm
  function boyerMooreAlgo(haystack, needle) {
    let badMatchTable = {}; //O(1) make match table of needle
    let maxOffset = haystack.length - needle.length; //O(1)the offset of haystack - needle length
    let offset = 0; // O(1) offset starts at 0
    let last = needle.length - 1; // O(1) last index of needle
  
    if (last < 0) return 0
  
    //Generate bad match table, which is the location of offsets to jump forward when a comparison fails
    for (let i = 0; i < needle.length; i++) {
      badMatchTable[needle[i]] = last - i;
    }; //O(n) where n is length of needle
    // console.log(badMatchTable)
  
    //Look for needle
    while (offset <= maxOffset) { //O(m) 
      //Search right to left, checking to see if current offset at needle and haystack match. If they do, rewind 1, repeat and if we eventually match the first character, return the offset.
      for (let scan = last; needle[scan] === haystack[scan + offset]; scan--) { //O(o)
        if (scan === 0) { //O(1)
          return offset;
        }
      }
      offset += badMatchTable[haystack[offset + last]] || last || 1;
    }
    return -1; //O(1)
  }
  
  //Big O is O(n * (m * (1 + 1))) => O(n * m)
  
  // Most students' first instincts will be to use built-in string methods like indexOf(), includes() or substring(). indexOf() is, of course, explicitly forbidden; steer them away from methods like includes() and substring().
  
  // indexOf('or', 'hello world'); // should return 7
  // indexOf('hello world', 'or'); // should return -1
  // indexOf('howdy', 'hello world'); // should return -1
  // indexOf('oox', 'ooboxoooxo'); // should return 6
  
  test1 = boyerMooreAlgo('hello world','or'); // should return 7
  test2 = boyerMooreAlgo('because sometimes algorithms are more fun than str.search()', 'algorithms'); // should return 18
  
  console.log('test1', test1);
  console.log('test2', test2);