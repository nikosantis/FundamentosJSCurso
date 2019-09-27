var niko = {
    nombre: 'Nikolas',
    apellido: 'Santis',
    edad: 31,
    peso: 70
}

console.log(`Al incio del año ${niko.nombre} pesa ${niko.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++){
    var pesoR = Math.random()
    
    if (pesoR < 0.25){
        // aumenta de peso
        aumentarDePeso(niko)
    } else if (pesoR < 0.5) {
        // adelgazar
        adelgazar(niko)
    }
}

console.log(`Al final del año ${niko.nombre} pesa ${niko.peso.toFixed(1)} kg`)