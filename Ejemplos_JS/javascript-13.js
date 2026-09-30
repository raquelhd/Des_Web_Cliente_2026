// javascript-13.js · Métodos estáticos: pertenecen a la CLASE, no a las instancias.

class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }
    static saludo() {          // static: se llama como Persona.saludo()
        return "Hola";
    }
}


// Un método static se llama sobre la CLASE, no sobre una instancia
console.log(Persona.saludo());   // "Hola"  -> correcto

var p = new Persona("Pepe");
console.log(p.nombre);          // "Pepe"  -> las instancias sí tienen sus propiedades

// La siguiente línea lanza TypeError: p.saludo is not a function
// (es INTENCIONADO: una instancia no hereda los métodos estáticos)
p.saludo(); //// ERROR!!!



