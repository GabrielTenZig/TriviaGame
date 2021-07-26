const obtenerUnaPregunta = () => {
    const min = 0
    const max = otroSetDePreguntas.length

    let numRand = Math.floor( Math.random() * (max - min) + min )
    return otroSetDePreguntas[numRand]
}

const setDePreguntas = {
    "1": {
        "sheldon": [
            {
                pregunta: "¿Cual es el nombre de la novia de Sheldon?...",
                respuestas: [
                    "Jermaioni", 
                    "Natalia Laforcade", 
                    "Eimy", 
                    "Lenard"
                ],
                respuesta_correcta: "Eimy",
                comentarios: [
                    "¿Como dices?, ni siquiera la conosco",
                    "Ciertamente Natalia es una excelente artista, pero me parece que has fallado",
                    "Por supuesto, ¡acertaste!... mi dulce Eimy",
                    "¿Queeeé?, aprecio al sujeto, pero no... ya quisiera",
                ]
            }
        ],
        "malcolm": {},
        "drake": {}
    },
    "2": {

    },
    "3": {

    }
}

const otroSetDePreguntas = [
    {
        pregunta: "¿Cual es el nombre de mi novia?",
        respuestas: [
            "Jermaioni", 
            "Natalia Laforcade", 
            "Eimy", 
            "Lenard"
        ],
        respuesta_correcta: "Eimy",
        comentarios: [
            "¿Como dices?, ni siquiera la conosco",
            "Ciertamente Natalia es una excelente artista, pero me parece que has fallado",
            "Por supuesto, ¡acertaste!... mi dulce Eimy",
            "¿Queeeé?, aprecio al sujeto, pero no... ya quisiera",
        ]
    },
    {
        pregunta: "¿Cuantos premios Novel ha ganado?",
        respuestas: [
            "1", 
            "2", 
            "5", 
            "Ninguno"
        ],
        respuesta_correcta: "1",
        comentarios: [
            "Acertaste, y debo agregar que estoy muy orgulloso de mi premio, y quiza un poco de tu habilidad para recordarlo.",
            "No, no he ganado dos premios Novel, aunque entiendo tu confucion.",
            "Erraste, pero entiendo que mi inteligencia te confunda un poco.",
            "¿Queeeé?, he de decir que eso me ofende muchisimo.",
        ]
    },
    {
        pregunta: "¿Como se llama el juego que solemos jusgar mis amigos y yo?",
        respuestas: [
            "Monopoly", 
            "Calabosos y dragones", 
            "Make and Breake", 
            "Scrabble"
        ],
        respuesta_correcta: "Calabosos y dragones",
        comentarios: [
            "No, ciertamente nunca he jugado monopoly, pero un dia de estos quiza.",
            "Por supuesto, ¿quierés jusgar una partida con nosotros?",
            "No, no tengo tanta destreza con las manos, no ganaría",
            "He llegado a jugarlo, pero no es de mis juegos frecuentes.",
        ]
    }

]

export { obtenerUnaPregunta }