import  axios from "axios"

const URL = `${process.env.REACT_APP_API}/adopciones`

const obtenerAdopciones = async() => {
    try {
        let { data } = await axios.get(URL)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}

const obtenerAdopcionesPorId = async(id) => {
    try {
        let { data } = await axios.get(`${URL}/${id}`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }

}

export{
    obtenerAdopcionesPorId,
    obtenerAdopciones
}

