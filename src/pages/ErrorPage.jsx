import './css/ErrorPage.css';
import { Button } from 'antd';
import ErrorImg from '../components/assets/other_img/404-web-page.png';
const ErrorPage = () => {
    return (
        <>
            <div className="error">
                <div className="error-icon">
                    <img src={ErrorImg} alt="error_img" />
                </div>
                <div className="error-description">
                    <h1>PAGE NOT FOUND</h1>
                    <div className="description-ng-scope">
                        <span>Uh oh, we can&apos;t seem to find the page you&apos;re looking for. </span>
                        <span> Try going back to the previous page</span>
                    </div>
                </div>
                <div className="btn-go-back-home">
                    <Button className='size-btn' href="/">
                        Go back home
                    </Button>
                </div>
            </div>
        </>
    );
}
export default ErrorPage