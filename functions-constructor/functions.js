/* 
  Function() constructor

  * expressão new
  * criar um novo objeto 
  * this keyword
*/

let date = new Date('2021-07-25');
console.log(date);

function Person(name) {
  this.name = name
  this.walk = () => {
    return this.name + ' está andando';
  }
}
const mateus = new Person('Mateus');
const joao = new Person('João');
console.log(mateus.walk());
console.log(joao.walk());