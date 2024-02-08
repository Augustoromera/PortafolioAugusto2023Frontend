import React, { useEffect } from 'react';
import '../styles/bodyhome.css';
import profileImage from '../assets/images/profile/profile-augusto.png';
import reactLogo from '../assets/images/logo/React.jpg';
import nodeLogo from '../assets/images/logo/node.png';
import expressLogo from '../assets/images/logo/express.png';
import mongoDBLogo from '../assets/images/logo/Mongo.png';
import html from '../assets/images/logo/html.png'
import css from '../assets/images/logo/css.png'
import java from '../assets/images/logo/java.png'
import jvs from '../assets/images/logo/js.png'
import spring from '../assets/images/logo/spring-boot-logo.png.webp'
import mysql from '../assets/images/logo/mysql.png'

import rapiburger from '../assets/images/portfolio/Rapiburger.png';
import portfolio from '../assets/images/portfolio/portfolioIcon.jpg';

import instagram from '../assets/images/logo/Instagram-Glyph-Color-Logo.wine.png';
import downloadIcon from '../assets/images/logo/gold-button-009.svg';
import curriculumPDF from '../assets/files/Curriculum Vitae augusto.pdf';
import ScrollReveal from 'scrollreveal';
const ProfileImage = () => {
    return <img src={profileImage} className='profile-image' alt="Profile Augusto" />;
};

const BodyHome = ({ onSectionChange }) => {
    const currentYear = new Date().getFullYear();
    const projects = [
        { id: 1, name: 'RapiBurger', image: rapiburger, website: 'https://rapiburger.netlify.app/', github: 'https://github.com/Augustoromera/Group-3-proyecto-final-Rolling-Code', github2: 'https://github.com/Augustoromera/Proyecto-Final-RC-Grupo3-Backend', text: 'Ir a rapiburger' },
        { id: 2, name: 'Portfolio', image: portfolio, website: '', github: 'https://github.com/Augustoromera/PortafolioAugusto2023Frontend', text: 'Ir al portafolio' },
    ];
    const handleHover = (projectId) => {
        const projectText = document.getElementById(`projectText-${projectId}`);
        const linksContainer = document.createElement('div');

        const websiteLink = document.createElement('a');
        websiteLink.href = projects.find(project => project.id === projectId).website;
        websiteLink.textContent = projects.find(project => project.id === projectId).text;
        websiteLink.classList.add('project-link');
        websiteLink.target = '_blank';
        if (projects.find(project => project.id === projectId).name != "Portfolio") {
            linksContainer.appendChild(websiteLink);
            linksContainer.appendChild(document.createTextNode(' | '));
        }

        const githubLink = document.createElement('a');
        const github1 = projects.find(project => project.id === projectId).github;
        const github2 = projects.find(project => project.id === projectId).github2;

        // Enlace iterativo 1
        githubLink.href = github1;
        if (github2) { githubLink.textContent = 'Git front'; } else githubLink.textContent = 'Github';
        githubLink.classList.add('project-link');
        linksContainer.appendChild(githubLink);
        githubLink.target = '_blank';

        if (github2) {
            linksContainer.appendChild(document.createTextNode(' | '));
            const githubLink2 = document.createElement('a');
            githubLink2.href = github2;
            githubLink2.textContent = 'Git back';
            githubLink2.classList.add('project-link');
            linksContainer.appendChild(githubLink2);
            githubLink2.target = '_blank';
        }

        projectText.innerHTML = '';
        projectText.appendChild(linksContainer);
        projectText.classList.add('mt-2-show');
        projectText.style.transition = 'opacity 0.7s';
    };
    const handleMouseLeave = (projectId) => {
        const projectText = document.getElementById(`projectText-${projectId}`);
        projectText.style.transition = '';
        projectText.innerHTML = '';
        projectText.classList.remove('mt-2-show');
    };
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const aboutSection = document.getElementById('about');
        const portfolioSection = document.getElementById('portfolio');
        const contactSection = document.getElementById('contact');

        let currentSection = 'home';

        const aboutTop = aboutSection.offsetTop;
        const aboutBottom = aboutTop + aboutSection.offsetHeight;

        const portfolioTop = portfolioSection.offsetTop;
        const portfolioBottom = portfolioTop + portfolioSection.offsetHeight;

        const contactTop = contactSection.offsetTop;
        const contactBottom = contactTop + contactSection.offsetHeight;
        const offset = 100;
        if (scrollPosition >= (aboutTop - 60) && scrollPosition < (aboutBottom - 100)) {
            currentSection = 'about';
        } else if (scrollPosition >= (portfolioTop - 100) && scrollPosition < portfolioBottom) {
            currentSection = 'portfolio';
        }


        if (scrollPosition >= contactTop - offset && scrollPosition < contactBottom) {
            currentSection = 'contact';
        }
        onSectionChange(currentSection);
    };




    useEffect(() => {
        //         ScrollReveal().reveal('.homebg', { delay: 300 });
        //         ScrollReveal().reveal('.hometext', { delay: 600 });
        ScrollReveal().reveal('.about_title', { delay: 300 });
        ScrollReveal().reveal('.about_title2', { delay: 300 });
        ScrollReveal().reveal('.description', { delay: 600 });
        ScrollReveal().reveal('.download-button', { delay: 600 });

        ScrollReveal().reveal('.about_skill_title', { delay: 600 });
        ScrollReveal().reveal('.skill_item', { delay: 600 });
        ScrollReveal().reveal('.about_skills', { delay: 600 });

        ScrollReveal().reveal('.portfolio', { delay: 600 });
        ScrollReveal().reveal('.contact-me', { delay: 300 });

    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onSectionChange]);



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
            <div id="about" className='about'>
                <div className="about_description">
                    <h2 className='about_title'>Sobre mi</h2>
                    <p className='about_title2'>
                        Desarrollador fullstack MERN.
                    </p>

                    <p className='description'>
                    Soy Augusto Romera, un estudiante de 24 años de Ingeniería en Sistemas. Mi formación académica incluye un año completo de estudios, respaldado por valiosa experiencia en desarrollo web. Busco oportunidades de tiempo completo para aplicar y expandir mis habilidades, contribuyendo al éxito del equipo con mi pasión por el desarrollo.
                    </p>
                    <a href={curriculumPDF} download className="download-button">
                        <img src={downloadIcon} alt="Download Icon" className="download-icon" />
                        <span className="download-text"> Descargar CV</span>
                    </a>
                </div>
                <div className="about_skills">
                    <div className="about_skill_title">
                        <h2>Habilidades y tecnologías</h2>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col skill_item">
                                <img src={html} className="skill_item_logo" alt="HTML" />
                                <br />
                                <span>HTML</span>
                            </div>
                            <div className="col skill_item">
                                <img src={css} className="skill_item_logo" alt="CSS" />
                                <br />
                                <span>CSS</span>
                            </div>
                            <div className="col skill_item">
                                <img src={jvs} className="skill_item_logo" alt="JavaScript" />
                                <br />
                                <span>JavaScript</span>
                            </div>
                           
                        </div>
                        <div className="row">
                        <div className="col skill_item">
                                <img src={reactLogo} className="skill_item_logo" alt="React" />
                                <br />
                                <span>React</span>
                            </div>
                            <div className="col skill_item">
                                <img src={nodeLogo} className="skill_item_logo" alt="Node.js" />
                                <br />
                                <span>Node.js</span>
                            </div>
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
                            <div className="col skill_item">
                                <img src={java} className="skill_item_logo" alt="Java" />
                                <br />
                                <span>Java</span>
                            </div>
                            <div className="col skill_item">
                                <img src={spring} className="skill_item_logo" alt="Spring Boot" />
                                <br />
                                <span>Spring Boot</span>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col skill_item">
                                <img src={mysql} className="skill_item_logo" alt="MySQL" />
                                <br />
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Portafolio Section */}
            <div id="portfolio" className="portfolio d-flex align-content-center justify-content-center">
                <div className="description-container  ">
                    <div className="description-port">
                        <h2>Portafolio</h2>
                        <p>
                            Proyectos en los que he participado.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="col-12 col-sm-6 col-md-4  p-4 d-flex align-items-center flex-column mt-2-container h-100"
                                onMouseEnter={() => handleHover(project.id, project.name)}
                                onMouseLeave={() => handleMouseLeave(project.id)}
                                style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <img src={project.image} className="image-portfolio" alt={project.name} />
                                <span id={`projectText-${project.id}`} className="mt-2"></span>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
            <div id="contact" className="contact-me">
                <div className="contact-me-text ">
                    <h2>Contacto</h2>
                    <p>Contáctame si quieres que trabajemos juntos.</p>
                </div>

                <div className="container contact-me-container">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="mailto:newsromers@gmail.com" className="plain-link">
                                <i className="far fa-envelope fa-3x text-danger iconlink"></i>
                            </a>
                            <span className="textcontact">Escribir</span>
                        </div>

                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://github.com/Augustoromera" className="plain-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-3x text-dark iconlink"></i>
                            </a>
                            <span className="textcontact">Ver Repo</span>
                        </div>
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://www.instagram.com/augusto.romera/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="logo de instagram" className='contact-icon' style={{ maxWidth: '73px', height: '100%' }} />
                            </a>
                            <span className="textcontact">Seguir</span>
                        </div>
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://www.linkedin.com/in/augusto-romera" className="plain-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-3x text-primary iconlink"></i>
                            </a>
                            <span className="textcontact">Contactar</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright pt-5">
                <p className="text-center">
                    Copyright © {currentYear}. @augusto.romera. All Rights Reserved.
                </p>
            </div>
        </>
    );
};

export default BodyHome;
