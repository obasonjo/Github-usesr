import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <div>
            <h2 className='logo'>Github usesr</h2>
        </div>
        <ul className='nav-link'>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Header