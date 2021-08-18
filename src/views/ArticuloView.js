
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { obtenerArticulosPorId } from '../services/articulosService'  
import Loading from '../components/Loading'

export default function ArticuloView() {
    const [articulo, setArticulo] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    const getArticulo = async () => {
        try {
            let articuloObtenido = await obtenerArticulosPorId(id)
            setArticulo(articuloObtenido)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getArticulo()
    }, [])

    return (
        <div>
            {cargando ? 
            (<Loading />) : 
            (<div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                           <img
                                className="img-fluid"
                                src={articulo.arti_imagen}
                                alt={articulo.arti_nombre}
                            />
                        </div> 
                        <div className="col-sm-12 col-md-6">
                            <h3 className="fw-bold">{articulo.arti_nombre}</h3>
                            
                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold" style={{

                                    color: 'green',
                                    fontSize: '20px'
                                    
                                }}>
                                    Precio: S/ {articulo.arti_precio}
                                </span>
                            </div>
                            <h5 className="fw-bold" style={{
                               

                            }}>Descripción</h5>
                            <p style={{

                                textAlign: 'justify',
                                textJustify: 'inter-word',
                                

                            }}>{articulo.arti_descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
