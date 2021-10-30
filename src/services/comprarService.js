import axios from "axios";

const URL = `http://127.0.0.1:8000/gestion/pedido`

const pedido = async (cliente_id,detalle) =>{
    try {
        const body = {
            "cliente_id": `${cliente_id}`,
            "vendedor_id": 1,
            "detalle": `${detalle}`
        }
        let {data} = await axios.post(URL,body)
        return data
    }catch (error){
        throw error
    }
}

export{
    pedido
}


