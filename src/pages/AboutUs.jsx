import React from "react";
import contact_banner from '../components/assets/other_img/contact_banner.jpg'
import './css/About.css'
import 'animate.css'

const About = () => {
    return (
        <div className="about">
            <img className="about-banner" src={contact_banner} alt="contact_banner" />
            <div className="about-title">
                <h1 className="animate__animated animate__fadeInLeft">About</h1>
                <hr className="animate__animated animate__slideInRight"/>
            </div>
            <div className="about-container">
                <p>Khong tim thay ket qua</p>
            </div>
        </div>
    );
}
export default About