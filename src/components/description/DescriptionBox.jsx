import {useState} from "react";
import './DescriptionBox.css'
import PropTypes from 'prop-types';


const Description = ({product}) => {
    const [activeTab, setActiveTab] = useState('description');
    if (!product) {
        return null; // Trả về null hoặc một loader nếu product chưa được tải
    }
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </div>
                <div className={`descriptionbox-nav-box ${activeTab === 'policy' ? 'active' : ''}`}
                    onClick={() => setActiveTab('policy')}
                >
                    Our Policy
                </div>
            </div>
            <div className="descriptionbox-content">
                {activeTab === 'description' && (
                    <div className="descriptionbox-textarea">
                        {product.description}
                    </div>
                )}
                 {activeTab === 'policy' && (
                    <div className="descriptionbox-outpolicy">
                        <span>
                            • Hỗ trợ bảo hành trong suốt quá trình sử dụng xe
                        </span>
                        <span>
                            • &quot;Giữ hộ&quot; Motor | OTO với lãi suất SIÊU ƯU ĐÃI
                        </span>
                        <span>
                            • Nói không với xe đâm đụng tai nạn
                        </span>
                        <span>
                            • Hỗ trợ vận chuyển xe toàn quốc
                        </span>
                        <span>
                            • Bao quay đầu với giá tốt nhất 
                        </span>
                        <span>
                            • Tặng kèm Options trên xe
                        </span>
                        <span>
                            • Trao đổi tất cả các loại xe
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
Description.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        odo: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.arrayOf(
            PropTypes.shape({
                public_id: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            })
        ),
        price: PropTypes.number.isRequired,
        
    })
}
export default Description