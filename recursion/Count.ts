export default class Count {
  private sum: number = 0;

  public getSum(): number {
    return this.sum;
  }

  public setSum(value: number): void {
    this.sum += value;
  }

  //CONTAGEM DE A ATÉ B – dados os inteiros a e b, realize a contagem progressiva de a até b.

  public countAB(a: number, b: number): number {
    if (a > b) return 0;

    console.log(a, b);

    return this.countAB(a + 1, b);
  }

  //SOMA DO INTERVALO – Dados dois números, os limites superior e inferior de um intervalo, retorne
  // a soma dos inteiros neste intervalo fechado. O limite superior sempre será maior, ou igual, ao inferior.

  public intervalSum(inf: number, sup: number): number {
    if (inf > sup) return this.getSum();

    this.setSum(inf);

    return this.intervalSum(inf + 1, sup);
  }

  public betterIntervalSum(a: number, b: number): number {
    if (a > b) {
      let aux: number = a;
      a = b;
      b = aux;
    }

    this.setSum(a);

    if (a === b) return this.getSum();

    return this.betterIntervalSum(a + 1, b);
  }
}
