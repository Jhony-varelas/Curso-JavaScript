// FUNCIONES CONSTRUCTORAS

const Automovil = function (color, marca, velocidad) {
  this.color = color;
  this.marca = marca;
  this, (velocidad = velocidad);

  this.acelerar = function () {
    console.log("estoy acelerando");
  };
};

const Audi = new Automovil("negro", "audi", 200);
console.log(Audi)
Audi.acelerar()