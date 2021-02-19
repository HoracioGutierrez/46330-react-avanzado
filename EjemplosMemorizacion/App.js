import React, { useState, useEffect, useMemo, useCallback } from "react";
import ListaUsuarios from "./ListaUsuarios";

const usuariosIniciales = [
  { id: 1, nombre: "Horacio" },
  { id: 2, nombre: "Carlos" }
];

const App = () => {
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [valor, setValor] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    console.log("Render App");
  });

  const handleChange = e => {
    const valor = e.target.value;
    setValor(valor);
  };

  const handleClick = () => {
    const usuarioNuevo = {
      id: Math.random(),
      nombre: valor
    };
    setUsuarios([...usuarios, usuarioNuevo]);
  };

  const handleSearch = () => {
    setBusqueda(valor);
  };

  //useCallback(loquememorizo,[dependencias])
  const borrarUsuario = useCallback(
    id => {
      //console.log("Borrar",id)
      setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    },
    [usuarios]
  );

  //Propiedad Computada
  //useMemo(()=>loquememorizo,[dependencias])

  const usuariosFiltrados = useMemo(
    () =>
      usuarios.filter(usuario => {
        return usuario.nombre.includes(busqueda);
      }),
    [busqueda, usuarios]
  );

  return (
    <div>
      <input
        placeholder="Nombre de usuario"
        value={valor}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>buscar</button>
      <button onClick={handleClick}>agregar</button>
      <ListaUsuarios
        usuarios={usuariosFiltrados}
        borrarUsuario={borrarUsuario}
      />
    </div>
  );
};

export default App;
