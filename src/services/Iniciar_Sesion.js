import axios from "axios";
// import { AuthReactContext } from "../context/reactAuthContext";
// import { useContext } from "react";
// import { useCallback } from "react";

// const URL = `${process.env.REACT_LOCAL_HOST}/login`
const URL = "http://127.0.0.1:8000/gestion/login"

// const {token, setAuthToken} = useContext(AuthReactContext)

const login = async (usuario) =>{   
    
    try {
        const headers ={
            "Content-Type": "application/json"
        }

        let {data} = await axios.post(URL, usuario, {headers})
        // setAuthToken(data.content.access)
        // console.log(token)

        // "data.content.access" sirve para separar el token que esta.
        // console.log(data.content.access)
        return data
        
    }catch (error){
        console.log(error)
        throw error
    }
}

export{
    login
}
