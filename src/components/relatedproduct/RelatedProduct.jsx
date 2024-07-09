import { useState, useRef, useEffect, useCallback, memo } from "react";
import './RelatedProduct.css'
import ItemRelated from "../item_related/ItemRelated";
import PaginationComponent from "../pagination/PaginationComponent";
import { axiosGet } from "../../utils/axiosUtils";
import { Empty } from 'antd'
import PropTypes from 'prop-types';

const RelatedProduct = ({ category, currentProductId }) => {
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const getRelatedProductByCategory = useCallback(async () => {
        try {
            const res = await axiosGet(`${category}`);
            // Loai bo san pham dang duoc chon ra khoi ds related product
            const filteredProducts = res.data.filter(item => item._id !== currentProductId);
            setRelatedProduct(filteredProducts);
        } catch (error) {
        }
    }, [category, currentProductId]);
    const relatedProductRef = useRef(null);
    useEffect(() => {
        getRelatedProductByCategory();
    }, [getRelatedProductByCategory]);
    // Tính toán số trang và các sản phẩm hiển thị dựa trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = relatedProduct.slice(startIndex, endIndex);
    return (
        <div className="relatedproducts">
            <h1 ref={relatedProductRef}>Related Product</h1>
            <hr />
            <div className="relatedproducts-item">
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((item) =>
                        <ItemRelated
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            odo={item.odo}
                            price={item.price}
                        />
                    )
                ) : (
                    <div className="relatedproducts-item-nodata">
                        <Empty description={false} />
                    </div>
                )}
            </div>

            <div className="relatedproduct-pagination">
                <PaginationComponent
                    type="related"
                    listItem={relatedProduct}
                    refName={relatedProductRef}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

        </div>
    );
}
RelatedProduct.propTypes = {
    category: PropTypes.string.isRequired,
    currentProductId: PropTypes.string.isRequired,
}
export default RelatedProduct