import { useState, useEffect  ,useRef} from "react";
import { obtenerAdopciones,obtenerAdopcionesImagen,obtenerTamanioAdopcion } from "../services/adopcionesService";
import GroupAdopciones from "../components/GroupAdopciones";
import Narbarkev from "../components/Narbarkev"
import Footer from "../components/Footer"
import Loading from '../components/Loading'

export default function PortadaViewAdopciones() {
    const [adopciones, setAdopciones] = useState([])
    const[cargando,setCargando]=useState(true)
    const [productosOriginal, setProductosOriginal] = useState([])
    const inputBusqueda = useRef()
    const getAdopciones = async () => {
        try {
            let adopcionesObtenidas = await obtenerAdopciones()
            setAdopciones(adopcionesObtenidas)
        } 
        catch (error) {
            console.log(error)            
        }
    }
    const getAdopcionesImagen = async () => {
        try {
            let adopcionesObtenidas = await obtenerAdopcionesImagen()
            setAdopciones(adopcionesObtenidas)
        } 
        catch (error) {
            console.log(error)            
        }
    }
    const getAdopcionesFiltro = async () => {
        try {
            const adopcionesObtenidas = await obtenerTamanioAdopcion()
            setAdopciones(adopcionesObtenidas)
            
            setProductosOriginal(adopcionesObtenidas)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAdopciones();
        getAdopcionesImagen()
    }, [])

    return (
        <div>
            <Narbarkev style={{marginBottom:"150px"}}></Narbarkev>
            <GroupAdopciones adopciones={adopciones} />
            <Footer></Footer>
        </div>
    )
}
