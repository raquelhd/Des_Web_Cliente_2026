// javascript-06.js · Métodos de String con expresiones regulares: search y replace.
//   /.../i  -> ignora mayúsculas/minúsculas      /.../g -> todas las coincidencias, no solo la primera
var saludo = "probando, probanDo, uno, dos...";
var pos = saludo.search(/ando/i);                  // posición de la primera coincidencia (4); -1 si no hay
var nuevoTexto1 = saludo.replace("do", "ding");    // con una cadena: solo la PRIMERA "do", sensible a mayúsculas
var nuevoTexto2 = saludo.replace("Do", "ding");    // idem, pero busca "Do" (la del segundo "probanDo")
var nuevoTexto3 = saludo.replace(/do/i, "ding");   // regex sin g: solo la primera, ignorando mayúsculas
var nuevoTexto4 = saludo.replace(/do/ig, "ding");  // regex con g: TODAS las "do"/"Do" (incluida la de "dos")
var nuevoTexto5 = saludo.replace(/[oa]/ig, "x");   // clase [oa]: cada "o" o "a" se cambia por "x"

console.log("pos: ", pos);
console.log("nuevoTexto1: ", nuevoTexto1);
console.log("nuevoTexto2: ", nuevoTexto2);
console.log("nuevoTexto3: ", nuevoTexto3);
console.log("nuevoTexto4: ", nuevoTexto4);
console.log("nuevoTexto5: ", nuevoTexto5);
