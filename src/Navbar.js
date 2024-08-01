import React from 'react';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Todo App</span>
      </div>
      <div className="navbar-right">
        <a href="#task" className="navbar-link">Task Page</a>
        <a href="#profile" className="navbar-link">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;
