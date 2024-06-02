
import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button, Menu, Drawer, Modal, Input, message } from 'antd';
import { useLocation } from 'react-router-dom';
import { UserOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import Search from '../search/Search';

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState("shop");
    const [drawerMenuVisible, setDrawerMenuVisible] = useState(false);
    const [searchMenuVisible, setSearchMenuVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
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
        if (!searchQuery.trim()) {
            message.error('Can\'t find any result if you don\'t type anything');
            return;
        }
        //Đảm bảo logic sau khi search sẽ điều hướng router về 1 trang gọi là Search Result
        //Nơi sẽ hiển thị các item dựa theo kết quả được trả về (giống filter của Sport, Naked, Adventure, Classic)
    }

    const showDrawer = () => {
        setDrawerMenuVisible(true);
    };

    const closeDrawer = () => {
        setDrawerMenuVisible(false);
    };
    const openSearchMenu = () => {
        setSearchMenuVisible(true);
    };

    const closeSearchMenu = () => {
        setSearchMenuVisible(false);
    };
    return (
        <div className='navbar'>

            <div className='nav-menu-responsive'>
                <Button
                    size='large'
                    className='menu-button'
                    icon={<MenuOutlined />}
                    onClick={showDrawer}
                />
                <Drawer
                    style={{
                        width: 350,
                    }}
                    title="Menu"
                    placement="left"
                    onClose={closeDrawer}
                    visible={drawerMenuVisible}
                >
                    <Menu
                        onClick={onClick}
                        selectedKeys={[menu]}
                        mode="inline"
                        items={items}
                        defaultOpenKeys={['motor']} // Mở tất cả submenus
                    />
                </Drawer>
            </div>

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
            <div className="nav-loginsearch">
                <Search onSearch={onSearch} />
                <Button href='/login' size='large' className='nav-loginsearch-login' type='text' icon={<UserOutlined style={{ fontSize: '28px' }} />}></Button>
            </div>



            <div className="icon-search-responsive">
                <Button
                    size='large'
                    className='search-button-responsive'
                    icon={<SearchOutlined style={{ fontSize: '20px' }} />}
                    onClick={openSearchMenu}
                />
                <Modal
                    title="Input to search"
                    visible={searchMenuVisible}
                    onOk={setSearchMenuVisible}
                    onCancel={closeSearchMenu}
                    footer={[
                        <Button key="search" type="primary" onClick={onSearch}>
                            Search
                        </Button>,
                    ]}
                >
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Modal>
            </div>
        </div>

    );

}
export default Navbar