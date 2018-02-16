import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav className='navigation'>
        <a href="/about/">about</a> |
        <a href="/work/">work</a> |
        <a href="/contact/">contact</a> 
      </nav>

  )
}
export default Header;