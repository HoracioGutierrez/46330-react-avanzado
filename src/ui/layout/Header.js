import React from 'react'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"


/* class Header extends React.Component {
    render(){
        console.log(this)
        const {links} = this.props
        return(
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
}
 */


const Header = ({links}) => {
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


const mapStateToProps = ({links}) => ({ links })

export default connect(mapStateToProps)(Header)