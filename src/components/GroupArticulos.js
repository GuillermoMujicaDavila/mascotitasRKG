import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

export default function GroupArticulos({articulos}) {
    console.log(articulos)
    return (

       <div> 
            <h1 className="text-center text-success my-4 fw-bold">

                <i className="fas fa-shopping-basket"></i>
                    Artículos a la venta
                <i className="fas fa-shopping-basket"></i>


            </h1>

            <div className="container">
                <div className="row mt-3">
                    {articulos.map((arti, i) => (
                        <div className="col-6 col-lg-3" key={1}>
                            <div className="magic  card  text-center">
                                <div className="overflow">
                                    <img 
                                        src={arti.arti_imagen}
                                        className="card-img-top"
                                        alt={arti.arti_nombre}
                                    />
                                </div>    
                                    <div className="card-body bg-success">
                                        <h6 className="card-title text-center fw-bold">
                                            {arti.arti_nombre}
                                        </h6>
                                        <p className="card-text text-white">
                                            S/ {arti.arti_precio}
                                        </p>
                                        <Link href="#" className="btn btn btn btn-warning" to={`/detalle/${arti.arti_id}`}>
                                        Comprar
                                        </Link>
                                    </div>
                            </div> 
                        </div>    
                    ))}
                </div>
            </div>

       </div>                 

    )
}
