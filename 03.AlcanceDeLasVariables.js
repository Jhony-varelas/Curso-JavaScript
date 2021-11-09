// AMBITO DE LAS VARIABLES

// AMBITO SUPER GLOBAL: tenemos acceso desde cualquier archivo.

//=====================================================================

// AMBITO GLOBAL: tenemos acceso desde cualquier lado del archivo.
// puedo declarar la variable global con var o con let

//VAR
var perro = "Droupie";
console.log(perro);

//LET
let gato = "Tomy";
console.log(gato);

//=====================================================================

// AMBITO LOCAL: Declaramos una funcion y tenemos acceso solo desde la misma funcion.

// No podemos declarar la variable Var por que se sale del ambito local

// Podemos declarar LET o CONTS para que respete el ambito.
function Animal() {
  let gatico = "felino";
}
Animal();
//console.log(gato); // no imprime ya que esta fuera de su ambito local.

//=====================================================================

// AMBITO DE BLOQUE: solo tenemos acceso desde el bloque, por ejemplo un if.

// No podemos declarar la variable Var por que se sale del ambito local

// Podemos declarar LET o CONTS para que respete el ambito.

let nombre = "maria";
if (nombre === "maria") {
  let apellido = "varelas";
}
//console.log(apellido);  no imprime por que esta fuera del bloque.

//=====================================================================
