const estadoInicial = {
    links : ["productos","carrito","cuenta"],
    contador : 0,
    valor : "",
    tareas : []
}


const reducer = (estadoPrevio=estadoInicial,action) => {
    switch(action.type){
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