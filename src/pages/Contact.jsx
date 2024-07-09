import './css/Contact.css';
import contact_banner from '../components/assets/other_img/contact_banner.jpg'
import { Button, Form, Input } from 'antd'
import 'animate.css'

const layout = {
  labelCol: {
    span: 4,
  },

};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values) => {
  console.log(values);
  //Logic send message with email and description 
};
const Contact = () => {
  return (
    <div className="contact-category">
      <img className="contact-banner animate__animated animate__fadeInRight" src={contact_banner} alt="contact_banner" />
      <div className="contact-title">
        <h1 className="animate__animated animate__fadeInLeft">Contact</h1>
        <hr className="animate__animated animate__slideInRight"/>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-content">
            <p>
              Địa chỉ cửa hàng: 69669, Tân Chánh Hiệp, Phường 6, Quận 12.
            </p>
            <p>
              Hotline: <a href="tel:0369696699">0369696699</a> <a href="https://www.facebook.com/"> (MR. Toan)</a>
            </p>
            <p>
              Fanpage: <a href="https://www.facebook.com/"> Royal Motocycle Viet Nam</a>
            </p>
            <p>
              Email: <a href="mailto:royalmotocyclevietnam@gmail.com"> royalmotocyclevietnam@gmail.com </a>
            </p>
          </div>
          <div className="contact-form">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'address']}
                label="Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'phoneNumber']}
                label="Phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'content']} label="Content">
                <Input.TextArea />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>

        </div>
        <div className="contact-right">
          <img src={contact_banner} alt="img" />
        </div>
      </div>
    </div>
  );
}
export default Contact