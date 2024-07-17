import contact_banner from '../components/assets/other_img/aboutUs.png';
import Blog from '../components/blog/Blog';
import './css/About.css';
import 'animate.css';
const About = () => {
    return (
        <div className="about">
            <img className="about-banner animate__animated animate__fadeInLeft" src={contact_banner} alt="contact_banner" />
            <div className="about-title">
                <h1 className="animate__animated animate__fadeInLeft">About</h1>
                <hr className="animate__animated animate__slideInRight"/>
            </div>
            <div className="about-content">
                <Blog />
            </div>
        </div>
    );
}
export default About