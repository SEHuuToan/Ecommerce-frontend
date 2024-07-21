
import './BlogDisplay.css';
import PropTypes from 'prop-types';

const BlogDisplay = ({ blog }) => {
    const { title, header, body1, body2, body3, footer, image } = blog;
    const images = [
        image[0] ? <img src={image[0].url} alt={image[0].alt || ''} key={0} /> : null,
        image[1] ? <img src={image[1].url} alt={image[1].alt || ''} key={1} /> : null,
        image[2] ? <img src={image[2].url} alt={image[2].alt || ''} key={2} /> : null
    ];
    return (
        <>
            <div className='blog-display-container'>
                <div className='blog-display-title'>
                    <h1>
                        {title}
                    </h1>
                    <hr className="animate__animated animate__slideInRight" />
                </div>
                <div className='blog-display-content'>
                    <div className='blog-display-header'>
                        {header}
                    </div>

                    <div className='blog-display-body1'>
                        {body1}
                        {images[0]}
                    </div>

                    <div className='blog-display-body2'>
                        {body2}
                        {images[1]}

                    </div>

                    <div className='blog-display-body3'>
                        {body3}
                        {images[2]}

                    </div>

                    <div className='blog-display-footer'>
                        {footer}
                    </div>
                </div>
            </div>
        </>
    );
}
BlogDisplay.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        body1: PropTypes.string.isRequired,
        body2: PropTypes.string.isRequired,
        body3: PropTypes.string.isRequired,
        footer: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })).isRequired,
    }).isRequired,
};
export default BlogDisplay;