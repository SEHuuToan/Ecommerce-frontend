import { useState, memo } from "react";
import './DescriptionBox.css'
import PropTypes from 'prop-types';


const Description = ({ description }) => {
    const [activeTab, setActiveTab] = useState('description');
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
                        {description}
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
    description: PropTypes.string.isRequired,
}
export default memo(Description)