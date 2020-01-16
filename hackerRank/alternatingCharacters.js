// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string , remove an  at positions  and  to make  in  deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.

// alternatingCharacters has the following parameter(s):

// s: a string
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string .

// Constraints

// Each string  will consist only of characters  and 
// Output Format

// For each query, print the minimum number of deletions required on a new line.

// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let current = s[i];
    let next = s[i + 1];
    if (current === next) {
      count++;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = alternatingCharacters(s);

    ws.write(result + "\n");
  }

  ws.end();
}
