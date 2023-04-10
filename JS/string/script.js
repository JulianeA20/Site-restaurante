//String
/*
--> String é o tipo de dado para textos.

--> As strings podem ser escritas com aspas simples e duplas.

--> Um número entre aspas pode ser considerado uma string.

--> É possível também concatenar strings com o +.
 */

var nome = "Juliane"; // Aceita aspas duplas
var sobrenome = 'Almeida'; // Aceita aspas simples

//Concatenando duas variáveis Strings:
var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);

console.log(typeof "asd");

console.log(nomeCompleto);

console.log(typeof "398.3729");

var frase = 'Esta é uma frase completa';

console.log(frase);
console.log(typeof frase);

console.log(nome + " " + frase);

document.write('Ele disse: Olá"');

document.write("Ele disse: Olá'");

console.log("Este nome: " + nome);