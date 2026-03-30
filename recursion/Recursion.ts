export default class Recursion {
  //MENSAGEM – Implemente um método que exiba n vezes uma mensagem na tela
  public message(n: number) {
    if (n === 0) return;

    console.log("Message!");

    this.message(n - 1);
  }

  //CONTAGEM PROGRESSIVA – Dado um inteiro positivo n, realize a contagem progressiva de 1 até n.
  public progressive(n: number, count: number = 1): number {
    if (count > n) return 0;

    console.log(count);
    return this.progressive(n, count + 1);
  }
}
