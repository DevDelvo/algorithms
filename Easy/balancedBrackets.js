// For this question, you will parse a string to determine if it contains only "balanced delimiters."
// A balanced delimiter starts with an opening character ((, [, {), ends with a matching closing character (), ], } respectively), 
// and has only other matching delimiters in between.
// A balanced delimiter may contain any number of balanced delimiters.
// Examples
// The following are examples of balanced delimiter strings:
// ()[]{}
// ([{}])
// ([]{})

// The following are examples of invalid strings:
// ([)]
// ([]
// [])
// ([})

// Input is provided as a single string.
//Your output should be True or False according to whether the string is balanced.

// For example:
// Input: ([{}])
// Output: True

function balancedDelimiters(str) {
    const openingBrackets = '([{';
    const closingBrackets = '}])';
    const matchingBrackets = {")": "(", "]": "[","}": "{"};
    const stack = [];
    for (const char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            if (stack[stack.length - 1] === matchingBrackets[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(balancedDelimiters('()[]{}')); //true
console.log(balancedDelimiters('([)]')); //false
console.log(balancedDelimiters('(()())((()()()))')); //true
console.log(balancedDelimiters('{}()')); //true
console.log(balancedDelimiters('()([])')); //true
