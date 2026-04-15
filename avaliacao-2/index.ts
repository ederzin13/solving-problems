import Group from "./Group";

let teste: Group = new Group(["Milhouse", "Bart", "Lisa", "Homer"]);

// console.log(teste.getNames());
// console.log(teste.reverse());

teste.setNames(["1", "2", "3", "4"]);
console.log("Teste 1");
console.log(teste.reverse());

teste.setNames(["1", "2", "3", "4", "5"]);
console.log("Teste 2");
console.log(teste.reverse());

teste.setNames(["1", "2", "3", "4", "3", "2", "1"]);
console.log("Teste 3");
console.log(teste.reverse());

teste.setNames(["1"]);
console.log("Teste 4");
console.log(teste.reverse());