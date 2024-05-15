import React from "react";
import './Popular.css'
import Item from '../Item/Item'
import popular_data_product from '../assets/popular_data'

const Popular = () => {
    return(
        <div className="popular">
            <h1>
                FEATURED PRODUCTS
            </h1>
    
            <div className="popular-item">
                {popular_data_product.map((item, i) => {
                    return <Item key={i} 
                                 id={item.id}
                                 name={item.name}
                                 image={item.image}
                                 odo={item.odo}
                                 color={item.color}
                                 model={item.model}
                                 price={item.price}
                                 />
                })}  
          
            </div>
        </div>
    );
}
export default Popular