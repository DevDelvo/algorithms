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
        while (arr[j] < arr[j - 1]) {
            swap(j, j - 1, arr);
            j--;
        }
    }
    console.log(arr)
    return arr;
}

function swap(i, prev, arr) {
    // const temp = arr[prev];
    // arr[prev] = arr[i];
    // arr[i] = temp;
    [arr[prev], arr[i]] = [arr[i], arr[prev]]
}

insertionSort([13,8,12,3,7,5])
insertionSort([7,15,21,4,6,6,2])
insertionSort([5,4,3,2,1])
insertionSort([-2,3,4,1,-3])
insertionSort([2,1,3,4,5])