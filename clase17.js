var niko = {
    nombre: 'Nikolas',
    apellido: 'Santis',
    altura: 1.70
}
var angie = {
    nombre: 'Angie',
    apellido: 'Pereira',
    altura: 1.61
}
var mariela = {
    nombre: 'Mariela',
    apellido: 'Escalante',
    altura: 1.63
}
var keno = {
    nombre: 'Eugenio',
    apellido: 'Santis',
    altura: 1.67
}

var personas = [niko, angie, mariela, keno]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}