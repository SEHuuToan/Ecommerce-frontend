import { useEffect, useState, useRef } from 'react';
import './Blog_HomePage.css';
import { Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import useBlogStore from '../../store/blogStore';
import BlogCard from '../blog/Blog';

const Blog_HomePage = () => {
    const blogs = useBlogStore((state) => state.blogs);
    const carouselRef = useRef(null);
    const itemToShow = 3;
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.next();
            }
        }, 3000);

        return () => clearInterval(intervalId); // Dọn dẹp khi component unmount
    }, [blogs.length]);

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
                <Button
                    onClick={() => carouselRef.current?.prev()}
                    className="blog-homepage-btn-left"
                    shape="circle"
                    size='large'
                    icon={<LeftOutlined style={{ color: 'black' }} />}
                />
                <Carousel
                    ref={carouselRef}
                    dots={false}
                    infinite
                    slidesToShow={itemToShow}
                    className='blog-homepage-carosel'
                >
                    {blogs.map((item) => (
                        <div key={item._id} className="blog-homepage-blog-item">
                            <BlogCard
                                id={item._id}
                                title={item.title}
                                header={item.header}
                                image={item.image}
                            />
                        </div>
                    ))}
                </Carousel>
                <Button
                    onClick={() => carouselRef.current?.next()}
                    className="blog-homepage-btn-right"
                    shape="circle"
                    size='large'
                    icon={<RightOutlined style={{ color: 'black' }} />}
                />
            </div>
        </div>
    );
}

export default Blog_HomePage;
