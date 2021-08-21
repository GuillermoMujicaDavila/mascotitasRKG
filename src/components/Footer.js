import { color } from '@material-ui/system';
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import {ImFacebook,ImInstagram,ImTwitter } from "react-icons/im";
import icon_footer from "../assets/img/iconos/perro/undraw_good_doggy_4wfq.png";

export default function Footer() {
    return (
        <div style={{  zIndex:-1  }}>
        <div className = "main-footer" style={{
                backgroundColor:"black",
                //position:'fixed',
                minWidth:'100%',
                minHeight:'100%',  
                //top:'0%',
                //left:'0%'
                zIndex:-1,
                color:'white'  
            }}>
                {/* Columna 1 */}
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Personas que desarrollaron la página web</h4>
                        <ul className="list-unstyled">
                            <li> <a href="https://github.com/kevinmore26" style={{color:"white",textDecoration:"none"}}>Kevin More</a></li>
                            <li><a href="https://github.com/zen-rox93" style={{color:"white",textDecoration:"none"}}>Renzo Estrada</a></li>
                            <li><a href="https://github.com/GuillermoMujicaDavila" style={{color:"white",textDecoration:"none"}}>Guillermo Mujica</a></li>
                            <li></li>
                        </ul>
                    </div>
                    {/* Columna 2 */}
                    <div className="col-md-3 col-sm-6">
                 
                    
                      </div>
                    {/* Columna 3 */}
                    <div className="col-md-3 col-sm-6">
                    
                     </div>
                         <div className="col-md-3 col-sm-6" >
                         <button style={{
                           
                             width:"50px",height:"50px",borderRadius:"50%"}}  >
                           <a href='https://www.facebook.com/asociacionpatitas/' > <ImFacebook/></a>
                            </button>
                            <button  style={{
                               
                                width:"50px",height:"50px",borderRadius:"50%"}} >
                               <a href='https://www.instagram.com/adoptamiu/' > <ImInstagram/> </a>
                             </button>
                             <button  style={{
                               
                                 width:"50px",height:"50px",borderRadius:"50%"}} >
                                <a href='https://twitter.com/adopcionmascota?lang=es'  > <ImTwitter/></a>
                         
                        </button>

                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} City Guide App- All Rights Reserved
                </p>

            </div>
        
        </div>
    </div>
)
}
