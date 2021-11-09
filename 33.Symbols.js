//NOS PERMITEN CREAR IDENTIFICADORES UNICOS Y EVITAR COLISIONES

let nombre1 = Symbol("nombre") 
let nombre2 = Symbol("nombre") 

console.log(nombre1 === nombre2)

let objeto= {
    [nombre1]: "peter",  // protegemos el dato con []

}
objeto.nombre1= "antonio"
console.log(objeto[nombre1])

//PARA CAMBIAR EL OBJETO
objeto[nombre1]= "pedro"
console.log(objeto[nombre1]) 