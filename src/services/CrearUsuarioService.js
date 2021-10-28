import axios from "axios";

const URL = `http://127.0.0.1:8000/gestion/cliente`

const crearUsuarios = async () =>{
    try {
        let {data} = await axios.post(URL,)
        return data
    }catch (error){
        throw error
    }
}

export{
    crearUsuarios
}


