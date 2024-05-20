import React from "react";
import './Footer.css';
import Footer_logo from '../assets/logo/logo.png'
import {FacebookOutlined, XOutlined, YoutubeOutlined, InstagramOutlined, TikTokOutlined} from '@ant-design/icons'


const Footer = () => {
    return(
        <div className="footer">
      <div className="footer-logo">
        <img src={Footer_logo} alt="footer_logo" />
        <p>ROYAL MOTOCYCLE</p>
      </div>
      <ul className="footer-links">
        <li>Shop</li>
        <li>Sport Bike</li>
        <li>Naked Bike</li>
        <li>Adventure</li>
        <li>Classic</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">

        </div>
      </div>
        </div>
    );
}
export default Footer