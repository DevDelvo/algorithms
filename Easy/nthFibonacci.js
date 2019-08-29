//  First number of sequence is 0, second is 1, nth number is the sum of the (n-1)th and (n-2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number

//Solution 1 RECURSIVE
//Time complexity O(2^n)
//Space complexity O(n)
//lots of unnessecary calculations
function nthFib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return nthFib(n - 1) + nthFib(n - 2);
}

nthFib(7) //13

//Solution 2 MEMOIZATION / CACHING
//TIME complexity  O(n)
//Space complexity O(n)
function nthFibMemo(n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) {
    return memo[n]
  } else {
    memo[n] = nthFibMemo(n - 1, memo) + nthFibMemo(n - 2, memo);
    console.log("nthFibMemo", memo[n])
    return memo[n]
  }
}

nthFibMemo(7) //13

// Solution 3 ITERATIVE 
//Time complexity O(n)
//Space complexity O(1)
function nthFibIterative(n) {
  let fibNums = [0, 1]
  let counter = 2;
  while (counter <= n) {
    const next = fibNums[0] + fibNums[1];
    fibNums[0] = fibNums[1];
    fibNums[1] = next;
    counter++;
  }
  console.log("nthFibIterative", n > 1 ? fibNums[1] : fibNums[0])
  return n > 1 ? fibNums[1] : fibNums[0]; //if n is greater than 0 return last number in fibNums else return the first number which is 0
}

nthFibIterative(7)