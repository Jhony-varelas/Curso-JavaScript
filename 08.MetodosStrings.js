// METODOS STRING

let frase1 = " Mi perro es un pastor aleman";
let frase2 = "Es muy inteligente";

//METODO ANCHOR: Nos devuelve el texto envuelto en un enlace o etiqueta
// <a>
console.log(frase1.anchor());

//======================================================================
//METODO BIG: Nos devuelve el texto en un formato mas grande
document.write(frase1.big());

//======================================================================
//METODO BOLD: Nos devuelve el texto en negrita
document.write(frase1.bold());
console.log(" ");

//======================================================================
//METODO CHARAT: Nos da el caracter que coincida con el numero que
//le pasemos por el argumento
document.write(frase1.charAt(5));

//======================================================================
//METODO CHARCODEAT: Nos devuelve el unicode ( caracter unico que coincide
//con el numero del argumento)
document.write(frase1.charCodeAt(15));
//======================================================================
//METODO CONCAT: Nos concatena o une un string al que ya tenemos y tambien
//podemos concatenar con otra variable:

document.write(frase1.concat(", es inteligente"));
//======================================================================
//METODO ENDSWITH: Nos dice si el string acaba en el conjunto de caracteres
//que le indicquemos

document.write(frase1.endsWith("hola")); // aparece en false, por que no
//termina en hola.

//======================================================================
//METODO FONTCOLOR: Nos permite cambiar el color de texto del string
document.write(frase1.fontcolor("red"));

//======================================================================
//METODO FONTSIZE: Nos cambia el tamaño del string pasandole un numero
//por el argumento
document.write(frase1.fontsize(7));

//======================================================================
//METODO INCLUDE: Nos da true o false si el caracter o conjunto de caracteres
//que le indiquemos esta incluido en el texto
document.write(frase1.includes("perro"));

//======================================================================
//METODO INDEXOF: si existe el indice que le especifiquemos en el argumento
//nos da su posicion y si no nos da un -1

document.write(frase1.indexOf("gatp"));

//======================================================================
//METODO ITALICS: Nos convierte el texto en cursiva.
document.write(frase1.italics());

//======================================================================
//METODO LASTINDEXOF: Nos da la posicion del caracter o conjunto de caracteres
//que le pasemos por el argumento, si no existe nos da -1. si esta repetido
//me da la posicion del ultimo
document.write(frase1.lastIndexOf("perro"));

//======================================================================
//METODO LINK: Nos devuelve un enlace y le da el atributo
//href.
document.write(frase1.link());// si le pongo una direccion dentro del link
//me direcciona a la misma.

//======================================================================
//METODO MATHC: Nos devuelve la coincidencia si existe o de lo contrario
//devuelve null
document.write(frase1.match("perros"));

//======================================================================
//METODO REPEAT: Nos devuelve el String repetido las veces que le indiquemos

document.write(frase1.repeat("3"));

//======================================================================
//METODO REPLACE: Nos permite reemplazar una parte del texto por otro
//pasandole por el primer argumento lo que queremos cambiar y por el segundo
//la parte nueva.
document.write(frase1.replace("pastor aleman", "chiguagua"));

//======================================================================
//METODO SLICE: Nos devuelve una porcion de texto que le indiquemos entre 
// dos numero
document.write(frase1.slice(0,8));

//======================================================================
//METODO SMALL: Hace que el texto sea mas pequeño.
document.write(frase1.small());

//======================================================================
//METODO SPLIT: Nos permite separar el texto con el caracter que queramos
// y la candidad de veces que le digamos
document.write(frase1.split(" " , 10));


//======================================================================
//METODO STARWIDTH: Nos devuelve true o false si el caracter comienza por
//el caracter que le indiquemos por argumento y hace distincion entre masyus
//culas y minuscylas

document.write(frase1.startsWith(" "));

//======================================================================
//METODO SUB: nos muetsra el texto como si fuera subtitulo.
document.write(frase1.sub());

//======================================================================
//METODO SUBSTRING: nos devuelve una porcion de cadena entre 2 numero que 
//pasemos como argumentos, incluyendo el primero pero no el segundo
document.write(frase1.substring(4,9));

//======================================================================
//METODO TOLOCALELOWERCASE: Convierte los caracteres en minuscula dentro
//del entorno local.
document.write(frase1.toLocaleLowerCase());

//======================================================================
//METODO TOLOCALEUPPERCASE: Convierte los caracteres en mayusculas dentro
//del entorno local.
document.write(frase1.toLocaleUpperCase());

//======================================================================
//METODO TOLOWERCASE: Convierte el texto a m inuscula.
document.write(frase1.toLowerCase());

//======================================================================
//METODO TOLOWERCASE: Convierte el texto a mayuscula.
document.write(frase1.toUpperCase());

//======================================================================



