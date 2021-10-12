import { useState, useEffect,useRef } from "react";
import { obtenerArticulos } from "../services/articulosService";
import GroupArticulos from "../components/GroupArticulos";

import Loading from '../components/Loading'
import Slider from '@material-ui/core/Slider'
import Narrbarkev from '../components/Narbarkev'

export default function PortadaViewArticulos() {
    const [articulos, setArticulos] = useState([])
    const[cargando,setCargando]=useState(true)
    const[filtroPrecio, setFiltroPrecio] = useState([1,1500])
    const [productosOriginal, setProductosOriginal] = useState([])


    const inputBusqueda = useRef()
    const manejarPrecio = (evento, nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }
    const getArticulos = async () => {
        try {
            const articulosObtenidas = await obtenerArticulos()
            setArticulos(articulosObtenidas)
            setProductosOriginal(articulosObtenidas)
            setCargando(false)
        } catch (error) {
            console.log(error)            
        }
    }
    
    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((arti) => {
            return arti.productoPrecio >= filtroPrecio[0] && arti.productoPrecio <= filtroPrecio[1]
        })
        setArticulos(productosFiltrados)
    },[filtroPrecio])

    useEffect(() => {
        getArticulos()
    }, [])

    return (
        <div>
            <Narrbarkev ></Narrbarkev>
            {cargando ? 
            (<Loading/>) :
            (<div className="py-4">
                <div className="container text-center">
                    
                    <div className="row my-2" style={{
                           display:'flex',
                           justifyContent:'center',
                           textAlign:'center'
                       }}>
                       <div className="col-sm-12 col-md-6" >
                           <h5>Filtrar Por precio</h5>
                           <Slider
                                value={filtroPrecio}
                                onChange={manejarPrecio}
                                valueLabelDisplay="auto"
                                min={1}
                                max={1500}
                            />
                       </div>

                       

                    </div>
                </div>
                <GroupArticulos articulos={articulos}/>
            </div>)}
            
        </div>
    )
}
