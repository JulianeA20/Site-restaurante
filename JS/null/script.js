// Null e undefined
/*
--> udefined e null também são considerados tipos de dados.

--> O null é um tipo de dado que representa um valor.

--> O undefined é um tipo de dado para uma variável com valor
não atribuído.
*/

var nome = null;
var sobrenome;

console.log(nome); // null
console.log(sobrenome); //undefined

nome = "Juliane";

console.log(nome)

// Hoisting = içamento
/* Todas as variáveis e funções são levadas magicamente, antes 
do código as interpretá-las, para o topo do código.*/