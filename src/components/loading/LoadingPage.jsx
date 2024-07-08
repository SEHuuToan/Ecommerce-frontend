import { useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        handleScrollToTop();
    })
    return (
        <>
            <div className='body'>
                <div className='loader'> </div>
            </div>
        </>
    );
};

export default LoadingPage;

