export default class Three {
  private n1: number;
  private n2: number;
  private n3: number;

  public constructor(n1: number, n2: number, n3: number) {
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
  }

  public getN1(): number {
    return this.n1;
  }

  public getN2(): number {
    return this.n2;
  }

  public getN3(): number {
    return this.n3;
  }

  public setN1(n1: number): void {
    this.n1 = n1;
  }

  public setN2(n2: number): void {
    this.n2 = n2;
  }

  public setN3(n3: number): void {
    this.n3 = n3;
  }

  public sort(): void {
    if (this.getN1() > this.getN3()) {
      let aux: number = this.getN3();
      this.setN3(this.getN1());
      this.setN1(aux);
    }

    if (this.getN1() > this.getN2()) {
      let aux: number = this.getN1();
      this.setN1(this.getN2());
      this.setN2(aux);
    }

    if (this.getN2() > this.getN3()) {
      let aux: number = this.getN2();
      this.setN2(this.getN3());
      this.setN3(aux);
    }
  }

  public getBiggest(): number {
    if (this.getN1() > this.getN2() && this.getN1() > this.getN3())
      return this.getN1();
    if (this.getN2() > this.getN1() && this.getN2() > this.getN3())
      return this.getN2();

    return this.getN3();
  }
}
