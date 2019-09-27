var niko = {
    nombre: 'Nikolas',
    apellido: 'Santis',
    altura: 1.89
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
    altura: 1.90
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