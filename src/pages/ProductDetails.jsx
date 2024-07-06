import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from "../components/product_display/ProductDisplay";
import DescriptionBox from "../components/description/DescriptionBox";
import RelatedProduct from "../components/relatedproduct/RelatedProduct";
import { axiosGet } from "../utils/axiosUtils";
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
        getProductById();
    }, [id]);
    
    if (loading) {
        return <div>Loading...</div>; // Hiển thị trạng thái loading khi đang tải sản phẩm
    }
    if (!product) {
        return console.log('Can\'t found product!')
    }
    // Kiểm tra nếu product đã có giá trị trước khi truy cập vào thuộc tính category
    if (!product.category) {
        return console.log('Can\'t found category of product!')
    }
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product} />
            <DescriptionBox product={product} />
            <RelatedProduct 
                 category={product.category} 
                 product={product} 
                 currentProductId={id} 
            />
        </div>
    );
}
export default Product