// Manipulando arrays

let techs = ['html', 'css', 'js'];

//adicionar um item no fim 

techs.push('elixir');
console.log('push -> adicionando no fim do array', techs); // ['html', 'css', 'js', 'elixir']

// adicionar no começo

techs.unshift('node');
console.log('unshift -> adicionando no começo do array', techs); // ['node', 'html', 'css', 'js', 'elixir']

// remover do fim

techs.pop();
console.log('removendo no fim do array', techs); // ['node', 'html', 'css', 'js']

// remover do começo

techs.shift();
console.log('removendo do começo do array', techs); // ['html', 'css', 'js']

// pegar somente alguns elementos do array

console.log('pegando somente alguns elementos do array', techs.slice(1, 2)); // ['css', 'js']

// remover 1 ou mais itens em qualquer posição do array

console.log('removendo 1 ou mais itens em qualquer posição do array', techs.splice(1, 3)); // ['html']

// encontrar posição de um elemento no array

let index = techs.indexOf('html'); // buscando o índice de 'html'
techs.splice(0, 1); // removendo este item do array
console.log('encontrar posição de um elemento no array:', techs); // resultado -> [] 
