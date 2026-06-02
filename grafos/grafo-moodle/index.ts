import Graph from "./Graph";
import Node from "./Node";

let grafo: Graph = new Graph();
let nodeA: Node = new Node("A");
let nodeB: Node = new Node("B");
let nodeC: Node = new Node("C");
let nodeD: Node = new Node("D");

grafo.addNode(nodeA);
grafo.addNode(nodeB);
grafo.addNode(nodeC);
grafo.addNode(nodeD);

grafo.addEdge(nodeA, nodeB);
grafo.addEdge(nodeA, nodeC);
grafo.addEdge(nodeC, nodeD);

grafo.bfs(nodeA);
