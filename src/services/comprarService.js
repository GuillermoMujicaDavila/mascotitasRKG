import axios from "axios";

const URL = `http://127.0.0.1:8000/gestion/pedido`

const pedido = async (pedido) =>{
    // console.log(detalle)
    // console.log(cliente_id)
    try {
        
        // console.log( body)
        // localStorage.setItem('body',JSON.stringify(pedido))

        let {data} = await axios.post(URL,pedido)
        console.log(data)
        return data
    }catch (error){
        throw error
    }
}

export{
    pedido
}