export default class Matriz {
  private n: number;
  private list: number[];

  public constructor(n: number) {
    this.n = n;
    this.list = this.populate();
  }

  public getN(): number {
    return this.n;
  }

  public setN(n: number): void {
    this.n = n;
  }

  public getList(): number[] {
    return this.list;
  }

  public setList(list: number[]): void {
    this.list = list;
  }

  public populate(): number[] {
    let list: number[] = [];

    for (let i: number = 0; i <= 20; i++) {
      list.push(Math.ceil(Math.random() * 20));
    }

    return list;
  }

  public firstOccurrence(pos: number = 0): number {
    if (this.getList()[pos] === this.getN()) return pos;

    return this.firstOccurrence(pos + 1);
  }

  public sortedFirstOccurrence(
    pos: number = Math.ceil(this.getList().length / 2),
    //define a posição inicial como
    //a posição do meio do array
  ): number {
    if (this.getList()[pos] === this.getN()) return pos;

    //se o número for maior que o elemento na posição atual do array
    if (this.getN() > this.getList()[pos]) {
      return this.sortedFirstOccurrence(pos + 1);
    }

    return this.sortedFirstOccurrence(pos - 1);
  }

  public biggestElement(): number {
    return this.biggestElementAux(0);
  }

  private biggestElementAux(pos: number, aux: number = 0): number {
    //salva o maior número
    let biggest: number = aux;

    //se o elemento atual for menor que o próximo elemento
    if (this.getList()[pos] < this.getList()[pos + 1])
      biggest = this.getList()[pos + 1];
    // ^^ o próximo elemento é definido como o maior

    //se a posição for menor ou igual ao tamanho do array
    if (pos <= this.getList().length)
      return this.biggestElementAux(pos + 1, biggest);
    //                              ^^ realiza uma nova iteração

    //ao final retorna o maior
    return biggest;
  }

  public elementSum(): number {
    return this.elementSumAux(0);
  }

  private elementSumAux(pos: number, result: number = 0): number {
    if (pos >= this.getList().length) return result;

    return this.elementSumAux(pos + 1, result + this.getList()[pos]);
  }

  public occurrenceNumber(): number {
    return this.occurrenceNumberAux(0);
  }

  private occurrenceNumberAux(pos: number, aux: number = 0): number {
    let occurrences: number = aux;

    if (pos >= this.getList().length) return occurrences;
    if (this.getN() === this.getList()[pos]) occurrences++;

    return this.occurrenceNumberAux(pos + 1, occurrences);
  }

  public isSorted(pos: number): boolean {
    if (pos >= this.getList().length) return true;
    if (this.getList()[pos + 1] > this.getList()[pos]) return false;

    return this.isSorted(pos + 1);
  }
}
