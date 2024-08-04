import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">TODO APP</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Task Page</Link>
        <Link to="/profile" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
