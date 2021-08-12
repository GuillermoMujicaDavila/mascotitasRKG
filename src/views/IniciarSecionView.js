import React from 'react'
import PaginaPrincipalView from './PaginaPrincipalView'
import { Button,Form, FormGroup, Label, Input } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function IniciarSecionView() {
    return (
        <div>            
            <Form className = "login-form">
                <h1  style={{display:'flex', 
                justifyContent:'center'}}>
                    <span className="font-weight-bold">Bienvenidos </span>
                </h1>
            <FormGroup  style={{display:'flex', 
                justifyContent:'center'}}>
                <label>Email</label>
                <br/>
                <input type="email" placeholder="Email"/>
            </FormGroup>        
            <FormGroup  style={{display:'flex', 
                justifyContent:'center'}}>
                <label>Password</label>
                <br/>
                <input type="password" placeholder="password"/>
            </FormGroup>
            <FormGroup  style={{display:'flex', 
                justifyContent:'center'}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                 <label class="form-check-label" for="flexCheckDefault">
                    Recordar Cuenta
                </label>
                <Link></Link>
            </FormGroup>
                <Button className="btn-lg btn-dark btn-block ">Log in</Button>        
           </Form>
        </div>
    )
}
