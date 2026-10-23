import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MyAccount from './components/MyAccount'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Register from './components/Register'
import MainCourse from './components/MainCourse'
import NonVeg from './components/NonVeg'
import Veg from './components/Veg'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Chinese from './components/Chinese'
import Platters from './components/Platters'
import Buy from './components/Buy'
import Combos from './components/Combos'
 
 


const App = () => {
  return (
    <BrowserRouter>
      <div className="parent">
        <Navbar />
      

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Card />
                
                 
              </>
            }
          />

          
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/MainCourse" element={<MainCourse />} />
          <Route path="/NonVeg" element={<NonVeg />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Chinese" element={<Chinese />} />
          <Route path="/Platters" element={<Platters />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Combos" element={<Combos />} />
           
          
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App