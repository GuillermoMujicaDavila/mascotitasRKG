import  axios from "axios"

const URL = `${process.env.REACT_APP_API}/articulos`

const obtenerArticulos = async() => {
    try {
        let { data } = await axios.get(URL)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}

const obtenerArticulosPorId = async(id) => {
    try {
        let { data } = await axios.get(`${URL}/${id}`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }

}

export{
    obtenerArticulosPorId,
    obtenerArticulos
}

