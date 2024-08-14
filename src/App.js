import React from 'react'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';


function App() {

  const[showLogin,setShowLogin] = useState(false)

  return (
    <> 
    {showLogin?<LoginPopup setShowLogin= {setShowLogin}/>:<></>}
    <div className='app'>
      <BrowserRouter>
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>}/>

    
     </Routes>
     </BrowserRouter>
    </div>
    <AppDownload/>
    <Footer/>
    </>
  )
}

export default App;
