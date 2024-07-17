import './Blog.css';
import { Button } from 'antd';
import img_test from '../assets/other_img/out-of-stock.png';
const Blog = () => {
    return (
        <>
            <div className='blog-container'>
                <div className='blog-content'>
                    <div className="blog-content-img">
                        <img src={img_test} alt="blog-img" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="blog-content-description">
                        <div className="blog-content-description-title">
                            Sang Số Nhanh Có Đơn Thuần Chỉ Giúp Sang Số Mà Không Cần Bóp Côn?
                        </div>
                        <div className="blog-content-description-description">
                            Descriptionaskdakjsdajhdjakhdjkahdaskdakjsdajhdjakhdjkahdjkashdkjassdasdasdaskdakjsdajhdjakhdjkahdjkashdkjassdasdasdaskdakjsdajhdjakhdjkahdjkashdkjassdasdasdaskdakjsdajhdjakhdjkahdjkashdkjassdasdasdaskdakjsdajhdjakhdjkahdjkashdkjassdasdasdjkashdkjassdasdasdasdads
                        </div>
                        <div className="blog-content-description-btn">
                            <Button type="primary">Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blog