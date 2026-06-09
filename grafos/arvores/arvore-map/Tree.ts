import Node from "./Node";

export default class Tree {
  private root: Node | null;
  private nodes: Map<number, Node[]> = new Map();
  //size

  constructor() {
    this.root = null;
  }

  //se a raiz estiver vazia
  public setRoot(root: Node): boolean {
    if (!this.root) {
      this.root = root;

      let newNode: Node = new Node(root.getValue()!);

      this.nodes.get(newNode.getValue()!)?.push(newNode);

      return true;
    }

    return false;
  }

  public getNodes() {
    return this.nodes;
  }
}
