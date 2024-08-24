import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from "../components/product_display/ProductDisplay";
import DescriptionBox from "../components/description/DescriptionBox";
import RelatedProduct from "../components/relatedproduct/RelatedProduct";
import { axiosGet } from "../utils/axiosUtils";
import LoadingPage from '../components/loading/LoadingPage';
const getProductById = async (id) => {
    const res = await axiosGet(`${id}`);
    return res.data;
};
const Product = () => {
    const { id } = useParams();

    // React Query's useQuery hook for fetching product data
    const { data: product, error, isLoading, isError } = useQuery(['product', id], () => getProductById(id));

    if (isLoading) {
        return <>
            <LoadingPage loading={isLoading}/>
        </>
    }

    // Error state
    if (isError) {
        return <div>Error fetching product data: {error.message}</div>;
    }

    if (!product) {
        return;
    }
    // Destructure product details for ease of use
    const { category, name, description } = product;
    return (
        <>
            <Breadcrum
                category={category}
                productName={name}
            />
            <ProductDisplay product={product} />
            <DescriptionBox description={description} />
            <RelatedProduct
                category={category}
                currentProductId={id}
            />
        </>
    );
}
export default Product