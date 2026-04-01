//https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

export default class Chessboard {
  private squares: number = 1;

  public getSquares(): number {
    return this.squares;
  }

  public setSquares(squares: number): void {
    this.squares = squares;
  }

  //não funcionou para o número 3 e possivelmente dá erro em outros ímpares
  public squaresNeeded(grains: number): number {
    if (grains === 1) return this.getSquares();

    let aux: number = Math.ceil(grains / 2);

    this.setSquares(this.getSquares() + 1);

    return this.squaresNeeded(aux);
  }
}
