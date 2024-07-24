import {useState, memo} from "react";
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
                            • Warranty support throughout the entire vehicle usage period.
                        </span>
                        <span>
                            • With a &quot;Motor Custody policy&quot; featuring super preferential interest rates.
                        </span>
                        <span>
                            • Say no to accident-damaged vehicles.
                        </span>
                        <span>
                            • Nationwide vehicle transportation support.
                        </span>
                        <span>
                            • Support in buying back vehicles from customers at the best market prices.
                        </span>
                        <span>
                            • Free modify options on the vehicle.
                        </span>
                        <span>
                            • Buy, sell, and exchange all types of vehicles.
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
export default memo(Description)