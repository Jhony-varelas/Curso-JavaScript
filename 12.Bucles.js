// BUCLES: SON UN CONTROL DE FLUJO QUE SE REPITE
// DEPENDIENDO DE LA CONDICION DADA

//WHILE (mientas que)
//Mientas que velta sea menor que 20 ejecute!!

let vuelta = 0;

while (vuelta < 20) {
  vuelta++;
  console.log("Esta es la vuelta: " + vuelta);
}

//DO WHILE: (haga mientras que)
//  primero hace y despues evalua por lo menos 1 vez

//  do{
//      vuelta ++
//      console.log("Esta es la vuelta: " + vuelta)

//  }while(vuelta>20)

//============================================================================
// CICLO FOR (PARA)
//
let numeros = [1, 2, 3, 4];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
console.log("");
//============================================================================
// CICLO FOR IN (POR)
// Recorre un Array y nos devuelve los indices
// const numero: variable que va a almacenar los datos) ( in: me rrecorre el indice)
// (numeros: arreglo)
for (const numero in numeros) {
  console.log(numero);
}

//============================================================================
// RECORREMOS OBJETOS CON FOR IN
// recordemos que un objeto tiene clave y valor
// (clave: la variable) (valor: lo que contiene la variable)

const mascota = {
  Nombre: "Droupi",
  Raza: "pitbul",
  Edad: 3,
  Propietario: "jhony",
  Gustos: ["saltar", "correr", "ladrar", "morder"],
};

//const propiedad: variable que almacena el objeto)( in: recorre la clave)
// (mascota: objeto)

for (const propiedad in mascota) {
  console.log(`key: ${propiedad}, value: ${mascota[propiedad]} `);
}
//    Clave (key)                              valor
// IN: recorre las propiedades ||  mascota[propiedad] rrecorre el valor de la variable
//Nombre:                             "Droupi",
//Raza:                               "pitbul",
//Edad:                                3,
//Propietario:                        "jhony",
//Gustos:                             ["saltar", "correr", "ladrar", "morder"],
