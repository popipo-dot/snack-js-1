// Esercizio 4
// Hai un oggetto che rappresenta una persona. Estrai il nome e eta usando il destructuring e stampali in console.

const persona = {
  nome: 'Gino',
  cognome: 'Panino',
  eta: 20,
  hobby: ['sport', 'videogiochi']
};

// Estrarre nome e eta con destructuring

let {nome, eta} = persona

console.log(nome)
console.log(eta)