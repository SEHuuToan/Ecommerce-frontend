import { useEffect, useState, useCallback } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button, Menu, Drawer, Dropdown, Space } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons'
import Search from '../search/Search';
import { axiosGet } from "../../utils/axiosUtils";
import debounce from 'lodash.debounce';
import useSearchProductStore from "../../store/searchStore";


const Navbar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState("shop");
    const [drawerMenuVisible, setDrawerMenuVisible] = useState(false);
    const query = useSearchProductStore((state) => state.query);
    const setSearchResults = useSearchProductStore((state) => state.setSearchResults);
    const searchResults = useSearchProductStore((state) => state.searchResults);
    const navItems = [
        {
            key: '/',
            label: (
                <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
            )
        },
        {
            label: <Link style={{
                color: ['motor', 'sportbike', 'nakedbike', 'adventure', 'classic'].includes(menu) ? '#1677ff' : '#171717'
            }}
                to='/motor'>Motor
            </Link>,
            key: 'motor',
            onTitleClick: (e) => {console.log(e);setMenu(e.key)},
            children: [
                {
                    label: <Link style={{ textDecoration: 'none', fontWeight: 600 }} to='/sport-bike'>Sport Bike</Link>,
                    key: 'sportbike'
                },
                {
                    label: <Link style={{ textDecoration: 'none', fontWeight: 600 }} to='/naked-bike'>Naked Bike</Link>,
                    key: 'nakedbike'
                },
                {
                    label: <Link style={{ textDecoration: 'none', fontWeight: 600 }} to='/adventure'>Adventure</Link>,
                    key: 'adventure'
                },
                {
                    label: <Link style={{ textDecoration: 'none', fontWeight: 600 }} to='/classic'>Classic</Link>,
                    key: 'classic'
                },
            ]
        },
        {
            label: <Link style={{ textDecoration: 'none' }} to='/about'>About Us</Link>,
            key: 'about',
        },
        {
            label: <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>,
            key: 'contact',
        },
    ]

    const itemSearchNav = searchResults.map((result) => ({
        label: (
            <a style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }} >
                <img src={result.image} style={{ width: '120px', height: '120px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>
                        {result.name}
                    </span>
                    <span style={{ fontSize: '18px', color: '#EF4444' }}>
                        Price: {result.price.toLocaleString('en-US')} $
                    </span>
                </div>
            </a>
        ),
        key: result._id,
    }));

    const handleSearch = useCallback(debounce(async () => {
        if (query) {
            try {
                const res = await axiosGet(`search/${query}`);
                setSearchResults(res.data);
                console.log('product search: ', res.data);
            } catch (error) {
                console.error('Error searching:', error);
            }
        } else {
            setSearchResults([]);
        }
    }, 500), [query, setSearchResults])

    useEffect(() => {
        handleSearch(query);
    }, [query, handleSearch]);

    const handleMenuClick = (e) => {
        const productId = e.key
        window.location.href = `/products/${productId}`
    };
    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };
    const onClick = (e) => {
        console.log("e navbar", e);
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
    const showDrawer = () => {
        setDrawerMenuVisible(true);
    };
    const closeDrawer = () => {
        setDrawerMenuVisible(false);
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
                        items={navItems}
                        defaultOpenKeys={['motor']} // Mở tất cả submenus
                    />
                </Drawer>
            </div>

            <Link className='nav-logo' to='/'>
                <img className='imgLogo' src={logo} alt="logo" />
                <p>Motocycle</p>
            </Link>
            <Menu onClick={onClick}
                selectedKeys={[menu]}
                mode="horizontal"
                items={navItems}
                className='nav-select-menu'
            />
            <div className="nav-loginsearch">
                <Dropdown
                    menu={{
                        items: itemSearchNav,
                        onClick: handleMenuClick,
                    }}
                    onOpenChange={handleOpenChange}
                    open={open}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Search />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
}
export default Navbar