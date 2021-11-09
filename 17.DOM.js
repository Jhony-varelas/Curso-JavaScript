// DOM  (ES EL MODELO DE OBJETO DE DOCUMENTO)

// VAMOS A ACCEDER AL BODY

console.log(document.body);

//CREAMOS ETIQUETAS DESDE EL JS

let caja = document.createElement("div");
let caja2 = document.createElement("div");

//DAMOS ESTILOS A NUESTRO DIV A LA CAJA
caja.style.width = "100px";
caja.style.height = "100px";
caja.style.backgroundColor = "green";
caja.style.borderRadius = "20px"; // con esta funcion podemos redondear la caja

//DAMOS ESTILOS A NUESTRO DIV A LA CAJA 2
caja2.style.width = "100px";
caja2.style.height = "100px";
caja2.style.backgroundColor = "blue";
caja2.style.borderRadius = "20px";

/*RENDERIZANDO NUESTRO ELEMENTO CAJA
en el cuerpo(body) del documento(document) agregue
un hijo(appendChild) que seria la (caja)*/

//document.body.appendChild(caja);

//RENDERIZANDO NUESTRO ELEMENTO CAJA2
//document.body.append(caja);

//DIFERENCIAS ENTRE APPEND Y APPENDCHILD

/*appendChild:
1. No permire renderizar renderizar mas de 1 elemento.
2. No permite renderizar Strings o cadenas.*/

/*append:
1. si permite renderizar varios elementos.
2. si permite renderizar Strings o cadenas.*/
document.body.append(caja, caja2);

//NOS DICE LA CODIFICACION DE CARACTERES:

console.log(document.characterSet); // cofificacion UTF-8

//CUANTOS HIJOS TIENE EL DOCUMENTO:
//Un elemento es hijo de otro cuando este esta dentro del otro.
console.log(document.childElementCount);

//NODOS HIJOS DEL DOCUMENTO:
console.log(document.childNodes);

//PARA DEVOLVERNOS LOS HIJOS QUE TIENE:
console.log(document.children);

//CLONAR EL DOCUMENTO:
//Se le pasa un boleano true o false, en funcion de si queremos
//que clone tambien el contenido.
let clonadobody = document.body.cloneNode(true);
console.log(clonadobody);

//COMO SABER EL TIPO DE CONTENIDO:
console.log(document.contentType);

//CREANDO ATRIBUTOS:
//Para acceder a etiquetas del html hay que llamarla asi.
let subtitulo = document.querySelector("#sub1");

subtitulo.setAttribute("class", "tituloClase");

//SELECCIONAR ELEMENTOS
//Para acceder a etiquetas del html hay que llamarla asi.
let subtitulo2 = document.querySelector("#sub2");

// ya teniendo la etiqueta guadada en la varible podemos
// interactuar con ella
subtitulo2.style.color = "red";

//Para acceder a etiquetas del html hay que llamarla asi.
let subtitulo3 = document.querySelector("#sub3");
subtitulo3.style.color = "green";

//CAMBIO EL TEXTO CUANDO QUIERA:
subtitulo3.textContent = "CAMBIO EL TEXTO";

//CREADO UN COMENTARIO:
let comentario = document.createComment("soy un comentario");
console.log(comentario);

/*CREANDO UN FRAGMENT:
Esto se usa cuando se llama a una API para traer informacion con 
muchas fotografias, se debe guardar en un fragmento para poder 
renderizar, en este caso las imagenes se guardan en la variable 
contenedor y de ahi llamamos los datos*/

let contenedor = document.createDocumentFragment();
document.appendChild(contenedor);

/*CREANDO UN NODO DESDE JS:
siempre que usemos un createElement o cualquier create
debemos llamarlo con appendChild o append. para poder visualizarlo*/

const textNode = document.createTextNode("soy un nodo de texto");
document.body.appendChild(textNode);

//ACCEDER A LA ETIQUETA HTML/DOCTIME:
console.log(document.doctype);

//NOS DA EL ELEMENTO HTML:
console.log(document.documentElement);

//URI
//Me da la direccion http: y el archivo local del HOST
console.log(document.documentURI);

//SABER EL DOMINIO:
console.log(document.domain);

//PRIMER HIJO:
console.log(document.firstChild);

//PRIMER ELEMENTO HIJO:
console.log(document.firstElementChild);

/*QUERYSELECTORALL:
con este seleccionamos varias etiquetas y le damos estilo a tosdos.
para que fincione debemos guardar todos los selectores en un array
y hacer un sprit(...) y luego hacer un mapeo*/
const enlaces = [...document.querySelectorAll("a")];
enlaces.map((enlace) => {
  enlace.style.color = "green";
  enlace.style.backgroundColor="black"
});
