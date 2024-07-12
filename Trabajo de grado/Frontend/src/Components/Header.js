// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <img
                src="Bienvenido02.jpg"
                alt="Paisaje andino"
                className="header-image"
            />
            <div className="header-text">
                <h1 className="header-title">Instrumentos Andinos</h1>
                <h2 className="header-subtitle">Explora los Sonidos Ancestrales</h2>
            </div>
        </div>
    );
};

export default Header;