/**
 * Kata - Check Symetry of tree
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/
 */
import { TreeNode } from "./TreeNode";

function isMirror(left : TreeNode | null, right : TreeNode | null) {
    if ( left === null && right !== null) {
        return false;
    }
    if ( right === null && left !== null ) {
        return false;
    }
    if ( left === null && right === null) {
        return true;
    }
    if ( left.val !== right.val ) {
        return false;
    }
    if ( left.val === right.val ) {
        return true;
    }
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
    if ( root === null) {
        return true
    }
    return isMirror(root.left, root.right);
};

// [1,2,2,3,4,4,3] 
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))))

console.log(isSymmetric(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // false