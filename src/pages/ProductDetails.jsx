import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from "../components/product_display/ProductDisplay";
import DescriptionBox from "../components/description/DescriptionBox";
import RelatedProduct from "../components/relatedproduct/RelatedProduct";
import { axiosGet } from "../utils/axiosUtils";
import { Spin, Skeleton } from "antd";
import LoadingPage from '../components/loading/LoadingPage';
import LoadingSpin from '../components/loading/LoadingSpin';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const getProductById = async () => {
        try {
            const res = await axiosGet(`${id}`);
            setProduct(res.data);
            setLoading(false); // Dừng trạng thái loading khi dữ liệu được tải xong
        } catch (error) {
            console.error('Error when loading 1 product', error);
            setLoading(false); // Dừng trạng thái loading khi gặp lỗi
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getProductById();
            setLoading(false); 
        }, 650)
    }, [id]);
    if (loading) {
        return <>
            <LoadingPage />
        </>
    }
    if (!product) {
        return console.log('Can\'t found product!')
    }
    // Kiểm tra nếu product đã có giá trị trước khi truy cập vào thuộc tính category
    if (!product.category) {
        return console.log('Can\'t found category of product!')
    }
    return (
        <>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox product={product} />
            <RelatedProduct
                category={product.category}
                product={product}
                currentProductId={id}
            />
        </>
    );
}
export default Product