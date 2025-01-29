import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className={window.location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </li>
                <li className={window.location.pathname === '/skills' ? 'active' : ''}>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;