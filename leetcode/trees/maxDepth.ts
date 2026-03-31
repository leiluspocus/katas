/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
    if ( root === null ) {
        return 0
    }
    // We check the height on the left side of tree 
    const heightLeft = maxDepth(root.left) + 1;
    
    // We check the height on the right side of tree 
    const heightRight = maxDepth(root.right) + 1; 
    return Math.max(heightLeft, heightRight);
}

// Construct initial use case tree
const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(maxDepth(tree));
