import { useState, useEffect } from "react";
import { obtenerArticulos } from "../services/articulosService";
import GroupArticulos from "../components/GroupArticulos";
import Narvbar from "../components/Narvbar";
import Footer from "../components/Footer";

export default function PortadaViewArticulos() {
    const [articulos, setArticulos] = useState([])

    const getArticulos = async () => {
        try {
            let articulosObtenidas = await obtenerArticulos()
            setArticulos(articulosObtenidas)
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(() => {
        getArticulos()
    }, [])

    return (
        <div>
            <Narvbar/>
            <GroupArticulos articulos={articulos} />
            <Footer/>
        </div>
    )
}
