import { obtenerUnaPregunta } from './preguntas.js'

let  state = {
    cantidad_de_preguntas: 5,
    numero_de_pregunta_actual: 1,
    dificultad: 1,
    nombre_de_usuario: 'Jugador',
    pregunta: undefined,
    score: 0
}

const menu = document.getElementById('menu')
const preguntas = document.getElementById('preguntas')
const puntaje = document.getElementById('puntaje')


/********************************************************************************************
 *                                      SECCIÓN MENU
********************************************************************************************/
const play_buton = document.getElementById('play')

const cantidad_preguntas_option1 = document.getElementById('cantidad_preguntas_option1')
const cantidad_preguntas_option2 = document.getElementById('cantidad_preguntas_option2')
const cantidad_preguntas_option3 = document.getElementById('cantidad_preguntas_option3')

const dificultad_option1 = document.getElementById('dificultad_option1')
const dificultad_option2 = document.getElementById('dificultad_option2')
const dificultad_option3 = document.getElementById('dificultad_option3')

play_buton.addEventListener('click', () => {
    console.log("Iniciando juego")

    menu.style.zIndex = 0
    preguntas.style.zIndex = 1
    puntaje.style.zIndex = 0

    renderizar_nueva_pregunta()
})

cantidad_preguntas_option1.addEventListener('click', () => {
    state.cantidad_de_preguntas = 10
    console.log("Cantidad preguntas:: ", state.cantidad_de_preguntas)
})

cantidad_preguntas_option2.addEventListener('click', () => {
    state.cantidad_de_preguntas = 15
    console.log("Cantidad preguntas:: ", state.cantidad_de_preguntas)
})

cantidad_preguntas_option3.addEventListener('click', () => {
    state.cantidad_de_preguntas = 20
    console.log("Cantidad preguntas:: ", state.cantidad_de_preguntas)
})


/********************************************************************************************
 *                                  SECCIÓN PREGUNTAS
********************************************************************************************/


/******** RENDERIZAR PREGUNTA ***********/
let pregunta__numero_pregunta = document.getElementById('pregunta__numero_pregunta')
let pregunta__texto_pregunta = document.getElementById('pregunta__texto_pregunta')

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

    pregunta__numero_pregunta.textContent = state.numero_de_pregunta_actual
    pregunta__texto_pregunta.textContent = state.pregunta.pregunta
    
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

    /* Nos aseguramos de que haya seleccionado una respuesta, si no lanzamos alerta*/
    if (!respuesta1.checked && !respuesta2.checked && !respuesta3.checked && !respuesta4.checked) {
        const formulario = document.getElementById('seccion_respuestas').children[0]

        formulario.classList.add("destello-rojo")
        
        setTimeout(() => {
            formulario.classList.remove("destello-rojo")
        },1600)

        return
    }

    /* Desabilitamos las opciones mientras se verifica la respuesta */
    disableOptions(true)

    verificar_respuesta.style.display = "none"
    siguiente_pregunta.style.display = "block"

    /* Mostramos el comentario correspondiente a la respuesta seleccionada  */
    /* Verificamos si es una respuesta correcta                             */
    let respuestas = [respuesta1, respuesta2, respuesta3, respuesta4]

    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i].checked) {
            if (respuestas[i].value === state.pregunta.respuesta_correcta) {
                state.score += 10
                console.log("Score:: ", state.score)
            }
            comentario_del_personaje.textContent = state.pregunta.comentarios[i]
        }

    }

    // if (state)
})

const disableOptions = (isDisabled) => {
    respuesta1.disabled = isDisabled
    respuesta2.disabled = isDisabled
    respuesta3.disabled = isDisabled
    respuesta4.disabled = isDisabled
}

/****************************************** 
 *          SIGUIENTE PREGUNTA
******************************************/
siguiente_pregunta.addEventListener('click', () => {
    state.numero_de_pregunta_actual++

    renderizar_nueva_pregunta()
    disableOptions(false)
    
    siguiente_pregunta.style.display = "none"
    verificar_respuesta.style.display = "block"
    comentario_del_personaje.textContent = ''
    

    if (state.numero_de_pregunta_actual === state.cantidad_de_preguntas) {
        siguiente_pregunta.textContent = "Finalizar"
        siguiente_pregunta.classList.toggle("boton-finalizar")

    }
    
    if(state.numero_de_pregunta_actual > state.cantidad_de_preguntas){
        preguntas.style.display = "none"
        puntaje.style.display = "block"

        // Mostramos puntaje del jugador
        calcularPuntaje()
    }
    
})

const calcularPuntaje = () => {
    puntaje.textContent = state.score
}