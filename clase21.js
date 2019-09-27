function Persona(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var niko = new Persona('Nikolas', 'Santis', '31')
var angie = new Persona('Angie', 'Pereira', '31')