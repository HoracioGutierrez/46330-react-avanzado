import React from 'react'
import {connect} from "react-redux"
import {crearTarea,guardarValor} from "../../api/actions"

const ToDoList = ({valor,tareas,crearTarea,guardarValor}) => {

    const manejarChange = (e) => {
        //e = {...}
        //e.target = input
        //e.target.value = el valor del input
        guardarValor(e.target.value)
    }

    return (
        <div>
            <input onChange={manejarChange} type="text" value={valor}/>
            <button onClick={crearTarea}>Agregar Tarea</button>
            <ul></ul>
        </div>
    )
}

const mapStateToProps = ({valor,tareas}) => ({valor,tareas})

const mapDispatchToProps = {crearTarea,guardarValor}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)
