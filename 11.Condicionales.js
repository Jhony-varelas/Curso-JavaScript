// CONDICIONALES

// if , else
// Si hace frio o no puedo hacer una de estas acciones

let = frio = true; // aca estamos diciendo que si esta haciendo frio

if (frio) {
  console.log("Me pongo chaqueta");
} else {
  console.log("me pongo manga corta");
}

// aca estoy negando que hace frio  (!frio).

if (!frio) {
  console.log("Me pongo chaqueta");
} else {
  console.log("me pongo manga corta");
}
//====================================================================

// if (si),   else if (si no, si),   else(si no)

let hora = 19;

if (hora >= 8 && hora <= 10) {
  console.log("leche en oferta");
} else if (hora >= 10 && hora <= 15) {
  console.log("cafe en oferta");
} else if (hora >= 14 && hora <= 16) {
  console.log("Cervesa en oferta");
} else if (hora > 16 && hora <= 17) {
  console.log("pañales en oferta");
} else if (hora >= 18 && hora <= 19) {
  console.log("TODO EN OFERTA");
} else {
  console.log("TIENDA CERRADA");
}

//=================================================================
//CONDICIONAL TERNARIO

//FORMA DE SIMPLIFICAR UN CONDICIONAL SENCILLO.

let hora1 = 11;

hora1 >= 8 && hora1 <= 10
  ? console.log("la tienda esta abierta")
  : console.log("la tienda esta Cerrada!!");

//=================================================================
//SWIT / CASE

let edad = 23;

switch (edad) {
  case 19:
    console.log("puede ingresar");
    break;

  case 20:
    console.log("puede ingresar");
    break;

  case 21:
    console.log("puede ingresar");
    break;
  default:
    console.log("no puede ingresar");
}
