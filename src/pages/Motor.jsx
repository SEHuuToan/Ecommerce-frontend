import React, { useContext } from "react";
import './css/Motor.css'
import { ShopContext } from "../context/ShopContext";
import Item from '../components/Item/Item'

const Motor = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className="moto-category">
      <img className="motocategory-banner" src={props.banner} alt="motor_banner" />
      <div className="motorcategory-indexSort">
        <p>
          <span> Showing 1-12 </span> out of 36 products
        </p>
        <div className="motorcategory-sort">
          Sort by
        </div>
      </div>
      <div className="motorcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        odo={item.odo}
                        color={item.color}
                        model={item.model}
                        price={item.price} 
                        />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="motor-category-loadmore">
        Explore More
      </div>
    </div>
  );
}
export default Motor