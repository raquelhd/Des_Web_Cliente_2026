// javascript-10.js · Parámetros que faltan y número variable de argumentos.

// Si no se pasa el segundo argumento, y vale undefined; le damos un valor por defecto
function f(x,y) {
  if ( y === undefined ) {
    y = 0;
    console.log("no se le ha pasado un segundo argumento")
  }  //y = y || 0;                 // forma abreviada equivalente
  return x+y;
}

// Sin parámetros declarados: "arguments" es un objeto tipo array con TODO lo que se ha pasado
function sumar( ) {
  var acum = 0;
  for ( var i = 0; i < arguments.length; i++ ) {
    acum += arguments[ i ];
  }
  return acum;
}

console.log( f( 2, 3 ) );                              // 5
console.log( f( 2 ) );                                 // aviso + 2
console.log ("primera suma: ", sumar( 1, 2, 3, 4, 5 ));  // 15
console.log ("segunda suma: ", sumar( -13, 2, 17 ));     // 6

// Sintaxis moderna equivalente:  function f(x, y = 0) {...}   y   function sumar(...nums) {...}
