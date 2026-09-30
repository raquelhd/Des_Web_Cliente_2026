// javascript-14.js · Herencia entre clases: extends y super.

class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    modulo() {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
}

// Vector3D HEREDA de Vector2D: tiene x, y, modulo()... y añade z
class Vector3D extends Vector2D  {
    constructor(x,y,z) {
        super(x,y);          // llama al constructor de la clase padre (obligatorio antes de usar this)
        this.z = z;
    }
    modulo() {               // sobrescribe el método del padre...
        return Math.sqrt( super.modulo() * super.modulo()   // ...pero lo reutiliza con super.modulo()
            + this.z*this.z);
    }
}

const v2D = new Vector2D(3,4);
console.log("v2D.modulo: ", v2D.modulo());   // 5

const v3D = new Vector3D(2,4,4);
console.log("v3D.modulo: ", v3D.modulo());   // 6
