// A -> B, C
// B -> A
// C -> A

export default class Graph {
  // Cada chave representa um vértice, e o valor associado
  // a ela representa os vértices conectados a ele.

  // Essa propriedade será responsável por armazenar todos os vértices e suas conexões.
  private adjacencyList: Map<string, string[]>;

  public constructor() {
    this.adjacencyList = new Map();
  }

  public addVertex(v: string): boolean {
    // adiciona um vértice solto
    if (this.adjacencyList.has(v)) {
      return false;
    }

    this.adjacencyList.set(v, []);

    return true;
  }

  //adiciona ARESTA
  public addEdge(start: string, end: string): boolean {
    // A -> B, C
    // B -> A
    // C -> A

    //se os vértices não existirem
    if (!this.adjacencyList.has(start)) {
      this.adjacencyList.set(start, []);

      if (!this.adjacencyList.has(end)) {
        this.adjacencyList.set(end, []);
      }
      return true;
    }

    if (
      this.adjacencyList.get(start)?.includes(end) ||
      this.adjacencyList.get(end)?.includes(start)
    ) {
      return false;
    }

    //se já existirem
    //tem que fazer a relação inversa
    this.adjacencyList.get(start)?.push(end);
    this.adjacencyList.get(end)?.push(start);

    return true;
  }

  public getNeighbors(v: string): string[] {
    if (this.adjacencyList.has(v)) {
      return this.adjacencyList.get(v)!;
    }

    //pode dar confusão
    return [];
  }

  public removeEdge(source: string, destination: string) {
    if (this.adjacencyList.has(source) && this.adjacencyList.has(destination)) {
      this.removeConnection(source, destination);

      this.removeConnection(destination, source);
    }
  }

  //ATROCIDADE
  private removeConnection(source: string, destination: string) {
    for (let i = 0; i <= this.adjacencyList.get(source)?.length!; i++) {
      if (this.adjacencyList.get(source)?.at(i) === destination) {
        this.adjacencyList.get(source)?.splice(i, 1);
      }
    }
  }

  public removeVertex(v: string) {
    this.adjacencyList.delete(v);
  }

  public getList() {
    let list = this.adjacencyList;

    return list;
  }
}
