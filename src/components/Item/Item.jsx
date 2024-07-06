import React from "react";
import './Item.css'
import {Link} from "react-router-dom";
const Item = (props) => {
    const { id, name, image, odo, color, model, price } = props;
   // Extract the URL of the first image in the array
   const imageUrl = image && image.length > 0 ? image[0].url : '';
    return(
        <Link to={`/products/${id}`} className="item-link">
            <div className="item" >
            {imageUrl && <img src={imageUrl} alt={`${name} image`} />}
                <div className="item_description">
                    <div className="item_name">{name}</div>
                    <p>Odo: {odo} Km</p>
                    <p>Color: {color}</p>
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
export default Item