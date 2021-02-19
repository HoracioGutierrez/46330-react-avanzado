import React , {useState,useReducer} from "react"
import {Provider} from "../../api/contexto"


const estadoIncial = {
    links : ["productos","carrito","cuenta"],
    contador : 0,
    valor : "",
    tareas : [],
    enviando : false
}

const reducer = (estadoPrevio,action) => {
    switch(action.type){
        
    }
}


const CustomProvider = ({children}) => {

    const [links] = useState(["productos","carrito","cuenta"])
    const [contador,setContador] = useState(0)
    const [valor,setValor] = useState("")
    const [tareas,setTareas] = useState([])
    const [enviando,setEnviando] = useState(false)

    const [estado,dispatch] = useReducer(reducer,estadoIncial)

    const aumentarContador = () => {
        setContador(contador+1)
    }

    const resetearContador = () => {
        setContador(0)
    }

    const restarContador = () => {
        setContador(contador-1)
    }

    const crearTarea = () => {

    }

    const guardarValor = () => {

    }

    const borrarTarea = () => {

    }


    return(
        <Provider value={{crearTarea,guardarValor,borrarTarea,valor,tareas,enviando,links,contador,aumentarContador,resetearContador,restarContador}}>
            {children}
        </Provider>
    )

}

export default CustomProvider