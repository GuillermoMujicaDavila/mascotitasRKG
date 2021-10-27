import { useState, useEffect, useRef } from "react";
import { obtenerArticulos } from "../services/articulosService";
import { obtenerArticulos1 } from "../services/articulosService";
import GroupArticulos from "../components/GroupArticulos";

import Loading from '../components/Loading'
import Slider from '@material-ui/core/Slider'
import Narrbarkev from '../components/Narbarkev'
import Footer from '../components/Footer'
// import EstrellaProducto from "../components/EstrellaProducto"
import Kev3 from '../components/KevPromo'


export default function PortadaViewArticulos() {
    const [articulos, setArticulos] = useState([])
    const [articulosOriginal, setArticulosOriginal] = useState([])
    const [cargando,setCargando]=useState(true)
    const [filtroPrecio, setFiltroPrecio] = useState([1,100])

    const inputBusqueda = useRef()

    const getArticulos = async () => {
        try {
            const articulosObtenidos = await obtenerArticulos()
            setArticulos(articulosObtenidos)
            setArticulosOriginal(articulosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }
    // const getArticulosPrecio = async () => {
    //     try {
    //         const articulosObtenidos = await obtenerArticulos1()
    //         setArticulos(articulosObtenidos)
    //         setProductosOriginal(articulosObtenidos)
    //         setCargando(false)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
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
        let productosFiltrados = articulosOriginal.filter((arti) => {
            return arti.productoPrecio >= filtroPrecio[0] && arti.productoPrecio <= filtroPrecio[1] 
        })
        setArticulos(productosFiltrados)
    }, [filtroPrecio])
    
    // useEffect(() => {
    //     getArticulosPrecio()
    // }, [])
    
    // useEffect(() => {
    //     let productosFiltrados = Object.values(articulos).filter((productosFiltrados) =>  {
    //         return articulos.content.productoPrecio >= filtroPrecio[0] && articulos.content.productoPrecio <= filtroPrecio[1]
    //     })
    //     setArticulos(productosFiltrados)
    //     // console.log(productosFiltrados)
    
    // },[filtroPrecio])

    

    return (
        <div>
            <Narrbarkev ></Narrbarkev>
            <Kev3/>
            {cargando ? 
            (<Loading/>) :
            (<div className="py-3">
                <div className="container " style={{
                    // display:'flex',
                    // maxWidth:'90vw',

                }}>
                   
                    
                       

                    
                    <div className="row my-2" style={{
                        //    display:'flex',
                        //    justifyContent:'center',
                        //    textAlign:'center',
                        //    width:'90vw'
                       }}>
                           <div style={{
                            //    display :'flex',
                            //    maxWidth:'90vw'
                               
                               
                               
                           }}>
                            <div style={{display:'block',paddingTop:'50px',pmarginRight:'50px'}} className="col-sm-6 col-md-2" >
                            <div className="col-sm-6 col-md-2" style={{width:'250px'}} >
                                <h5>Filtrar Por precio</h5>
                                <Slider
                                        value={filtroPrecio}
                                        onChange={manejarPrecio}
                                        valueLabelDisplay="auto"
                                        min={1}
                                        max={100}
                                        style={{
                                            color:'green'
                                        }}
                                    />
                            </div>


                            <div className="col-sm-12 col-md-2" style={{width:'250px'}} >
                                <h5>Filtro por nombre 😼</h5>
                                <div className="d-flex gap-1">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="Ingrese el nombre "
                                        ref={inputBusqueda}
                                    />
                                    <button className="btn " onClick={ejecutarBusqueda} style={{ border:'1px solid green', }}>
                                        <i className="fas fa-search" style={{color:'green'}}/>
                                    </button>
                                </div>
                            </div>
                            
                            <div></div>
                            </div>
                            <GroupArticulos articulos={articulos}/>
                            </div>
                            
                            </div>
                        </div>
                
            </div>)}
            <Footer></Footer>
        </div>
    )
}
