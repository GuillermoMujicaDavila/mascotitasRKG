import { Link } from "react-router-dom";
import { Navbar,Card, Container, Nav,NavDropdown,DropdownButton,ButtonGroup,Dropdown,Button,ButtonToolbar } from "react-bootstrap";
import perrito1 from "../assets/img/perrito1.png"
import perrito2 from "../assets/img/perrito2.png"
import perrito3 from "../assets/img/perrito3.png"
import perrito4 from "../assets/img/perrito4.png"
import MembresíaKevcss from "./MembresíaKev.css"
function MembresíaKev  ()  {
    return (
      
      
      <div className="perritoskev3" style={{

      }}>
        <section style={{display:'block'}}>
        <section className="perrito1">
            <img src={perrito1} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem'  }}>
        
            <Card.Body>
              
        <section className="content" style ={{
          background: '#1f386d',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '350px',
          position: 'relative',
          transition: '0.3s',
          boxShadow: '0px 4px 8px rgb(0 0 0 / 29%)',
          padding:' 0px',
      
        }}>
            <section className="name" style={{
              fontFamily: 'Budidaya',
              fontSize: '40px',
              padding: '20px',
              marginBottom: '0px',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#fff',
            }}>
            Plan chihuahua
            </section>
            <section className="description"> 
            1.5KG DE COMIDA MENSUALES O LO EQUIVALENTE EN AYUDA Y ADOPCIÓN.
            </section>
            <section className="value">
            S/ 8.50
            </section>
            <section className="period" >
            MENSUALES

            </section >
            <section className="decorative">
            <li className="link" 
            > 
              <button to="/checkout"  >
                 <Link  to="/checkout">UNIRME A ESTE PLAN</Link>
              </button>
            </li>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>
       

       <section style={{display:'block'}}>
        <section className="perrito1">
            <img src={perrito2} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem'  }}>
        
            <Card.Body>
              
        <section className="content">
            <section className="name">
            Plan chihuahua
            </section>
            <section className="description">
            1.5KG DE COMIDA MENSUALES O LO EQUIVALENTE EN AYUDA Y ADOPCIÓN.
            </section>
            <section className="value">
            S/ 8.50
            </section>
            <section className="period" >
            MENSUALES

            </section >
            <section className="decorative">
            <li className="link"> 
              <button to="/checkout"  
            
              >
                 <Link  to="/checkout">UNIRME A ESTE PLAN</Link>
              </button>
            </li>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>


       <section style={{display:'block'}}>
        <section className="perrito1">
            <img src={perrito3} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem'  }}>
        
            <Card.Body>
              
        <section className="content">
            <section className="name">
            Plan chihuahua
            </section>
            <section className="description">
            1.5KG DE COMIDA MENSUALES O LO EQUIVALENTE EN AYUDA Y ADOPCIÓN.
            </section>
            <section className="value">
            S/ 8.50
            </section>
            <section className="period" >
            MENSUALES

            </section >
            <section className="decorative">
            <li className="link"> 
              <button to="/checkout"  
            
              >
                 <Link  to="/checkout">UNIRME A ESTE PLAN</Link>
              </button>
            </li>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>


       <section style={{display:'block'}}>
        <section className="perrito1">
            <img src={perrito4} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem'  }}>
        
            <Card.Body>
              
        <section className="content">
            <section className="name">
            Plan chihuahua
            </section>
            <section className="description">
            1.5KG DE COMIDA MENSUALES O LO EQUIVALENTE EN AYUDA Y ADOPCIÓN.
            </section>
            <section className="value">
            S/ 8.50
            </section>
            <section className="period" >
            MENSUALES

            </section >
            <section className="decorative">
            <li className="link"> 
              <button to="/checkout"  
            
              >
                 <Link  to="/checkout">UNIRME A ESTE PLAN</Link>
              </button>
            </li>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>
       </div>
       
       
    )
}
export default MembresíaKev