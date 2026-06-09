import Node from "./Node";
import Tree from "./Tree";

let node: Node = new Node(1);

let tree: Tree = new Tree();

tree.setRoot(node);

console.log(tree.getNodes());
