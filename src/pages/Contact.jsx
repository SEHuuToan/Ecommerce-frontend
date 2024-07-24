import './css/Contact.css';
import contact_banner from '../components/assets/other_img/contact_banner.jpeg'
import { Button, Form, Input } from 'antd'

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
      <img className="contact-banner" src={contact_banner} alt="contact_banner" />
      <div className="contact-title">
        <h1 >Contact</h1>
        <hr className="animate__animated animate__slideInRight" />
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-content">
            <p>
              Address: 123 Truong Chinh, Dong Hung Thuan, District 12, Ho Chi Minh city
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
              <Button type="primary" className="contact-submit-btn">
                Submit
              </Button>
            </Form>
          </div>

        </div>
        <div className="contact-right">
          <div className="embbeded-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5381.295071058592!2d106.37830917309374!3d10.989772933136404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1720705290395!5m2!1svi!2s"
              className='iframe-google-map'
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact