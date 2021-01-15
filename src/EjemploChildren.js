import React from "react";
import "./style.css";

const Seccion = props => {
  return (
    <section>
      <h2>{props.titulo}</h2>
      {props.children}
    </section>
  );
};

const Carrito = () => {
  return (
    <Seccion titulo="Carrito">
      <button>click</button>
    </Seccion>
  );
};

const Productos = () => {
  return (
    <Seccion titulo="Productos">
      <p>lorem ipsum</p>
    </Seccion>
  );
};

const App = () => {
  return (
    <>
      <Productos />

      <Carrito />
    </>
  );
};

export default App;

/* const MiComponente = (props) => {

  const nombre = props.nombre
  const children = props.children

  return(
    <>
    <p>mi componente {nombre}</p>
    {children}
    </>
  )
}


export default function App() {
  return (
    <div>
      <MiComponente nombre="Horacio">
        <div>Soy un prop</div>
      </MiComponente>
    </div>
  );
}
 */
