export const aumentarContador = () => ({type : "CONTADOR_AUMENTAR"})

export const restarContador = () => ({type : "CONTADOR_RESTAR"})

export const resetearContador = () => ({type : "CONTADOR_RESETEAR"})


/* 
export const crearTarea = tarea => dispatch => {

}
*/


export const crearTarea = tarea => {
    return async dispatch => {

        dispatch({type:"TAREA_ENVIANDO"})
        
        const pedido = await fetch("http://localhost:4000/tareas",{
            method : "POST",
            headers : {"content-type":"application/json"} ,
            body : JSON.stringify({tarea})
        })

        if(pedido.status === 201){
            const tarea = await pedido.json()
            dispatch({type:"TAREA_SUCESS",tarea})
        }else{
            dispatch({type:"TAREA_ERROR"})
        }

    }
}

/* export const crearTarea = tarea => {
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
} */

export const guardarValor = valor => ({type:"INPUT_CHANGE",valor})


export const borrarTarea = id => async dispatch => {
    
    dispatch({type:"TAREA_BORRANDO"})

    const pedido = await fetch(`http://localhost:4000/tareas/${id}`,{method : "DELETE"})

    if(pedido.status == 200){
        dispatch({type:"TAREA_BORRANDO_SUCCESS"})
    }else{
        dispatch({type:"TAREA_BORRANDO_ERROR"})
    }

}

export const pedirTareas = () => {}



/* export const borrarTarea = id => dispatch => {
    
    dispatch({type:"TAREA_BORRANDO"})

    fetch(`http://localhost:4000/tareas/${id}`,{method : "DELETE"})
    .then(res=>{
        dispatch({type:"TAREA_BORRANDO_SUCCESS"})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:"TAREA_BORRANDO_ERROR"})
    })

}
 */


/* export const borrarTarea = id => {
    return (dispatch)=>{

    }
    //{type : "TAREA_BORRAR",id}
}
 */
/* 
export const crearProducto = () => {}

export const obtenerProductos = () => {}

export const borrarProducto = () => {}

export const editarProducto = () => {} 
*/