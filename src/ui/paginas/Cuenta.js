import React , {useEffect} from 'react'
import ToDoList from '../componentes/ToDoList'

const Cuenta = () => {

    

    useEffect(()=>{


        fetch("http://localhost:4000/tareas")
        .then(res=>res.json())
        .then(res=>{
            //dispatch({type:"TAREAS_TRAER_SUCCESS",tareas:res})
        })


    },[])

    return (
        <div>
            <h2>Cuenta</h2>
            <ToDoList/>
        </div>
    )
}

export default Cuenta
