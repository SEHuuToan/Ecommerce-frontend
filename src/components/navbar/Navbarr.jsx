
import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button } from 'antd';
import { ShoppingCartOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';


const  items = [
    {
        key: '/',
        label: (
           <a style={{textDecoration: 'none'}} href='/'>Shop</a>
        )
    },
    {
        label: <a style={{textDecoration: 'none',}} href='/motor'>Motor</a>,
        key: 'motor',
        children: [
            {
                label:  <a style={{textDecoration: 'none', fontWeight: 600}} href='/sport-bike'>Sport Bike</a>,
                key: 'sportbike'
            },
            {
                label: <a style={{textDecoration: 'none', fontWeight: 600}} href='/naked-bike'>Naked Bike</a>,
                key: 'nakedbike'
            },
            {
                label: <a style={{textDecoration: 'none', fontWeight: 600}} href='/adventure'>Adventure</a>,
                key: 'adventure'
            },
            {
                label: <a style={{textDecoration: 'none', fontWeight: 600}} href='/classic'>Classic</a>,
                key: 'classic'
            },
        ]
    },
    {
        label: <a style={{textDecoration: 'none'}} href='/about'>About Us</a>,
        key: 'about',
    },
    {
        label: <a style={{textDecoration: 'none'}} href='/contact'>Contact</a>,
        key: 'contact',
    },

]

const Navbar = () => {
    const location = useLocation();

    const [menu, setMenu] = useState("shop");
    
    const onClick = (e) => {
        setMenu(e.key);
      };
    useEffect(() => {
        const currentPath = location.pathname;
        if(currentPath === '/'){
            setMenu(currentPath);
            return;
        }
        const normalizePath = currentPath.slice(1).split('-').join('')
        setMenu(normalizePath);
    }, [])
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
               <a style={{textDecoration: 'none'}} href='/login'>
               <Button type="primary">
                    Login
               </Button>
               </a>
               <a href='/cart'>
                   <ShoppingCartOutlined style={{fontSize: '36px', color: 'black'}}/>
               </a>
               <div className="nav-cart-count">
                   0
               </div>
            </div>
         </div>
        
    );

}
export default Navbar