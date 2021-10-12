import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

export default function GroupProducts({producto}) {
    console.log(producto)
    return (
        <div className="container">
            <div className="row mt-3">
                {producto.content.map((prod, i) => (
                    <div className="col-6 col-lg-3" key={i}>
                        <Link className="card mb-4" to={`/producto/${prod.productoId}`}>
                            <img 
                                src={prod.productoFoto} 
                                className="card-img-top"
                                alt={prod.productoNombre}
                            />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {prod.productoNombre}
                                </h6>
                                <span className="fw-bold">
                                    S/ {prod.productoPrecio}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
