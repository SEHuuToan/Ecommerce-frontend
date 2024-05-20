
// import React, { useState } from 'react';
// import './Navbar.css'
// import logo from '../assets/logo/logo.png'
// import { Button } from 'antd';
// import { ShoppingCartOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

//     const [menu, setMenu] = useState("shop");

//     return (
//         <div className='navbar'>
//             <a className='nav-logo' href='/'>
//                      <img className='imgLogo' src={logo} alt="logo" />
//                 <p>Motocycle</p>
//             </a>
//             <ul className="nav-menu">
//                 <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//                 <li onClick={() => {setMenu("sport")}}><Link style={{textDecoration: 'none'}} to='/sport-bike'>Sport Bike</Link>{menu==="sport"?<hr/>:<></>}</li>
//                 <li onClick={() => {setMenu("naked")}}><Link style={{textDecoration: 'none'}} to='/naked-bike'>Naked Bike</Link>{menu==="naked"?<hr/>:<></>}</li>
//                 <li onClick={() => {setMenu("adventure")}}><Link style={{textDecoration: 'none'}} to='/adventure'>Adventure</Link>{menu==="adventure"?<hr/>:<></>}</li>
//                 <li onClick={() => {setMenu("classic")}}><Link style={{textDecoration: 'none'}} to='/classic'>Classic</Link>{menu==="classic"?<hr/>:<></>}</li>
//                 <li onClick={() => {setMenu("contact")}}><Link style={{textDecoration: 'none'}} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>

//             </ul>
//             <div className="nav-login-cart">
//                 <Link style={{textDecoration: 'none'}} to='/login'>
//                 <Button type="primary">
//                     Login
//                 </Button>
//                 </Link>
//                 <Link to='/cart'>
//                     <ShoppingCartOutlined style={{fontSize: '36px', color: 'black'}}/>
//                 </Link>
//                 <div className="nav-cart-count">
//                     0
//                 </div>
//             </div>
//         </div>
//     );

// }
// export default Navbar