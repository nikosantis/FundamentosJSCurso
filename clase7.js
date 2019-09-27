var niko = {
    nombre: 'Nikolas',
    apellido: 'Santis',
    edad: 31
}
var angie = {
    nombre: 'Angie',
    apellido: 'Pereira',
    edad: 31
}



function imprimirNombreMayu(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}
imprimirNombreMayu(niko)
imprimirNombreMayu(angie)
imprimirNombreMayu({ nombre: 'Pepito'})

function ne(persona){
    var nombre = persona.nombre
    var edad = persona.edad
    console.log('Hola me llamo ' + nombre + ' y tengo ' + edad + ' años')
}

ne(niko)