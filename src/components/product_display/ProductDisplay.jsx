import { useState, useEffect } from "react";
import './ProductDisplay.css'
import { Image, Button } from "antd";
import { RightOutlined, LeftOutlined, LineOutlined, CaretDownOutlined } from '@ant-design/icons'
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import OptionViewModal from '../modalantd/OptionViewModal';

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
            return category; 
    }
};
const getImage = (image) => {
    return image.map(img => img.url);
};
const ProductDisplay = ({product}) => {
    let [imageList, setImageList] = useState([]);
    let [currentImage, setCurrentImage] = useState(null);
    let [startIndex, setStartIndex] = useState(0);
    let [isModalVisible, setIsModalVisible] = useState(false);
    const displayName = getCategoryDisplayName(product.category);
    useEffect(() => {
        if (product.image && product.image.length > 0) {
            const images = getImage(product.image);
            setImageList(images);
            setCurrentImage(images[0]);
            setStartIndex(0);
        }
    }, [product]);

    const onClickRight = () => {
        if (startIndex + 3 < imageList.length) {
            setStartIndex(startIndex + 1);
        }
    }
    const onClickLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    }
    const swipeHandlers = useSwipeable({
        onSwipedLeft: onClickRight,
        onSwipedRight: onClickLeft,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })
    const setModalVisible = (visible) => {
        setIsModalVisible(visible);
    };
 
    const options = product.option ? product.option.split(', ') : [];
    const limitedOptions = options.slice(0, 12);
    const showButtonViewMoreOptions = options.length > 12;
    return (
        <>
            <div className="product-display">
                <div className="product-display-left">
                    <div className="product-display-img-list" {...swipeHandlers}>
                        <Button onClick={onClickLeft} type="text" icon={<LeftOutlined style={{ fontSize: '29px' }} />} style={{ height: '89px' }}></Button>
                        {imageList.slice(startIndex, startIndex + 3).map((image, index) => (
                          <div key={index} className="img-list-switch">
                              <Image preview={false} width={'100%'} height={'100%'} src={image} alt="img_list" style={{ objectFit: 'cover', border: image === currentImage ? '3px solid #1890ff' : 'none' }}
                                onClick={() => setCurrentImage(image)}
                            />
                          </div>    
                        ))}
                        <Button onClick={onClickRight} type="text" icon={<RightOutlined style={{ fontSize: '29px' }} />} style={{ height: '89px' }}></Button>
                    </div>
                    <div className="product-display-img">
                        {currentImage && <Image width={'100%'} height={'100%'} style={{ objectFit: 'contain' }}  src={currentImage} alt="current-view-img" />}
                    </div>
                </div>
                <div className="product-display-right">
                    <div>
                        <h2>{product.name}</h2>
                    </div>
                    <div className="product-display-right-detail">
                        {/* <span>
                            Capacity: {product.capacity}
                        </span> */}
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
                            Category: {displayName}
                        </span>
                        <span >
                            Option<CaretDownOutlined />   {limitedOptions.map((option, index) => (
                                <div style={{ paddingTop: '8px' }} key={index}><LineOutlined style={{ color: 'black', width: '10px' }} /> {option}</div>
                            ))}
                            {showButtonViewMoreOptions && (
                                <Button
                                    className="button-view-more-options"
                                    type="primary"
                                    onClick={() => setModalVisible(true)}
                                >
                                    View more options
                                </Button>
                            )}
                        </span>
                    </div>
                    <div className="product-display-right-price">
                         Price:  {product.price} $
                    </div>
                </div>
            </div>
            <OptionViewModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                options={options}
            />
        </>
    );
}
ProductDisplay.propTypes = {
    product: PropTypes.object.isRequired,
}
export default ProductDisplay