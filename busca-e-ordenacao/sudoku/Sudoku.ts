export default class Sudoku {
  private game: number[][];

  public constructor(game: number[][]) {
    this.game = game;
  }

  public getGame(): number[][] {
    return this.game;
  }

  public percorre() {
    let game: number[][] = this.getGame();
    let arr = game[0];

    for (let i: number = 0; i < game.length; i++) {
      for (let j: number = 0; j < game.length; j++) {
        arr[i] = game[i][j];
      }
    }
  }

  public isValid(arr: number[]): boolean {
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) return false;
    }

    return true;
  }
}
