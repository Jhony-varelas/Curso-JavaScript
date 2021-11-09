//EXPORT DEFAULT:
//cuando una funcion esta exportada por defecto, en la impotacion
//que hagamos podemos llamarla de cualquier manera, cuando la toma
//por defecto la toma como la exportacion principal de la pagina.
export default function Restar(numero1, numero2) {
  console.log(numero1 - numero2);
}

export function Sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}
