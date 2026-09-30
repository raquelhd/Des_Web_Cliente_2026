// javascript-05.js · Los objetos se asignan por REFERENCIA.
// persona2 = persona1 NO crea una copia: las dos variables apuntan al MISMO objeto.

var persona1 = { nombre: 'David', 
                apellidos: 'Huertas', 
                edad: 27, 
                nombreCompleto: function(){ return this.nombre + this.apellidos;},   // método: this es el propio objeto
                coche: { marca: "Audi", "potencia de motor": 115, "año": 2017 }      // objeto anidado
              };

var persona2 = persona1;          // misma referencia, no copia
console.log("Persona 1:\n", persona1);
console.log("Persona 2:\n", persona2);

persona2.nombre = 'Andrea';       // cambiamos SOLO persona2...
console.log("Persona 2:\n", persona2);
console.log("Persona 1:\n", persona1);   // ...pero persona1 también cambia: es el mismo objeto
