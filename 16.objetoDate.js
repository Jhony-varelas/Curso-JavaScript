// dia del mes en numero

let hora = new Date();
// dia del mes en numero
console.log(hora.getDate());
// dia de la semana en numero
console.log(hora.getDay());
// numero del mes
console.log(hora.getMonth());
// año en numero
console.log(hora.getFullYear());
// hora actual en primer parametro de la hora
console.log(hora.getHours());
// minutos actuales
console.log(hora.getMinutes());
// segundos actuales
console.log(hora.getSeconds());
// coge los milisegundos
console.log(hora.getMilliseconds());
// fecha en formato string // 10: 07: 19 GMT + 0200 (hora de verano de Europa Central)
console.log(hora.toString());
// fecha en string mié 02 jun 2021
console.log(hora.toDateString());
// fecha local en cadena
console.log(hora.toDateString());
// tiempo hasta la cadena local
// 6/02/2021 11:33:10
console.log(hora.toLocaleString());
// Convierte time a string la hora usando la actual especificación local
// 11: 33: 53
console.log(hora.toLocaleTimeString());
// Convierte time a string usando la espeficicacion local pero la fecha
// 6/2/2021
console.log(hora.toLocaleDateString());
// Coge la diferencia en minutos entre el tiempo local de la computadora
// y las coordenadas universales (UTC)
console.log(hora.getTimezoneOffset());
// Coge el dia del mes usando las coordenadas universales (UTC)
console.log(hora.getUTCDate());
// Coge las horas valor in un objeto time usando
// las coordenadas de tiempo
console.log(hora.getUTCHours());

const Hora = document.createElement("h1");
document.body.appendChild(Hora);

Hora.textContent =
  "Hoy es: " + hora.getDate() + " - " + "del mes " + hora.toLocaleDateString();
