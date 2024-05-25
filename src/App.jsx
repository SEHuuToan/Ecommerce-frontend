
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route,   } from 'react-router-dom'
import Shop from './pages/Shop'
import Motor from './pages/Motor'
import SportBike from './pages/SportBike'
import NakedBike from './pages/NakedBike'
import Adventure from './pages/AdventureBike'
import Classic from './pages/ClassicBike'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/ProductDetails'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Footer from './components/footer/Footer'
import banner_motor from './components/assets/banner/motor_banner.png'
import banner_sport from './components/assets/banner/banner_sportbike.png'
import banner_naked from './components/assets/banner/banner_nakedbike.png'
import banner_adventure from './components/assets/banner/banner_adventure.png'
import banner_classic from './components/assets/banner/banner_classic.png'



function App() {
  return (
    <>
      <div >
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/motor' element={< Motor banner={banner_motor} category="motor"/>} />
          <Route path='/sport-bike' element={< Motor banner={banner_sport} category="sport-bike"/> } />
          <Route path='/naked-bike' element={< Motor banner={banner_naked} category="naked-bike"/>} />
          <Route path='/adventure' element={< Motor banner={banner_adventure} category="adventure"/>} />
          <Route path='/classic' element={< Motor banner={banner_classic} category="classic"/>} />
          <Route path='/about' element={< About/>} />
          <Route path='/contact' element={< Contact/>} />
          <Route path='product' element={<Product/>} >
             <Route path=':productId' element={<Product/>} />
          </Route>   
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          
        </Routes>
        <Footer />
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
