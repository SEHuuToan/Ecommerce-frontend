import { useEffect, useState, useRef } from 'react';
import './Blog_HomePage.css';
import { Button, } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import useBlogStore from '../../store/blogStore';
import BlogCard from '../blog/Blog';

const Blog_HomePage = () => {
    const blogs = useBlogStore((state) => state.blogs);
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 3;

    const getVisibleBlogs = (index) => {
        // Đảm bảo không có giá trị undefined
        return Array.from({ length: itemsToShow }, (_, i) => blogs[(index + i) % blogs.length] || {});
    };

    const handleLeftClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
    };

    const handleRightClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 1) % blogs.length);
        }, 3000); // Thay đổi sau mỗi 3 giây

        return () => clearInterval(intervalId); // Dọn dẹp khi component unmount
    }, [blogs.length]);
    const visibleBlogs = getVisibleBlogs(startIndex);
    return (
        <div className="blog-hompage-container">
            <div className="blog-homepage-title">
                <h1>
                    Blog
                </h1>
                <div>
                    <Button type="primary" className="blog-homepage-title-btn" href='/blog'>
                        View all blog
                    </Button>
                </div>
            </div>
            <div className="blog-homepage-content">
                <Button onClick={handleLeftClick} className="blog-homepage-btn-left" shape="circle" size='large' icon={<LeftOutlined style={{ color: 'black' }} />} />  
                {visibleBlogs.map((item, i) => (
                    <div key={item._id} className="blog-homepage-blog-item">
                        <BlogCard
                            key={i}
                            id={item._id}
                            title={item.title}
                            header={item.header}
                            image={item.image}
                        />
                    </div>
                ))}
                <Button onClick={handleRightClick} className="blog-homepage-btn-right" shape="circle" size='large' icon={<RightOutlined style={{ color: 'black' }} />} />
            </div>
        </div>
    );
}
export default Blog_HomePage