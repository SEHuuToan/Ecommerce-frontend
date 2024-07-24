import { useEffect, useState, useCallback } from 'react';
import './Navbar.css'
import logo from '../assets/logo/logo.png'
import { Button, Menu, Drawer, Space, Popover, Empty } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { MenuOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons'
import Search from '../search/Search';
import { axiosGet } from "../../utils/axiosUtils";
import debounce from 'lodash.debounce';
import useSearchProductStore from "../../store/searchStore";

const Navbar = () => {
    const location = useLocation();
    let [menu, setMenu] = useState("shop");
    let [drawerMenuVisible, setDrawerMenuVisible] = useState(false);
    let [openPopover, setOpenPopover] = useState(false);
    let [openPopoverBtn, setOpenPopoverBtn] = useState(false);
    let [openIconBtn, setOpenIconBtn] = useState(false);
    const query = useSearchProductStore((state) => state.query);
    const setSearchResults = useSearchProductStore((state) => state.setSearchResults);
    const searchResults = useSearchProductStore((state) => state.searchResults);
    const clearQuery = useSearchProductStore(state => state.clearQuery);
    let [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 1024);
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
            label: <Link style={{ textDecoration: 'none' }} to='/blog'>Blog</Link>,
            key: 'blog',
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
    }, [location.pathname]);
    useEffect(() => {
        const handleResize = () => {
            setIsScreenWide(window.innerWidth > 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
        setOpenPopoverBtn(true);
        setOpenIconBtn(true)
    }
    const handleSetCloseBtn = () => {
        setOpenPopoverBtn(false);
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
                    icon={<MenuOutlined style={{ fontSize: '22px' }}/>}
                    onClick={showDrawer}
                />
                <Drawer
                    className='nav-menu-responsive-drawer'
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
            <div className='nav-logo'>
                <Link className='nav-logo-item' to='/'>
                    <img className='imgLogo' src={logo} alt="logo" />
                    <p>Motocycle</p>
                </Link>
            </div>
            <div className='nav-menu-item'>
                {isScreenWide && (
                    <Menu onClick={onClick}
                        selectedKeys={[menu]}
                        mode="horizontal"
                        items={navItems}
                        className='nav-select-menu'
                    />
                )}
            </div>


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
                    open={openPopoverBtn}
                    onOpenChange={handleSetOpenBtn}
                >
                    <Button type="primary"
                        size='large'
                        onClick={openIconBtn ? handleSetCloseBtn : handleSetOpenBtn}
                        style={{
                            backgroundColor: openIconBtn ? '#FF4D4F' : '#1677FF',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 0, // Đảm bảo không có khoảng đệm
                        }}
                    >
                        {openIconBtn ? <CloseOutlined style={{ fontSize: '22px' }} /> : <SearchOutlined style={{ fontSize: '22px' }} />}
                    </Button>
                </Popover>
            </div>
        </div>
    );
}
export default Navbar