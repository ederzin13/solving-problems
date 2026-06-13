export default class Network {
  private net: Map<string, string[]>;

  constructor() {
    this.net = new Map();
  }

  //refatorar depois
  public add(sourceBranch: string, destinationBranch: string): boolean {
    //source não existe
    if (!this.net.has(sourceBranch)) {
      //cria source
      this.net.set(sourceBranch, []);

      //destination não existe
      if (!this.net.has(destinationBranch)) {
        //cria destination
        this.net.set(destinationBranch, []);

        //faz a ligação
        this.net.get(sourceBranch)?.push(destinationBranch);
        this.net.get(destinationBranch)?.push(sourceBranch);
        return true;
      }

      //destination já existe
      this.net.get(sourceBranch)?.push(destinationBranch);
      this.net.get(destinationBranch)?.push(sourceBranch);
      return true;
    }

    //source existe, mas destination não
    if (!this.net.has(destinationBranch)) {
      this.net.set(destinationBranch, []);

      this.net.get(sourceBranch)?.push(destinationBranch);
      this.net.get(destinationBranch)?.push(sourceBranch);
      return true;
    }

    this.net.get(sourceBranch)?.push(destinationBranch);
    this.net.get(destinationBranch)?.push(sourceBranch);

    return true;
  }

  public getConnected(branch: string): string[] {
    let arr: string[] = [];

    //guarda os elementos que já foram vistos
    let visited: string[] = [];

    return this.getConnectedAux(branch, arr, visited);
  }

  private getConnectedAux(
    branch: string,
    arr: string[],
    visited: string[],
  ): string[] {
    visited.push(branch);

    //entra nos vizinhos e coloca eles no array
    this.net.get(branch)?.forEach((neighbor) => {
      //se não tiver sido visitado, coloca o vizinho no array e entra nele
      if (!visited.includes(neighbor)) {
        arr.push(neighbor);
        this.getConnectedAux(neighbor, arr, visited);
      }
    });

    return arr;
  }

  public getNotConnected(branch: string): string[] {
    //pego o array com os conectados
    let connected = this.getConnected(branch);

    //cria uma cópia do map lá de cima
    let net = new Map(this.net);

    let notConnected: string[] = [];

    //remove as chaves do mapa que não estão presentes no array
    for (let i = 0; i < connected.length; i++) {
      if (net.has(connected[i])) {
        net.delete(connected[i]);
      }
    }

    //gambiarra: desse jeito, a branch fica repetida, então removo na mão mesmo
    net.delete(branch);

    //pra cada chave restante no mapa, coloco no array de não conectados
    //obs: não uso o value por que só quero a chave
    net.forEach((value, key) => {
      notConnected.push(key);
    });

    return notConnected;
  }
}
