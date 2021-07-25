// function hoisting

sayMyName();

function sayMyName() {
  console.log('Mateus');
}
/* ------------------------------------------------------------------------ */

// arrow function 
const myName = (name) => {
  console.log(name);
}

myName('Mateus');

/* ------------------------------------------------------------------------ */ 

/*
  callback functions
  callback - uma função que está passando como parâmetro para outra função
*/

function myNameIs(name) {
  console.log('Antes de executar a função callback');
  
  name()

  console.log('Depois de executar a callback');
}

myNameIs(() => {
  console.log('Estou em uma callback');
});