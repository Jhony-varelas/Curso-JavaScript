// FUNCIONES

//1. FUNCIONES DECLARADAS

//tengo una funcion que se llama saludo, (recibe como parametro una variable)
//estamos imprimiendo por pantalla la variable ingresada.
function saludo(saludo) {
  document.write(saludo);
  console.log(saludo);
}
// ACA estamos llamado a la funcion saludar, y como argumento le enviamos un "hola"
saludo("hola");

//tengo una funcion que se llama saludo, (recibe como parametro 2 variables)
//estamos imprimiendo por pantalla las variables ingresadas.
function saludo2(nombre, apellido) {
  console.log(nombre, apellido);
}
saludo2("Hola! Soy jhony", "varelas");

// Otra forma de mostrarla por consola
function saludo3(nombre, apellido) {
  console.log(`Hola! Mi nombre es${nombre} y mi apellido ${apellido}`);
}
saludo3("jhony", "varelas");

//En las funciones declaradas existe el efecto hoisting o elevacion
//que nos permite llamar a la funcion antes de escribir la misma.

saludo4("jhony", "varelas");

function saludo4(nombre, apellido) {
  console.log(`Hola! Mi nombre es${nombre} y mi apellido ${apellido}`);
}

//===================================================================================
//2. FUNCIONES EXPRESADAS
//- Esta es la funcion mas recomendada
//- Aca no existe el efecto Hoisting o elevacion.

const despedida = function () {
  console.log("Adios...");
};
despedida();

//===================================================================================
//3. FUNCIONES FLECHA
// PONEMOS LA VARIABLE LET O CONST, LUEGO LA VARIABLE QUE VA A GUARDAR DATOS
// PONEMOS PARENTESIS , IGUAL Y MENOR QUE ()=>
// DENTRO DE PARENTESIS PODEMOS PONER PARAMETROS
//- Es la mas moderna

let suma = (num1, num2) => {
  console.log(num1 + num2);
};
suma(10, 5);

// PODEMOS LLAMARLA EN LA MISMA LINEA DESDE QUE TENGA UNA SOLA LINEA
let suma2 = (num1, num2) => console.log(num1 + num2);

suma2(10, 5);

//===================================================================================
//4. FUNCIONES AUTOEJECUTABLES ANONIMAS.
// ESTAS VAN ARRIBA DE TODO EL CODIGO.

//FUNCION AUTOEJECUTABLE CLASICA ANONIMA:
(function () {
   console.log("buenos dias");
 })();

//FUNCION AUTOEJECUTABLE MODERNA ANONIMA:
// 
( () => {
    console.log("buenos dias");
  })();

//===================================================================  

//FUNCION AUTO EJECUTABLE CLASICA: ESTA FUNCION SE EJECUTA SOLA, SIN NECESIDAD DE LLAMARLA
const texto1 = (function () {
  console.log("buenas noches");
})();

//FUNCION AUTO EJECUTABLE MODERNA TIPO FUNCION FLECHA:
const Texto2 = (() => {
  console.log("buenas noches");
})();
