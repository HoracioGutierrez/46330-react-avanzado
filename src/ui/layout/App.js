import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {BrowserRouter} from "react-router-dom"
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

export default App