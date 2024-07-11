import contact_banner from '../components/assets/other_img/aboutUs.png'
import './css/About.css'
import 'animate.css'
import ErrorPage from '../components/404/ErrorPage'
const About = () => {
    return (
        <div className="about">
            <img className="about-banner animate__animated animate__fadeInLeft" src={contact_banner} alt="contact_banner" />
            <div className="about-title">
                <h1 className="animate__animated animate__fadeInLeft">About</h1>
                <hr className="animate__animated animate__slideInRight"/>
            </div>
            <div className="about-container">
                    <ErrorPage />
            </div>
        </div>
    );
}
export default About