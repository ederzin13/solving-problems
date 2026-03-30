import Count from "./Count";
import Factorial from "./Factorial";
import Recursion from "./Recursion";

let recursivo: Recursion = new Recursion();

// recursivo.message(5);
// recursivo.progressive(5);

let contagem: Count = new Count();

// contagem.countAB(1, 10);
// console.log(contagem.intervalSum(1, 10));
// console.log(contagem.betterIntervalSum(10, 1));

let fatorial: Factorial = new Factorial(5);

// console.log(fatorial.factorial(fatorial.getN()));
console.log(fatorial.power(fatorial.getN(), 3));
