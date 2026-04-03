import Matriz from "./Matriz";

let firstOccurrence: Matriz = new Matriz(18);

// console.log(firstOccurrence.firstOccurrence());

firstOccurrence.setList([2, 4, 5, 6, 9, 10, 10, 12, 18, 20]);
console.log(firstOccurrence.getList());
// console.log(Math.ceil(firstOccurrence.getList().length / 2));
// console.log(firstOccurrence.sortedFirstOccurrence());
// console.log(firstOccurrence.biggestElement());

// console.log(firstOccurrence.elementSum());
// console.log(firstOccurrence.occurrenceNumber());

console.log(firstOccurrence.isSorted(0));
