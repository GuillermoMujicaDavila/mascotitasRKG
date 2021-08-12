import React from 'react'
import cel123 from '../assets/img/cel123.png'
import horitzontal from '../assets/img/horitzontal.png'
import adopta from '../assets/img/adopta.jpg'
import iconokev1 from '../assets/img/iconokev1.png'
import iconokev2 from '../assets/img/iconokev2.png'
import iconokev3 from '../assets/img/iconokev3.png'
import { width } from 'dom-helpers'


    const App1 = _=>
    {
      
      return (
        <div>
          <h1 className="porque">
            ¿Quiénes somos y por qué elegirnos?
          </h1>
          
          
        <section className="descripcionempresa">

            <section>

            <img src={adopta} alt="porquelegirnos"style={{
                    display:'flex',
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'96%'}} ></img>


            </section>
            <section>
            <h3 style={{
                color:'rgb(17, 95, 139)'
            }}>
                Somos una asociación sin fines de lucro que busca contruir un mundo mejor para mascotas necesitadas con iniciativas sostenibles.
            </h3>
            <hr></hr>
            



            <section className="iconosadopta" style={{
                    
                    display:'flex',
                    margin:'35px',
                    
                    }}> 


                <img src={iconokev1} alt="iconokev1" style={{
                    
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'10%'}}></img>
                <img src={iconokev2} alt="iconokev2" style={{
                    
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'10%'}}></img>
                <img src={iconokev3} alt="iconokev3" style={{
                    
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'10%'}}></img>


            </section>

            <section style={{
                    
                    display:'flex',
                    justifyContent:'space-around',
                    color:'black'}}>
            <h3>Adopción<br/> Responsable</h3>
            <h3>Donaciones<br/>agua y comida</h3>
            <h3>Salud y <br/>esterelización</h3>
            </section>


            <section >
            <button className="botonkev1">DONAR</button>
            </section>





            </section>

        </section>
          
          
          <h1>
            
          </h1>
      <img src={horitzontal} alt="imgh" style={{
                    color:'slateblue',
                    display:'flex',
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'100vw'}}>

                    </img>
      
        
        </div>
        
      )
}
export default App1