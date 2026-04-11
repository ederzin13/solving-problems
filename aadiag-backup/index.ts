import Diagnostica from "./AADiagnostica";

let atividade: Diagnostica = new Diagnostica();

// console.log(proxMult.nextMultiple(10, 4));
// console.log(proxMult.nextMultiple(4, 10));
// console.log(atividade.nextMultiple(100, 100));

// console.log(atividade.expirationDate(15, 3, 2026));
// console.log(atividade.primeNumber(57));
// // // console.log(atividade.expirationDate2(10, 12, 2026));
// console.log(atividade.validade("2026", "3", "19")); //data atual -> preciso me lembrar de fixar no código
// console.log(atividade.validade("2026", "10", "17")); //não vencido
// console.log(atividade.validade("2025", "12", "30")); //vencido
// console.log(atividade.validade("2027", "1", "1")); //vencido
// console.log(atividade.today);
// console.log(atividade.validade(18, 3, 2026));
// console.log(atividade.validade(31, 12, 2025));
console.log(atividade.validade(1, 4, 2026));
console.log(atividade.validade(31, 12, 2025));
