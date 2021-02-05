import React , {useEffect} from 'react'
import ToDoList from '../componentes/ToDoList'
import {connect,useSelector,useDispatch} from "react-redux"

const Cuenta = () => {

    //Este hook se ejecuta siempre despues de cada render  (componentDidMount+componentDidUpdate)
    //useEffect(()=>{})
    
    const dispatch = useDispatch()
    //const tareas = useSelector(store=>store.tareas)

    //Este hook se ejecuta SOLO despues del render inicial (componentDidMount)
    //Acordate de mostrar efectos de limpieza
    useEffect(()=>{

        dispatch({type:"TAREAS_TRAER"})

        fetch("http://localhost:4000/tareas")
        .then(res=>res.json())
        .then(res=>{
            dispatch({type:"TAREAS_TRAER_SUCCESS",tareas:res})
        })

    },[])

    return (
        <div>
            <h2>Cuenta</h2>
            <ToDoList/>
        </div>
    )
}

//const mapDispatchToProps = {}

//export default connect(null,mapDispatchToProps)(Cuenta)
export default Cuenta
