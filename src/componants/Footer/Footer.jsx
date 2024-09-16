import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={ assets.logo } alt="" />
            <p>

Welcome to Tomato, your go-to solution for convenient and delicious food delivery. At Tomato, we’re dedicated to bringing you the freshest and most delectable meals right to your doorstep. Whether you’re craving a quick bite or a gourmet feast, our diverse menu has something to satisfy every palate.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-96046 69232</li>
                <li>rathosachin3276@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Sachin.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer;
