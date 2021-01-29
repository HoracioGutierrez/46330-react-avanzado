import React from 'react'
import {connect} from "react-redux"
import {aumentarContador,resetearContador,restarContador} from "../../api/actions"
//import {bindActionCreators} from "redux"

const Contador = ({contador,aumentarContador,restarContador,resetearContador}) => {
    return (
        <div>
            <p>El contador va : {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={resetearContador}>resetear</button>
            <button onClick={restarContador}>-</button>
        </div>
    )
}

const mapStateToProps = ({contador}) => ({contador})

const mapDispatchToProps = { aumentarContador , restarContador , resetearContador }

export default connect(mapStateToProps,mapDispatchToProps)(Contador)


/*
const mapDispatchToProps = (dispatch) => ({ 
    aumentarContador : bindActionCreators(aumentarContador,dispatch), 
    restarContador : bindActionCreators(restarContador,dispatch) , 
    resetearContador : bindActionCreators(resetearContador,dispatch)
}) 
*/