import React, { memo, useEffect } from "react";

const Usuario = ({ usuario, borrarUsuario }) => {
  useEffect(() => {
    console.log("Render Usuario", usuario.nombre);
  });

  return (
    <li>
      {usuario.nombre}
      <button onClick={() => borrarUsuario(usuario.id)}>borrar</button>
    </li>
  );
};

export default memo(Usuario);
