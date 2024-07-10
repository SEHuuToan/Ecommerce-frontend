import { useEffect, useState, useCallback } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button, Menu, Drawer, Dropdown, Space, Popover } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons'
import Search from '../search/Search';
import { axiosGet } from "../../utils/axiosUtils";
import debounce from 'lodash.debounce';
import useSearchProductStore from "../../store/searchStore";
import 'animate.css'

const Navbar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState("shop");
    const [drawerMenuVisible, setDrawerMenuVisible] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);
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
            onTitleClick: (e) => { setDrawerMenuVisible(false); setMenu(e.key) },
            children: [
                {
                    label: <Link style={{ textDecoration: 'none', fontWeight: 600 }} to='/sport-bike' className='animate__animated animate__fadeIn'>Sport Bike</Link>,
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

    const itemSearchNav = searchResults.map((result) => {
        const imageUrl = result.image.length > 0 ? result.image[0].url : '';
        return {
            label: (

                <Link to={`/products/${result._id}`} className="search-item-link">
                    <img src={imageUrl} className='search-item-img' />
                    <div className='search-item-details'>
                        <span style={{ fontSize: '16px', fontWeight: '700' }} className='search-item-name'>
                            {result.name}
                        </span>
                        <span style={{ fontSize: '18px', color: '#EF4444' }} className='search-item-price'>
                            Price: {result.price.toLocaleString('en-US')} $
                        </span>
                    </div>
                </Link>

            ),
            key: result._id,
        }
    });

    const handleSearch = useCallback(
        debounce(async () => {
            if (query) {
                try {
                    const res = await axiosGet(`search/${query}`);
                    setSearchResults(res.data);
                } catch (error) {
                    console.error('Error searching:', error);
                }
            } else {
                setSearchResults([]);
            }
        }, 800), [query, setSearchResults]);

    useEffect(() => {
        handleSearch(query);
    }, [query, handleSearch]);


    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };
    const onClick = (e) => {
        // console.log("e navbar", e);
        setMenu(e.key);
        setDrawerMenuVisible(false);
    };
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setMenu(currentPath);
            return;
        }
        const normalizePath = currentPath.slice(1).split('-').join('')
        setMenu(normalizePath);
    }, [location.pathname])
    const showDrawer = () => {
        setDrawerMenuVisible(true);
    };
    const closeDrawer = () => {
        setDrawerMenuVisible(false);
    };
    const handleOpenPopover = () => {
        setOpenPopover(true);
    }
    const popoverSearchContent = () => {
        return (
            <>
                <div className='search-item-result'>
                    <Search />
                    {searchResults.length > 0 && (
                        <Menu items={itemSearchNav} className='menu-search-responsive-item' />
                    )}
                </div>
            </>
        )
    }

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
                    open={drawerMenuVisible}
                    onClose={closeDrawer}
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
            <div className='icon-search-responsive'>
                <Popover
                    content={popoverSearchContent}
                    trigger="click"
                    open={openPopover}
                    onOpenChange={handleOpenPopover}
                >
                    <Button type="primary">Click me</Button>
                </Popover>
            </div>
        </div>
    );
}
export default Navbar