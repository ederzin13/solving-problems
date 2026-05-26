// import Domino from "./Domino";

// let teste: Domino = new Domino();

// teste.startGame(2, 2);
// console.log(teste.getTable());

// //adicionando peça válida no início
// console.log(teste.addFirst(5, 2));
// // console.log(teste.getTable());

// //adicionando peça válida no final
// console.log(teste.addLast(1, 2));
// // console.log(teste.getTable());

// //mais uma no final
// console.log(teste.addLast(1, 3));
// // console.log(teste.getTable());

// //peça inválida NÃO É ADICIONADA;
// console.log(teste.addFirst(3, 3));
// // console.log(teste.getTable());
// //peça inválida NÃO É ADICIONADA;
// console.log(teste.addFirst(5, 2));
// // console.log(teste.getTable());

import Domino from "./DominoProva.ts";

console.clear();

let table = new Domino();

table.addFirst(1, 6); // invalid
console.log();
console.log("Inserindo no começo [1:6]");
console.log(table.getTable());
console.log("> Inválido: Mesa vazia");

table.startGame(1, 3); // invalid
console.log();
console.log("Começando com [1:3]");
console.log(table.getTable());
console.log("> Inválido: Mesa vazia");

table.startGame(6, 6); // valid
console.log();
console.log("Começando com [6:6]");
console.log(table.getTable());
console.log("> Válido: [6:6]");

table.addFirst(3, 6); // valid
console.log();
console.log("Inserindo no início [3:6]");
console.log(table.getTable());
console.log("> Válido: [3:6][6:6]");

table.addFirst(3, 1); // valid
console.log();
console.log("Inserindo no início [3:1] (virar a peça)");
console.log(table.getTable());
console.log("> Válido: [1:3][3:6][6:6]");

table.addFirst(2, 2); // invalid
console.log();
console.log("Inserindo no início [2:2]");
console.log(table.getTable());
console.log("> Inválido: [1:3][3:6][6:6]");

table.addLast(6, 1); // valid
console.log();
console.log("Inserindo no fim [6:1]");
console.log(table.getTable());
console.log("> Válido: [1:3][3:6][6:6][6:1]");

table.addLast(5, 1); // valid
console.log();
console.log("Inserindo no fim [5:1] (virar a peça)");
console.log(table.getTable());
console.log("> Válido: [1:3][3:6][6:6][6:1][1:5]");

table.addLast(2, 4); // invalid
console.log();
console.log("Inserindo no fim [2:4]");
console.log(table.getTable());
console.log("> Inválido: [1:3][3:6][6:6][6:1][1:5]");

table.addLast(1, 7); // invalid
console.log();
console.log("Inserindo peça inválida no fim [1:7]");
console.log(table.getTable());
console.log("> Inválido: [1:3][3:6][6:6][6:1][1:5]");

table.addLast(5, 7); // invalid
console.log();
console.log("Inserindo peça inválida no fim [5:7]");
console.log(table.getTable());
console.log("> Inválido: [1:3][3:6][6:6][6:1][1:5]");

table.addFirst(6, 3); // repeated
console.log();
console.log("Inserindo peça repetida no início [6:3]");
console.log(table.getTable());
console.log("> Inválido: [1:3][3:6][6:6][6:1][1:5]");

table.addFirst(3, 1); // repeated
console.log();
console.log("Inserindo peça repetida no início [3:1]");
console.log(table.getTable());
console.log("> Inválido: [1:3][3:6][6:6][6:1][1:5]");
