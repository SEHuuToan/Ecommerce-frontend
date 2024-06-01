import React, {useEffect, useState} from "react";
import { Button } from "antd";
import { UpSquareOutlined } from '@ant-design/icons';
import './ScrollToTop'
const ScrollToTop = () => {
    const scrollToTopPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    } 
    const [isVisible, setIsVisible] = useState(false);    
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 200);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        isVisible && (
        <div className="scroll-container">
           <img 
                 style={{
                 position: 'fixed',
                 bottom: '70px',
                 right: '25px',
                 fontSize: '16px',
                 color: 'white',
                 cursor: 'pointer',
                 transition: 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',
           }} onClick={scrollToTopPage} width="48" height="48" src="https://img.icons8.com/parakeet-line/48/circled-chevron-up.png" alt="circled-chevron-up"/>
        </div>
        )
    );
}
export default ScrollToTop;