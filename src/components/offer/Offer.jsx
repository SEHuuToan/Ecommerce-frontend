import React from "react";
import './Offer.css'
import { Button } from 'antd'
import right_img from '../assets/other_img/right_offer_img.jpg'

const Offer = () => {
    return (
        <div className="offers">
            <div className="offer-left">
                <h1>Royal Motocycle</h1>
                <p>Với Slogan "Uy tín tạo nên thương hiệu ", cùng cái "Tâm" trong kinh doanh.
                    Khách hàng đến với chúng tôi sẽ nhận được những ưu đãi mới nhất, những sản phẩm chất lượng tốt nhất.
                </p>
                <div className="offer-left-button">
                    <Button href="/about" type="primary" className="btn-view-more">
                        View More
                    </Button>
                </div>

            </div>
            <div className="offer-right">
                <img src={right_img} alt="right image" />
            </div>
        </div>
    );
}
export default Offer