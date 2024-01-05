import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import "../styles/header.css";
import logoTipo from "../assets/images/logo/Augusto romera dev.png";

const Header = ({ activeSection }) => {

    

    return (
        <Navbar expand="lg" data-bs-theme="dark" className={`navbarmain`} >
            <Container>
                <Navbar.Brand>
                    <img
                        src={logoTipo}
                        className="d-inline-block navbar-image"
                        onClick={() => {
                            scroll.scrollToTop();
                        }}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className={`nav-link ${activeSection === 'home' ? 'nav-link-scrolled' : ''}`} to="home" smooth={true}  offset={-50} duration={500}>Inicio</Link>
                        <Link className={`nav-link ${activeSection === 'about' ? 'nav-link-scrolled' : ''}`} to="about" smooth={true}  offset={-50} duration={500}>Sobre mi</Link>
                        <Link className={`nav-link ${activeSection === 'portfolio' ? 'nav-link-scrolled' : ''}`} to="portfolio" smooth={true} offset={-80}  duration={500}>Portafolio</Link>
                        <Link className={`nav-link ${activeSection === 'contact' ? 'nav-link-scrolled' : ''}`} to="contact" smooth={true} duration={500}>Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;