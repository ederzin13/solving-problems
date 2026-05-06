export default class Balancing {
  private expression: string;

  public constructor(exp: string) {
    this.expression = exp;
  }

  public getExp(): string {
    return this.expression;
  }

  public setExp(exp: string): void {
    this.expression = exp;
  }

  public isBalanced(): boolean {
    let exp: string = this.getExp();
    let balance: boolean | null = null;

    let par: number = 0;
    let cha: number = 0;
    let col: number = 0;

    for (let i = 0; i < exp.length; i++) {
      let char: string = exp.charAt(i);

      //foi o que eu consegui
      if (char === "(" || char === "[") {
        balance = this.isValid(exp, i);
        balance = this.isValid2(exp, i);

        if (balance === false) {
          return balance;
        }
      }

      if (char === "(") par++;
      if (char === "[") col++;
      if (char === "{") cha++;

      if (char === ")") par--;
      if (char === "]") col--;
      if (char === "}") cha--;
    }

    let nums: number[] = [cha, col, par];
    balance = cha === 0 && col === 0 && par === 0 ? true : false;

    console.log(nums);
    return balance;
  }

  private isValid(exp: string, pos: number): boolean {
    for (let i = pos; i < exp.length; i++) {
      let char: string = exp.charAt(i);

      if (char === "{" || char === "[") {
        return false;
      }
    }

    return true;
  }
  private isValid2(exp: string, pos: number): boolean {
    for (let i = pos; i < exp.length; i++) {
      let char: string = exp.charAt(i);

      if (char === "{") {
        return false;
      }
    }

    return true;
  }

  private searchPar(exp: string, pos: number = 0): boolean {
    for (let i = pos; i < exp.length; i++) {
      let char: string = exp.charAt(i);

      if (char === ")") {
        return true;
      }
    }

    return false;
  }

  private searchChave(exp: string, pos: number = 0): boolean {
    for (let i = pos; i < exp.length; i++) {
      let char: string = exp.charAt(i);

      if (char === "}") {
        return true;
      }
    }

    return false;
  }

  private searchCol(exp: string, pos: number = 0): boolean {
    for (let i = pos; i < exp.length; i++) {
      let char: string = exp.charAt(i);

      if (char === "]") {
        return true;
      }
    }

    return false;
  }
}
