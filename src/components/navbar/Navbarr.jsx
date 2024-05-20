
import React, { useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';


const  items = [
    {
        key: 'shop',
        label: (
           <a> <Link style={{textDecoration: 'none'}} to='/'>Shop</Link></a>
        )
    },
    {
        label: 'Motor',
        key: 'motor',
        children: [
            {
                label:  <a> <Link style={{textDecoration: 'none', fontWeight: 600}} to='/sport-bike'>Sport Bike</Link></a>,
                key: 'sportbike'
            },
            {
                label: <a> <Link style={{textDecoration: 'none', fontWeight: 600}} to='/naked-bike'>Naked Bike</Link></a>,
                key: 'nakedbike'
            },
            {
                label: <a> <Link style={{textDecoration: 'none', fontWeight: 600}} to='/adventure'>Adventure</Link></a>,
                key: 'adventure'
            },
            {
                label: <a> <Link style={{textDecoration: 'none', fontWeight: 600}} to='/classic'>Classic</Link></a>,
                key: 'classic'
            },
        ]
    },
    {
        label: <a> <Link style={{textDecoration: 'none'}} to='/about'>About Us</Link></a>,
        key: 'about',
    },
    {
        label: <a> <Link style={{textDecoration: 'none'}} to='/contact'>Contact</Link></a>,
        key: 'contact',
    },

]

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    const onClick = (e) => {
        setMenu(e.key);
      };
    
    return (
        <div className='navbar'>
            <a className='nav-logo' href='/'>
                     <img className='imgLogo' src={logo} alt="logo" />
                <p>Motocycle</p>
            </a>
               <Menu onClick={onClick} 
                     selectedKeys={[menu]} 
                     mode="horizontal" 
                     items={items}
                     className='nav-select-menu'
               />
            <div className="nav-login-cart">
               <Link style={{textDecoration: 'none'}} to='/login'>
               <Button type="primary">
                    Login
               </Button>
               </Link>
               <Link to='/cart'>
                   <ShoppingCartOutlined style={{fontSize: '36px', color: 'black'}}/>
               </Link>
               <div className="nav-cart-count">
                   0
               </div>
            </div>
         </div>
        
    );

}
export default Navbar