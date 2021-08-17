import { color } from '@material-ui/system';
import React from 'react'
import { AiFillFacebook, AiFillInstagram,  } from "react-icons/ai";

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
                        {/* <h4>lorem</h4>
                        <ul className="list-unstyled">
                            <li>dos1</li>
                            <li>dos2</li>
                            <li>dos3</li>
                            <li>dos4</li>
                        </ul> */}
                    </div>
                    {/* Columna 3 */}
                    <div className="col-md-3 col-sm-6">
                        {/* <h4>lorem</h4>
                        <ul className="list-unstyled">
                            <li>dos1</li>
                            <li>dos2</li>
                            <li>dos3</li>
                            <li>dos4</li>
                        </ul> */}
                    </div>
                        {/* Columna 4 */}
                         <div className="col-md-3 col-sm-6">
                        {/* <h4>lorem</h4>
                        <ul className="list-unstyled">
                            <li>dos1</li>
                            <li>dos2</li>
                            <li>dos3</li>
                            <li>dos4</li>
                        </ul> */}
                        <button>
                            <img></img>
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
