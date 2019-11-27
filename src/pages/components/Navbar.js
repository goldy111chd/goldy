import React from 'react';
import{Link}from 'react-router-dom'

function Navbar(props) {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link href="collapsible.html">contact</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;

