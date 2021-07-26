/*
  Type conversion (typescasting) vs Type coersion

  * Alteração de um tipo de dado para outro tipo
*/ 

// Type coersion - coerção de tipo
console.log('9' + 5); // 95

// Type conversion - conversão de tipo
console.log(Number('9') + 5); // 14

/* ------------------------------------------------------------------------ */

// Manipulando string e números

// Transformar string em número e número em string
let string = '123';
console.log(Number(string)); // 123

let number = 321;
console.log(String(number));

/* ------------------------------------------------------------------------ */

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let myName = 'Paralelepípedo';
console.log(myName.length);

// Number não recebe length, por esse motivo tem que transformar ele em string
let myNumber = 12345;
console.log(String(myNumber).length) 

/* ------------------------------------------------------------------------ */

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// replace - trocando o ponto por vírgula
// toFixed - adicionando 2 casas decimais

let number2 = 2342323423423.5435453453
console.log(number.toFixed(2).replace('.', ',')); // resultado = 321,00