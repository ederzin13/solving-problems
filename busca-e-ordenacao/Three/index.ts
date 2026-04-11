import Three from "./Three";

let teste: Three = new Three(1, 3, 2);
console.log(teste.getN1(), teste.getN2(), teste.getN3());

teste.sort();

console.log(teste.getN1(), teste.getN2(), teste.getN3());

let teste2: Three = new Three(3, 2, 4);
console.log(teste2.getBiggest());
