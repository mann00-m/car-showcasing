import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-menu">Ev-olution</div>

      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
