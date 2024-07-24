import { useRef, useState, useEffect } from "react";
import './css/Motor.css'
import Item from '../components/Item/Item'
import PaginationComponent from "../components/pagination/PaginationComponent";
import useProductStore from "../store/productStore";
import empty_motor_img from "../components/assets/other_img/out-of-stock.png";
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
  // const { all_product } = useContext(ShopContext);
  const displayName = getCategoryDisplayName(props.category);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const { products, fetchProducts } = useProductStore((state) => ({
    products: state.products,
    fetchProducts: state.fetchProducts,
  }));
  const fillterProducts = props.category === 'motor' ? products : products.filter(item => item.category === props.category);
  const paginatedProducts = fillterProducts.slice(startIndex, endIndex);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
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
              id={item._id}
              name={item.name}
              image={item.image}
              odo={item.odo}
              color={item.color}
              model={item.model}
              price={item.price}
            />
          )
        ) : (
          <div className="motor-empty">
              <div>
                <img className="motor-empty-img1" src={empty_motor_img} alt="empty_motor_img" />
              </div>
              <div className="motor-empty-description">
                <span>
                  Sorry! No results found for &quot;{<a className="motor-empty-description-category">{displayName}</a>}&quot;
                </span>
              </div>
          </div>
        )}
      </div>
      <div className="motorcategory-pagination">
        <PaginationComponent
          type="category"
          listItem={fillterProducts}
          refName={motoCategoryProductRef}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
export default Motor