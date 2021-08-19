import { useState, useEffect,useRef } from "react";
import { obtenerArticulos } from "../services/articulosService";
import GroupArticulos from "../components/GroupArticulos";
import Narvbar from '../components/Narvbar'
import Loading from '../components/Loading'
import Slider from '@material-ui/core/Slider'


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
    const ejecutarBusqueda = async () => {
        // console.log(inputBusqueda.current.value)
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerArticulos(miBusqueda)
        setArticulos(productosFiltrados)
    }
    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((arti) => {
            return arti.arti_precio >= filtroPrecio[0] && arti.arti_precio <= filtroPrecio[1]
        })
        setArticulos(productosFiltrados)
    }, [filtroPrecio])

    useEffect(() => {
        getArticulos()
    }, [])

    return (
        <div>
            <Narvbar/>
            {cargando ? 
            (<Loading/>) :
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="my-4">
                        <i className="fas fa-gifts me-3" />
                        Nuestros Productos
                    </h1>
                    <div className="row my-2">
                       <div className="col-sm-12 col-md-6">
                           <h5>Filtrar Por precio</h5>
                           <Slider
                                value={filtroPrecio}
                                onChange={manejarPrecio}
                                valueLabelDisplay="auto"
                                min={1}
                                max={1500}
                            />
                       </div>

                       <div className="col-sm-12 col-md-6">
                           <h5>Filtro por nombre</h5>
                           <div className="d-flex gap-1">
                               <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Ingrese el nombre o descripción"
                                    ref={inputBusqueda}
                               />
                               <button className="btn btn-dark" onClick={ejecutarBusqueda}>
                                    <i className="fas fa-search" />
                               </button>
                           </div>
                        </div>

                    </div>
                </div>
                <GroupArticulos articulos={articulos}/>
            </div>)}
            
        </div>
    )
}
