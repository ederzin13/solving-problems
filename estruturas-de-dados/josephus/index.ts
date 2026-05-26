import Josephus from "./Josephus";

let josephus: Josephus = new Josephus(10);
let teste = josephus.getQueue();

console.log(teste);
console.log(josephus.game());