let  state = {
    cantidad_de_preguntas: 10,
    dificultad: 1,
    nombre_de_usuario: 'Jugador'
}


const play_buton = document.getElementById('play')

const menu = document.getElementById('menu')
const preguntas = document.getElementById('preguntas')
const puntaje = document.getElementById('puntaje')


play_buton.addEventListener('click', () => {
    console.log("Iniciando juego")
    menu.style.zIndex = 0
    preguntas.style.zIndex = 1
    puntaje.style.zIndex = 0

    console.log('Estado actual:', state )

})