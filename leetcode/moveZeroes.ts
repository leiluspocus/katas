/**
 * Move all the zeroes to the right, to the right
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/ 
 * @param nums Array numbers to sort
 */
function moveZeroes(nums: number[]): void {
    let zeroesToPush = 0;
    // Removing zeroes
    for ( let i=0; i < nums.length ; i++) {
        if ( nums[i] === 0) { 
            nums.splice(i, 1) 
            zeroesToPush++;
            i = i-1
        }
    }

    // Adding them at the end of the array
    for ( let i=0; i < zeroesToPush; i++) {
        nums.push(0)
    }
    console.log(nums)
};

moveZeroes([0,1,0,3,12])
moveZeroes([0])
moveZeroes([0, 0, 1])