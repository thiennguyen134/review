import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <h1>Investment Application</h1>
                <div className="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav id="navMenu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
