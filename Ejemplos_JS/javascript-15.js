// javascript-15.js · Getters y setters: propiedades "calculadas" con validación.
// Se usan como si fueran propiedades normales (p.edad = 25, p.edad), pero por detrás se ejecuta una función.

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    set edad(anyos) {          // se ejecuta al hacer  p.edad = valor
        if (anyos>0) {         // validación: solo acepta valores positivos
            this.anyos = anyos;
        }
    }
    get edad() {               // se ejecuta al leer  p.edad
        return this.anyos
    }
}

var p = new Persona("Pepe");
p.edad = 25;
console.log(p.edad); //25
p.edad = -37;          // rechazado por el setter: no cambia nada
console.log(p.edad); //25
