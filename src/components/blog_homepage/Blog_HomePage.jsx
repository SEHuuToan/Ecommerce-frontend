import { useEffect, useState, useRef } from 'react';
import './Blog_HomePage.css';
import { Button } from 'antd';
import useBlogStore from '../../store/blogStore';
import BlogCard from '../blog/Blog';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Blog_HomePage = () => {
    const blogs = useBlogStore((state) => state.blogs);
    let settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };

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
                <Slider {...settings} className="blog-homepage-slider">
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
                </Slider>
            </div>
        </div>
    );
}

export default Blog_HomePage;
