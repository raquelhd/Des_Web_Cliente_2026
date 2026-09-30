// javascript-03.js · var frente a let dentro de un bloque { }
//  · var  -> ámbito de FUNCIÓN: el x del if es la MISMA variable que el de fuera
//  · let  -> ámbito de BLOQUE: el x del if es OTRA variable, que muere al cerrar la llave

function testingVar() {
  var x = 6;
  if (true) {
    var x = 17;  // ¡misma variable! Se sobrescribe la de arriba
    console.log("testingVar, dentro:", x);  // 17
  }
  console.log("testingVar, fuera:", x);  // 17  (el cambio ha salido del if)
}

function testingLet() {
  let x = 6;
  if (true) {
    let x = 17;  // variable diferente, solo existe dentro del if
    console.log("testingLet, dentro:", x);  // 17
  }
  console.log("testingLet, fuera:", x);  // 6   (la de fuera no se ha tocado)
}

// llamamos a las funciones
testingVar();
testingLet();
