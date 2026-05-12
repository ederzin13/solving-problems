import Random from "./Random";

let teste: Random = new Random(5);
// console.log(teste.getList());
// console.log(teste.toString());

teste.setList([16, 17, 18, 19]);
console.log(teste.toString());
console.log(teste.cutValue(20));
teste.setList([16, 17, 18, 19, 15, 3]);
console.log(teste.toString());
console.log(teste.rmMultiple(3));
