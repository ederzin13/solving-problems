import Sorting from "./Sorting";

let test: Sorting = new Sorting();
console.log(test.getList());
// console.log(test.betterBubble());
// test.shuffle();
// console.log(test.getList());
// console.log(test.gnomeSort());
// console.log(test.recursiveSelection());

//exercício 9

//chamando um método pra ordenar
test.betterBubble();
console.log(test.getList());

//efetuando a busca
console.log(test.findX(6));
//se o número estiver presente, retorna a posição do mesmo no array
//se não, retorna 0