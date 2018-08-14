// Equilibrium index of an array is an index such that the sum of elements at lower indexes 
// is equal to the sum of elements at higher indexes. 
// For example, in an array A:

// Example :

// Input : A[] = {-7, 1, 5, 2, -4, 3, 6}
// Output : 6
// 3 is an equilibrium index, because:
// A[0] + A[1] + A[2] + A[3] + A[4] + A[5] + A[6] =  A[6]
// Write a function int equilibrium(int[] arr, int n); 
// that given a sequence arr[] of size n, 
// returns an equilibrium index (if any) or -1 if no equilibrium indexes exist.

// O(n^2) time | O(1) space
// function equilibriumIndex(arr) {
//     // let leftSum;
//     // let rightSum;
//     for (let i = 0; i < arr.length; i++) { 
//         let leftSum = 0;
//         let rightSum = 0;
//         for (let j = 0; j < i; j++) { //get left sum
//             // console.log('left sum:', leftSum, 'arr[j]: ', arr[j])
//             leftSum += arr[j];
//             // console.log('left', leftSum)
//         }
//         for (let k = (arr.length - 1); k > i; k--) {
//             rightSum += arr[k]
//             // console.log('right', rightSum)
                // if (leftSum === rightSum) {
                //     return j; //if the sums are equal, return i
                // }
//         }
//        
//     }
//     return -1; //no equilibrium index found
// }

// O(n) time | O(1) space
function equilibriumIndex(arr) {
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    let leftSum = 0;
    let rightSum = 0;
    let sum = arr.reduce((a, b) => a + b);
    
    for (let i = 0; i < arr.length; i++) {
        rightSum = sum - (leftSum + arr[i])
        console.log("left: ", leftSum, "right: ", rightSum)
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += arr[i];
    }
    return -1;
}

// const test1 = equilibriumIndex([-7, 1, 5, 2, -4, 3, 6])
// console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 6])) //expects 6
console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0 ])) //expects 3
// console.log(equilibriumIndex([-1, 3, -4, 5, 1, -6, 2, 1])) //expects 1
// console.log(equilibriumIndex([2, -2, 3, 2, -2, -3, 3, 0])) //expects 2