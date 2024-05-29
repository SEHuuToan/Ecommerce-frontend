
import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import Search from '../search/Search';

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState("shop");
    const items = [
        {
            key: '/',
            label: (
                <a style={{ textDecoration: 'none' }} href='/'>Shop</a>
            )
        },
        {
            label: <a style={{
                color: ['motor', 'sportbike', 'nakedbike', 'adventure', 'classic'].includes(menu) ? '#1677ff' : '#171717'
            }}
                href='/motor'>Motor
            </a>,
            key: 'motor',
            children: [
                {
                    label: <a style={{ textDecoration: 'none', fontWeight: 600 }} href='/sport-bike'>Sport Bike</a>,
                    key: 'sportbike'
                },
                {
                    label: <a style={{ textDecoration: 'none', fontWeight: 600 }} href='/naked-bike'>Naked Bike</a>,
                    key: 'nakedbike'
                },
                {
                    label: <a style={{ textDecoration: 'none', fontWeight: 600 }} href='/adventure'>Adventure</a>,
                    key: 'adventure'
                },
                {
                    label: <a style={{ textDecoration: 'none', fontWeight: 600 }} href='/classic'>Classic</a>,
                    key: 'classic'
                },
            ]
        },
        {
            label: <a style={{ textDecoration: 'none' }} href='/about'>About Us</a>,
            key: 'about',
        },
        {
            label: <a style={{ textDecoration: 'none' }} href='/contact'>Contact</a>,
            key: 'contact',
        },

    ]

    const onClick = (e) => {
        setMenu(e.key);
    };
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setMenu(currentPath);
            return;
        }
        const normalizePath = currentPath.slice(1).split('-').join('')
        setMenu(normalizePath);
    }, [])
    //Ham search
    const onSearch = () => {
        console.log('Click search button')
    }
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
                <Search onSearch={onSearch} />
                {/* <a style={{ textDecoration: 'none' }} href='/login'>
                    <Button type="primary">
                        Login
                    </Button>
                </a> */}


            </div>
        </div>

    );

}
export default Navbar