export default class Random {
  private list: number[];
  private readonly LEN: number;
  private readonly RANGE: number = 50;

  public constructor(n: number) {
    this.list = this.genList(n);
    this.LEN = this.list.length;
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

  public cutValue(n: number): string {
    let list: number[] = this.list;

    for (let i = 0; i < list.length; i++) {
      if (list[i] < n) {
        list.splice(i, 1);
        i--;
      }
    }

    return this.toString(list);
  }

  public rmMultiple(n: number): string {
    let list = this.list;

    if (n === 0) return this.toString(list);

    for (let i = 0; i < list.length; i++) {
      if (list[i] % n === 0) {
        list.splice(i, 1);
        i--;
      }
    }

    return this.toString(list);
  }

  public toString(list?: number[]): string {
    let toStr: number[] = list ? list : this.list;
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
