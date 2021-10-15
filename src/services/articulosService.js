import  axios from "axios"

const URL = `${process.env.REACT_APP_API}/gestion`

const obtenerArticulos = async() => {
    try {
        let { data } = await axios.get(`${URL}/productos`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}

const obtenerArticulosPorId = async(id) => {
    try {
        let { data } = await axios.get(`${URL}/producto/${id}`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }

}

export{
    obtenerArticulosPorId,
    obtenerArticulos
}

