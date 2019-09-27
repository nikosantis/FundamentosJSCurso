var niko = {
    nombre: 'Nikolas',
    apellido: 'Santis',
    edad: 31,
    peso: 70
}

console.log(`Al incio del año ${niko.nombre} pesa ${niko.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = niko.peso - 3
var dias = 0

while (niko.peso > META) {
    if (comeMucho()) {
        // aumentar de peso
        aumentarDePeso(niko)
    }
    if (realizaDeporte()) {
        // baja de peso
        adelgazar(niko)
    }
    dias += 1
}

console.log(`pasaron ${dias} días hasta que ${niko.nombre} adelgazó ${niko.peso.toFixed(1)} kg`)