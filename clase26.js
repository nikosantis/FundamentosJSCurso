class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(fn) {
        var nombre = this.nombre
        var apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }
    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, altura) {
        super(nombre, apellido, edad, altura)
    }
    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen días ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah, mira, no sabía que eras desarrollador`)
    }
}
var niko = new Persona('Nikolas', 'Santis', '31', 1.69)
var angie = new Persona('Angie', 'Pereira', '31', 1.61)
var copo = new Desarrollador('Don', 'Copito', '11', 1.90)

niko.saludar()
angie.saludar(responderSaludo)
copo.saludar(responderSaludo)
