/* Variables: Pequeño espacio en memora que contiene informacion 
proporcionada por el usuario. puede contener valores numericos
texto, caracteres, valores de verdad, operaciones matematicas etc*/

//=====================================================================

/*  Tipos de variables:  Var, let, const

-No usaremos la variable var
-Usaremos la variable let, cuando el valor vaya a cambiar
-Usaremos la variable const cuando no vaya a cambiar, es decir:
 Que sea fijo
//=====================================================================

VARIABLE LET

- Ponemos el tipo de variable--- el nombre --- lo que va a guardar*/
let mascota = "perro";
console.log(mascota);

/* REGLAS DE LAS VARIABLES:

1. let no permite declarar la variable con el mismo nombre.

2. let permite declarar la variable y no inicializarla, mas adelante
   podre inicializarla en cualquier parte del codigo.

3. let se declara una sola vez  y ya podremos seguir usando la variable
   sin problema alguno.*/
//=====================================================================

// VARIABLE VAR

var nombre = "carlos";
var nombre = "pedro";

/*
1. var permite declarar variable con el mismo nombre.

2. var permite declarar la variable y no inicializarla, mas adelante
   podre inicializarla en cualquier parte del codigo. */
//=====================================================================

// VARIABLE UNDEFINED  Y VARIABLE NULL

// Cuando no se declara la variable nos imprime un Undefined.

let pez;
console.log(pez);

// para que una variable sea tipo null lo declaramos.

let gato = null;
console.log(gato);
//=====================================================================

// VARIABLE CONSTANTE

// 1. La variable const no permite declarar variables sin inicializarla
// 2. no permite declarar la variable con el mismo nombre.

const perro = "Dropie";
console.log(perro);
//=====================================================================
