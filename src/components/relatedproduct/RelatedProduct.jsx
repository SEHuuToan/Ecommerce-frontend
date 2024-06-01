import { useState, useRef } from "react";
import './RelatedProduct.css'
import  ItemRelated  from "../item_related/ItemRelated";
import PaginationComponent from "../pagination/PaginationComponent";

const RelatedProduct = ({ category, products, currentProductId }) => {
    const relatedProductRef = useRef(null);
    // Lọc các sản phẩm co category lien quan
    const relatedProducts = products.filter(
        (item) => item.category === category && item.id !== currentProductId
    );
    // Tính toán số trang và các sản phẩm hiển thị dựa trên trang hiện tại
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = relatedProducts.slice(startIndex, endIndex);

    return (
        <div className="relatedproducts">
            <h1 ref={relatedProductRef}>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((item) =>
                        <ItemRelated
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price.toLocaleString('en-US')}
                          
                        />
                    )
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
            <PaginationComponent 
                type="category" 
                listItem={relatedProducts}
                refName={relatedProductRef}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
export default RelatedProduct