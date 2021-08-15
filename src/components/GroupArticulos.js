import { useState, useEffect } from "react"

export default function GroupArticulos({articulos}) {
    console.log(articulos)
    return (

       <div> 
           <h1 className="text-center text-success my-4 fw-bold">Artículos a la venta</h1>

            <div className="container">
                <div className="row mt-3">
                    {articulos.map((arti, i) => (
                        <div className="col-6 col-lg-3">
                            <div className="magic  card border border-secondary border border-3 text-center">
                                <div className="overflow">
                                    <img 
                                        src={arti.arti_imagen}
                                        className="card-img-top"
                                        alt={arti.arti_nombre}
                                    />
                                </div>    
                                    <div className="card-body bg-light">
                                        <h6 className="card-title text-center fw-bold">
                                            {arti.arti_nombre}
                                        </h6>
                                        <p className="card-text text-secondary">
                                            {arti.arti_precio}
                                        </p>
                                        <a href="#" className="btn btn btn-outline-success">
                                        Comprar
                                        </a>
                                    </div>
                            </div> 
                        </div>    
                    ))}
                </div>
            </div>

       </div>                 

    )
}
