export default class Node {
  private value: number | null;
  private left?: Node | null;
  private right?: Node | null;

  constructor(value: number) {
    this.value = value;
  }

  public getValue() {
    return this.value;
  }
}