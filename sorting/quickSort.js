//Quick sort
//Write a function that uses the quick sort algorithm


// 1) Pick a pivot. Could be random or the middle one. 
// 2) Put all items smaller than pivot value to the left and larger than the pivot to the right.
// 3) Repeat step-2 for both left and right side of the pivot (pick a pivot, put all items smaller than the pivot to the left and larger on the right)

// In code
// Call Quick sort: Pass in array, left and right to the quickSort function. 
// For first call, left would be index of the first element which is 0 
// Right would be the index of the last element which would be array length - 1.

// Select pivot: We select pivot as the first index of the array.

// Call partition function: After calculating the pivot we send the pivot to the partition function.
// In the partition function we pass array, pivot index, left and right.

// partitionIndex: in the partition function, we keep moving all the items smaller than the pivot value to the left
// and larger than pivot values to the right.
// we must keep track of the position of the partition so that we can split the array into two parts in the next step.
// Tracking the index where we partition the array is done by using the partitionIndex variable. 
// The initial value is left.

// Swap function: helper function to swap values of the array

// move elements: we start a for loop from the left and if the values are smaller than the pivot values we swap it with the position of the partitionIndex and increase the value of the partitionIndex.
// If the value is bigger we don't do anything. We keep going until the element before the last element (remember the last element is the pivot)

// place pivot: after moving all the smallest elements to the left, we swap the last element with the partitionIndex. By doing this, the pivot sits where it suppose to sit when the full array is sorted.
// As all elements left to it are smaller and all element right to it are bigger, we don't do anything.
// End of the function partition, return the partitionIndex.

// Repeat: Now back in quickSort function when you get the partitionIndex, apply quickSort for the left side of the array and the right side of the array.
// keep doing it until left is smaller than right.

// Best: O(nlog(n)) | time O(log(n)) space
// Avg: O(nlog(n)) | O(log(n)) space
// Worst: O(n^2) time | O(log(n)) space

//SOLUTION 1
function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length -1);
    console.log(arr)
    return arr;
}
function quickSortHelper(arr, startIdx = 0, endIdx = arr.length - 1) {
    if (startIdx >= endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
        let left = arr[leftIdx];
        let right = arr[rightIdx];
        let pivot = arr[pivotIdx];
        if (left > pivot && right < pivot) {
            swap(leftIdx, rightIdx, arr);
        }
        if (left <= pivot) leftIdx++;
        if (right >= pivot) rightIdx--;
    }
    swap(pivotIdx, rightIdx, arr)
    const leftSubArrIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx +1);
    if (leftSubArrIsSmaller) {
        quickSortHelper(arr, startIdx, rightIdx -1);
        quickSortHelper(arr, rightIdx + 1, endIdx);
    } else {
        quickSortHelper(arr, rightIdx + 1, endIdx);
        quickSortHelper(arr, startIdx, rightIdx -1);
    }
}

function swap(i, j, arr) {
    [arr[i], arr[j]] =[arr[j], arr[i]]
}

// SOLUTION 2

function quickSort2(arr) {
    quickSort2Helper(arr, 0, arr.length - 1);
    console.log(arr)
    return arr;
}
function quickSort2Helper(arr, left, right) {
    let pivot,
        partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        // sort left and right
        quickSort2Helper(arr, left, partitionIndex - 1);
        quickSort2Helper(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right) {
    let pivotVal = arr[pivot],
        partitionIndex = left;
    
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(i, partitionIndex, arr);
            partitionIndex++;
        }
    }
    swap(right, partitionIndex, arr);
    return partitionIndex;
}

function swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
quickSort([8,5,2,9,5,6,3])
// quickSort2([8,5,2,9,5,6,3])
quickSort([7,3,1,8,4,5,2] )