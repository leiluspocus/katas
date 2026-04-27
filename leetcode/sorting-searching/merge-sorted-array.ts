/**
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/
 * Merge two sorted arrays into a single sorted array.
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 * @returns
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m === 0) {
    nums2.forEach((num, index) => {
      nums1[index] = num;
    });
    return;
  }
  // Merge the arrays
  for (let i = m, j = 0; i < m + n; i++, j++) {
    if (j < n) {
      nums1[i] = nums2[j];
    }
  }

  // Sort the produced array
  nums1.sort((a, b) => a - b);
}

const array1 = [1, 2, 3, 0, 0, 0];
merge(array1, 3, [2, 5, 6], 3);
console.log(array1); // Expected output: [1,2,2,3,5,6]

const array2 = [1];
merge(array2, 1, [], 0);
console.log(array2); // Expected output: [1]

const array3 = [0];
merge(array3, 0, [1], 1);
console.log(array3); // Expected output: [1]
