import { useState, useEffect } from "react";
import { obtenerAdopciones,obtenerAdopcionesImagen } from "../services/adopcionesService";
import GroupAdopciones from "../components/GroupAdopciones";
import Narbarkev from "../components/Narbarkev"
import Footer from "../components/Footer"

export default function PortadaViewAdopciones() {
    const [adopciones, setAdopciones] = useState([])

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
