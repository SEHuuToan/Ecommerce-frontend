import {useState, useRef} from 'react';
import './css/Contact.css';
import contact_banner from '../components/assets/other_img/contact_banner.jpeg'
import { Button, Form, Input, message } from 'antd'
import LoadingPage from '../components/loading/LoadingPage';
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

const Contact = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isCounting, setIsCounting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef(null);

  // const onSubmit = () => {
  //   setCount((prevCount) => prevCount + 1);
  //   if(!isCounting){
  //     setIsCounting(true);
  //     setTimer(10);
  //     intervalRef.current = setInterval(() => {
  //       setTimer((prevTimer) => {
  //         if (prevTimer <= 1) {
  //           clearInterval(intervalRef.current);
  //           setIsCounting(false);
  //           setCount(0); // Reset the count after 10 seconds
  //           return 10;
  //         }
  //         return prevTimer - 1;
  //       });
  //     }, 1000);
  //     message.success("Your message has successful submit!");
  //   }else{
  //     message.warning("You have to wait 10s to submit next message!");

  //   }
  // }
  const onSubmit = () => {
    if (isCounting) {
      message.warning('You have to wait 10s to submit the next message!');
      return;
    }

    setIsLoading(true); // Bật loading
    setTimeout(() => {
      setIsLoading(false); // Tắt loading sau 3 giây
      message.success('Your message has been successfully submitted!');
      setCount((prevCount) => prevCount + 1);
      setIsCounting(true);
      setTimer(10);

      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(intervalRef.current);
            setIsCounting(false);
            setCount(0); // Reset đếm sau 10 giây
            return 10;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }, 3000); // Thời gian chờ loading 3 giây
  };

  


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
              Hotline: <a href="tel:0377405378">0377504378</a> <a href="https://www.facebook.com/kind.master.73/"> (MR. Toan)</a>
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
              onFinish={onSubmit}
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
                    message: 'Please input your Name!',
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
                    message: 'Please input your Address!',
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
                    message: 'Please input your Phone Number!',
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
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'content']} label="Content"  rules={[
                  {
                    required: true,
                    message: 'Please input your Content!',
                  },
                ]}>
                <Input.TextArea />
              </Form.Item>
              <Button type="primary" htmlType={onSubmit} className="contact-submit-btn">
                Submit
              </Button>
              {isLoading && <LoadingPage loading={isLoading} />}
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