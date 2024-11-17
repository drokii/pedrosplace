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
                <li className={window.location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">About</Link>
                </li>
                <li className={window.location.pathname === '/contact' ? 'active' : ''}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;