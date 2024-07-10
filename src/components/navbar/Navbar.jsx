import { useEffect, useState, useCallback } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button, Menu, Drawer, Dropdown, Space, Popover, Empty } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { MenuOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons'
import Search from '../search/Search';
import { axiosGet } from "../../utils/axiosUtils";
import debounce from 'lodash.debounce';
import useSearchProductStore from "../../store/searchStore";
import 'animate.css'

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState("shop");
    const [drawerMenuVisible, setDrawerMenuVisible] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);
    const [openIconBtn, setOpenIconBtn] = useState(false);
    const query = useSearchProductStore((state) => state.query);
    const setSearchResults = useSearchProductStore((state) => state.setSearchResults);
    const searchResults = useSearchProductStore((state) => state.searchResults);
    const clearQuery = useSearchProductStore(state => state.clearQuery);
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
    const handleOpenPopover = (open) => {
        setOpenPopover(open);
    }
    const handleSetOpenBtn = () => {
        setOpenPopover(true);
        setOpenIconBtn(true)
    }
    const handleSetCloseBtn = () => {
        setOpenPopover(false);
        setOpenIconBtn(false)
    }
    const handleClosePopover = () => {
        setOpenPopover(false);
        setOpenIconBtn(false)
        clearQuery();
    }
    const popoverSearchContent = () => {
        return (
            <div className='search-item-result'>
                <div className='search-component'>
                    <Search />
                </div>
                <div className='search-results'>
                    {searchResults.length > 0 ? (
                        searchResults.map((result) => (
                            <Link to={`/products/${result._id}`} className="search-item-link" key={result._id} onClick={handleClosePopover}>
                                <img src={result.image.length > 0 ? result.image[0].url : ''} className='search-item-img' alt={result.name} />
                                <div className='search-item-details'>
                                    <span className='search-item-name'>
                                        {result.name}
                                    </span>
                                    <span className='search-item-price'>
                                        Price: {result.price.toLocaleString('en-US')} $
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <Empty description={false} />
                    )}
                </div>
            </div>
        );
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
            <div className="input-search-responsive">
                <Popover
                    content={popoverSearchContent}
                    trigger="click"
                    open={openPopover}
                    onOpenChange={handleOpenPopover}
                    overlayStyle={{ cursor: 'pointer' }}
                >
                    <div>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <Search />
                            </Space>
                        </a>
                    </div>
                </Popover>
            </div>
            <div className='button-search-responsive'>
                <Popover
                    content={popoverSearchContent}
                    trigger="click"
                    open={openPopover}
                    onOpenChange={handleSetOpenBtn}
                >
                    <Button type="primary" 
                        onClick={openIconBtn ? handleSetCloseBtn : handleSetOpenBtn}
                        style={openIconBtn ? {backgroundColor: '#FF4D4F'} : {backgroundColor: '#1677FF'} }
                    >
                        {openIconBtn ? <CloseOutlined style={{ fontSize: '22px' }}/> : <SearchOutlined style={{ fontSize: '22px' }}/>}
                    </Button>
                </Popover>
            </div>
        </div>
    );
}
export default Navbar