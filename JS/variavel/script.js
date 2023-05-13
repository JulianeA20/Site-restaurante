// Sobre a linguagem

/* 
--> O código é executado de cima para baixo.

--> A linguagem é case sensitive.

--> O ponto e vírgula a cada instrução é opcional.

--> Há comentários para uma linha e múltiplas linhas.

--> As variáveis armazenam valores.

--> Estes valores podem ser utilizados posteriormente.

--> No JavaScript é possível criar variáveis de 3 formas.

--> Podemos mudar o tipo da variável livremente (tipagem fraca).
*/

// Para declarar variável pode-se utilizar *var*, *let* ou *const*:
var teste = 24;

nome = "Victor";

console.log(teste);

var teste = "Juliane";

console.log(teste); // No JavaScript pode se mudar o valor das variáveis o que a torna de tipagem fraca

console.log(nome);

var nome = 'hsk'; // A variável não pode iniciar com um número e nem ter outros caracteres especiais, são aceitos apenas *_* e *$*

console.log(nome);

var meuPrimeiroNome = 'Juliane';  // camelCase para variáveis com dois nomes ou mais

console.log(meuPrimeiroNome);