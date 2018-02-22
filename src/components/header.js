import React from 'react';
import './header.css';

const Header = () => (
  // <nav className="navigation">
  //   <a href="#about">about</a> |
  //   <a href="#projects">work</a> |
  //   <a href="#contact">contact</a>
  // </nav>
  <div className="navigation">
  <ul>
    <li><span className="header-span">
    <a href="#about">about</a>
    </span></li> |
    <li><span className="header-span">about</span></li> |
    <li href="#projects"><span className="header-span">work</span></li> |
    <li href="#contact"><span className="header-span">contact</span></li>
  </ul>
</div>
);
export default Header;
