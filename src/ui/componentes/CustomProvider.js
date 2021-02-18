import React , {useState} from "react"
import {Provider} from "../../api/contexto"

const CustomProvider = ({children}) => {

    const [links] = useState(["productos","carrito","cuenta"])
    const [contador,setContador] = useState(0)
    const [productos,setProductos] = useState([])

    const aumentarContador = () => {
        setContador(contador+1)
    }

    const resetearContador = () => {
        setContador(0)
    }

    const restarContador = () => {
        setContador(contador-1)
    }


    return(
        <Provider value={{links,contador,aumentarContador,resetearContador,restarContador}}>
            {children}
        </Provider>
    )

}

export default CustomProvider