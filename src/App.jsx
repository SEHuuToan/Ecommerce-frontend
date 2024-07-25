import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Shop from './pages/Shop';
import Motor from './pages/Motor';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Product from './pages/ProductDetails';
import banner_motor from './components/assets/banner/motor_banner.png';
import banner_sport from './components/assets/banner/banner_sportbike.png';
import banner_naked from './components/assets/banner/banner_nakedbike.png';
import banner_adventure from './components/assets/banner/banner_adventure.png';
import banner_classic from './components/assets/banner/banner_classic.png';
import ErrorPage from './pages/ErrorPage';
import CommonLayout from './layoutElement/CommonLayout';
import ProtectedRoutes from './utils/ProtectedRoutes';

import useBlogStore from './store/blogStore';
function App() {
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);
  useEffect(() => {
      fetchBlogs();
  }, [fetchBlogs])
  return (
    <>
      <div >
        <BrowserRouter>
          <Routes>
            <Route element={<CommonLayout />}>
              <Route element={<ProtectedRoutes />}>
                <Route path='/' element={<Shop />} />
                <Route path='/motor' element={< Motor banner={banner_motor} category="motor" />} />
                <Route path='/sport-bike' element={< Motor banner={banner_sport} category="sport-bike" />} />
                <Route path='/naked-bike' element={< Motor banner={banner_naked} category="naked-bike" />} />
                <Route path='/adventure' element={< Motor banner={banner_adventure} category="adventure" />} />
                <Route path='/classic' element={< Motor banner={banner_classic} category="classic" />} />
                <Route path='/blog' element={< Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path='/contact' element={< Contact />} />
                <Route path="/products/:id" element={<Product />} />
              </Route>
            </Route>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
