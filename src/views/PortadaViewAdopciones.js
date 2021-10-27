import { useState, useEffect  ,useRef} from "react";
import { obtenerAdopciones,obtenerAdopciones1 } from "../services/adopcionesService";
import GroupAdopciones from "../components/GroupAdopciones";
import Narbarkev from "../components/Narbarkev"
import Footer from "../components/Footer"
import Loading from '../components/Loading'

export default function PortadaViewAdopciones() {
    const [adopciones, setAdopciones] = useState([])
    const [adopciones1, setAdopciones1] = useState([])
    
    const[cargando,setCargando]=useState(true)
    const [productosOriginal, setProductosOriginal] = useState([])
    const inputBusqueda = useRef()
    const getAdopciones = async () => {
        try {
            let adopcionesObtenidas = await obtenerAdopciones()
            setAdopciones(adopcionesObtenidas)
            setCargando(false)
        } 
        catch (error) {
            console.log(error)            
        }
    }
   
    // const getAdopcionesFiltro = async () => {
    //     try {
    //         const adopcionesObtenidas1 = await obtenerTamanioAdopcion()
    //         setAdopcionesFiltro(adopcionesObtenidas1)
            
    //         setProductosOriginal(adopcionesObtenidas1)
    //         setCargando(false)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // const manejarPrecio = (evento, nuevosPrecios) => {
    //     setFiltroPrecio(nuevosPrecios)
    // }
    const ejecutarBusqueda = async () => {
        // console.log(inputBusqueda.current.value)
        let miBusqueda = inputBusqueda.current.value
        const adopcionesFiltradas1 = await obtenerAdopciones1(miBusqueda)
        setAdopciones(adopcionesFiltradas1)
    }
    useEffect(() => {
        getAdopciones()
    }, [])
     // useEffect(() => {
        
        
    //     getAdopcionesFiltro()
    // }, [])

    return (
        <div>
            <Narbarkev style={{marginBottom:"150px"}}></Narbarkev>
            {cargando ? 
            (<Loading/>) :
            (<div className="row my-2" style={{
                display:'flex',
                justifyContent:'center',
                textAlign:'center',
                width:'90vw'
            }}>
                <div>
                    <div  style={{
                                    display :'flex',
                                    maxWidth:'90vw'  
                                }}>
                        <div className="col-sm-12 col-md-2" style={{width:'250px',display:'block',paddingTop:'50px',marginRight:'50px'}} >
                                            <h5>Filtro por tamaño 😼</h5>
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
                        <GroupAdopciones adopciones={adopciones} />
                    </div>
                </div>
            </div>)}

            <Footer></Footer>
        </div>
    )
}
