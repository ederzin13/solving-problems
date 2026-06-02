// Eder Murilo de Morais
// Guilherme Patricio Silva

export default class Domino {
  private game: number[];

  public constructor() {
    this.game = [];
  }

  public startGame(a: number, b: number): boolean {
    if (a != b) {
      return false;
    }

    this.game = [];

    this.game.push(a, b);

    return true;
  }

  public isValid(a: number, b: number): boolean {
    if (a > 6 || b > 6) {
      return false;
    }

    let game: number[] = this.game;
    let length: number = game.length;

    for (let i: number = 0; i <= length; i += 2) {
      if (
        (a === game[i] && b === game[i + 1]) ||
        (b === game[i] && a === game[i + 1])
      ) {
        return false;
      }
    }

    return true;
  }

  public addFirst(a: number, b: number): boolean {
    let game: number[] = this.game;

    if (!this.isValid(a, b)) {
      return false;
    }

    if (b === game[0]) {
      this.game.unshift(a, b);

      return true;
    }

    if (a === game[0]) {
      this.game.unshift(b, a);

      return true;
    }

    return false;
  }

  public addLast(a: number, b: number): boolean {
    let game: number[] = this.game;
    let last: number = game.length - 1;

    if (!this.isValid(a, b)) {
      return false;
    }

    if (a === game[last]) {
      this.game.push(a, b);

      return true;
    }

    if (b === game[last]) {
      this.game.push(b, a);

      return true;
    }

    return false;
  }

  public getTable(): string {
    let game: number[] = this.game;
    let length: number = game.length;
    let table: string = "";

    for (let i = 0; i < length; i++) {
      if (i % 2 === 0) {
        table = table + "[" + game[i] + ":";
      }

      if (i % 2 != 0) {
        table = table + game[i] + "]";
      }
    }

    return table;
  }
}
