// javascript-16.js · Gestión de errores: try / catch / finally / throw
//   try     -> código que puede fallar
//   catch   -> se ejecuta SOLO si ha habido error (recibe el objeto de error)
//   finally -> se ejecuta SIEMPRE, haya error o no
//   throw   -> lanza un error nuestro

// 1. Error real: la variable pepe no existe -> ReferenceError
try {
    console.log(pepe);
} catch (errorCometido) {
    console.log("Error cometido: " + errorCometido.name + ", descripcion: " + errorCometido.message );
} finally {
    console.log("En cualquier caso");
}

// 2. Sin error: no entra en catch, pero finally se ejecuta igual
try {
    x=5/2;
} catch (error) {
    console.log("Error cometido: " + error.name + ", descripcion: " + error.message );
} finally {
    console.log("En cualquier caso");
}

// 3. Error lanzado por nosotros con throw (aquí se lanza una cadena; también puede ser new Error("..."))
var x = -2;
try {
    console.log(x);
    if (x < 0 ) throw "negativo"
} catch (errorCometido) { // tipo idem que valor asociado a throw
    console.log("Error cometido: " + errorCometido );
} finally {
    console.log("En cualquier caso");
}
