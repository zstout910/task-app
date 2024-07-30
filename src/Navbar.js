import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
       <header className='header'>
        <a href='#' className='logo'>Task Manager</a>

        <nav className="navbar">
            <a className="nav-item" href="#">Task</a>
            <a className="nav-item" href="#">Profile</a>
        </nav>
       </header>
    );
};

export default Navbar;