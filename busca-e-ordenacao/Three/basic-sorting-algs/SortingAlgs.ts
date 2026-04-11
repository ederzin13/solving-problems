export default class SortingAlgs {
  private list: number[];

  public constructor(list: number[]) {
    this.list = list;
  }

  public getList(): number[] {
    return this.list;
  }

  public selectionSort() {}

  private getMenor(list: number[]): number {
    let menor: number = list[0];

    for (let i: number = 0; i <= list.length; i++) {
      if (list[i] < menor) menor = list[i];
    }

    return menor;
  }
}
