// javascript-08.js · Funciones declaradas y hoisting.
// El código principal usa las funciones ANTES de que aparezcan escritas más abajo:
// funciona porque las declaraciones "function nombre() {}" se cargan antes de ejecutar nada.

var x = 3;
var y = cubo (x);                 // 27
ponerGuiones();
console.log("El cubo de ", x, " es", y);
ponerGuiones();
parImpar(y);
ponerGuiones();
var texto ="Ejemplo de texto";
if (contieneCaracter(texto, 'j')){
	console.log(texto, "contiene el caracter 'j'");
	ponerGuiones();
}

// ----- Definiciones (podrían estar arriba; da igual por el hoisting) -----

function parImpar(i){
	// operador ternario: condición ? valorSiCierto : valorSiFalso
	console.log ("El numero ", i, "es ", (i%2==0)? "par" : "impar" );
}

function cubo (i){
	return i*i*i;
}

function ponerGuiones(){
	console.log("------------------------------");
}

function contieneCaracter(cadena, caracter){
	// indexOf devuelve la posición del carácter, o -1 si no está
	if (cadena.indexOf(caracter)==-1){
		return false;
	}
	return true;
	//Alternativa: return (cadena.indexOf(caracter)==-1)? false : true;
}
