class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, altura) {
        super(nombre, apellido, edad, altura)
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    }
}


// var niko = new Persona('Nikolas', 'Santis', '31', 1.69)
// var angie = new Persona('Angie', 'Pereira', '31', 1.61)
