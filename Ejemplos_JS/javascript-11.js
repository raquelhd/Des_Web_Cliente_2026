// javascript-11.js · Arrow functions (funciones flecha): forma corta de escribir funciones.

// Con llaves: hace falta return
const saludo = () => {
  return "Hola";
}

// Sin llaves: el return es implícito; con un solo parámetro no hacen falta paréntesis
const saludo2 = nombre => "Hola " + nombre;

console.log(saludo());          // Hola
console.log(saludo2("Lola"));   // Hola Lola
