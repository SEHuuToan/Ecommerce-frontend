import React from "react";
import './ItemRelated.css'
import {Link} from "react-router-dom";
const ItemRelated = (props) => {
    return(
        <Link to={`/product/${props.id}`} className="relateditem-link">
            <div className="relateditem" >
                <img className="relateditem-img" src={props.image[0]} alt="motocycle_image" />
                <div className="relateditem_description">
                    <div className="relateditem_name">{props.name}</div>
                    <div className="relateditem-price">
                        <div className="relateditem-price-bike">
                        Price: {props.price.toLocaleString('en-US')} $
                        </div>
                    </div>   
                </div>
        </div>
        </Link>
    
    );
}
export default ItemRelated