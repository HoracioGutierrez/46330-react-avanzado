import React , {useContext} from 'react'
import {NavLink} from "react-router-dom"
import contexto from "../../api/contexto"

const Header = () => {

    const {links} = useContext(contexto)

    return (
        <header>
            <NavLink to="/" exact>
                <h1>Mi Ecommerce</h1>
            </NavLink>
            <nav>
                {links.map( link => <NavLink key={link} to={`/${link}`}>{link}</NavLink> )}
            </nav>
        </header>
    )
}

export default Header