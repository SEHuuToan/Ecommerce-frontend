
import React, { useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='imgLogo' src={logo} alt="logo" />
                <p>Motocycle</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("sport")}}>Super Sport{menu==="sport"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("naked")}}>Naked Bike{menu==="naked"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("adventure")}}>Adventure{menu==="adventure"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("classic")}}>Classic / Cafe Racer{menu==="classic"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Button type="primary">
                    Login
                </Button>
                <ShoppingCartOutlined style={{fontSize: '36px'}}/>
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    );

}
export default Navbar