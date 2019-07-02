// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
// O(n1 + n2) time | O(1) space
var mergeSortedArrays = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let k = 0;
    let nums1Copy = nums1.slice();
    while (i < m && j < n) {
        if (nums1Copy[i] < nums2[j]) {
            nums1[k++] = nums1Copy[i++];
        } else if (nums2[j] < nums1Copy[i]) {
            nums1[k++] = nums2[j++];
        } else {
            nums1[k++] = nums2[j];
            nums1[k++] = nums2[j++];
            i++;
        }
    }
    
    while (j < n) {
        nums1[k++] = nums2[j++];
    }
    while (i < m) {
        nums1[k++] = nums1Copy[i++];
    }  
    return nums1
};

console.log(mergeSortedArrays(nums1, 3, nums2, 3));