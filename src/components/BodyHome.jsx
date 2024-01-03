import React, { useEffect } from 'react';
import '../styles/bodyhome.css';
import profileImage from '../assets/images/profile/profile-augusto.png';
import reactLogo from '../assets/images/logo/React.jpg';
import nodeLogo from '../assets/images/logo/node.png';
import expressLogo from '../assets/images/logo/express.png';
import mongoDBLogo from '../assets/images/logo/Mongo.png';
import rapiburger from '../assets/images/portfolio/Rapiburger.png';
import ScrollReveal from 'scrollreveal';
const ProfileImage = () => {
    return <img src={profileImage} className='profile-image' alt="Profile Augusto" />;
};

const BodyHome = () => {
    useEffect(() => {
        ScrollReveal().reveal('.about_description', { delay: 300 });
        ScrollReveal().reveal('.about_skills', { delay: 300 });
        ScrollReveal().reveal('.portfolio', { delay: 300 });
        ScrollReveal().reveal('.contact-me', { delay: 300 });
        ScrollReveal().reveal('.container', { delay: 300 });
        ScrollReveal().reveal('.col', { delay: 300 });
    }, []);
    return (
        <>
            <div className='home'>
                <div className="homebg">
                    <ProfileImage />
                    <div className="hometext">
                        <h1 className="home_text2">Augusto Romera</h1>
                        <h1 className="home_text3" >Fullstack Developer</h1>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className="about_description">
                    <h2 className='about_title'>Sobre mi</h2>
                    <p className='about_title2'>
                        Desarrollador fullstack MERN.
                    </p>

                    <p className='description'>
                        Soy Augusto Romera, estudiante de Ingeniería en Sistemas con habilidades en desarrollo web. Tengo experiencia en colaboración y trabajo en equipo, y actualmente estoy buscando una oportunidad de tiempo completo en el campo del desarrollo web. Me apasiona aplicar mis conocimientos y habilidades para seguir mejorando y contribuir al éxito del equipo.
                    </p>
                    {/* Add more details about yourself as needed */}
                </div>
                <div className="about_skills">
                    <div className="about_skill_title">
                        <h2>Skills & Technologies</h2>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            {/* React */}
                            <div className="col skill_item">
                                <img src={reactLogo} className="skill_item_logo" alt="React" />
                                <br />
                                <span>React</span>
                            </div>
                            {/* Node.js */}
                            <div className="col skill_item">
                                <img src={nodeLogo} className="skill_item_logo" alt="Node.js" />
                                <br />
                                <span>Node.js</span>
                            </div>
                            {/* Express.js */}
                            <div className="col skill_item">
                                <img src={expressLogo} className="skill_item_logo" alt="Express.js" />
                                <br />
                                <span>Express.js</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col skill_item">
                                <img src={mongoDBLogo} className="skill_item_logo" alt="MongoDB" />
                                <br />
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portafolio Section */}
            <div className="portfolio d-flex align-content-center justify-content-center">
                <div className="description">
                    <h2>Portafolio</h2>
                    <p>
                        Proyectos en los que he participado.
                    </p>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {/* Proyecto 1: RapiBurger */}
                        <div className="col-12 col-sm-6 col-md-4 p-4 d-flex align-items-center flex-column">
                            <img src={rapiburger} className="image-portfolio" alt="RapiBurger" />
                            <span className="mt-2">RapiBurger</span>
                        </div>
                        {/* Proyecto 2: En Progreso */}
                        <div className="col-12 col-sm-6 col-md-4 p-4 d-flex align-items-center flex-column">
                            <img src={rapiburger} className="image-portfolio" alt="Proyecto en Progreso" />
                            <span className="mt-2">Proyecto en Progreso</span>
                        </div>
                        {/* Proyecto 3: En Progreso */}
                        <div className="col-12 col-sm-6 col-md-4 p-2 d-flex align-items-center flex-column">
                            <img src={rapiburger} className="image-portfolio" alt="Proyecto en Progreso" />
                            <span className="mt-2">Proyecto en Progreso</span>
                        </div>
                        {/* Proyecto 4: En Progreso */}
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 p-2 d-flex align-items-center flex-column">
                            <img src={rapiburger} className="image-portfolio" alt="Proyecto en Progreso" />
                            <span className="mt-2">Proyecto en Progreso</span>
                        </div>
                    </div>
                </div>
            </div >
            {/* Sección de Contacto */}
            <div className="contact-me">
                <div className="contact-me-text px-3">
                    <h2>Contacto</h2>
                    <p>Contáctame si quieres que trabajemos juntos.</p>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {/* Gmail */}
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <img src={nodeLogo} className="contact-icon" alt="Gmail" />
                            <span className="mt-2">Escribir</span>
                        </div>
                        {/* GitHub */}
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <img src={nodeLogo} className="contact-icon" alt="GitHub" />
                            <span className="mt-2">Ver Repositorio</span>
                        </div>
                        {/* Instagram */}
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <img src={nodeLogo} className="contact-icon" alt="Instagram" />
                            <span className="mt-2">Seguir</span>
                        </div>
                        {/* LinkedIn */}
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <img src={nodeLogo} className="contact-icon" alt="LinkedIn" />
                            <span className="mt-2">Contactar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright pt-5">
                <p className="text-center">
                    Copyright © 2023. @augusto.romera. All Rights Reserved.
                </p>
            </div>
        </>
    );
};

export default BodyHome;
