import React from 'react'
import ReactDOM from 'react-dom'
import App from "./ui/layout/App"

/* 
const App = function(){
    return(
        <div>
            <p>Parrafo 1</p>
            <p>Parrafo 2</p>
        </div>
    )
}
 */


/* const App = function(){
    return(
        <>
            <p>Parrafo 1</p>
            <p>Parrafo 2</p>
        </>
    )
}
 */

/* const usuarios = [
    {id:1,nombre:"Horacio"},
    {id:2,nombre:"Juan"},
    {id:3,nombre:"Ana"}
]

 
const App = function(){
    return(
        <>
        {usuarios.map(usuario=>{
            return ( <p key={usuario.id}>{usuario}</p> )
        })}
        </>
    )
}
 */

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)