import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import Narvbar from '../components/Narvbar'
import { ThumbDownAlt } from "@material-ui/icons"
import Swal from "sweetalert2"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router'
import nyancat from '../assets/img/nyan-cat.gif'
import Navbarkev from '../components/Narbarkev'

export default function CarritoView() {

    const { carrito } = useContext(CarritoContext)
    const history = useHistory()
    const anadirACarritoContext = async() => {
        // anadirACarrito(articulo)
        const resultado = await Swal.fire({
            icon:'success',
            title: 'Queda un último paso!',
            width: 600,
            padding: '3em',
            showConfirmButton:true,
            showDenyButton:true,
            denyButtonText:'Cancelar',
            confirmButtonText:'Sigamos!',
            background: '#ffff',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left center
              no-repeat
            `,
          })
        if(resultado.isConfirmed){
            history.push('/checkout')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
    }
    return (
        <div className="container">
            <Navbarkev></Navbarkev>
            <section style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
            <div className="my-4 text-left">
                <h1 className="fw-bold" style={{
                   color:'rgb(54 146 74)',
                   marginBottom:'40px'
                }}>
                <i class="fas fa-paw" style={{
                    marginRight:'10px',
                    color:'rgb(54 146 74)'
                }}></i>
                    Carrito de productos
                </h1>
            </div>
            <div style={{
                marginTop:'25px'
            }}>
            <button className="btn btn-dark btn-lg" onClick={anadirACarritoContext} style={{
                display:'flex',
                justifyContent:'right',
                alignItems:'center',
                background: 'linear-gradient(to top, rgb(54 146 74), rgb(129 218 100))',
                border: 'none',
            }}>
                            {/* <i className="fas fa-shopping-cart me-2"/> */}
                     <Link  style={{
                         textDecoration:'none',
                         color:'white',
                         
                     }}><i class="fas fa-cat" style={{
                         paddingRight:'10px',
                    
                     }}></i>Procesar compra</Link>
                            </button>
            </div>
            </section>
            <table className="table">
                <thead>    
                <tr style={{
                   color:'rgb(54 146 74)'
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
                                 width:'63%',
                                 
                                 
                             }}></img></td>
                             
                            <td style={{
                                    padding: '3.5rem 2.5rem',
                            }}>{arti.arti_nombre}</td>
                            <td style={{
                                    padding: '3.5rem 2.5rem',
                            }}>{arti.cantidad}</td>
                            <td style={{
                                padding: '3.5rem 2.5rem',
                               
                            }}>{arti.arti_oferta ? "20%" : "Sin Oferta"}</td>
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
