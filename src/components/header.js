import React from 'react';
import './header.css';

const Header = () => (
  <div className="navigation">
    <ul>
      <a href="#about"><li><span className="header-span">about</span></li></a> |
      <a href="#projects"><li><span data-url="#projects" className="header-span">work</span></li></a> |
      <a href="#contact"><li><span className="header-span">contact</span></li></a>
    </ul>
  </div>
);
export default Header;
