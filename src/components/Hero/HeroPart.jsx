import './Hero.css'
import hero_img from '../assets/other_img/hero_image.png'
import { Button } from "antd";
const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-left-sologan">
                    <p>Your journey, our passion</p>
                    <p>Explore and own it now</p>
                </div>
                <div>
                    <Button type="primary" className="hero-latest-btn" href="/motor" >
                        Collection
                    </Button>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-right-blur">
                    <img src={hero_img} alt="hero" />
                </div>
            </div>
        </div>
    );
}
export default Hero