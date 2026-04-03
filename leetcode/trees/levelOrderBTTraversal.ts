import { TreeNode } from "./TreeNode";

function writeNodes(root : TreeNode | null , level : number, matrix: number[][]) {
    if (root === null) {
        return matrix;
    }
    if (matrix[level] === undefined) {
        matrix[level] = []
    }
    matrix[level].push(root.val);
    const inc = level + 1;
    writeNodes(root.left, inc, matrix);
    writeNodes(root.right, inc, matrix);
    return matrix;
}

function levelOrder(root: TreeNode | null): number[][] {
    const matrix : number[][] = [];
    writeNodes(root, 0, matrix)
    return matrix;
};

// [3,9,20,null,null,15,7]
console.table(levelOrder(new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));

// [1]
console.table(levelOrder(new TreeNode(1)));


// []
console.table(levelOrder(new TreeNode()));

// [1,2]
console.table(levelOrder(new TreeNode(1, new TreeNode(2))))