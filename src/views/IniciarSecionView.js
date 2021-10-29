import PortadaView from './PortadaView'
import { Button,Form, FormGroup, Label, Input,ButtonGroup,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.jpeg"

import { useState,UseEffect,useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { login } from '../services/Iniciar_Sesion';
import {perfil_cliente} from '../services/perfilCliente'
import {AuthReactContext} from "../context/reactAuthContext"



export default function IniciarSecionView() {
    const { signIn } = useContext(AuthContext)
    const {userState} = useContext(AuthContext)  
    const {token,setAuthToken} = useContext(AuthReactContext)  
    const {user, setUser} = useContext(AuthReactContext)
    const [value, setValue] = useState(
        {clienteCorreo:"",
        password:""
        }
    );
    const [respuesta,setRespuesta] = useState(null)
    const[respuesta2,setRespuesta2]= useState(null)
    const crearUsuario = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
       });
    }

    const inicioSesion = async (e) =>{
        e.preventDefault()
        setRespuesta(await login(value))
        try {
            setAuthToken(respuesta.content.access)
            setRespuesta2(await perfil_cliente(token))
            // console.log(respuesta2.content)
            try{
                setUser(respuesta2.content)
                console.log(user)
            }catch{}

        }catch{

        }
        // console.log(respuesta.content.access)
        console.log(token)
        // setToken(value.content.access)
        // console.log(token)
    
    
    }
    



    // UseEffect(() => {
        
        
    //     // e.preventDefault()
    //     // perfil_cliente(token)
    //     // console.log(respuesta)
    // },[setAuthToken])
        // const obtenerDatosPerfil = async(e) =>{
        // e.preventDefault()
        // setRespuesta(await (perfil_cliente(token)))
        // console.log(respuesta)
        


    return (
        
        <div> 
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
         
            {userState? (
               <div >
               <img
					src={userState.photoURL}
					className="me-3"
					style={{ borderRadius: "50%",
                    marginRight:'45%',
                    marginLeft:'45%',
                    width: "100px",
                    display:'flex', 
                    justifyContent:'center'
                    }}
					alt="avatar"
				/>

                <h1 style={{
                    display:'flex', 
                    justifyContent:'center'}} 
                >Bienvenido  
                </h1>
                <h1>
                    <span style={{
                        display:'flex', 
                        justifyContent:'center'
                        }}>{userState.displayName}
                    </span>
                </h1>
                 <h2 style={{
                    display:'flex', 
                    justifyContent:'center'}}>Por favor hacer click en el logo para volver a la navegar</h2>
                 </div>
            ) : (
                <div>
                    <Form className = "login-form"
                    //  onSubmit={(e)=>{obtenerDatosPerfil(e)}}
                      >
                        <h1  className="text-center">
                            <span className="font-weight-bold">Bienvenidos </span>
                        </h1>
                        <FormGroup className="text-center">
                            <label>Email</label>
                            <br/>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                name="clienteCorreo" 
                                value= {value.clienteCorreo} 
                                onChange={ e => crearUsuario(e)}
                            />
                        </FormGroup>        
                        <FormGroup className="text-center">
                            <label>Password</label>
                            <br/>
                            <input type="password" placeholder="password" name="password" onChange={ e => crearUsuario(e)}/>
                        </FormGroup>
                        <FormGroup  className="text-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Recordar Cuenta
                            </label>
                        </FormGroup >
                        <FormGroup  className="text-center">
                            <Button className="btn-lg btn-dark btn-block " type="submit" onClick={inicioSesion}
                             >Log in</Button>        
                            </FormGroup>         
                        </Form>
                        <div className="
                        d-flex justify-content-center
                        "
                        > 
                            <button className="btn btn-danger btn-lg"  onClick={signIn}  
                                style={{margin:'0 aut'}} 
                            >
                            <i classname="fab fa-google me-2"/>
                                Ingresa con google
                            </button>
                        </div> 
                </div>
            )}
                            
        </div>
     )
}