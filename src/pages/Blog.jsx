import { useState, useRef } from 'react';
import blog_banner from '../components/assets/other_img/aboutUs.png';
import BlogCard from '../components/blog/Blog';
import PaginationComponent from '../components/pagination/PaginationComponent';
import empty_motor_img from "../components/assets/other_img/out-of-stock.png";
import './css/Blog.css';
import useBlogStore from '../store/blogStore';
const Blog = () => {
    const blogs = useBlogStore((state) => state.blogs);
    const motoCategoryProductRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedBlog = blogs.slice(startIndex, endIndex)
    return (
        <div className="blog">
            <img className="blog-banner" src={blog_banner} alt="blog_banner" />
            <div className="blog-title">
                <h1 className="animate__animated animate__fadeInLeft">Blog</h1>
                <hr className="animate__animated animate__slideInRight" />
            </div>
            <div className="blog-content">
                {paginatedBlog.length > 0 ? (
                    blogs.map((item, i) =>
                        <BlogCard
                            key={i}
                            id={item._id}
                            title={item.title}
                            header={item.header}
                            image={item.image}
                        />
                    )
                ) : (
                    <div className="motor-empty">
                        <div>
                            <img className="motor-empty-img1" src={empty_motor_img} alt="empty_motor_img" />
                        </div>
                        <div className="motor-empty-description">
                            <span>
                                Sorry! No results found
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <div className='blog-pagination'>
                <PaginationComponent
                    listItem={blogs}
                    refName={motoCategoryProductRef}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
}
export default Blog