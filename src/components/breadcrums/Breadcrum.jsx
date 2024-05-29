import React from "react"
import './Breadcrum.css'
import { RightOutlined } from '@ant-design/icons'

const getCategoryDisplayName = (category) => {
    switch (category) {
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
const Breadcrums = (props) => {
    const { product } = props;
    const displayName = getCategoryDisplayName(product.category);
    return (
        <div className="breadcrum">
            <a href="/">Home</a>
                <RightOutlined style={{ fontSize: '13px', color: '#515151' }} />
            <a href="/motor" >Motor</a>
                <RightOutlined style={{ fontSize: '13px', color: '#515151' }} />
            <a href={`/${product.category}`} >{displayName}</a> 
                <RightOutlined style={{ fontSize: '13px', color: '#515151' }} /> 
            <a href={`/product/${product.id}`}>{product.name}</a> 
        </div>
    );
}
export default Breadcrums