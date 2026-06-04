import Node from "./Node";

export default class Tree {
  private root: Node | null;
  private size: number;

  public constructor() {
    this.root = null;
    this.size = 0;
  }

  // public getRoot(): Node {
  //   return this.root;
  // }

  public setRoot(root: Node): boolean {
    if (!this.root) {
      this.root = root;

      this.size++;

      return true;
    }

    return false;
  }

  //pensar recursivamente
  public addNode(value: number) {
    const node: Node = new Node(value);
    const rootValue = this.root?.getValue();

    //se a árvore estiver vazia, define o novo nó como raiz
    if (this.isEmpty()) {
      this.setRoot(node);
    }

    //valor menor que raiz -> vai pra esquerda
    if (value < rootValue!) {
      this.root?.setLeft(node);
      this.size++;
    }

    if (value >= rootValue!) {
      this.root?.setRight(node);
      this.size++;
    }

    //e agora?
    //agora, como os filhos já estão preenchidos, não é mais possível 
    //inserir no nó atual
    // -> preciso passar para o próximo nó
    //
  }

  private isEmpty(): boolean {
    if (this.root) {
      return true;
    }

    return false;
  }

  //operações da árvore sempre ficam aqui
}
