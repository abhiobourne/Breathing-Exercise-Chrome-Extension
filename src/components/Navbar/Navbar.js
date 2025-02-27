import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link active">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/breaks" className="navbar-link">Breaks</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/sounds" className="navbar-link">Sounds</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/account" className="navbar-link">Account</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
