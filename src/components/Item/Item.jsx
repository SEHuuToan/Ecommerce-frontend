import React from "react";
import './Item.css'
import {Link} from "react-router-dom";
const Item = (props) => {
    return(
        <Link to={`/product/${props.id}`} className="item-link">
            <div className="item" >
                <img className="item-img" src={props.image} alt="motocycle_image" />
                <div className="item_description">
                    <div className="item_name">{props.name}</div>
                    <p>Odo: {props.odo} Km</p>
                    <p>Color: {props.color}</p>
                    <p>Model: {props.model}</p>
                    <div className="item-price">
                        <div className="item-price-bike">
                        Price: {props.price} $
                        </div>
                    </div>   
                </div>
        </div>
        </Link>
    
    );
}
export default Item