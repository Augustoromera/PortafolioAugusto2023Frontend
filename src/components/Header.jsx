import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import "../styles/header.css"
import logoTipo from "../assets/images/logo/Logo ar.png"
const Header = () => {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className={`navbarmain`} >

            <Container>
                <Navbar.Brand >
                    <img src={logoTipo} className="d-inline-block navbar-image " onClick={
                        () => {
                            Navigate("/");
                        }
                    } alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/"  >Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/"  >Sobre Mi</Nav.Link>
                        <Nav.Link as={Link} to="/" >Portafolio</Nav.Link>
                        <Nav.Link as={Link} to="/" >Contacto</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header