
import './App.css'
import Navbar from './components/navbar/Navbarr'
import { BrowserRouter, Routes, Route,   } from 'react-router-dom'
import Shop from './pages/Shop'
import Motor from './pages/Motor'
import SportBike from './pages/SportBike'
import NakedBike from './pages/NakedBike'
import Adventure from './pages/AdventureBike'
import Classic from './pages/ClassicBike'
import Contact from './pages/Contact'

import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'



function App() {
  return (
    <>
      <div >
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/motor' element={< Motor/>} />
          <Route path='/sport-bike' element={< Motor category="sport-bike"/> } />
          <Route path='/naked-bike' element={< Motor category="naked-bike"/>} />
          <Route path='/adventure' element={< Motor category="adventure"/>} />
          <Route path='/classic' element={< Motor category="classic"/>} />
          <Route path='/contact' element={< Contact/>} />
          <Route path='product' element={<Product/>} >
             <Route path=':productId' element={<Product/>} />
          </Route>   
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />

        </Routes>
        <Footer />
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
