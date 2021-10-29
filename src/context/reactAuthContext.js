import React from "react" ;

import { useState, useEffect, createContext } from "react";

import Loading from "../components/Loading";

import { perfil_cliente } from "../services/perfilCliente";

export const AuthReactContext = createContext()

export function AuthReactProvider ({children}) {
    const [token, setAuthToken]  = useState(null)
    const [user, setUser] = useState(
        {
            user_id: -1,
            clienteCorreo: "",
            clienteNombre: "",
            clienteApellido: "",
            clienteTipo: 0
        }
    );
    
    const salir = async () =>{
        setAuthToken(null)
        setUser(
            {
                user_id: -1,
                clienteCorreo: "",
                clienteNombre: "",
                clienteApellido: "",
                clienteTipo: 0
            }
        )

    }


    const data = {token, setAuthToken,user, setUser}
    return <AuthReactContext.Provider value = {data}> {children}</AuthReactContext.Provider>
};

// export{AuthReactProvider};