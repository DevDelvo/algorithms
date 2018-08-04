//Selection Sort
//Write a function that uses selection sort algorithm to take a given array and 
//return the sorted version of it

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIdx = i;
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         if (i != minIdx) {
//             swap(i, minIdx, arr);
//         }
//     }
//     console.log(arr)
//     return arr
// }

//with a while loop
function selectionSort(arr) {
    let startIdx = 0;
    while (startIdx < arr.length - 1) {
        let minIdx = startIdx;
        for (let i = startIdx + 1; i < arr.length; i++) {
            if (arr[minIdx] > arr[i]) minIdx = i;
        }
        swap(startIdx, minIdx, arr)
        startIdx++;
    }
    console.log(arr)
    return arr
}

function swap(i, j, arr) {
    // const temp = arr[j];
    // arr[j] = arr[i];
    // arr[i] = temp;
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

selectionSort([13,5,7,2,9])
selectionSort([64,25,12,22,11])
selectionSort([6,5,4,3,2,1])

// Best O(n^2) | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
