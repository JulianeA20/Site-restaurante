// Arrays
/*
--> Na verdade arrays são considerados objetos em 
JavaScript, porém serve como listas;

--> Podemos ter itens de qualquer tipo de dado também.

--> Porém não por chave e valor, e sim por índice.
*/

var arr = [5,"Juliane", true, {teste: 1, teste2: 4}]; // obj -> []

console.log(arr)

var arr2 = [2,3,4,5,6];

console.log(arr2);

console.log(arr2[1]);
console.log(arr2[0]);

// var arr = [10]; --> Isso não adiciona no array, na verdade substitui todo o conteúdo

arr2[5] = 10; // Isso adiciona um elemento

console.log(arr2)