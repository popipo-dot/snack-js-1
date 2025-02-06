// Esercizio 5
// Hai due array di iscritti a un corso. Usando lo spread operator, 
// crea un nuovo array che contenga tutti gli elementi di entrambi gli array.

const iscrittiOnline = ['Gino', 'Pino', 'Roberto'];
const iscrittiOffline = ['Franca', 'Salvo', 'Maria'];

// Unire iscrittiOnline e iscrittiOffline usando lo spread operator
// OUTPUT ATTESO: ['Gino', 'Pino', 'Roberto', 'Franca', 'Salvo', 'Maria']

let iscrittiTot = [...iscrittiOnline, ...iscrittiOffline]

console.log(iscrittiTot)