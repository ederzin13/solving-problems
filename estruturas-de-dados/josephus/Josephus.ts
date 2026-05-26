export default class Josephus {
  private queue: number[] = [];
  private readonly LEN: number;
  private readonly RANGE: number = 10;

  public constructor(n: number) {
    this.queue = this.genQueue(n);
    this.LEN = this.queue.length;
  }

  private genQueue(n: number): number[] {
    let list: number[] = [];

    for (let i: number = 0; i < n; i++) {
      list.push(Math.ceil(Math.random() * 5));
    }

    return list;
  }

  public getQueue(): number[] {
    return this.queue;
  }

  private sorteio(): number {
    return Math.ceil(Math.random() * 5);
  }

  //
  public game(): number[] {
    let queue: number[] = this.queue;
    let num: number;
    //primeira posição sorteada
    let pos: number = this.sorteio();

    while (queue.length > 1) {
      //pega o valor para contagem
      num = queue[pos];
      let count = 0;

      for (let i = pos; i <= queue.length; i++) {
        //reseta a posição de contagem
        if (i === queue.length - 1) {
          count++;
          i = 0;
        }

        //incrementa pra saber quando parar
        if (count != num) {
          count++;
        }

        //pega o próximo número
        num = queue[i];

        //remove o jogador
        queue.splice(i, 1);

        //para o for
        break;
      }
    }

    return queue;
  }
}
