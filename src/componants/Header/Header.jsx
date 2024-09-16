import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order your favourite food</h2>
        <p>Choose from a diverse menu feacturing a delectable array of dishes carfted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
