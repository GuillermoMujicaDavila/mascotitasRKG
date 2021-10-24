import { useState, useEffect,useRef } from "react";
import { obtenerArticulos } from "../services/articulosService";
import { obtenerArticulos1 } from "../services/articulosService";
import GroupArticulos from "../components/GroupArticulos";

import Loading from '../components/Loading'
import Slider from '@material-ui/core/Slider'
import Narrbarkev from '../components/Narbarkev'
import Footer from '../components/Footer'


export default function PortadaViewArticulos() {
    const [articulos, setArticulos] = useState([])
    const[cargando,setCargando]=useState(true)
    const[filtroPrecio, setFiltroPrecio] = useState([1,1500])
    const [productosOriginal, setProductosOriginal] = useState([])

    const inputBusqueda = useRef()

    const getArticulos = async () => {
        try {
            const articulosObtenidos = await obtenerArticulos()
            setArticulos(articulosObtenidos)
            
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }
    const getArticulosPrecio = async () => {
        try {
            const articulosObtenidos = await obtenerArticulos1()
            setArticulos(articulosObtenidos)
            setProductosOriginal(articulosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }
    // const inputBusqueda = useRef()
    const manejarPrecio = (evento, nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }
    const ejecutarBusqueda = async () => {
        // console.log(inputBusqueda.current.value)
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerArticulos1(miBusqueda)
        setArticulos(productosFiltrados)
    }
    useEffect(() => {
        getArticulos()
    }, [])
    useEffect(() => {
        getArticulosPrecio()
    }, [])
    
    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((arti) =>  {
            return arti.content.productoPrecio >= filtroPrecio[0] && arti.content.productoPrecio <= filtroPrecio[1]
        })
        setArticulos(productosFiltrados)
        console.log(productosFiltrados)
    
    },[filtroPrecio])

    

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
            <Footer></Footer>
        </div>
    )
}
