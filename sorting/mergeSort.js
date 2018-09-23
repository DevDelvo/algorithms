const mergeSortSplitter = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return mergeSort(mergeSortSplitter(left), mergeSortSplitter(right));
}

const mergeSort = (left, right) => {
    let newArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            newArr.push(left.shift());
        } else if (right[0] < left[0]) {
            newArr.push(right.shift());
        }
    }
    return newArr.concat(left.slice()).concat(right.slice());
}

const test1 = mergeSortSplitter([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
console.log(test1);