import axios from "axios";

const URL = `http://127.0.0.1:8000/gestion/registro`

const Registro = async (cliente) =>{
    try {
        let {data} = await axios.post(URL,cliente)
        return data
    }catch (error){
        throw error
    }
}

export{
    Registro
}


