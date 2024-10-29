import React from 'react';
import './menu.css'; // Make sure to create a corresponding CSS file for styling

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`menu-overlay ${isOpen ? 'show' : ''} flex justify-center item-align-center column`}>
                <nav className="menu">
                    <ul>
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="/#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
