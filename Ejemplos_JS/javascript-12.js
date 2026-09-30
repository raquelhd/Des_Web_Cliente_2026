// javascript-12.js · Clases: constructor, propiedades y métodos.

class NumeroComplejo {

    // Se ejecuta al hacer new; this es el objeto que se está creando
    constructor(parteReal, parteImaginaria){
    this.parteReal = parteReal;
    this.parteImaginaria = parteImaginaria;
    }

    // Métodos "getter" convencionales (devuelven una propiedad)
    getParteReal() {
        return this.parteReal;
    }

    getParteImaginaria() {
        return this.parteImaginaria;
    }

    // Método que calcula algo a partir de las propiedades
    modulo() {
        return Math.sqrt(this.parteReal*this.parteReal 
            + this.parteImaginaria*this.parteImaginaria);
    }
}

var a = new NumeroComplejo(3, 4);   // crea una instancia
console.log("modulo: ", a.modulo());  // 5
