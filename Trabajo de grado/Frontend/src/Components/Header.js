import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id="head" className="header-container">
            <h1 className="header-title">Bienvenido</h1>
            <img
                src="Bienvenido02.jpg"
                alt="Imagen andina"
                className="header-image"
            />
            <h2 className="header-subtitle">¡Explora los sonidos de los Andes!</h2>
        </div>
    );
};

export default Header;