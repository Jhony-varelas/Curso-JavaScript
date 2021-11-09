const animales = [
  "Perro",
  "gato",
  "ardilla",
  "conejo",
  "murcielago",
  "pato",
  "oso",
  "vaca",
];

// BREAK: Sirve para detener el bucle cuando encuentra el valor
// que queremos, en este caso la condicion dice que cuando llegue
// a 3 se debe detener.

for (let i = 0; i < animales.length; i++) {
  if (i == 3) {
    break;
  } else {
    console.log(animales[i]);
  }
}
console.log("");
//=================================================================
//CONTINUE: Esta variable da un salto cuando llega al valor indicado
// es decir, no lo imprime.

for (let i = 0; i < animales.length; i++) {
  if (i == 4) {
    continue;
  } else {
    console.log(animales[i]);
  }
}
console.log("");

//=================================================================
//RETURN: Nos permite retornar valores que esten en la misma linea de codigo
// o por encima del mismo, tambien nos permite utilizar los metodos
//string cuando sea retornado.

function Saludo(nombre) {
  return `Hola ${nombre}`;
}

console.log( Saludo("antonio").length)
