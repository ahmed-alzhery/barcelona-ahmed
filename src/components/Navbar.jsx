import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Barcelona FC</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Achievements</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;