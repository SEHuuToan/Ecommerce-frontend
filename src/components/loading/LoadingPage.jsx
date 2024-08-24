import { useEffect } from 'react';
import './LoadingPage.css';
import { Flex, Spin } from 'antd';
const LoadingPage = ({loading}) => {
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
                <Flex align="center" gap="middle">
                    <Spin  tip="Loading" size="large" spinning={loading}/>
                </Flex>
            </div>
        </>
    );
};

export default LoadingPage;

