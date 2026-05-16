import List from "./List";

let problem: List = new List([1, 3, 2, 5, 4, 6]);

let list = problem.getSublist(1);
console.log(list);

// let list2 = problem.getSublist(2);
// console.log(list2);

let list3 = problem.getSublist(-6);
console.log(list3);
