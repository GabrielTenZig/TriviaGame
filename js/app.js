import { obtenerUnaPregunta } from './preguntas.js'

let  state = {
    cantidad_de_preguntas: 10,
    dificultad: 1,
    nombre_de_usuario: 'Jugador',
    pregunta: undefined,
    score: 0
}

/**************************************
 *           SECCIÓN MENU
**************************************/

const play_buton = document.getElementById('play')

const menu = document.getElementById('menu')
const preguntas = document.getElementById('preguntas')
const puntaje = document.getElementById('puntaje')


play_buton.addEventListener('click', () => {
    console.log("Iniciando juego")
    menu.style.zIndex = 0
    preguntas.style.zIndex = 1
    puntaje.style.zIndex = 0

    state.pregunta = obtenerUnaPregunta()

    console.group("Estado")
    console.log(state)
    console.groupEnd()

})

/**************************************
 *      SECCIÓN PREGUNTAS
**************************************/
const verificar_respuesta = document.getElementById('verificar_respuesta')
const siguiente_pregunta = document.getElementById('siguiente_pregunta')

verificar_respuesta.addEventListener('click', () => {
    console.log("Verificando respuesta...")
    siguiente_pregunta.style.display = "block"
    verificar_respuesta.style.display = "none"
})

siguiente_pregunta.addEventListener('click', () => {
    console.log("Siguiente pregunta...")
})