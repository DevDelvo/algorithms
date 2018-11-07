function largestRectangle(arr) {
    const stack = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (stack.length && stack[stack.length-1] > current) {
            max = Math.max(max, calcLargestRectangle(stack, current + 1));
        }
        stack.push(current);
    }
    max = Math.max(max, calcLargestRectangle(stack, 1));
    return max;
}

function calcLargestRectangle(stack, min) {
    let count = 0;
    let max = 0;
    while (stack.length && stack[stack.length-1] >= min) {
        count++;
        max = Math.max(max, stack.pop() * count);
    }
    for (let i = 0; i < count; i++) {
        stack.push(min - 1);
    }
    return max;
}

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [11, 11, 10, 10, 10];
console.log(largestRectangle(testArr1));
console.log(largestRectangle(testArr2));