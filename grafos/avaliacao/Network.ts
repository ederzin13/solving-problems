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

  private getConnectedAux(branch: string, arr: string[], visited: string[]) {
    
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
}
