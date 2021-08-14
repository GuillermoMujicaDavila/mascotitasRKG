import { useState, useEffect } from "react"
import {useContext} from 'react';
import Rating from "./Rating"
import CartContext from "../context/cart/CartContext"
export default function GroupArticulos({articulos}) {
    console.log(articulos)
    const{addToCart}= useContext (CartContext)
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
                                        <section>
                                            <Rating value={arti.arti_precio} 
                                            
                                            // text={`${arti.arti_reviews} reviews`}
                                             ></Rating>
                                        </section>
                                        {/* <a href="#" className="btn btn btn-outline-success">
                                        Comprar
                                        </a> */}
                                        <button className="btn btn btn-outline-success" onClick={()=> addToCart()}>COMPRAR</button>
                                    </div>
                            </div> 
                        </div>    
                    ))}
                </div>
            </div>

       </div>                 

    )
}
