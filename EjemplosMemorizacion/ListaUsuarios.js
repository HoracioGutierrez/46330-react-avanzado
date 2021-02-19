import React, {memo,useEffect} from "react"
import Usuario from "./Usuario"

const ListaUsuarios = ({usuarios,borrarUsuario}) => {
  
  useEffect(()=>{
    console.log("Render Lista")
  })

  return(
    <ul>
      {usuarios.map(usuario=><Usuario key={usuario.id} usuario={usuario} borrarUsuario={borrarUsuario}/>)}
    </ul>
  )
}

export default memo(ListaUsuarios)