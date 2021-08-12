import React from 'react'
import { Navbar, Container, Nav,NavDropdown,DropdownButton,ButtonGroup,Dropdown,Button,ButtonToolbar } from "react-bootstrap";
import { useState,useEffect } from 'react';
import imgLogin from "../assets/login_2.jpg"
import { FiShoppingCart }  from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../assets/Logo.jpeg";
import Image from 'react-bootstrap/Image'

export default function Narvbar() {
    return (
        <div>
            <div 
                // className="" style={{display:'flex', 
                // justifyContent:'left'}}
                 >
            <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups"
            >
                <ButtonGroup>
                    <Button variant="link">
                        <Image src={Logo} fluid />
                    </Button>
                </ButtonGroup>

                <ButtonGroup>
                    <DropdownButton as={ButtonGroup} id="bg-vertical-dropdown-2" 
                     title={
                        <BiUserCircle />}
                    style={{
                    maxHeight:'100%',
                    objectFit:'cover',
                     }}
                    alt="imagen login"
                    variant="outline-dark"
                     >
                    <Dropdown.Item eventKey="1"  href="/IniciarSecion">Iniciar Secion</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="/Registro">Registrarse</Dropdown.Item>
                    </DropdownButton>  
                
                    <Button  variant="outline-dark">
                        < FiShoppingCart />
                    </Button>
                </ButtonGroup>
            
            </ButtonToolbar>
            </div>
            


            <div className="" style={{display:'flex', 
                justifyContent:'center'}}  >
            <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">    
                <Nav.Link href="/Donar">Donar</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link  href="/Adoptar">Adoptar</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link  href="/Eventos">Eventos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link  href="/Tienda">Tienda</Nav.Link>
                </Nav.Item>
            </Nav>
            </div>

        </div>
    )
}
