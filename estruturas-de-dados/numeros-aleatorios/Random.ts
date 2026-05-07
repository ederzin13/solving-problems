export default class Random {
  private list: number[];
  private readonly RANGE: number = 10;

  public constructor(n: number) {
    this.list = this.genList(n);
  }

  public getList(): number[] {
    return this.list;
  }

  public setList(list: number[]): void {
    this.list = list;
  }

  private genList(n: number): number[] {
    let list: number[] = [];

    for (let i: number = 0; i < n; i++) {
      list.push(Math.ceil(Math.random() * this.RANGE));
    }

    return list;
  }

  public toString(): string {
    let toStr: number[] = this.list;
    let str: string = "";

    for (let i = 0; i < toStr.length; i++) {
      str += toStr[i];

      if (i != toStr.length - 1) {
        str += ", ";
      }
    }

    return str;
  }
}
