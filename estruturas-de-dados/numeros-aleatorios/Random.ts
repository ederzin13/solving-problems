export default class Random {
  private list: number[];
  private readonly RANGE: number = 10;

  public constructor(n: number) {
    this.list = this.genList(n);
  }

  public getList(): string {
    let str: string = this.toString();

    return str;
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

  public cutValue(n: number) {
    let list = this.list;

    for (let i = 0; i < list.length; i++) {
      if (list[i] < n) {
        list.splice(i, 1);
      }
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
