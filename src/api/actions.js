export const aumentarContador = () => ({type : "CONTADOR_AUMENTAR"})

export const restarContador = () => ({type : "CONTADOR_RESTAR"})

export const resetearContador = () => ({type : "CONTADOR_RESETEAR"})


/* 
export const crearTarea = tarea => dispatch => {

}
*/

export const crearTarea = tarea => {
    return (dispatch)=>{
        dispatch({type:"TAREA_ENVIANDO"})
        fetch("http://localhost:4000/tareas",{
            method : "POST",
            headers : {"content-type":"application/json"} ,
            body : JSON.stringify({tarea})
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            dispatch({type:"TAREA_SUCESS",res})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:"TAREA_ERROR"})
        })
    }
}

export const guardarValor = valor => ({type:"INPUT_CHANGE",valor})

export const borrarTarea = id => ({type : "TAREA_BORRAR",id})

/* 
export const crearProducto = () => {}

export const obtenerProductos = () => {}

export const borrarProducto = () => {}

export const editarProducto = () => {} 
*/