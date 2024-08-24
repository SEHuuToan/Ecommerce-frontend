import './Footer.css';
import Footer_logo from '../assets/logo/logo.png';
import { FacebookOutlined, XOutlined, TikTokOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import Instagram  from '../assets/other_img/Instagram.svg';
import Youtube from '../assets/other_img/youtube.svg';

const Footer = () => {
  return (
    <div className="footer">
      <a className="footer-logo" href="/">
        <img src={Footer_logo} alt="footer_logo" />
        <p>ROYAL MOTOCYCLE</p>
      </a>
      <div className="footer-links">
        <a href="/">Shop</a>
        <a href="/motor">Motor</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <Tooltip placement="top" title={'Facebook'} >
            <Link to='https://www.facebook.com/' target='_blank'>
              <FacebookOutlined style={{ fontSize: '38px', color: '#1877F2' }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-icon-container">
          <Tooltip placement="top" title={'X'} >
            <Link to='https://x.com/home' target='_blank'>
              <XOutlined style={{ fontSize: '38px', color: '#000000' }} />
            </Link>
          </Tooltip>
        </div>
        <div className="footer-icon-container">
          <Tooltip placement="top" title={'Youtube'} >
            <Link to='https://www.youtube.com/' target='_blank'>
              <img src={Youtube} width="44px" alt="chat"/>
            </Link>
          </Tooltip>
        </div>
        <div className="footer-icon-container">
          <Tooltip placement="top" title={'Instagram'} >
            <Link to='https://www.instagram.com/' target='_blank'>
              <img src={Instagram} width="34px" alt="chat"/>
            </Link>
          </Tooltip>
        </div>
        <div className="footer-icon-container">
          <Tooltip placement="top" title={'Tiktok'} >
            <Link to='https://www.tiktok.com/' target='_blank'>
              <TikTokOutlined style={{ fontSize: '36px', color: '#000000' }} />
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="copy-right">
        <hr />
        <p>Copyright &copy; {(new Date().getFullYear())} |
          <a style={{ marginLeft: '5px', textDecoration: 'none' }} href="https://www.facebook.com/kind.master.73/" target="_blank">
            <Tooltip placement="top" title="https://www.facebook.com/kind.master.73/">
              Nguyen Huu Toan
            </Tooltip>
          </a>
        </p>
      </div>
    </div>
  );
}
export default Footer