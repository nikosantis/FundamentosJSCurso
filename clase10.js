var niko = {
    nombre: 'Nikolas',
    apellido: 'Santis',
    edad: 31,
    disenador: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.disenador) {
        console.log('Diseñador')
    } else {
        console.log('No es Diseñador')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Piloto Drone')
    }
}
imprimirProfesiones(niko)

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad>18){
        console.log('Es mayor de edad')
    } else {
        console.log('Es menor de edad')
    }
}
imprimirSiEsMayorDeEdad(niko)