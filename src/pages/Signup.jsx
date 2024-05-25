import React from "react";
import { Button } from 'antd';
import './css/Signup.css'

const LoginSignup = (props) => {
    return(
        <div className="signup">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <div className="signup-field">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <Button type="primary">
                    Continue
                </Button>
                <p className="signup-login">Already have an account? <a href="/login">Login</a></p>
                <div className="signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continue, i agree to the term of use & privacy policy.</p>
                </div>
            </div>
        </div>
    );
}
export default LoginSignup