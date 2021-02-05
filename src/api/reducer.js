const estadoInicial = {
    links : ["productos","carrito","cuenta"],
    contador : 0,
    valor : "",
    tareas : [],
    enviando : false
}


const reducer = (estadoPrevio=estadoInicial,action) => {
    switch(action.type){

        case "TAREAS_TRAER_SUCCESS" :
            return {
                ...estadoPrevio,
                tareas : action.tareas
            }

        case "TAREA_BORRAR" : 
            return {
                ...estadoPrevio,
                tareas : estadoPrevio.tareas.filter(task => task.id !== action.id)
            }

        case "TAREA_ENVIANDO" :
            return {
                ...estadoPrevio,
                enviando : true
            }

        case "TAREA_SUCESS" :

            return {
                ...estadoPrevio,
                valor : "",
                enviando : false,
                tareas : [
                    ...estadoPrevio.tareas,
                    action.tarea
                ]
            }

            /* 
            const nuevasTareas = estadoPrevio.tareas.slice(0)
            const nuevasTareas = [...estadoPrevio.tareas]
            nuevasTareas.push(action.tarea)

            return {
                ...estadoPrevio,
                tareas : nuevasTareas
            } */

        case "INPUT_CHANGE" :
            return {
                ...estadoPrevio,
                valor : action.valor
            }

        case "CONTADOR_AUMENTAR" :
            return {
                ...estadoPrevio,
                contador : estadoPrevio.contador + 1
            }

        case "CONTADOR_RESTAR" : 
            return {
                ...estadoPrevio,
                contador : estadoPrevio.contador - 1
            }

        case "CONTADOR_RESETEAR" : 
            return {
                ...estadoPrevio,
                contador : 0
            }

        default : 
            return estadoPrevio
    }
}

export default reducer