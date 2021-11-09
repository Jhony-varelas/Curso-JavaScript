// DESTRUCTURACION

const Mascota = {
  Raza: "salchicha",
  Color: "negro",
  Edad: "3",
  Propietario: "jhony varelas",
};

//ASI FUNCIONA LA DESTRUCTURACION DE OBJETOS
//1. Defino una constante.
//2. entre llaves coloco las propiedades del objeto y lo igualo al mismo.
//3. ya puedo llamar a cada una desde el consol.log()
const { Raza, Color, Edad, Propietario } = Mascota;
console.log(Raza);
console.log(Color);
console.log(Edad);
console.log(Propietario);

//ASI FUNCIONA LA DESTRUCTURACION DE ARRAYS
//1. Defino una constante.
//2. entre Corchetes coloco las propiedades del array en el mismo orden
//   como si fueran variables y lo igualo al mismo.
//3. ya puedo llamar a cada una desde el consol.log()
const Trabajadores = ["juan", "pedro", "Oscar", "manuel"];

const[juan,pedro,Oscar,Manuel]=Trabajadores
console.log(juan)
console.log(pedro)
console.log(Oscar)
console.log(Manuel)

