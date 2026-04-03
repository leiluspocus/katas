import { TreeNode } from "./TreeNode";

/**
 * Check validity of a binary search tree
 * Kata LeetCode
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
 * @param root 
 */
let previousNode : TreeNode | null = null;

function isValidNode(root: TreeNode | null) : boolean {
    if ( root === null ) {
        return true;
    } 
    if ( !isValidNode(root.left)) {
        return false;
    }
    if ( previousNode !== null && previousNode.val >= root.val ) {
        return false;
    }
    previousNode = root;
    return isValidNode(root.right);
}

function isValidBST(root: TreeNode | null): boolean { 
    previousNode = null;
    return isValidNode(root);
};

const validTree = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(isValidBST(validTree)) // true

const invalidTree = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)))
console.log(isValidBST(invalidTree)) // false


const invalidBalancedTree = new TreeNode(2, new TreeNode(2), new TreeNode(2))
console.log(isValidBST(invalidBalancedTree)) // false


const validUnbalancedTree = new TreeNode(0, new TreeNode(-1))
console.log(isValidBST(validUnbalancedTree)) // true

const invalidTree2 = new TreeNode(5 ,new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)));
console.log(isValidBST(invalidTree2)); // false