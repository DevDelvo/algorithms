//Insertion Sort

//Write a function that takes in an array of integers and returns a sorted version of that array. 
//User Insertion Sort algorithm to sort array

//Somple input: [8,5,2,9,5,6,3]
//Sample output: [2,3,5,5,6,8,9]


// Best O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1, arr);
            j--;
        }
    }
    console.log(arr)
    return arr;
}

function swap(i, prev, arr) {
    const temp = arr[prev];
    arr[prev] = arr[i];
    arr[i] = temp;
}

insertionSort([12,11,13,5,6])
insertionSort([8,5,2,9,5,6,3])