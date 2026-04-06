/**
 * Sorted array to binary tree
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/631/ 
 * @param nums 
 */
import { TreeNode } from "./TreeNode";
import { printBinaryTree } from "./displayTree";

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if ( nums.length === 0 ) {
        return null;
    }
    let middleIndex = Math.floor(nums.length / 2);

    // The tree root should be the middle of the array, since the array is already sorted
    let root = new TreeNode(nums[middleIndex]);

    // Left part
    const numsLeft = []
    for ( let i =0; i < middleIndex ; i++) {
        numsLeft.push(nums[i])
    }

    // Right part
    const numsRight = []
    for ( let i =middleIndex +1 ; i < nums.length ; i++) {
        numsRight.push(nums[i])
    }
    root.left = sortedArrayToBST(numsLeft);
    root.right = sortedArrayToBST(numsRight);
    return root
};

const binaryTree = sortedArrayToBST([-10,-3,0,5,9])
printBinaryTree(binaryTree);
