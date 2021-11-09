/* OBJETOS

- declaramos el objeto "persona" cons sus propiedades.

- lOS OBJETOS NOS PERMITEN VARIAR SU ESTRUCTURA AUNQUE SEAN DE
  VARIABLE CONST. */

const persona = {
  nombre: "Jhony",
  apellido: "Varelas",
  edad: 27,
};
//=====================================================================
/* ARRAY O LISTA

- declaramos el Array "fruta" con su valor interno.

- lOS ARRAYS NOS PERMITEN VARIAR SU ESTRUCTURA AUNQUE SEAN DE
  VARIABLE CONST. */

const frutas = ["manzana", "limon"];
//=====================================================================
// PRIMITIVOS

// ( number, float. boolean. string. undefined, null)

const edad = 27;        // tipo de dato number.
const grados = 2.37;    // tipo de dato float.
const nombre = "Jhony"; // tipo de dato string.
const isBlue = false;   // tipo de dato boolean ( puede ser true o false).
let perro;              // tipo de dato undefined ( no tiene valor asignado).
let enfermo = null;     // tipo de dato null ( tiene valor asignado pero es nulo)
//=====================================================================

//Typeof
//con typeof vamos a validar que tipo de dato contiene la variable

console.log(typeof grados);
console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof isBlue);
console.log(typeof perro);
console.log(typeof enfermo);

   