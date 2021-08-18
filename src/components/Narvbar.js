import React from 'react'
import { Navbar, Container, Nav,NavDropdown,DropdownButton,ButtonGroup,Dropdown,Button,ButtonToolbar } from "react-bootstrap";
import {useContext } from 'react';
import { FiShoppingCart }  from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../assets/Logo.jpeg";
import Image from 'react-bootstrap/Image'
import  {AuthContext, AuthContextProvider} from '../context/authContext';



export default function Narvbar() {
    const {userState,signOut} = useContext(AuthContext)

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
                 <ButtonGroup  style={{position:'container'}}>
                    <Button href='/' variant="link">
                        <Image src={Logo} fluid />
                    </Button>
                </ButtonGroup>

            {userState ? (
                <NavDropdown
								title={
									<div className="d-inline">
										<img
											src={userState.photoURL}
											className="me-2"
											style={{ borderRadius: "50%", width: "30px" }}
											alt="avatar"
										/>
										<span>{userState.displayName}</span>
									</div>
								}
							>
								<NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
							</NavDropdown>
            ) : (
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
              )}
            </ButtonToolbar>
          
            </div>

          
            
            <div className="" style={{display:'flex', 
                justifyContent:'center'}}  >
                    <Navbar expand="lg"
                     variant="dark"
                     style={{
                         fontWeight:'bold',
                         fontSize:'200%',
                         color:'White'
                     }}
                     // bg="light"
                     >
                    <Container>
                     <Nav defaultActiveKey="/" as="ul" bg="light">
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
            </Container>
            </Navbar>
            </div>

        </div>
    )
}
