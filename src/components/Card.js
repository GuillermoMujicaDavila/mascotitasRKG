import './cards.css'

//agregar mas adelante un Pros de URL
export default function Card({title, imageSource, descripcion}) {
        
    return (
         
            <div className="magic card border border-secondary border border-3 text-center">
                <div className="overflow">
                    <img src={imageSource} alt="" className="card-img-top"/>
                </div>

                <div className="card-body bg-light">
                    <h4 className="card-title text-center fw-bold">{title}</h4>
                    <p className="card-text text-secondary">{descripcion}</p>
                    <a href="#" className="btn btn btn-outline-success">
                        ¿Quieres adoptar?
                    </a>
                    
    <h1>hola</h1>
                </div>           
            </div>

    
    )
}
