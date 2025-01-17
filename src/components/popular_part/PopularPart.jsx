import { useEffect, useState } from "react";
import './Popular.css'
import Item from '../Item/Item'
import { axiosGet } from "../../utils/axiosUtils";
const PopularPart = () => {
    const [latestProduct, setLatestProduct] = useState([]);
    const getLatestProduct = async() => {
        try {
            const res = await axiosGet('latest-product');
            setLatestProduct(res.data)   
        } catch (error) {
            console.log('Error when get latest product')
        }
    }
    useEffect(() => {
        getLatestProduct();
    }, []);
    return(
        <div className="popular">
            <h1>
                FEATURED PRODUCTS
            </h1>
            <div className="popular-item">
                {latestProduct.map((item, i) => {
                    return <Item key={i} 
                                 id={item._id}
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
export default PopularPart