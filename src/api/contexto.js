import {createContext} from "react"

const contexto = createContext({x : 1})

export const {Consumer,Provider} = contexto

export default contexto