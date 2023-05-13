// Objetos
/*
--> Funcionam como um array associativo de outras linguagens.

--> Podemos criar propriedades com chave e valor.

--> A ideia é guardar um conjunto de valores para utilizar
posteriormente.
*/

var obj = {
    nome: "Juliane",
    idade: 20,
    profissao: "Pragramadora",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome, ", eu tenho " + obj.idade, "anos e sou " + obj.profissao);

obj.nome = "Juli";

console.log(obj.nome);

console.log(obj);

obj.graduacao = false;

console.log(obj);