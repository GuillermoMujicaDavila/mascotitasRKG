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
                    {articulos.content.map((arti, i) => (
                        <div className="col-6 col-lg-3" key={1}>
                            <div className="magic  card  text-center">
                                <div className="overflow">
                                    <img 
                                        src={arti.productoFoto}
                                        className="card-img-top"
                                        alt={arti.productoNombre}
                                    />
                                </div>    
                                    <div className="card-body bg-success">
                                        <h6 className="card-title text-center fw-bold">
                                            {arti.productoNombre}
                                        </h6>
                                        <p className="card-text text-white">
                                            S/ {arti.productoPrecio}
                                        </p>
                                        <Link href="#" className="btn btn btn btn-warning" to={`/producto/${arti.productoId}`}>
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
