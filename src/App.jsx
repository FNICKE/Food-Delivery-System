import React, { useState } from 'react';
import Navbar from './componants/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Place Order/PlaceOrder';
import Footer from './componants/Footer/Footer';
import LoginPopup from './componants/Loginpopup/LoginPopup';

const App = () => {

    const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
