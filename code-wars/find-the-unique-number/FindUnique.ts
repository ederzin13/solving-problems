export default class FindUnique {
  private myList: number[];

  public constructor(length: number, uniqueNumber: number) {
    this.myList = this.populateList(length, uniqueNumber);
  }

  public getList(): number[] {
    return this.myList;
  }

  public setList(list: number[]): void {
    this.myList = list;
  }

  public populateList(length: number, uniqueNumber: number): number[] {
    let num: number = this.randomNumber();
    let list: number[] = [];
    let randomPosition: number = this.randomPosition(length);

    for (let i: number = 0; i <= length; i++) {
      if (i === randomPosition) list.push(uniqueNumber);
      else list.push(num);
    }

    return list;
  }

  private randomNumber(isUnique?: boolean): number {
    if (isUnique) return Math.ceil(Math.random() * 50);

    return Math.ceil(Math.random() * 10);
  }

  private randomPosition(length: number): number {
    return Math.ceil(Math.random() * length);
  }

  public findUniq(): number {
    return this.findUniqAux(this.getList());
  }

  private findUniqAux(list: number[]): number {
    const LGT: number = list.length;

    //ineficiente
    // if (list[0] === list[LGT - 1]) {
    //   for (let i: number = 0; i <= LGT; i++) {
    //     if (list[i] != list[i + 1]) return list[i + 1];
    //   }
    // }

    if (list[0] === list[LGT - 1]) {
      let j: number = LGT - 1;

      if (list[1] != list[0]) return list[1];

      for (let i: number = 0; i <= LGT - 2; i++) {
        console.log(i, j);
        if (list[i] != list[i + 1]) return list[i + 1];
        if (list[j] != list[j - 1]) return list[j - 1];
        --j;
      }
    }

    if (list[0] === list[1]) return list[LGT - 1];

    return list[0];
  }
}
