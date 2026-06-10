import Node from "./Node";
import Tree from "./Tree";

let root: Node = new Node(5);

let tree: Tree = new Tree();
tree.setRoot(root);

console.log(tree);

tree.addNode(7);
tree.addNode(4);
tree.addNode(10);
console.log(tree);

console.log(tree.getMin());
console.log(tree.getMax());

console.log(tree.getValuesInOrder());
