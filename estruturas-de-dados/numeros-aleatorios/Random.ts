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

  //faz sentido?
  public nextToAverage(): number {
    let list = this.list;
    const LEN: number = this.LEN;
    let avg: number = this.average(list);

    list = this.selectionSort3();

    if (avg === list[LEN - 1]) {
      return list[LEN - 1];
    }

    if (avg < list[0]) {
      return list[0];
    }

    let diff: number = avg - list[0];
    let pos: number = 0;

    for (let i: number = 0; i <= LEN; i++) {
      if (list[i] === avg) return list[i];

      if (diff > avg - list[i]) {
        pos = i;
        diff = avg - list[i];
      }
    }
    console.log(list);

    return list[pos];
  }

  private average(list: number[]): number {
    let avg: number = 0;

    for (let i: number = 0; i < list.length; i++) {
      avg += list[i];
    }

    avg = avg / list.length;

    return avg;
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

  private selectionSort3(): number[] {
    let list: number[] = this.list;
    let j: number = 0;

    while (!this.isSorted(list)) {
      let min: number = list[j];

      for (let i: number = j; i <= list.length; i++) {
        if (list[i] < min) {
          min = list[i];
          list[i] = list[j];
          list[j] = min;
        }
      }

      j++;
    }

    return list;
  }

  private isSorted(list: number[]): boolean {
    for (let i: number = 0; i <= list.length; i++) {
      if (list[i] > list[i + 1]) return false;
    }

    return true;
  }
}
