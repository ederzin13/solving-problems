//Eder Murilo de Morais
//Guilherme Patrício Silva

export default class Group {
  private names: string[];

  public constructor(names: string[]) {
    this.names = names;
  }

  public getNames(): string[] {
    return this.names;
  }

  public setNames(names: string[]): void {
    this.names = names;
  }

  public reverse(): string[] {
    return this.reverseAux(0);
  }

  private reverseAux(pos: number): string[] {
    const TAM = this.getNames().length;
    if (pos >= TAM / 2) return this.getNames();

    let aux = this.getNames()[TAM - 1 - pos];

    this.getNames()[TAM - 1 - pos] = this.getNames()[pos];

    this.getNames()[pos] = aux;

    return this.reverseAux(pos + 1);
  }
}
