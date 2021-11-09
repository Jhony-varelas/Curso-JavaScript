// EVENTOS: Es algo que ocurre cuando el usuario ejecuta una accion por medio
//del harware

/*
onblur (): se pierde el foco.
onchange (): al modificar el valor del componente.
onbeforeunload (): se lanza al intentar cerrar una ventana.
onclick (): al hacer clic en un elemento.
ondblclick (): al hacer doble clic.
onerror (): si se produce un error al cargar la página web o una imagen.
onfocus (): cuando un componente obtiene el foco.
onkeydown (): al pulsar cualquier tecla.
onkeypress (): al pulsar una tecla correspondiente a un carácter.
onkeyup (): al leventar cualquier tecla.
onload (): se produce al terminar de cargarse la página web o una imagen.
onmousedown (): al presionar un botón del ratón.
onmousemove (): se ha movido el ratón.
onmouseout (): el cursor del ratón sale del área ocupada por un elemento.
onmouseover (): el cursor del ratón entra en el área ocupada por un elemento.
onmouseup (): al dejar de presionar un botón del ratón.
onresize (): al redimensionar una ventana o un marco.
onselect (): cuando se selecciona un texto.
onunload (): al salir de la página web.
*/

// document.querySelector("button") asignele a la variable boton.
const boton = document.querySelector("button");
const formulario = document.querySelector("formulario");
const cuerpo =document.querySelector("body");

function Pulsar() {
  alert(" has dado clik en el boton");
}

//window: recoge el evento - addEventListener: escuchador de evento
// resize: evento.

//CUANDO EL USUARIO AJUSTE LA PANTALLA PASARA LO QUE INDIQUEMOS
// ACA:
window.addEventListener("resize", (e) => {
  alert("has redimencionado la ventana");
});


document.addEventListener("click" , ()=>{
    cuerpo.style.width="300px"
    cuerpo.style.backgroundColor = "pink"
})

