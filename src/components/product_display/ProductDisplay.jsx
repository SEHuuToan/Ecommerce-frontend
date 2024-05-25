import React from "react";
import './ProductDisplay.css'

const getCategoryDisplayName = (category) => {
    switch (category) {
        case 'sport-bike':
            return 'Sport Bike';
        case 'naked-bike':
            return 'Naked Bike';
        case 'adventure':
            return 'Adventure';
        case 'classic':
            return 'Classic';
        default:
            return category; // Trả về giá trị mặc định nếu không khớp với bất kỳ trường hợp nào
    }
};
const ProductDisplay = (props) => {
    const { product } = props;
    const displayName = getCategoryDisplayName(product.category);
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="img_list" />
                    <img src={product.image} alt="img_list" />
                    <img src={product.image} alt="img_list" />
                    <img src={product.image} alt="img_list" />
                </div>
                <div className="product-display-img">
                    <img className="product-display-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-detail">
                    <div>
                        Capacity: {product.capacity}
                    </div>
                    <div>
                        Odo: {product.odo}
                    </div>
                    <div >
                        Color: {product.color}
                    </div>
                    <div >
                        Model: {product.model}
                    </div>
                    <div >
                        Brand: {product.brand}
                    </div>
                    <div >
                        Option: {product.option}
                    </div>
                    <div >
                        Type: {displayName}
                    </div>
                </div>
                <div className="product-display-right-description">
                    Description: {product.description}
                </div>
                <div className="product-display-right-price">
                    Price: {product.price} $
                </div>
            </div>
            <div className="contact-buy">Contact: 0377504378 FOR MORE INFORMATION OR BUY THIS MOTOCYCLE</div>
        </div>
    );
}
export default ProductDisplay