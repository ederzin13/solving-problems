import Node from "./Node";

export default class Tree {
  private root: Node | null;
  private size: number;

  public constructor() {
    this.root = null;
    this.size = 0;
  }

  public setRoot(root: Node): boolean {
    if (!this.root) {
      this.root = root;

      this.size++;

      return true;
    }

    return false;
  }

  public addNode(value: number) {
    const newNode: Node = new Node(value);

    //se a árvore estiver vazia, define o novo nó como raiz
    if (this.isEmpty()) {
      this.setRoot(newNode);
      this.size++;
      return;
    }

    return this.addNodeAux(this.root!, newNode);
  }

  private addNodeAux(currentNode: Node, newNode: Node): boolean {
    //se o valor do novo for igual ao valor atual
    if (newNode.getValue() === currentNode.getValue()) {
      return false;
    }

    //pra esquerda
    if (newNode.getValue() < currentNode.getValue()) {
      //se o getLeft retornar falso, significa que não tem nó pra esquerda
      if (!currentNode.getLeft()) {
        currentNode.setLeft(newNode);
        this.size++;

        return true;
      }

      return this.addNodeAux(currentNode.getLeft()!, newNode);
    }

    //pra direita
    if (!currentNode.getRight()) {
      currentNode.setRight(newNode);
      this.size++;

      return true;
    }

    return this.addNodeAux(currentNode.getRight()!, newNode);
  }

  private isEmpty(): boolean {
    if (this.root) {
      return false;
    }

    return true;
  }

  public getMin(): number {
    let currentNode = this.root;

    return this.getMinAux(currentNode!)!;
  }

  private getMinAux(currentNode: Node): number {
    //se não tiver pra esquerda
    if (!currentNode?.getLeft()) {
      return currentNode?.getValue()!;
    }

    return this.getMinAux(currentNode.getLeft()!);
  }

  public getMax(): number {
    let currentNode = this.root;

    return this.getMaxAux(currentNode!);
  }

  private getMaxAux(currentNode: Node): number {
    if (!currentNode.getRight()) {
      return currentNode.getValue();
    }

    return this.getMaxAux(currentNode.getRight()!);
  }

  public getValuesInOrder(): number[] {
    const values: number[] = [];

    this.inOrder(this.root, values);

    return values;
  }

  private inOrder(node: Node | null, values: number[]): void {
    if (node === null) {
      return;
    }

    this.inOrder(node.getLeft(), values);

    values.push(node.getValue());

    this.inOrder(node.getRight(), values);
  }
}
