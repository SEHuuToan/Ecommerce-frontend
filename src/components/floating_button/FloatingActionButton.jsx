import React from "react";
import './FloatingActionButton.css';
import { Link } from 'react-router-dom';
import imageZalo from '../assets/other_img/zalo_circle.png';
import imagePhone from '../assets/other_img/phoneRing.jpg';
import imagePhoneMobile from '../assets/other_img/phoneRingMobile.png';
import messenger from '../assets/other_img/messenger.png';
import chat from '../assets/other_img/iphoneMessenger.png';
const FloatingActionButton = () => {
  return (
    <>
      <div className="floating-action-button-container">
        <Link to='https://zalo.me/0377504378' className="floating-icon-zalo">
          <img src={imageZalo} alt="Zalo" />
        </Link>
        <Link to='tel:0377504378' className="floating-icon-phone">
          <img src={imagePhone} alt="Phone" />
        </Link>
      </div>
      <div className="floating-action-responsive-mobile">
        <div className="floating-action-responsive-mobile-action">
          <Link to='https://zalo.me/0377504378'>
            <img src={imageZalo} width="38px" alt="Zalo" />
          </Link>
          <Link to='tel:0377504378'>
            <img src={imagePhoneMobile} width="36px" alt="Phone" />
          </Link>
          <Link to='https://www.facebook.com/kind.master.73/'>
            <img src={messenger} width="36px" alt="messenger" />
          </Link>
          <Link to='sms:0377504378'>
            <img src={chat} width="34px" alt="chat" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FloatingActionButton;
