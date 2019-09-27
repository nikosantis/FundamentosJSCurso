function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var niko = new Persona('Nikolas', 'Santis', '31', 1.69)
var angie = new Persona('Angie', 'Pereira', '31', 1.61)
