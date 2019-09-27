var signo = prompt('¿Cuál es tu signo?')

switch(signo) {
    case 'acuario':
            console.log('No permita que sus curiosidades inoportunas lo detengan en su avance. No renuncie y siga adelante con todos los proyectos que se propuso hace tiempo.')
        break
    case 'cancer':
    case 'cáncer':
            console.log('Si está con problemas, debe abandonar todas las ideas pesimistas. Recuerde que en otras oportunidades pudo superar obstáculos peores y saldrá beneficiado.')
        break
    case 'geminis':
    case 'géminis':
            console.log('Seguramente se sentirá relajado, ya que se ha librado de viejas ataduras y dependencias que lo limitaban para tomar una propia determinación.')
        break

    default:
        console.log('No es un signo zodiacal válido')
        break
  
}