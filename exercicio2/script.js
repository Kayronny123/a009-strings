// // ```jsx
// const minhaString = "Eu não sou supersticioso, 
//mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

// b) exiba, em um console.log() a quantidade de caracteres da 
// string, antes e depois da remoção dos espaços;

// c) Substitua os traços `________` por “sticioso”.

const citacao = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const citacao2 = (` ${citacao.trim()}`);
const citacao3 = (` ${citacao.replace("________" , "iticioso")} `); 
console.log(`${citacao}  A citação possuia ${citacao.length} caracteres antes do comando e agora possui ${citacao2.length} caracteres `);
console.log(citacao3);