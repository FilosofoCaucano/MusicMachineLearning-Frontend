import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="Favicono.ico" alt="Logo" className="footer-logo" />
                <p className="footer-title">Proyecto de Identificación de Instrumentos Andinos</p>
                <div className="footer-divider"></div>
                <p>© 2024 Todos los derechos reservados.</p>
                <p>Creado por <strong>Willian David Correa</strong></p>
            </div>
        </footer>
    );
};

export default Footer;
