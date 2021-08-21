import { useState, useEffect } from "react";
import { obtenerAdopciones } from "../services/adopcionesService";
import GroupAdopciones from "../components/GroupAdopciones";
import Narbarkev from "../components/Narbarkev"
import Footer from "../components/Footer"

export default function PortadaViewAdopciones() {
    const [adopciones, setAdopciones] = useState([])

    const getAdopciones = async () => {
        try {
            let adopcionesObtenidas = await obtenerAdopciones()
            setAdopciones(adopcionesObtenidas)
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(() => {
        getAdopciones()
    }, [])

    return (
        <div>
            <Narbarkev></Narbarkev>
            <GroupAdopciones adopciones={adopciones} />
            <Footer></Footer>
        </div>
    )
}
