/**
 * Rotate an array to the right by k positions
 * Kata by LeetCode
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 * @param nums The array to rotate
 * @param k The number of positions to rotate the array
 */
const rotateArrayNotOptimized = (nums: number[], k: number): void => { 
    for ( let i=0; i<k; i++) {
        // Let's keep the first element in a temporary variable
        let tmpElement = nums[0];
        nums[0] = nums[nums.length-1];

        // Move the rest of the array to the right 
        for ( let j=1; j< nums.length; j++) {
            let tmp = nums[j];
            nums[j] = tmpElement;
            tmpElement = tmp;
        }
    }
}

const rotateArrayOptimized = (nums: number[], k: number): void => {
    const n = nums.length;
    k %= n;
    const tail = nums.splice(n - k, k);
    nums.unshift(...tail);
}

rotateArrayOptimized([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3]
rotateArrayOptimized([1, 2, 3, 4, 5], 3); // [3, 4, 5, 1, 2]
rotateArrayOptimized([1, 2, 3, 4, 5], 4); // [2, 3, 4, 5, 1]
rotateArrayOptimized([1, 2, 3, 4, 5], 5); // [1, 2, 3, 4, 5]
rotateArrayOptimized([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]


rotateArrayNotOptimized([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3]
rotateArrayNotOptimized([1, 2, 3, 4, 5], 3); // [3, 4, 5, 1, 2]
rotateArrayNotOptimized([1, 2, 3, 4, 5], 4); // [2, 3, 4, 5, 1]
rotateArrayNotOptimized([1, 2, 3, 4, 5], 5); // [1, 2, 3, 4, 5]
rotateArrayNotOptimized([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]