/**
 * Contains duplicates - LeetCode
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 * @param nums The array to check for duplicates
 * @returns True if the array contains duplicates, false otherwise
 */
const containsDuplicates = (nums: number[]): boolean => {
    nums.sort();
    for ( let i = 0; i < nums.length; i++) {
        if ( nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicates([1, 2, 3, 4, 5])); // false
console.log(containsDuplicates([1, 2, 3, 4, 5, 1])); // true