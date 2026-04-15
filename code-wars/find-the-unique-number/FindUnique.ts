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
}
