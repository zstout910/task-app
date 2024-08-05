import React from 'react';
import { Link } from 'react-router-dom';  //routing for page links
import './Navbar.css';
import logo from './logo.png';  //notebook logo for app

function Navbar() {   //navbar with page links and title
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
