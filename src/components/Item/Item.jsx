import './Item.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Image } from 'antd';
const Item = (props) => {
    const { id, name, image, odo, color, model, price } = props;
    // Extract the URL of the first image in the array
    const imageUrl = image && image.length > 0 ? image[0].url : '';

    return (
        <Link to={`/products/${id}`} className="item-link">
            <div className="item" >
                {imageUrl && <Image 
                                preview={false}
                                src={imageUrl} 
                                alt={`${name} image`} 
                                placeholder={   
                                <Image
                                    preview={false}
                                    src={imageUrl}
                                    width={400}
                                    alt="motocycle_image"
                                />}
                            />}
                <div className="item_description">
                    <div className="item_name">{name}</div>
                    <p>Odo: {odo} Km</p>
                    <p className="item_color">Color: {color}</p>
                    <p>Model: {model}</p>
                    <div className="item-price">
                        <div className="item-price-bike">
                            Price: {price.toLocaleString('en-US')} $
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
        PropTypes.string,  
        PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired
        }))  
    ]).isRequired,
    odo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
export default Item