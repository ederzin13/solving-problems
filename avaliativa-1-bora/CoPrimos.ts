export default class CoPrimos {
  private conjunto: number[];

  public constructor(conj: number[]) {
    this.conjunto = conj;
  }

  public getConj(): number[] {
    return this.conjunto;
  }

  //resolve, mas é ineficiente
  public saoCoprimos2() {
    let list: number[] = this.getConj();

    let divisor = 2;

    for (let i = 0; i <= list[list.length - 1]; i++) {
      let condicao = 0;

      for (let j = 0; j < list[j]; j++) {
        if (list[j] % divisor === 0) condicao++;
      }

      divisor++;

      if (condicao == list.length) return false;
    }

    return true;
  }

  //mesmo método de cima, só que com explicação
  public saoCoprimos(): boolean {
    let list = this.getConj();

    let divisor = 2;

    for (let i = 0; i <= list[list.length - 1]; i++) {
      console.log("i = " + i);
      let condicao = 0; //guarda o número de divisões

      console.log(`Divisor atual = ${divisor}`);

      // console.log("i - elemento do array = " + i + ` -> ${list[i]}`);
      //enquanto j for menor que o elemento atual do array
      for (let j = 0; j < list[j]; j++) {
        console.log("j = " + j);
        console.log(`DIVISÃO ${j + 1} -> ${list[j]} / ${divisor}`);

        if (list[j] % divisor === 0) {
          console.log(`${list[j]} é divisível por ${divisor}`);
          condicao++;
          console.log("condicao = " + condicao);
        }
      }

      console.log("---");
      divisor++;
      if (condicao == list.length) return false; //se o número de divisões for igual ao tamanho do array -> falso
    }

    return true;
  }
}
