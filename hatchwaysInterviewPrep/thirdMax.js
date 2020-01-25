// Given a non - empty array of integers, 
// return the third maximum number in this array.
// If it does not exist, return the maximum number.
// The time complexity must be in O(n).

//   Example 1:
// Input: [3, 2, 1]   1
// Input: [1, 4, 2, 6, 9] 4

function thirdMax (arr, n) {
  // let maxNum = -Infinity;
  // let secondMaxNum = -Infinity;
  // let thirdMaxNum = -Infinity;
  // // let arr = new Array(6).fill(-Infinity);
  
  // for (const num of arr) {
  //   if (num > maxNum) {
  //     maxNum = num;
  //   } else if (num < maxNum && num > secondMaxNum) {
  //     secondMaxNum = num;
  //   } else if (num < secondMaxNum && num > thirdMaxNum) {
  //     thirdMaxNum = 
  //   }
  // }
  arr = arr.sort((a, b) => a - b);
  const arrSet = new Set(arr);
  
  if (arr.length > 3) arr[arr.length - 1]
  return arr[arr.length - n];
  
  
 public int findKthLargest(int[] nums, int k) {

    final PriorityQueue<Integer> pq = new PriorityQueue<>();
    for(int val : nums) {
        pq.offer(val);

        if(pq.size() > k) {
            pq.poll();
        }
    }
    return pq.peek();
}
 [3, 1, 5, 9 , 6, 7] k = 3  
 
  
  [9, 6, 7]
}

public int findKthLargest(int[] nums, int k) {

  k = nums.length - k;
  int lo = 0;
  int hi = nums.length - 1;
  while (lo < hi) {
    final int j = partition(nums, lo, hi);
    if (j < k) {
      lo = j + 1;
    } else if (j > k) {
      hi = j - 1;
    } else {
      break;
    }
  }
  return nums[k];
}

    private int partition(int[] a, int lo, int hi) {

  int i = lo;
  int j = hi + 1;
  while (true) {
    while (i < hi && less(a[++i], a[lo]));
    while (j > lo && less(a[lo], a[--j]));
    if (i >= j) {
      break;
    }
    exch(a, i, j);
  }
  exch(a, lo, j);
  return j;
}

    private void exch(int[] a, int i, int j) {
  final int tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

    private boolean less(int v, int w) {
  return v < w;
}
