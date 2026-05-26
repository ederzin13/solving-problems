//Eder Murilo de Morais
//Guilherme Patricio Silva

export default class Domino {
  private game: number[];

  public constructor() {
    this.game = [];
  }

  public getGame(): number[] {
    return this.game;
  }

  public setGame(game: number[]): void {
    this.game = game;
  }

  public startGame(a: number, b: number): void {
    this.setGame([a, b]);
  }

  public addFirst(a: number, b: number) {
    let game = this.game;

    if (this.exists(a, b))
      return "Ja existe! Olhe a mesa novamente:" + "\n" + this.getTable();

    if (a === game[0]) {
      game.unshift(b, a);
      return this.getTable();
    }

    if (b === game[0]) {
      game.unshift(a, b);
      return "Adicionado:\n" + this.getTable();
    }

    return "Peça inválida";
  }

  public addLast(a: number, b: number) {
    let game = this.game;
    let last = game.length - 1;

    if (this.exists(a, b))
      return "Ja existe! Olhe a mesa novamente:\n" + this.getTable();

    if (a === game[last]) {
      game.push(a, b);
      return "Adicionado:\n" + this.getTable();
    }

    if (b === game[last]) {
      game.push(b, a);
      return "Adicionado:\n" + this.getTable();
    }

    return "Peça inválida";
  }

  //percorre o array pra ver se já foi jogado
  private exists(a: number, b: number): boolean {
    let game: number[] = this.game;

    for (let i = 0; i < game.length; i += 2) {
      if (
        (a === game[i] && b === game[i + 1]) ||
        (a === game[i + 1] && b === game[i])
      )
        return true;
    }

    return false;
  }

  public getTable() {
    let game = this.game;
    let table: string = "";

    for (let i = 0; i < game.length; i++) {
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
