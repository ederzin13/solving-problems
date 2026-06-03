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
    }

    if (!this.adjacencyList.has(end)) {
      this.adjacencyList.set(end, []);
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
      //retorna uma cópia
      return [...this.adjacencyList.get(v)!];
    }

    //pode dar confusão
    return [];
  }

  public removeEdge(source: string, destination: string): void {
    if (this.adjacencyList.has(source) && this.adjacencyList.has(destination)) {
      this.removeConnection(source, destination);

      this.removeConnection(destination, source);
    }
  }

  private removeConnection(source: string, destination: string): void {
    const neighbors = this.adjacencyList.get(source);

    if (!neighbors) {
      return;
    }

    //filter mantém todos os elementos que atendem a uma condição
    this.adjacencyList.set(
      source,
      neighbors.filter((neighbor) => neighbor !== destination),
    );
  }

  public removeVertex(v: string): boolean {
    const neighbors = this.adjacencyList.get(v);

    if (!neighbors) {
      return false;
    }

    //pra cada elemento do array (neighbor), executa o bloco
    //
    //útil pra quando quero apenas passar por todos os elementos
    for (const neighbor of neighbors) {
      this.removeConnection(neighbor, v);
    }

    this.adjacencyList.delete(v);

    return true;
  }

  public getList() {
    console.log(this.adjacencyList);
  }
}
