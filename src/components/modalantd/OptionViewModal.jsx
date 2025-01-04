import PropTypes from 'prop-types';
import { Modal, List } from 'antd';
import './OptionViewModal.css';
const OptionViewModal = ({ visible, onClose, options }) => {
    return (
        <>
            <Modal
                open={visible}
                onCancel={onClose}
                footer={null}
                className="modal-container"
            >
                <div className="modal-title">View Options</div>
                <List   
                    className="modal-list-content"
                    dataSource={options}
                    renderItem={(option, index) => (
                        <List.Item key={index}>
                            <span>
                                <span style={{ marginRight: '8px' }}>•</span>
                                {option}
                            </span>
                        </List.Item>
                    )}
                />
            </Modal>
        </>
    )
}
OptionViewModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default OptionViewModal;