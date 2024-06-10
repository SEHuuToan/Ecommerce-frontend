import { useState } from "react"
import './CreateEditProduct.css'
import { Modal, Input, Select, Image, Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const STATUS_TO_OPEN_MODAL = {
    create: 'create',
    edit: 'edit'
}
const CLOUDINARY_URL= 'http://382476869196793:FZivZ_toEh63YLL6XykMl_9zj-M@dzljqpjhk'
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const CreateEditProduct = ({ status, openModal, handleSubmit, handleCancel }) => {
    const statusModal = STATUS_TO_OPEN_MODAL[status];
    const title = statusModal === 'create' ? 'Tạo Mới' : statusModal === 'edit' ? 'Cập Nhật' : '';
    //upload image
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);
    const handlePreview = async (image) => {
        if (!image.url && !image.preview) {
            image.preview = await getBase64(image.originFileObj);
        }
        setPreviewImage(image.url || image.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList }) => setFileList(fileList);
    const uploadButton = (
        <button
            style={{ border: 0, background: 'none', }} type="button"
        >
            <PlusOutlined />
            <div style={{ marginTop: 12, }}>
                Upload
            </div>
        </button>
    );
    const handleUploadError = (error) => {
        message.error('Upload failed');
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            message.error('Image must smaller than 5MB!');
        }
        return isJpgOrPng && isLt5M;
    };
    return (
        <div className="create-container">
            <Modal
                centered
                maskClosable={false}
                title={title}
                open={openModal}
                onOk={handleSubmit}
                onCancel={handleCancel}
            >
                <div className="modal-input">
                    <div>
                        <span>Product Title</span>
                        <Input />
                    </div>
                    <div>
                        <span>Capacity</span>
                        <Input />
                    </div>
                    <div>
                        <span>ODO</span>
                        <Input />
                    </div>
                    <div>
                        <span>Color</span>
                        <Input />
                    </div>
                    <div>
                        <span>Model</span>
                        <Input />
                    </div>
                    <div>
                        <span>Brand</span>
                        <Input />
                    </div>
                    <div>
                        <span>Option</span>
                        <Input />
                    </div>
                    <div>
                        <span>Category</span>
                        <Select
                            style={{ width: '100%' }}
                            options={[
                                { value: 'sport-bike', label: <span>Sport Bike</span> },
                                { value: 'naked-bike', label: <span>Naked Bike</span> },
                                { value: 'adventure', label: <span>Adventure Bike</span> },
                                { value: 'classic', label: <span>Classic Bike</span> },]}
                        />
                    </div>
                    <div>
                        <span>Price</span>
                        <Input />
                    </div>
                    <div>
                        <Upload
                            action={CLOUDINARY_URL}
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            beforeUpload={beforeUpload}
                            onError={handleUploadError}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        {previewImage && (
                            <Image
                                wrapperStyle={{
                                    display: 'none',
                                }}
                                preview={{
                                    visible: previewOpen,
                                    onVisibleChange: (visible) => setPreviewOpen(visible),
                                    afterOpenChange: (visible) => !visible && setPreviewImage(''),
                                }}
                                src={previewImage}
                            />      
                        )} 
                    </div>
                </div>
            </Modal>
        </div>
    );
}
export default CreateEditProduct