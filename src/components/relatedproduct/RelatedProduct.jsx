import React, { useContext, useState } from "react";
import './RelatedProduct.css'
import { ShopContext } from "../../context/ShopContext";
import Item from "../item_related/ItemRelated";

const RelatedProduct = ({ category, products, currentProductId }) => {
    const relatedProducts = products.filter(
        (item) => item.category === category && item.id !== currentProductId
    );

    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {relatedProducts.length > 0 ? (
                    relatedProducts.map((item, i) =>
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    )
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
        </div>
    );
}
export default RelatedProduct