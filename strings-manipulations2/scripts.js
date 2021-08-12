// Manipulando strings e números 

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

let word = 'Programar é muito bacana!';
console.log(word.toLowerCase());
console.log(word.toUpperCase());

/* ------------------------------------------------------------------------ */

/* 
  Separe um texto que contem espaços, em um novo array onde cada texto é uma 
  posição do array. Depois disso, transforme o array em um texto e onde eram
  espaços coloque _
*/

let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat, eius non eum esse nobis voluptas soluta beatae, quasi asperiores quae nihil? Sint voluptatum inventore qui adipisci ratione porro ipsam.'

// split - recebe como argumento o que queremos separar
let arr = lorem.split(' '); 
console.log(arr);
// ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Vitae", "placeat,", "eius", "non", "eum", "esse", "nobis", "voluptas", "soluta", "beatae,", "quasi", "asperiores", "quae", "nihil?", "Sint", "voluptatum", "inventore", "qui", "adipisci", "ratione", "porro", "ipsam."]

let underscore = arr.join('_');
console.log(underscore);
// Lorem_ipsum_dolor_sit_amet_consectetur_adipisicing_elit._Vitae_placeat,_eius_non_eum_esse_nobis_voluptas_soluta_beatae,_quasi_asperiores_quae_nihil?_Sint_voluptatum_inventore_qui_adipisci_ratione_porro_ipsam.

/* ------------------------------------------------------------------------ */

// Verificar se o texto contem a palavra Amor
let phrase = 'Eu quero viver o amor';
// includes() - faz a verificação se tem tal palavra numa string (ele é case sensitive)
console.log(phrase.includes('Amor'));

