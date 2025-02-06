// Esercizio 2
// Dato un array di nomi, usa map per creare un nuovo array con tutti i nomi in maiuscolo.
// ```

const nomi = ['gino', 'pino', 'luca'];

// // Usa map per trasformare ogni nome in maiuscolo
// // OUTPUT ATTESO: ['GINO', 'PINO', 'LUCA']


let nomiMaiusc = nomi.map((nome) => {
    return nome.toUpperCase();
})

console.log(nomiMaiusc)