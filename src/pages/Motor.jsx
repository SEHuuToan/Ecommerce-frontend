import React, { useContext } from "react";
import './css/Motor.css'
import { ShopContext } from "../context/ShopContext";

const Motor = (props) => {
    const {all_product} = useContext(ShopContext)
    return (
        <div className="moto-category">
          <img src={props.banner} alt="" />
        </div>
    );
}
export default Motor