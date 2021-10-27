import  axios from "axios"

const URL = `${process.env.REACT_APP_API}/gestion`

const obtenerAdopciones = async() => {
    try {
        let { data } = await axios.get(`${URL}/adopciones/`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}
const obtenerTamanioAdopcion = async(busqueda = "") => {
    try {
        let { data } = await axios.get(`${URL}/adopcion-filtro?tamanio=${busqueda}`)
        return data //ya tenemos los datos
    } catch (error) {
        throw error
    }
}
const obtenerAdopcionesImagen = async(adopcionImagen) => {
    try {
        let { data } = await axios.get(`${URL}/adopciones/${adopcionImagen}`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}

const obtenerAdopcionesPorId = async(id) => {
    try {
        let { data } = await axios.get(`${URL}/adopciones/${id}`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }

}

export{
    obtenerAdopcionesPorId,
    obtenerAdopcionesImagen,
    obtenerAdopciones,
    obtenerTamanioAdopcion
}

