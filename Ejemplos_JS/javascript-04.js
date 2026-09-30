// javascript-04.js · El operador typeof devuelve el TIPO de un valor como cadena.
// Se concatenan los ocho resultados en una sola cadena z.
var z = typeof "Pepe"                                  // "string"
+ " " + typeof ( 7.23E-2 )                             // "number"  (7.23E-2 = 0.0723)
+ " " + typeof(true)                                   // "boolean"
+ " " + typeof [1,2,3,4]                               // "object"  (¡un array es un objeto! usa Array.isArray())
+ " " + typeof(undefined)                              // "undefined"
+ " " + typeof (null)                                  // "object"  (error histórico de JavaScript)
+ " " + typeof{nombre:"Pepe", edad: 45}                // "object"
+ " " + typeof( function doble(x) {return 2*x;} );     // "function"
console.log( "z = " + z);
// Valor de z: "string number boolean object undefined object object function"
