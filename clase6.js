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


// function imprimirNombreMayu(nombre) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }
// imprimirNombreMayu(niko.nombre)
// imprimirNombreMayu(angie.nombre)

function imprimirNombreMayu({ nombre }) {
    console.log(nombre.toUpperCase())
}
imprimirNombreMayu(niko)
imprimirNombreMayu(angie)
imprimirNombreMayu({ nombre: 'Pepito'})