
import './CreateEditProduct.css'
import {Modal} from 'antd'

const TYPE_TO_OPEN_MODAL = {
    create: 'create',
    edit: 'edit'
}
const CreateEditProduct = ({type, openModal, handleSubmit, handleCancel }) => {
    const statusModal = TYPE_TO_OPEN_MODAL[type];
    return (
            <div className="create-container">
                <Modal
                    centered
                    title={statusModal === 'create' ? 'Tạo Mới' : statusModal === 'update' ? 'Cập Nhật' : ''}
                    open={openModal}
                    onOk={handleSubmit} 
                    onCancel={handleCancel}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
    );
}
export default CreateEditProduct