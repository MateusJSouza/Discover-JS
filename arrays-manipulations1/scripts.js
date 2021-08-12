// Manipulando arrays

// Criar array com construtor

let myArray = new Array('a', 'b', 'c');
console.log(myArray);

// Contar elementos de um array 
console.log([
  'a', // string
  {type: 'array'}, // objeto
  function() {return 'alo'}, //função
  'c' // string
][2]());

// length -> contando os elementos dentro do arrays
// [2] -> acessar um elemento do array
// [2]() -> rodando a função, retornando "alo"

// Transformar uma cadeia de caracteres em elementos de um array

let word = 'manipulação'
console.log(Array.from(word));