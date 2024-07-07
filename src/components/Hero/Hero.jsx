import './Hero.css'
import hand_icon from '../assets/other_img/hand_icon.png'
import hero_img from '../assets/other_img/hero_image.png'
import { Button } from "antd";
const Hero = () => {
 
    return(
        <div className="hero">
            <div className="hero-left animate__animated animate__zoomIn">
                <h2>
                    NEW USED MOTOCYCLE ARRIVALS ONLY
                </h2>
              <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand_icon" />
                </div>
                <p>motocycle collections</p>
                <p>for everyone</p>
              </div>
              <div>
                <Button type="primary" className="hero-latest-btn" href="/motor" >
                     Collection
                </Button>
              </div>
            </div>

            <div className="hero-right animate__animated animate__zoomIn">
                <img src={hero_img} alt="hero" />
            </div>
        </div>
    );
}
export default Hero