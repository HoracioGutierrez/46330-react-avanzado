import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "../../api/store"

class App extends React.Component {

    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Main/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        )
    }

}

export default App