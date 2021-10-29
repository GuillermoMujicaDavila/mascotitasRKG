import { useContext } from "react"
import {AuthReactContext} from "../context/reactAuthContext"
import { useCallback } from "react"


export function useUser(){
    const[token,setToken] = useContext(AuthReactContext)
    
    const iniciar_sesion = useCallback(() =>{
        setToken("Prueba")
    },[setToken])
    return{
        isLogeado : Boolean(token),
        iniciar_sesion
    }

    const logout = useCallback (()=>{
        setToken(null)
    }, [setToken])
    
}