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

    renderizar_nueva_pregunta()

    console.group("Estado")
    console.log(state)
    console.groupEnd()

})

/**************************************
 *      SECCIÓN PREGUNTAS
**************************************/


/******** RENDERIZAR PREGUNTA ***********/
let texto_pregunta = document.getElementById('texto_pregunta')

let respuesta1 = document.getElementById('respuesta1')
let respuesta1_label = document.getElementById('respuesta1_label')

let respuesta2 = document.getElementById('respuesta2')
let respuesta2_label = document.getElementById('respuesta2_label')

let respuesta3 = document.getElementById('respuesta3')
let respuesta3_label = document.getElementById('respuesta3_label')

let respuesta4 = document.getElementById('respuesta4')
let respuesta4_label = document.getElementById('respuesta4_label')


const renderizar_nueva_pregunta = () => {
    state.pregunta = obtenerUnaPregunta()

    respuesta1.checked = respuesta2.checked = respuesta3.checked = respuesta4.checked = false

    texto_pregunta.textContent = state.pregunta.pregunta
    
    respuesta1_label.textContent = respuesta1.value = state.pregunta.respuestas[0]
    respuesta2_label.textContent = respuesta2.value = state.pregunta.respuestas[1]
    respuesta3_label.textContent = respuesta3.value = state.pregunta.respuestas[2]
    respuesta4_label.textContent = respuesta4.value = state.pregunta.respuestas[3]
}

/****************************************** 
 *          VERIFICAR RESPUESTA
******************************************/
const verificar_respuesta = document.getElementById('verificar_respuesta')
const siguiente_pregunta = document.getElementById('siguiente_pregunta')
const comentario_del_personaje = document.getElementById('comentario_del_personaje')

verificar_respuesta.addEventListener('click', () => {
    console.log("Verificando respuesta...")
    siguiente_pregunta.style.display = "block"
    verificar_respuesta.style.display = "none"

    let respuestas = [respuesta1, respuesta2, respuesta3, respuesta4]

    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i].checked) {
            if (respuestas[i].value === state.pregunta.respuesta_correcta) {
                console.log("11111111111111111111111 ACERTÓ")
                console.log("CC::", state.pregunta.comentarios[i])
            }
            comentario_del_personaje.textContent = state.pregunta.comentarios[i]
        }

    }
})


/****************************************** 
 *          SIGUIENTE PREGUNTA
******************************************/
siguiente_pregunta.addEventListener('click', () => {
    console.log("Siguiente pregunta...")
    renderizar_nueva_pregunta()
    siguiente_pregunta.style.display = "none"
    verificar_respuesta.style.display = "block"
})

