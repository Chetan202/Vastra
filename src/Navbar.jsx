import React from 'react';
import './Navbar.css';
import bag from './assets/basket.png'
import user from './assets/user.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">FASHION CLOTHING</div>
      <div className="navbar-right">
        <img src={bag} alt="Card Logo" className="navbar-logo" />
        <img src={user} alt="User Logo" className="navbar-logo" />
      </div>
    </nav>
  );
}

export default Navbar;
