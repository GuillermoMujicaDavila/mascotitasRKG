import React from 'react'
import PortadaView from './PortadaView'
import { Button,Form, FormGroup, Label, Input,ButtonGroup,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.jpeg"
import VideoBackground from '../components/VideoBackground';


export default function IniciarSecionView() {
    return (
        <div> 
         <VideoBackground/>
        <div>
            <ButtonGroup
            style={{display:'flex', 
            justifyContent:'center'}}
            >
                <Button href='/' variant="link">
                    <Image src={Logo} fluid />
                </Button>
            </ButtonGroup>           
        </div>

        <Form className = "login-form">
            <h1  className="text-center">
                <span className="font-weight-bold">Bienvenidos </span>
            </h1>
        <FormGroup className="text-center">
            <label>Email</label>
            <br/>
            <input type="email" placeholder="Email"/>
        </FormGroup>        
        <FormGroup className="text-center">
            <label>Password</label>
            <br/>
            <input type="password" placeholder="password"/>
        </FormGroup>
        <FormGroup  className="text-center">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
             <label class="form-check-label" for="flexCheckDefault">
                Recordar Cuenta
            </label>
            <Link></Link>
        </FormGroup >
            <Button className="btn-lg btn-dark btn-block "
             style={{display:'flex', 
            justifyContent:'center'}}>Log in</Button>        
       </Form>
    </div>

        
     )
}
