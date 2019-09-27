var niko = {
    nombre: 'Nikolas',
    apellido: 'Santis',
    altura: 1.89,
    cantidadDeLibros: 182
}
var angie = {
    nombre: 'Angie',
    apellido: 'Pereira',
    altura: 1.61,
    cantidadDeLibros: 152
}
var mariela = {
    nombre: 'Mariela',
    apellido: 'Escalante',
    altura: 1.63,
    cantidadDeLibros: 64
}
var keno = {
    nombre: 'Eugenio',
    apellido: 'Santis',
    altura: 1.90,
    cantidadDeLibros: 42
}

// const esAlta = persona => persona.altura > 1.8

const esAlta = ({ altura }) => altura > 1.8

var personas = [niko, angie, mariela, keno]

var personasAltas = personas.filter(esAlta)

// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.8
// })

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

// {
    
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)


// var acum = 0

// for (var i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
// }

// const reducer = (acum, persona) => {
//     return acum + persona.cantidadDeLibros
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)