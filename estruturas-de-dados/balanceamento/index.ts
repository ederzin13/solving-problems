import Balancing from "./Balancing";

let teste: Balancing = new Balancing("");

teste.setExp("[{}]");
// let exp: string = teste.getExp();

// console.log("desbalanceado: " + exp);
// console.log("teste 1: " + teste.isBalanced(exp) + "\n");

// teste.setExp("1 + (5)");
// exp = teste.getExp();

// console.log("balanceado: " + exp);
// console.log("teste 2: " + teste.isBalanced(exp) + "\n");
console.log(teste.isBalanced());
