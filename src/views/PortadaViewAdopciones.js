import { useState, useEffect } from "react";
import { obtenerAdopciones } from "../services/adopcionesService";
import GroupAdopciones from "../components/GroupAdopciones";

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
            <GroupAdopciones adopciones={adopciones} />
        </div>
    )
}
