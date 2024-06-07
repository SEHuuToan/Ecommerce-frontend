import React from "react";
import './CreateEditProduct.css'
import {Modal} from 'antd'

const CreateEditProduct = () => {

    return (
            <div className="create-container">
                <Modal
                    title="Vertically centered modal dialog"
                    centered
         
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
    );
}
export default CreateEditProduct