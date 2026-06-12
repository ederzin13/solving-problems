import Network from "./Network";

let network: Network = new Network();

//não existem, cria
network.add("a", "b");

//a existe, c não existe
network.add("a", "c");
network.add("c", "d");
network.add("e", "f");
network.add("g", "e");
network.add("h", "i");

console.log(network);
