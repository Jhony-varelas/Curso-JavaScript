// JSON : (Java Script Objet Notation) es muy parecido a un array de objetos que se escribe
//de manera distinta.

function cargarArchivo() {

  fetch("./25.JSON.json")
  .then(res =>res.json())
  .then(res=>console.log(res))
}

cargarArchivo()