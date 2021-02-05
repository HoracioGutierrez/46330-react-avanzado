import React from 'react'
import {connect} from "react-redux"
import {crearTarea,guardarValor,borrarTarea} from "../../api/actions"

const ToDoList = ({valor,tareas,enviando,crearTarea,guardarValor,borrarTarea}) => {

    const manejarChange = (e) => {
        guardarValor(e.target.value)
    }

    return (
        <div>
            {enviando ? <p>Creando tarea....</p> : null}
            <input onChange={manejarChange} type="text" value={valor}/>
            <button onClick={()=>crearTarea(valor)}>Agregar Tarea</button>
            <ul>
                {tareas.map(tarea=> (
                    <li key={tarea.id}>
                        {tarea.tarea}
                        <button onClick={()=>borrarTarea(tarea.id)}>borrar</button>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

const mapStateToProps = ({valor,tareas,enviando}) => ({valor,tareas,enviando})

const mapDispatchToProps = {crearTarea,guardarValor,borrarTarea}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)
