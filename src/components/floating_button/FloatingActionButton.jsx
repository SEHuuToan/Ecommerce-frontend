import React from "react";
import './FloatingActionButton.css';
import { Link } from 'react-router-dom';
const FloatingActionButton = () => {
  const imagePhone = 'https://img.icons8.com/nolan/64/1A6DFF/C822FF/apple-phone.png';
  const imageZalo = 'https://img.icons8.com/color/48/zalo.png';
  const phoneRinger = 'https://img.icons8.com/nolan/64/1A6DFF/C822FF/ringer-volume.png';
  const messenger = 'https://img.icons8.com/nolan/64/1A6DFF/C822FF/facebook-messenger.png';
  const chat = 'https://img.icons8.com/fluency/48/chat--v1.png';
  return (
    <>
      <div className="floating-action-button-container">
        <Link to='https://zalo.me/0377504378' className="floating-icon-zalo">
          <img src={imageZalo} alt="Zalo" />
        </Link>
        <Link to='tel:0377504378' className="floating-icon-phone">
          <img src={imagePhone} width="50" alt="Phone" />
        </Link>
      </div>
      <div className="floating-action-responsive-mobile">
        <div className="floating-action-responsive-mobile-action">
          <Link to='https://zalo.me/0377504378'>
            <img src={imageZalo} width="38px" alt="Zalo" />
          </Link>
          <Link to='tel:0377504378'>
            <img src={phoneRinger} width="36px" alt="Phone" />
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
