//Nos sirve para unir ARRAYS 
// Definimos los ARRAY
const Ciudades = ["Medellin", "bogota", "pereira"];

const Paices =["colombia", "Mexico", "Brazil"]


//Declaramos una variable para guardar los 2 ARRAY.
// El SpreadOperator son tres punto (...)
const Mundo = [...Ciudades,...Paices]
console.log(Mundo)

//=======================================================
//OBJETOS
const ModelosMujeres = {
    Daniela:"colombia",
    Marcela:"Mexico",
    Andrea:"Brazil"
}

const ModelosHombres = {
    Daniel:"Venezuela",
    Marcelo:"EEUU",
    Andres:"Peru"
}

const Modelos={...ModelosMujeres,...ModelosHombres}
console.log(Modelos)