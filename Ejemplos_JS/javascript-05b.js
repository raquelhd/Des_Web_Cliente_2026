// javascript-05b.js · Copia de un objeto con Object.assign({}, origen).
// Ahora persona2 es un objeto NUEVO: cambiarlo no afecta a persona1.
// (Es una copia SUPERFICIAL: el objeto anidado coche sigue siendo compartido.)

var persona1 = { nombre: 'David', 
                apellidos: 'Huertas', 
                edad: 27, 
                nombreCompleto: function(){ return this.nombre + this.apellidos;},
                coche: { marca: "Audi", "potencia de motor": 115, "año": 2017 }
              };     

var persona2 = Object.assign({}, persona1);   // copia las propiedades de persona1 en un objeto vacío
console.log("Persona 1a:\n", persona1);
console.log("Persona 1b:\n", persona1);


persona2.nombre = 'Andrea';       // cambiamos SOLO la copia
console.log("Persona 2a:\n", persona2);
console.log("Persona 2b:\n", persona2);

console.log("Persona 1b:\n", persona1);   // persona1 sigue siendo David
