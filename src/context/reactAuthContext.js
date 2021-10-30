import React from "react" ;

import { useState, useEffect, createContext } from "react";

import Loading from "../components/Loading";

import { perfil_cliente } from "../services/perfilCliente";

import {login} from "../services/Iniciar_Sesion"

export const AuthReactContext = createContext()

export function AuthReactProvider ({children}) {
    const [token, setAuthToken]  = useState(null)
    const [authPending, setAuthPending] = useState(false)
    const [user, setUser] = useState(null);
    const Login = async (data) =>{      
        const rpta = await login(data)
        setAuthToken(rpta.content.access)
        console.log(token)
    } 


    const Out = async () =>{
        setAuthToken(null)
        setUser(null)
    }
    useEffect(async ()=>
    {      
        const rpta2 = await perfil_cliente(token)
        setAuthPending(false)
        console.log(rpta2)
        setUser(rpta2.content)
        
    }
    ,[token])

    if (authPending){
        return <Loading/>
    }



    const data = {Out,Login, token, setAuthToken,user, setUser}
    return <AuthReactContext.Provider value = {data}> {children}</AuthReactContext.Provider>
};