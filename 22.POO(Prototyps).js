// POO (PROTOTYPS) 

/*Un objeto en JavaScript tiene otro objeto, llamado prototype (prototipo, en español).
 Cuando pedimos a un objeto una propiedad que no tiene, la busca en su prototipo. Así, 
 un prototipo es otro objeto que se utiliza como una fuente de propiedades alternativa.*/




function Tiburon(nombre, cientifico) {
  this.nombre = nombre;
  this.cientifico = cientifico;
}

//METODOS
Tiburon.prototype.atacar = function () {
  console.log("cuidado fuera del agua");
};

//INSTANCIA DE TIBURON
const Tmartillo = new Tiburon("martillo", "tiburon martillo");
Tmartillo.atacar();

//HERENCIA EN LOS PROTOTIPOS (tiburon)
function Tiburontoro(nombre, cientifico, peligroso) {
  this.super = Tiburon;
  this.super(nombre, cientifico);
  this.peligroso = peligroso;
}

//INSTANCIA DE TIBURON TORO
const Tcostero = (Tiburontoro.prototype = new Tiburon());
Tiburontoro.prototype.constructor = Tiburon;

//SOBREESCRITURA DE METODOS
Tiburontoro.prototype.atacar = function () {
  console.log("cuidado, tiburon toro fuera del agua");
};

Tiburontoro.prototype.mutilar = function () {
  console.log("si te muerde te mutila");
};

Tcostero.atacar();
Tcostero.mutilar();
