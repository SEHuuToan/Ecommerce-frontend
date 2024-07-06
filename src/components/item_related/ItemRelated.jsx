import React, { useEffect } from "react";
import './ItemRelated.css'
import { Link } from "react-router-dom";
const ItemRelated = (props) => {
    const { id, name, image, odo, price } = props;
    // Extract the URL of the first image in the array
    const imageUrl = image && image.length > 0 ? image[0].url : '';
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
    return (
        <Link to={`/products/${id}`} className="relateditem-link">
            <div className="relateditem" >
                {imageUrl && <img className="relateditem-img" src={imageUrl} alt="motocycle_image" />}
                <div className="relateditem_description">
                    <div className="relateditem_name">{name}</div>
                    <div className="relateditem_odo">Odo: {odo} Km</div>
                    <div className="relateditem-price">
                        <div className="relateditem-price-bike">
                            Price: {price.toLocaleString('en-US')} $
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
}
export default ItemRelated