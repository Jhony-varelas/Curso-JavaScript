// METODOS DE LOS ARRAYS  ( funciones utiles )

const frutas = ["manzana", "pera", "uva", "sandia", "sandia"];

const verduras = ["lechuga", "pepino", "tomate", "brocoli"];
//=======================================================================
//METODO CONCAT: Nos permite unir 2 array o añande elementos

console.log(frutas.concat("limon"));
console.log(" ");

//=======================================================================
//METODO EVERY: Nos obliga a que todos los elementos del array cumplan
//una condicion.

frutas.every((frutas) => {
  console.log(frutas == "sandia");
});
console.log(" ");

//=======================================================================
//METODO SOME: Nos devuelve elemento por elemento si son true o false
// y nos da la posicion.

frutas.some((frutas) => {
  console.log(frutas == "sandia");
});
console.log(" ");

//=======================================================================
//METODO FILTER:  Nos filtra el array  uno por uno
//y nos devuelve otro con las condiciones que le indiquemos.

frutas.filter((frutas) => {
  if (frutas.length > 5) {
    console.log(`${frutas} tiene mas de 5 aracteres`);
  } else {
    console.log(`${frutas} tiene menos de 5 aracteres`);
  }
});
console.log(" ");

//=======================================================================
//METODO FIND: Nos busca las coincidencias que le digamos.

frutas.find((frutas) => {
  if (frutas === "sandia") {
    console.log(frutas);
  }
});
console.log(" ");

//=======================================================================
// FOREACH: por cada elemento que Encuentre en el aray me lo muetsre por
//consola.

frutas.forEach((frutas) => {
  console.log(frutas);
});
console.log(" ");

/*FOREACH CON CONDICIONES
por cada elemento que encuentre en el array frutas me busca la condicion:
si cada elemento del array fruta tiene mas de 5 letras me l amuestre por consola.*/

frutas.forEach((frutas) => {
  if (frutas.length > 5) {
    console.log(frutas);
  }
});
console.log(" ");

//=======================================================================

//METODO INCLUDES: nos dice si es true o false si existe el elemento llamado

console.log(frutas.includes("sandia"));
console.log(" ");

//=======================================================================

//METODO INDEXOF: nos devuelve un numero negativo si no encuentra el elemento
//en el array, y si lo encuentra me da la posicion donde esta, si esta repetido
//me da la primera posicion donde lo encuentre.

console.log(frutas.indexOf("sandia"));
console.log(" ");

//=======================================================================
//METODO JOIN: Nos separa los elementos del array segun le indiquemos

console.log(frutas.join("-"));
console.log(" ");

//=======================================================================
//METODO LASTINDEXOF: Nos da la posicion del ultimo elemento que coincide
//si esta repetido nos muestra la ultima pocicion en la que esta.

console.log(frutas.lastIndexOf("sandia"));
console.log(" ");

//=======================================================================
//METODO MAP: Nos itera los arrays, arrays de objetos y nos devuelve un array
//en la pantalla principal. (nos permite escribir codigo HTML en el documento)
//

const empresa = [
  {
    id: 0,
    nombre: "johny",
    Apellido: "varelas",
    edad: 27,
  },
  {
    id: 1,
    nombre: "daniela",
    Apellido: "gomez",
    edad: 20,
  },
  {
    id: 2,
    nombre: "yolanda",
    Apellido: "varelas david",
    edad: 50,
  },
];
console.log(empresa);

empresa.map((elementoempresa) => {
  document.body.innerHTML += `
    <ul>

     <li>
       Id:${elementoempresa.id}<br>
       Nombre:${elementoempresa.nombre}<br>
       Apellido:${elementoempresa.Apellido}<br>
       Edad:${elementoempresa.edad}

     </li>

     <ul>
      `;
});

console.log("");
//=======================================================================
//METODO POP: Elimina el ultimo elemento de un Array y lo devuelve

console.log(frutas.pop());
console.log(frutas);
console.log("");

//=======================================================================
//METODO PUSH: Agrega al final del Array el nuevo elemento ingresado
// y nos devuelve la longitud del Array con el nuevo elemento

console.log(frutas.push("banano"));
console.log(frutas);
console.log("");

//=======================================================================
//METODO REDUCE: Reduce el Array al primer elemento

frutas.reduce((frutas) => {
  console.log(frutas);
});
console.log("");

//=======================================================================
//METODO REVERSE: Nos invierte el Array.

console.log(frutas.reverse());
console.log("");

//=======================================================================
//METODO SLICE: Nos devuelve los indices comprendidos entre el primer
//indice que le indiquemos y el segundo no incluido.

console.log(frutas.slice(0, 3));
console.log("");

//=======================================================================
//METODO SORT: Nos permite ordenar el Array Alfabeticamente

console.log(frutas.sort());
console.log("");

//=======================================================================
//METODO UNSHIF: Nos agrega al principio del array el elemanto que
//le indiquemos.

console.log(frutas.unshift("mango"));
console.log(frutas);
console.log("");

//=======================================================================
//METODO SHIF: Nos elimina al principio del array el elemanto que
//le indiquemos.

console.log(frutas.shift("mango"));
console.log(frutas);
console.log("");

//=======================================================================
//METODO SPLICE: Nos Da los elementos entre 2 indices que le indiquemos.
//1. ponemos desde donde queremos empezar a contar
//2. Cuantos elementos vamos a eliminar o sumar
//3. si va a sumar los que va a añadir.

//frutas.splice(0, 4, "mango");
console.log(frutas);


frutas.splice(0, 0, "Mora", "kiwy");
console.log(frutas);
