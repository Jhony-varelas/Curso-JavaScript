// PROGRAMACION ORIENTADA A OBJETOS.

/* UNA CLASE ES UNA PLANTILLA DE UN ELEMENTO DE LA VIDA REAL
   PUEDE SER RAZA HUMANA, AUTOMOVIL, ENEMIGO, ANIMAL
  -UNA CLASE TIENE PROPIEDADES Y METODOS,  SE LE SUELE DECIR METODO A LAS
   FUNCIONES CUANDO ESTAN DENTRO DE UN OBJETO
*/

/*CREAMOS LA CLASE
1. siempre debemos declarar un constructor que nos permitira inicializar
   las propiedades o metodos del objeto
2. En los objetos siempre se pone (This) que hace referencia a que los
   metodos pertenecen al objeto.
3. debemos declarar los (Get: coger)= es un tipo de metodo que nos permite tomar las propiedades
   del objeto desde afuera y cambiarlas
   declaramos el (set: poner, retornar)
4. 
*/

class Automovil {
  constructor(marca, linea, fechaLanzamiento, combustible, color) {
    this.marca = marca;
    this.linea = linea;
    this.fechaLanzamiento = fechaLanzamiento;
    this.combustible = combustible;
    this.color = color;
  }
  //GET
  // me va a devolver el color en caso tal de que lo tenga declarado
  get getColor() {
    return this.color;
  }

  //SET
  //aca puedo asignarle el color que quiera al objeto por medio de parametros
  // y luego asigno ese color a la propiedad del objeto.
  set setColor(color) {
    this.color = color;
  }

  //METODOS:
  velocidad(velocidad) {
    if (velocidad > 200) {
      return "excediste la velocidad maxima. !!FRENAR!!";
    } else {
      return `Para alcanzar la velocidad maxima te faltan ${
        200 - velocidad
      } Km/h`;
    }
  }

  //METODOS ESTATICOS:
  //SE SUELE USAR CUANDO ES ALGO QUE NO VA A CAMBIAR, NO SE DUPLICA EN INSTANCIAS.

  static ruedas() {
    return "Tengo las llantas originales";
  }
}

//==========================================================================

// UN OBJETO ES UNA INSTANCIA DE ESA CLASE Y ES MÁS ESPECIFICA POR EJEMPLO:
// LA CLASE AUTOMOVIL PUEDE SER COCHE, MOTO, AVIÓN.

/* INSTANCIAS DEL OBJETO O CLASE:
1. Declaro una variable para almacenar el objeto
2. Le asigno las propiedades del objeto = new objeto(automovil)
3. le asigno los valores a las propiedades*/

const carro = new Automovil("audi", "A3", "2020", "gasolina", "negro");
console.log(carro);

//USANDO EL METODO SET:
carro.setColor = "gris";

//USANDO EL METODO VELOCIDAD
console.log(carro.velocidad(100));

//USANDO EL METODO ESTATICO. debo acceder desde el objeto ya que es estatico
console.log(Automovil.ruedas());

//============================================================

// CONCEPTO DE HERENCIA ES CUANDO CREAMOS OTRA CLASE APARTE PERO QUEREMOS REUTILIZAR
// LOS MÉTODOS Y PROPIEDADES DE OTRA QUE NOS PUEDAN SERVIR.

//1. declaramos la classe
//2. le pasamos la erencia (extends) de la clase a eredar.
//3. En el constructor, primero ponemos las caracteristicas propias y luego la herencia.
//4. Declaramos el superconstructor ( se pone los propiedades que hereda )
class Nautica extends Automovil {
  constructor(materialCasco, tipoDeMotor, marca, modelo) {
    super(marca, modelo);

    this.materialCasco = materialCasco;
    this.tipoDeMotor = tipoDeMotor;
  }
}

//INSTANCIA DE NAUTICA

const titanic = new Nautica("metal","doble","titan","2021")
console.log(titanic)

console.log(Nautica.color="amarillo")
