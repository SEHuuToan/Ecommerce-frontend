
import './BlogDisplay.css';
import PropTypes from 'prop-types';


const BlogDisplay = ({blog}) => {
    return(
        <>
        <div className='blog-display-container'>
            <div className='blog-display-title'>
                {blog.title}
            </div>
            <div className='blog-display-header'>
                {blog.header}
            </div>
            <div className='blog-display-body1'>
                {blog.body1}
                <img src="" alt="" />
            </div>
            <div className='blog-display-body2'>
                {blog.body2}
                <img src="" alt="" />
            </div>
            <div className='blog-display-body3'>
                {blog.body3}
                <img src="" alt="" />
            </div>
            <div className='blog-display-footer'>
                {blog.footer}
            </div>
        </div>
        </>
    );
}
BlogDisplay.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default BlogDisplay;