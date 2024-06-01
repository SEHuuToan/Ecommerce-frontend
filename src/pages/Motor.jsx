import { useContext, useRef, useState } from "react";
import './css/Motor.css'
import { ShopContext } from "../context/ShopContext";
import Item from '../components/Item/Item'
import PaginationComponent from "../components/pagination/PaginationComponent";

const getCategoryDisplayName = (category) => {
  switch (category) {
    case 'motor':
      return 'Motor';
    case 'sport-bike':
      return 'Sport Bike';
    case 'naked-bike':
      return 'Naked Bike';
    case 'adventure':
      return 'Adventure';
    case 'classic':
      return 'Classic';
    default:
      return category; // Trả về giá trị mặc định nếu không khớp với bất kỳ trường hợp nào
  }
};
const Motor = (props) => {
  const motoCategoryProductRef = useRef(null);
  const { all_product } = useContext(ShopContext);
  const fillterProducts = props.category === 'motor' ? all_product : all_product.filter(item => item.category === props.category);
  const displayName = getCategoryDisplayName(props.category);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = fillterProducts.slice(startIndex, endIndex);
  
  return (
    <div className="moto-category">
      <img className="motocategory-banner" src={props.banner} alt="motor_banner" />
      <div className="motocategory-category-title">
        <h1 ref={motoCategoryProductRef}>{displayName}</h1>
        <hr />
      </div>
      <div className="motorcategory-products" >
        {paginatedProducts.length > 0 ? (
             paginatedProducts.map((item, i) => 
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                odo={item.odo}
                color={item.color}
                model={item.model}
                price={item.price}
              />
            )
        ) : (
            <p>No products found.</p>
        )}
      </div>
      <div className="motorcategory-pagination">
        <PaginationComponent  
            type="category" 
            listItem={all_product} 
            refName={motoCategoryProductRef}
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}
            />
      </div>

    </div>
  );
}
export default Motor