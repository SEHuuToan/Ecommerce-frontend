import HeroPart from '../components/hero_part/HeroPart.jsx';
import PopularPart from "../components/popular_part/PopularPart.jsx";
import Blog_HomePage from "../components/blog_homepage/Blog_HomePage";
import HomeContent from '../components/home_content/HomeContent';
import './css/Shop.css';
const Shop = () => {
    return (
        <div>
            <HeroPart />
            <PopularPart />
            <div className="shop-blog-home-content">
                <HomeContent />
            </div>
            <div className="shop-blog-homepagee">
                <Blog_HomePage />
            </div>
        </div>
    );
}
export default Shop