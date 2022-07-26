//Crie a const para a frase aqui

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

// **EXTRA:** tente fazer o “mas não deixe os gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

const frase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair" );
const frase2 = frase.replace("verde e com portão azul","rosa e com portão laranja");
const frase3 = frase
console.log(`${frase} , "\n" ${frase2} , \n ${frase3.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")}`);