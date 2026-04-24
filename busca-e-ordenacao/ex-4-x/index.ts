import Sorting from "./Sorting";

let test: Sorting = new Sorting();
test.setList([6, 2, 9, 4, 7, 1, 8, 5, 0]);
// console.log(test.getList());
// console.log(test.betterBubble());
// test.shuffle();
// console.log(test.getList());
// console.log(test.gnomeSort());
console.log(test.getMin([6, 2, 9, 4, 7, 8, 5], 0));
