import React from 'react'
import { Row,Col, Button,Form, FormGroup, Label, Input,ButtonGroup,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgLogin from "../assets/login_2.jpg"
import Logo from "../assets/Logo.jpeg"
import VideoBackground from '../components/VideoBackground';



export default function RegistroView() {
    // constuctor (props){
    //         super(props);
    //         this.state = {
    //             nombre = '',
    //             correo = '',
    //             edad = '',
    //         }
    // }
    // onchange(e){
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     this.setState {{
    //         [name]: value,

    //     }};
    // }





    return ( 
        <div>
            {/* <VideoBackground/> */}

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
                    <input type="text" placeholder="Nombre" name="clienteNombre"/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Apellido</label>
                    <br/>
                    <input type="text" placeholder="Apellido" name="clienteApellido"/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Email</label>
                    <br/>
                    <input type="email" placeholder="Email" name="clienteCorreo"/>
                </FormGroup>        
                <FormGroup className="text-center">
                    <label>Password</label>
                    <br/>
                    <input type="password" placeholder="password" name="password"/>
                </FormGroup>
                <FormGroup className="text-center">
                    <label>Numero de Celular</label>
                    <br/>
                    <input type="phone" placeholder="Numero de Celular" name="clienteCelular"/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Numero de Dni</label>
                    <br/>
                    <input type="dni" placeholder="Numero de Dni" name="clienteDocumento"/>
                </FormGroup>   
                <FormGroup className="text-center">
                    <br/>
                    <Button className="btn-lg btn-dark btn-block ">Registrarse</Button>       
                </FormGroup>  
            </Form>
            </div>

            </Col>
        </Row>

        </div>

    )
}
