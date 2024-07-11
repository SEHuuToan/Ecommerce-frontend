import { useEffect, useState } from "react";
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
    return (
        isVisible && (
            <div className="scroll-container">
                <img
                    style={{
                        opacity: '0.6',
                        position: 'fixed',
                        bottom: '70px',
                        right: '15px',
                        fontSize: '16px',
                        color: 'red',
                        cursor: 'pointer',
                        animation: 'opacity 1 -webkit-transform: translate3d(0, 0, 0) transform: translate3d(0, 0, 0)',
                    }} onClick={scrollToTopPage} width="48" height="48" src="https://img.icons8.com/ultraviolet/40/circled-chevron-up.png" alt="circled-chevron-up" />
            </div>
        )
    );
}
export default ScrollToTop;