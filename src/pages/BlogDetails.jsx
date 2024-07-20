import './css/BlogDetails.css';
import { useCallback, useEffect, useState } from 'react';
import BlogDisplay from '../components/blog_display/BlogDisplay';
import { useParams } from "react-router-dom";
import { axiosGetBlog } from '../utils/axiosUtils';
import LoadingPage from '../components/loading/LoadingPage';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("Blog at Blog Detail", blog);
    const getBlogById = useCallback(async () => {
        try {
            const res = await axiosGetBlog(`blog/${id}`);
            setBlog(res.data);
            setLoading(false)
        } catch (error) {
            console.error('Error when loading 1 blog', error);
            setLoading(false)
        }
    }, [setBlog, setLoading]);
    useEffect(() => {
        getBlogById();
        setLoading(false)
    }, [id, getBlogById])
    if (loading) {
        return <>
            <LoadingPage />
        </>
    }
    if (!blog) {
        return;
    }
    return (
        <>
            <div className='blog-detail-structure'>
                <BlogDisplay blog={blog} />
                {/* <BlogRelated /> */}
            </div>

        </>
    );
}
export default BlogDetails;