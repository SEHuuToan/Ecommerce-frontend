import { useState } from "react";
import './RelatedProduct.css';
import ItemRelated from "../item_related/ItemRelated";
import PaginationComponent from "../pagination/PaginationComponent";
import { useQuery } from 'react-query';
import { axiosGet } from "../../utils/axiosUtils";
import { Empty, Skeleton  } from 'antd';
import PropTypes from 'prop-types';

const getRelatedProducts = async (category) => {
    const res = await axiosGet(`${category}`);
    return res.data;
};

const RelatedProduct = ({ category, currentProductId }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Use React Query to fetch related products
    const { data: relatedProduct = [], isLoading, isError } = useQuery(
        ['relatedProducts', category],
        () => getRelatedProducts(category),
        {
            keepPreviousData: true,
        }
    );

    // Filter out the current product
    const filteredProducts = relatedProduct.filter(item => item._id !== currentProductId);

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // Number of skeletons to show when loading
    const skeletonCount = itemsPerPage;

    return (
        <div className="relatedproducts">
            <h1>Related Product</h1>
            <hr />
            <div className="relatedproducts-item">
                {isLoading ? (
                    // Render skeletons when loading
                    Array.from({ length: skeletonCount }).map((_, index) => (
                        <div key={index} className="skeleton-item">
                            <Skeleton.Image active style={{ width: 400, height: 300 }} />
                            <Skeleton active title={false} paragraph={{ rows: 2, width: ['100%', '80%'] }} />
                        </div>
                    ))
                ) : paginatedProducts.length > 0 ? (
                    // Render actual items when data is loaded
                    paginatedProducts.map((item) => (
                        <ItemRelated
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            odo={item.odo}
                            price={item.price}
                        />
                    ))
                ) : (
                    <div className="relatedproducts-item-nodata">
                        <Empty description={false} />
                    </div>
                )}
            </div>

            <div className="relatedproduct-pagination">
                <PaginationComponent
                    type="related"
                    listItem={filteredProducts}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

RelatedProduct.propTypes = {
    category: PropTypes.string.isRequired,
    currentProductId: PropTypes.string.isRequired,
};

export default RelatedProduct;
