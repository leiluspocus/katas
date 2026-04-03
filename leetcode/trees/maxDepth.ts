import { TreeNode } from "./TreeNode";

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
