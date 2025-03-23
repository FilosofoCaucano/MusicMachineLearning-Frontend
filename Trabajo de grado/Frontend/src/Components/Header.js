// frontend/src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container" role="banner" aria-label="Encabezado principal">
            <img
                src="Bienvenido02.jpg"
                alt="Paisaje andino con instrumentos tradicionales"
                className="header-image"
            />
            <div className="header-text">
                <h1 className="header-title"> Kupkwa - Instrumentos Andinos</h1>
                <h2 className="header-subtitle">Explora los Sonidos Ancestrales</h2>
                {/* Si quieres un botón de acción rápida, puedes descomentar esto */}
                {/* <a href="#clasificador" className="andean-button">Probar Clasificador</a> */}
            </div>
        </header>
    );
};

export default Header;
