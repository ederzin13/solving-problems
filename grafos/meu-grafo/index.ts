import Graph from "./Graph";

let grafao: Graph = new Graph();
grafao.addVertex("A");

grafao.addVertex("B");

grafao.addVertex("C");

grafao.addEdge("A", "B");
grafao.addEdge("C", "A");
grafao.addEdge("A", "B");

console.log(grafao.getList());

console.log(grafao.getNeighbors("A"));

grafao.removeEdge("A", "B");
console.log(grafao.getList());
grafao.removeVertex("B");

console.log(grafao.getList());
