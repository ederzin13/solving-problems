export default class List {
  private list: number[];

  public constructor(list: number[]) {
    this.list = list;
  }

  public getList(): number[] {
    return this.list;
  }

  public getSublist(n: number): number[] {
    let list: number[] = this.list;
    list.sort();

    let isNegative: boolean = false;

    if (n < 0) {
      isNegative = true;
    }

    let positiveN = isNegative ? n - n - n : n;

    if (positiveN >= list.length) return [];

    switch (positiveN) {
      case 0:
        return [];
      case 1:
        return list;
    }

    if (isNegative) list.reverse();

    if (positiveN > 1) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] % positiveN === 0) list.splice(i, 1);
      }

      return list;
    }

    return list;
  }
}
