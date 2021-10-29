import { useScrollTrigger } from '@material-ui/core'
import React from 'react'
import { Row,Col, Button,Form, FormGroup, Label, Input,ButtonGroup,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgLogin from "../assets/login_2.jpg"
import Logo from "../assets/Logo.jpeg"
import VideoBackground from '../components/VideoBackground';
import { useState } from 'react'
import {Registro} from '../services/Registro'


export default function RegistroView() {
    const [value, setValue] = useState(
        {
            clienteNombre: "",
            clienteApellido: "",
            clienteCorreo: "",
            clienteTipo: 3,
            password: "",
            clienteDocumento: "",
            clienteCelular: 0
        }
    ) 

    // const [kevin, setKevin] = useState(
    //     {
    //         clienteId : -1,
    //         vendedorid: -1,
    //     }
    // )





    const [re, setRe] = useState(null)
    
    const crearUsuario = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
       });
       console.log(value)
    }
    const Registarse = async(e)=>{
        e.preventDefault()
        setRe(await Registro(value))
        console.log(re)
    }




    return ( 
        <div>
           

        <Row>   
              <Col xs="3"></Col> 
            <Col xs="6">
                <div >
                <ButtonGroup
                    style={{display:'flex', 
                    justifyContent:'center'}}
                    >
                        <Button href='/' variant="link">
                            <Image src={Logo} fluid />
                        </Button>
                    </ButtonGroup>           

                </div>

                <div>            
                <Form className = "login-form">
                    <h1 className="text-center">
                        <span className="font-weight-bold">Bienvenidos </span>
                    </h1>
                    <h1 className="text-center">
                        <span className="font-weight-bold">Registrese </span>
                    </h1>
                <FormGroup className="text-center">
                    <label>Nombre</label>
                    <br/>
                    <input type="text" placeholder="Nombre" name="clienteNombre" onChange ={e => crearUsuario(e)}/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Apellido</label>
                    <br/>
                    <input type="text" placeholder="Apellido" name="clienteApellido" onChange ={e => crearUsuario(e)}/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Email</label>
                    <br/>
                    <input type="email" placeholder="Email" name="clienteCorreo" onChange ={e => crearUsuario(e)}/>
                </FormGroup>        
                <FormGroup className="text-center">
                    <label>Password</label>
                    <br/>
                    <input type="password" placeholder="password" name="password" onChange ={e => crearUsuario(e)}/>
                </FormGroup>
                <FormGroup className="text-center">
                    <label>Numero de Celular</label>
                    <br/>
                    <input type="phone" placeholder="Numero de Celular" name="clienteCelular" onChange ={e => crearUsuario(e)}/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Numero de Dni</label>
                    <br/>
                    <input type="dni" placeholder="Numero de Dni" name="clienteDocumento" onChange ={e => crearUsuario(e)}/>
                </FormGroup>   
                <FormGroup className="text-center">
                    <br/>
                    <Button className="btn-lg btn-dark btn-block " onClick={Registarse} >Registrarse</Button>       
                </FormGroup>  
            </Form>
            </div>

            </Col>
        </Row>

        </div>

    )
}