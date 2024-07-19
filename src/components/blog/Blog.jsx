import './Blog.css';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Blog = (props) => {
    const { id, title, header, image } = props;
    const imageUrl = image && image.length > 0 ? image[0].url : '';
    return (
        <>
            <Link to={`/blog/${id}`} className="blog-card-link">
                <div className="blog-card" >
                    {imageUrl && <img src={imageUrl} alt='image_blog' />}
                    <div className="blog-card-description">
                        <div className="blog-card-title text-split">{title}</div>
                        <div className='blog-card-header text-split'>{header}</div>
                        <div className="blog-card-btn">
                            <Button type='primary'>
                                Read more
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
Blog.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired
        }))
    ]).isRequired,
}
export default Blog