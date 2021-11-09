/*APPLYBINDCALL 
/nos van a apermitir accededer desde los datos de un objeto
hacia otro objeto para usar sus funciones o metodos*/

const cafeteria = {
  nombre: "Mi cafe",
  actividades(juego) {
    console.log(`soy: ${this.nombre} y estamos juagndo al: ${juego}`);
  },
};

const persona = {
  nombre: "Jhony",
};

/*CALL:  (acceder al contexto de otro objeto)
1. declaro una variable (accederCall)
2. le digo que va a ser igual al objeto(cafeteria)
3. le digo que valla al atributo o metodo que quiero (actividad)
4. llamo al metodo que me permite esto (call)
5. llamo al otro objeto (persona)
6. le ingreso el parameto a la actividad (nombre de la actividad)*/
let accederCall = cafeteria.actividades.call(persona, "billar");
console.log("");

/*=================================================================
APPLY:  (acceder al contexto de otro objeto)
funciona igual que call, pero hay que poner el parametro que
recibe el objeto en corchetes.*/
let accederapply = cafeteria.actividades.apply(persona, ["domino"]);
console.log("");

//=================================================================
/*BIND:  (retorna una nueva funcion con el nuevo contexto)
creo una funcion (jugar) cuando la llame me va a crear el contexto.

estoy metiendo un objeto dentro del otro y ingreso como parametro el 
juego*/

const jugar = cafeteria.actividades.bind(persona);
jugar("futbol");
