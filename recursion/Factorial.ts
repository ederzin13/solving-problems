export default class Factorial {
  private n: number;

  public constructor(n: number) {
    this.n = n;
  }

  public getN(): number {
    return this.n;
  }

  public setN(n: number): void {
    this.n = n;
  }

  public factorial(n: number, aux: number = 1): number {
    aux *= n;

    if (n === 2) return aux;

    return this.factorial(n - 1, aux);
  }

  public power() {}
}
