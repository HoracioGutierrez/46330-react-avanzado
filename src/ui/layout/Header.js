import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <header>
            <NavLink to="/" exact>
                <h1>Mi Ecommerce</h1>
            </NavLink>
            <nav>
                <NavLink to="/productos">productos</NavLink>
                <NavLink to="/carrito">carrito</NavLink>
                <NavLink to="/cuenta">cuenta</NavLink>
            </nav>
        </header>
    )
}

export default Header
