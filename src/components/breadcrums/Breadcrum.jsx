import { memo } from 'react';
import './Breadcrum.css'
import { RightOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types';

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
const Breadcrums = ({ category, productName }) => {
    const displayName = getCategoryDisplayName(category);
    return (
        <div className="breadcrum">
            <a href="/">Home</a>
            <RightOutlined style={{ fontSize: '13px', color: '#515151' }} />
            <a href="/motor" >Motor</a>
            <RightOutlined style={{ fontSize: '13px', color: '#515151' }} />
            <a href={`/${category}`} >{displayName}</a>
            <RightOutlined style={{ fontSize: '13px', color: '#515151' }} />
            <span className="breadcrum-product-name">{productName}</span>
        </div>
    );
}
Breadcrums.propTypes = {
    productName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}
export default memo(Breadcrums)