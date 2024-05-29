import React, { useState, useEffect } from "react";
import './ProductDisplay.css'
import { Image, Button } from "antd";
import { RightOutlined, LeftOutlined, LineOutlined, CaretDownOutlined } from '@ant-design/icons'

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
const getImage = (image) => {
    return image;
}
const ProductDisplay = (props) => {
    const { product } = props;
    const imageList = getImage(product.image)
    const displayName = getCategoryDisplayName(product.category);
    const [currentImage, setCurrentImage] = useState(imageList[0]);
    const [startIndex, setStartIndex] = useState(0);
    const onClickRight = () => {
        if (startIndex + 4 < imageList.length) {
            setStartIndex(startIndex + 1);
        }
    }
    const onClickLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    }
    const beforeReplaceStr = product.option;
    const afterReplaceStr = beforeReplaceStr.split(', ');
    useEffect(() => {
        setCurrentImage(imageList[0]);
        setStartIndex(0);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, [product]);
    return (
        <>
            <div className="product-display">
                <div className="product-display-left">
                    <div className="product-display-img-list">
                        <Button onClick={onClickLeft} type="text" icon={<LeftOutlined style={{ fontSize: '29px' }} />} style={{ height: '89px' }}></Button>
                        {imageList.slice(startIndex, startIndex + 4).map((image, index) => (
                            <Image key={index} width={180} height={120} src={image} alt="img_list"
                                onClick={() => setCurrentImage(image)}
                            />
                        ))}
                        <Button onClick={onClickRight} type="text" icon={<RightOutlined style={{ fontSize: '29px' }} />} style={{ height: '89px' }}></Button>
                    </div>
                    <div className="product-display-img">
                        <Image width={550} height={450} src={currentImage} alt="" />
                    </div>
                </div>
                <div className="product-display-right">
                    <div>
                        <h1>{product.name}</h1>
                    </div>
                    <div className="product-display-right-detail">
                        <span>
                            Capacity: {product.capacity}
                        </span>
                        <span>
                            Odo: {product.odo} km
                        </span>
                        <span >
                            Color: {product.color}
                        </span>
                        <span >
                            Model: {product.model}
                        </span>
                        <span >
                            Brand: {product.brand}
                        </span>
                        <span >
                            Type: {displayName}
                        </span>
                        <span >
                            Option<CaretDownOutlined />   {afterReplaceStr.map((option, index) => (
                                <div style={{ paddingTop: '8px' }} key={index}><LineOutlined style={{ color: 'black', width: '10px' }} /> {option}</div>
                            ))}
                        </span>
                    </div>
                    <div className="product-display-right-price">
                         Price:  {product.price.toLocaleString('en-US')} $
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDisplay