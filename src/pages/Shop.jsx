import Hero from '../components/hero/Hero';
import Popular from "../components/popular/Popular";
import Blog_HomePage from "../components/blog_homepage/Blog_HomePage";
import HomeContent from '../components/home_content/HomeContent';
import './css/Shop.css';
const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <div className="shop-blog-home-content">
                <HomeContent />
            </div>
            <div className="shop-blog-homepage">
                <Blog_HomePage />
            </div>
        </div>
    );
}
export default Shop