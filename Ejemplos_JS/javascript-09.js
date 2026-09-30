// javascript-09.js · Métodos de un objeto y la palabra clave this.
// Dentro de un método, this es el objeto sobre el que se ha llamado (miObjeto).

var miObjeto = {
  nombre:"David",
  apellido: "Huertas",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;   // usa las propiedades del propio objeto
  },
  yomismo: function() {
    return this                                 // devuelve el propio objeto
  }
}

console.log(miObjeto);                            // el objeto completo
console.log(miObjeto.yomismo());                  // el mismo objeto (lo devuelve this)
console.log(miObjeto.nombreCompleto());           // "David Huertas"
console.log(miObjeto.yomismo().nombreCompleto()); // encadenado: yomismo() devuelve el objeto y sobre él llamamos al método
