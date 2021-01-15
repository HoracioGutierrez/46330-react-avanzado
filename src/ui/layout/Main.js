import React from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Carrito from "../paginas/Carrito"
import Cuenta from "../paginas/Cuenta"
import Productos from "../paginas/Productos"

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/carrito">
                    <Carrito/>
                </Route>

                <Route path="/cuenta">
                    <Cuenta/>
                </Route>

                <Route path="/productos">
                    <Productos/>
                </Route>
            </Switch>
        </main>
    )
}

export default Main
