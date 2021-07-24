const obtenerUnaPregunta = () => {
    return setDePreguntas["1"]["sheldon"][0]
}

const setDePreguntas = {
    "1": {
        "sheldon": [
            {
                pregunta: "¿Cual es el nombre de la novia de Sheldon?",
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

// const setDePreguntas = [
    
// ]

export { obtenerUnaPregunta }