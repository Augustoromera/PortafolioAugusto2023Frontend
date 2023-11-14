import React from 'react';
import profileImage from '../assets/images/profile/profile-augusto.png'
import '../styles/bodyhome.css';
const BodyHome = () => {
    return (
        <div className='container'>
            <div className='row descrip-container'>
                <img src={profileImage} className='profile-image' alt="Profile Augusto" />
                <div className="col">
                    <h1 className="text-center text-white" style={{  fontWeight:"100"}}>Hola!</h1>
                    <h1 className="text-center text-primary font-weight-bold" style={{ fontSize: "2.2em" , fontWeight:"600"}}>Soy Augusto Romera</h1>
                    <h1 className="text-center text-secondary" style={{ fontSize: "1.5em" }}>Fullstack Development</h1>

                </div>
            </div>
        </div>
    );
};

export default BodyHome;
