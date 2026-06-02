import Node from "./Node";

export default class Graph {
  nodes: Node[];

  public constructor() {
    this.nodes = [];
  }

  public addNode(value: any): void {
    let newNode: Node = new Node(value);
    this.nodes.push(newNode);
  }

  public addEdge(source: Node, destination: Node): void {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }

  public bfs(startNode: Node) {
    const visited: Set<Node> = new Set();
    const queue: Node[] = [];

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
      // ! significa asserção de não nulo --> garante que o resultado não será undefined,
      // já que o typescript entende que o que vem de queue.shift() pode ser "Type | undefined"
      const currentNode = queue.shift()!;
      console.log(currentNode.value);

      for (const neighbor of currentNode.neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}
