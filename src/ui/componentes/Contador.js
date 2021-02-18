import React , {useContext} from 'react'
import contexto from "../../api/contexto"

const Contador = () => {

    const {contador,aumentarContador,resetearContador,restarContador} = useContext(contexto)

    return (
        <div>
            <p>El contador va : {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={resetearContador}>resetear</button>
            <button onClick={restarContador}>-</button>
        </div>
    )
}

export default Contador