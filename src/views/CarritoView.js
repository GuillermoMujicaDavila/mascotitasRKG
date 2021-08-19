import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import Narvbar from '../components/Narvbar'

export default function CarritoView() {

    const { carrito } = useContext(CarritoContext)

    return (
        <div className="container">
            <Narvbar></Narvbar>
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-cart me-3"/>
                    Carrito de Compras
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((arti, i) => (
                        <tr key={i}>
                            <td>{arti.arti_nombre}</td>
                            <td>{arti.arti_stock / 10}</td>
                            <td>{arti.arti_oferta ? "10%" : "Sin Oferta"}</td>
                            <td>S/ {arti.arti_precio}</td>
                            <td>S/ {arti.arti_oferta ? 
                            arti.cantidad * arti.arti_precio * 0.9 : 
                            arti.cantidad * arti.arti_precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
