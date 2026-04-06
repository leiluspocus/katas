import { TreeNode } from "./TreeNode";

/**
 * Affiche l'arbre binaire en console (vue latérale).
 * Exemple:
 *        9
 *    5
 *        0
 *-3
 *    -10
 */
export function printBinaryTree(root: TreeNode | null): void {
  if (!root) {
    console.log("(arbre vide)");
    return;
  }

  const lines: string[] = [];

  const traverse = (node: TreeNode | null, prefix = "", isLeft = true) => {
    if (!node) return;

    // D'abord le sous-arbre droit pour l'afficher "au-dessus"
    traverse(node.right, prefix + (isLeft ? "│   " : "    "), false);

    lines.push(prefix + (isLeft ? "└── " : "┌── ") + node.val);

    // Puis le sous-arbre gauche
    traverse(node.left, prefix + (isLeft ? "    " : "│   "), true);
  };

  traverse(root);
  console.log(lines.join("\n"));
}