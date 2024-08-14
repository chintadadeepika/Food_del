import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assests'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                 <img src={assets.logo} alt=""/>
                 <p>We understand that people lead busy lives and may not always have the time to dine out or cook at home. Therefore, our platform offers a solution by allowing users to browse through a curated selection of eateries, explore diverse cuisines, and easily place orders for delivery.</p>

                
               <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
               </div>
            </div>
            <div className='footer-content-center'>
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9308166158</li>
                    <li>foodiescontactus@gmail.com</li>
                </ul>
                
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Foodies.com- All Right Reserved.</p>
        </div>
    
  )
}

export default Footer