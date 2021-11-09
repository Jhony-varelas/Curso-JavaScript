//FORMULARIOS
// llamasmos los campos de texto que declaramos en HTML

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#formulario");

//EXPRESIONES REGULARES: SON UNA SERIE DE NORMAS PARA
//VALIDAR FORMULARIOS (CAMPOS DE TEXTO)

const emailRegex =
  "/ ^ [ a-zA-Z0-9 . _- ] + @ [ a-zA-Z0-9- ] { 2,} [ . ] [ a-zA-Z ] { 2,4 } $ /";
const apellidoRegex = "/ ^ [ a-zA-Z ] { 3,16 } $ /";
const passwordRegex = "/ ^ [ a-z0-9_- ] { 6,18 } $ /";
const nombreRegex = "/ ^ [ a-zA-Z ] { 3,16 } $ /";

// DEFINIMOS LOS ARREGLOS DONDE SE VAN A GUARDAR LAS VALIDACIONES

const arrayValidacion = [];
const BD = [];

// DEFINIMOS LAS FUNCIONES DONDE SE VAN GUARDAR LAS VALIDACIONES

const valorNombre = (nombreValue) => {
  if (nombre=="") {
    if (nombreRegex.test(nombreValue)) {
      arrayValidacion.push("nombre");
      BD.push(nombreValue);
    }
  }
};

const valorApellido = (apellidoValue) => {
  if (apellido == "") {
    if (apellidoRegex.test(apellidoValue)) {
      arrayValidacion.push("apellido");
      BD.push(apellidoValue);
    }
  }
};
const valorEmail = (emailValue) => {
  if (email=="") {
    if (apellidoRegex.test(emailValue)) {
      arrayValidacion.push("email");
      BD.push(emailValue);
    }
  }
};
const valorPassword = (passwordValue) => {
  if (password=="") {
    if (apellidoRegex.test(passwordValue)) {
      arrayValidacion.push("password");
      BD.push(passwordValue);
    }
  }
};
// CREAMOS EL GUARDADO DE DATOS EN EL LOCAL STORAGE QUE ES UNA PEQUEÑA
//BASE DE DATOS QUE TIENE EL NAVEGADOR



formulario.addEventListener("submit",(evento)=>{
    evento.alert("mensaje recibido")


     if(arrayValidacion.length == 4){
         localStorage.setItem(`${BD[2]}`, JSON.stringify(BD))
         window.location.reload()
         alert("la informacion llego")

     }
})



// RECOGE EL EVENTO DEL DOCUMENTO CUANDO HAYA UN CAMBIO:(addEventListener("change"),(evento)=>)
// Y UNA FUNCION FLECHA DONDE GUARDAMOS EL CAMBIO: (evento)=>
// VALIDAMOS EL CAMBIO EN EL CAMPO DEL NOMBRE, A VER SI COINCIDE CON LA ETIQUETA,
// HACEMOS UNA CONDICION TERNARIA(?) Y UNA FUNCION DONDE CAPTURE ESE CAMBIO, (valorNombre(evento.target.value))
// ESTE VA A RECOGER(evento.target.value) Y SI NO COINCIDE (:) NULL

document.addEventListener("change", (evento) => {
  evento.target.matches("#nombre") ? valorNombre(evento.target.value) : null;
  evento.target.matches("#apellido") ? valorApellido(evento.target.value) : null;
  evento.target.matches("#email") ? valorEmail(evento.target.value) : null;
  evento.target.matches("#password") ? valorPassword(evento.target.value) :null ;
});

