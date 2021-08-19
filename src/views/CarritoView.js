import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import Narvbar from '../components/Narvbar'
import { ThumbDownAlt } from "@material-ui/icons"


export default function CarritoView() {

    const { carrito } = useContext(CarritoContext)

    return (
        <div className="container">
            <Narvbar></Narvbar>
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                <i class="fas fa-paw" style={{
                    marginRight:'10px'
                }}></i>
                    Carrito de productos
                </h1>
            </div>

            <table className="table">
                <thead>    
                <tr style={{
                   
                }}>
                        <th>Imagen referente</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th style={{
                            paddingRight:'20px',
                            paddingLeft:'30px'
                        }}>P.Unitario</th>
                        <th style={{
                            paddingRight:'20px',
                            paddingLeft:'30px'
                        }}>P.U.Final</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {carrito.map((arti, i) => (
                        <tr key={i} style={{
                            
                        }}>
                             <td style={{
                                 padding:'0.5rem 1.5rem'
                             }}><img src={arti.arti_imagen} style={{
                                 width:'50%',
                                 
                                 
                             }}></img></td>
                             
                            <td style={{
                                    padding: '3.5rem 2.5rem',
                            }}>{arti.arti_nombre}</td>
                            <td style={{
                                    padding: '3.5rem 2.5rem',
                            }}>{arti.arti_stock / 10}</td>
                            <td style={{
                                padding: '3.5rem 2.5rem',
                               
                            }}>{arti.arti_oferta ? "10%" : "Sin Oferta"}</td>
                            <td style={{
                                padding: '3.5rem 2.5rem',
                                
                            }} >  S/{arti.arti_precio}</td>
                            <td style={{
                                padding: '3.5rem 2.5rem',
                            }}>S/{((arti.arti_oferta ? 
                                     arti.arti_stock * arti.arti_precio * 0.9 : 
                                    arti.arti_stock * arti.arti_precio)*100)*0.001}</td>
                        </tr>
                        // ------------------------------------------------
                        // S/{((arti.arti_oferta ? 
                        //     arti.cantidad * arti.arti_precio * 0.9 : 
                        //     arti.cantidad * arti.arti_precio)*100)*0.01}
                    ))}
                </tbody>
            </table>
        </div>
    )
}
