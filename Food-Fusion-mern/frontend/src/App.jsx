import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

      <div className="app-wrapper">
        <div className="app-content">
          <div className="app"> {/* 🟢 This restores your 80% width + center layout */}
            <Navbar setShowLogin={setShowLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/myorders" element={<MyOrders />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
