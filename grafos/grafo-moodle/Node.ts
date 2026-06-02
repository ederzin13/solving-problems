export default class Node {
  value: any;
  neighbors: Node[];

  public constructor(value: any) {
    this.value = value;
    this.neighbors = [];
  }

  public addNeighbor(node: Node): void {
    this.neighbors.push(node);
  }
}
