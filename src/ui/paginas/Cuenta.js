import React , {useEffect} from 'react'
import ToDoList from '../componentes/ToDoList'
import {connect,useSelector,useDispatch} from "react-redux"

const Cuenta = () => {

    //Este hook se ejecuta siempre despues de cada render  (componentDidMount+componentDidUpdate)
    //useEffect(()=>{})
    
    const dispatch = useDispatch()
    //const tareas = useSelector(store=>store.tareas)

    //Este hook se ejecuta SOLO despues del render inicial (componentDidMount)
    useEffect(()=>{

        /* const intervalo = setInterval(() => {
            console.log("Nuevo pedido")
        }, 1000); */

        dispatch({type:"TAREAS_TRAER"})

        fetch("http://localhost:4000/tareas")
        .then(res=>res.json())
        .then(res=>{
            dispatch({type:"TAREAS_TRAER_SUCCESS",tareas:res})
        })

        //Simil componentWillUnmount
        /* return ()=>{
            console.log("Unmount")
            clearInterval(intervalo)
        } */

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

/* 
class Cuenta {

    constructor(){
        super()
        this.state = {
            intervalor : false
        }
    }
    
    componentDidMount(){
        
    }

    componentWillUnmount(){

    }

} 

*/