import { useState, useEffect } from "react"

export default function GroupAdopciones({adopciones}) {
    console.log(adopciones)
    return (

       <div> 
           <h1 className="text-center text-success my-4 fw-bold">En adopción</h1>

            <div className="container">
                <div className="row mt-3">
                    {adopciones.map((adop, i) => (
                        <div className="col-6 col-lg-3">
                            <div className="magic  card border border-secondary border border-3 text-center">
                                <div className="overflow">
                                    <img 
                                        src={adop.adop_imagen}
                                        className="card-img-top"
                                        alt={adop.adop_nombre}
                                    />
                                </div>    
                                    <div className="card-body bg-light">
                                        <h6 className="card-title text-center fw-bold">
                                            {adop.adop_nombre}
                                        </h6>
                                        <p className="card-text text-secondary">
                                            {adop.adop_descripcion}
                                        </p>
                                        <a href="#" className="btn btn btn-outline-success">
                                        ¿Quieres adoptar?
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
