//Bubble Sort

// Implement bubble sort algorithm in a function

//Sample input: [8,5,2,9,5,6,3]
//Sample input: [2,3,5,5,6,8,9]

// Best: Space O(1) | Time O(n)
// Average: Space O(1) | Time O(n^2)
// Worst: Space O(1) | Time O(n^2)
function bubbleSort(arr) {
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                swapper(i, i+1, arr);
                isSorted = false;
            }
        }
    }
    console.log(arr);
    return arr;
}

function swapper(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

bubbleSort([8,5,2,9,5,6,3])