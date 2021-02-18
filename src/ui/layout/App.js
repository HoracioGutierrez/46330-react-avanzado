import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {BrowserRouter} from "react-router-dom"
//import {Provider} from "react-redux"
//import store from "../../api/store"
import CustomProvider from "../componentes/CustomProvider"

const App = () => {

    return (
        <CustomProvider>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </CustomProvider>
    )
}

/* 
class App extends React.Component {

    constructor(){
        super()
        this.state = {
            x : 1
        }
    }

    cambiarEstado = () => {
        this.setState({x:2})
    }

    render(){
        return(
            <Provider value={{...this.state,cambiarEstado:this.cambiarEstado}}>
                <BrowserRouter>
                    <Header/>
                    <Main/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        )
    }

} */

export default App