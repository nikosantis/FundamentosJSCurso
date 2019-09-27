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
var juan = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 16,
    disenador: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

const MAYORIA_DE_EDAD = 18


// const esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirSiEsMayorDeEdad(niko)
imprimirSiEsMayorDeEdad(juan)

function permitirAcceso(persona){
    if (!esMayorDeEdad(persona)){
        console.log('Acceso Negado')
    } else {
        console.log('Acceso Permitido')
    }
}
permitirAcceso(niko)
permitirAcceso(juan)