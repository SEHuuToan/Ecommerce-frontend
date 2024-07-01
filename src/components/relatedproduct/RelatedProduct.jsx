import { useState, useRef, useEffect } from "react";
import './RelatedProduct.css'
import ItemRelated from "../item_related/ItemRelated";
import PaginationComponent from "../pagination/PaginationComponent";
import { axiosGet } from "../../utils/axiosUtils";

const RelatedProduct = ({ category, product, currentProductId }) => {
    const [relatedProduct, setRelatedProduct] = useState([]);
    const getRelatedProductByCategory = async () => {
        const res = await axiosGet(`${category}`);
        setRelatedProduct(res.data);
        console.log(res.data)
    }
    const relatedProductRef = useRef(null);
    // Loai bo san pham dang duoc chon ra khoi ds related product
    const relatedProducts = relatedProduct.filter(item => item._id !== currentProductId);

    // Tính toán số trang và các sản phẩm hiển thị dựa trên trang hiện tại
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = relatedProducts.slice(startIndex, endIndex);
    useEffect(() => {
        getRelatedProductByCategory();
    }, []);
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
                            price={item.price.toLocaleString('en-US')}

                        />
                    )
                ) : (
                    <p>No related product found.</p>
                )}
            </div>
            <div className="relatedproduct-pagination">
                <PaginationComponent
                    type="related"
                    listItem={relatedProducts}
                    refName={relatedProductRef}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

        </div>
    );
}
export default RelatedProduct