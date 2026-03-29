export default class Recursion {
  //MENSAGEM – Implemente um método que exiba n vezes uma mensagem na tela
  public message(n: number) {
    if (n === 0) return;

    console.log("Message!");

    this.message(n - 1);
  }

  public progressive(n: number): number {
    if (n === 5) return 0;

    console.log(n);
    return this.progressive(n + 1);
  }
}
