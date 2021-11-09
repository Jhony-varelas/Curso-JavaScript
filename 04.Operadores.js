// Operadores de comparacion

/*1. <  Menor que
 *2. >  Menor que
 *3. >= Mayor o igual que
 *4. <= Menor  o igual que
 *5. == Igual que
 *6.=== Estrictamente igual que ( igual variable, igual tipo de dato)
 *7. != Diferente de
 *8.!== Estrictamente diferente que( Diferente variable, diferente tipo de dato)
 */
// Operador de comparacion IF
let EdadMaria = "15";
let EdadOscar = 15;

if (EdadOscar == EdadMaria) {
  console.log("Tienen la misma edad");
} else {
  console.log("No tienen la misma edad");
}

if (EdadOscar === EdadMaria) {
  console.log("Tienen la misma edad");
} else {
  console.log("No tienen la misma edad");
}
//=============================================================================

//OPERADORES ARITMETICOS

console.log(10 + 5); // Suma
console.log(10 - 5); // Resta
console.log(10 * 5); // Multiplicacion
console.log(10 / 5); // Divivion (cociente)
console.log(10 % 5); // Modulo o restante( sobrante)

//=============================================================================

// OPERADORES LOGICOS

// !  Operador negacion
// && Operador and o Y
// || Operador O

let nombre = "jhony";
let nombre2;
let Apellido = "varelas";
let Apellido2;

if (nombre) {
  console.log("La variable tiene nombre");
}

// Negacion
if (!nombre2) {
  console.log("La variable no tiene nombre");
} else {
  console.log("La variable si tiene nombre");
}

// And o Y
if (nombre == "jhony" && Apellido == "vaelas") {
  console.log("tiene nombre y apellido");
} else {
  console.log("No tiene nombre ni apellido");
}

// O
if (nombre == "jhony" || Apellido == "varelas") {
  console.log("tiene nombre o apellido");
} else {
  console.log("No tiene nombre ni apellido");
}
