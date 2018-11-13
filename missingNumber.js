function missingNumber(arr) {
    let current, nextVal;

    // this replaces indices with positive values and values less than or equal to the array length in order
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0 || arr[i] > arr.length) continue; // ignore negative numbers or numbers greater than array length;
        current = arr[i];
        while (arr[current - 1] !== current) { // ex: arr[2 - 1] !== 2 meaning the arr[current value - 1] is not equal to the current value
            nextVal = arr[current - 1]; // assign the next value to arr[val - 1];
            arr[current - 1] = current;
            current = nextVal;
            if (current <= 0 || current > arr.length) break; // break if negative or greater than array length
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return arr.length + 1; // this means that all numbers are in order and there is no missing value in the array;
}

console.log(missingNumber([2, 3, 7, 6, 8, -1, -10, 15])); // 1
console.log(missingNumber([1, 3, 6, 4, 1, 2])); // 5
console.log(missingNumber([1, 2, 3])); // 4
console.log(missingNumber([-1, -3])); // 1
