import React from 'react';
import{Link}from 'react-router-dom'

function Navbar(props) {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Apidatashow">Api</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;

