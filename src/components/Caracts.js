import './cards.css'
import carritologo from '../assets/img/carritologo.svg'
import eventologo from '../assets/img/eventologo.svg'
import huesologo from '../assets/img/huesologo.svg'
import patitalogo from '../assets/img/patitalogo.svg'

export default function Caracts() {
    return (
        <div className="amarillo" style={{
            backgroundColor:'rgb(255, 231, 173)',
            padding:'40px 40px',
            
        
            }}>

            <h1 className="titular"style={{
                textAlign:'center',
                marginBottom: '50px',
                fontWeight: 'bold',
                
                
                }}>Somos los mejores en : </h1>

            <div className="container-icons" style={{
                display:'flex',
                margin: '20px',
                textAlign:'center',
                
                
                
                
                
                
                
                
                
                
                

               
                
                
            }}>
                <div className="icono1">
                    <img src={patitalogo} style={{
                        width: '33%',
                        margin:'20px 0',
                        height: '40px',
                        width: '40px',
                        filter: 'invert(0.4) sepia(1) hue-rotate(20deg)',
                        
                        
                        

                    }}/>
                    <h4 style={{
                        fontWeight: 'bold',
                        color: 'orange',
                    }}>Adopciones</h4>
                    <p>Realizamos campañas de adopciones exitosas</p>
                </div>

                <div className="icono2">
                    <img src={carritologo} style={{
                        width: '33%',
                        margin:'20px 0',
                        height: '40px',
                        width: '40px',
                        filter: 'invert(0.4) sepia(1) hue-rotate(20deg)',
                        
                    }}/>
                    <h4 style={{
                        fontWeight: 'bold',
                        color: 'orange',
                    }}>Ecommerce</h4>
                    <p>Contamos con los mejores productos</p>
                </div>

                <div className="icono3">
                    <img src={huesologo} style={{
                        width: '33%',
                        margin:'20px 0',
                        height: '40px',
                        width: '40px',
                        filter: 'invert(0.4) sepia(1) hue-rotate(20deg)',
                    }}/>
                    <h4 style={{
                        fontWeight: 'bold',
                        color: 'orange',
                    }}>Sponsor</h4>
                    <p>Tenemos los mejores artículos premium
                    </p>
                </div>

                <div className="icono4">
                    <img src={eventologo} style={{
                        width: '33%',
                        margin:'20px 0',
                        height: '40px',
                        width: '40px',
                        filter: 'invert(0.4) sepia(1) hue-rotate(20deg)',
                    }}/>
                    <h4 style={{
                        fontWeight: 'bold',
                        color: 'orange',
                    }}>Eventos</h4>
                    <p>Planificamos eventos masivos para mascotas</p>
                </div>


            </div>
            

        </div>
    )
}
