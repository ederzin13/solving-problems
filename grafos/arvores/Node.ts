import Tree from "./Tree";
//pensar em trabalhar com heranças depois

export default class Node {
  private value: number;
  private left: Node | null;
  private right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public getValue(): number {
    return this.value;
  }

  public getLeft(): Node | null {
    return this.left;
  }

  public getRight(): Node | null {
    return this.right;
  }

  public setLeft(node: Node): boolean {
    if (!this.left) {
      this.left =  node;

      return true;
    }

    return false;
  }

  public setRight(node: Node): boolean {
    if (!this.right) {
      this.right = node;

      return true;
    }

    return false;
  } 
}
