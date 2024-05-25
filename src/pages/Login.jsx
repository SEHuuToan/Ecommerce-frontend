import React from "react";
import { Button } from 'antd';
import './css/Login.css'

const LoginSignup = () => {
    return(
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-field">
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <Button type="primary">
                    Continue
                </Button>
                <p className="login-signup">Don't have an account? <a href="/signup">Sign Up Now</a></p>
            </div>
        </div>
    );
}
export default LoginSignup