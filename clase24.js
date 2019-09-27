function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
}



// var niko = new Persona('Nikolas', 'Santis', '31', 1.69)
// var angie = new Persona('Angie', 'Pereira', '31', 1.61)
