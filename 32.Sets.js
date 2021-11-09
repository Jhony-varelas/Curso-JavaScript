// SON UNA ESPECIE DE ARREGLOS QUE NOS NOS PERMITE REPETIR DATOS

let morral = new Set(["linterna", "libro", "cuchillo", "lata sardinas"]);

//COMPROBAMOS SI UN ELEMENTO ESTA DENTRO DEL SET.
//con el metodo (has) nos devuelve true o false

console.log(morral.has("naranjas"));

//ELIMINAR ELEMENTOS DEL SET

morral.delete("libro");
console.log(morral);

//AÑADIR ELEMENTOS AL SET.

morral.add("frutas");
console.log(morral);

//TAMAÑO DEL SET
console.log(morral.size);

//INTENTAMOS REPETIR UN DATO

//console.add("linterna");

//CONVERTIMOS EL SET EN UNA ARRAY
const morralArray= [...morral]
console.log(morralArray)
