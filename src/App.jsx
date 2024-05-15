
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'


function App() {
  return (
    <>
      <div >
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/sport-bike' element={<ShopCategory category="sport"/>} />
          <Route path='/naked-bike' element={<ShopCategory category="naked"/>} />
          <Route path='/adventure' element={<ShopCategory category="adventure"/>} />
          <Route path='/classic' element={<ShopCategory category="classic"/>} />
          <Route path='product' element={<Product/>} >
             <Route path=':productId' element={<Product/>} />
          </Route>   
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />

        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
