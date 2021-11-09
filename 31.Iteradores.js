// ITERADORES PARA RECORRER UNA LISTA


//SET: ME PERMITE HACER UN ARRAY DONDE NO SE REPITEN LOS ELEMENTOS
let numbers = new Set([1,2,3,4,5,6,7,8,9])

let itreador = numbers[Symbol.iterator]()

//NOS DA 2 VALORES EN CONSOLA
//1. EL INDICE DEL SET Y EL OTRO EL DONE QUE ME DEVOLVERA
//TURE SI LA LISTA HA TERMINADO O FALSE SI LA LISTA NO HA TERMINADO

console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())
console.log(itreador.next())