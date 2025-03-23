// frontend/src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="Favicono.ico" alt="Logo del proyecto" className="footer-logo" />

                <p className="footer-title">
                    Proyecto de Identificación de Instrumentos Andinos
                </p>

                <div className="footer-divider"></div>

                <nav className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/william-david-correa-valencia-595247271/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Willian David Correa"
                        className="social-link"
                    >
                        🔗 LinkedIn
                    </a>
                    <a
                        href="https://github.com/FilosofoCaucano"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub de Willian David Correa"
                        className="social-link"
                    >
                        💻 GitHub
                    </a>
                    <a
                        href="https://www.buymeacoffee.com/willian.david.correa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Buy Me a Coffee"
                        className="social-link buymeacoffee-link"
                    >
                        ☕ Invítame un café
                    </a>
                </nav>

                <p>© 2024 Todos los derechos reservados.</p>
                <address>
                    Creado por <strong>Willian David Correa</strong>
                </address>
            </div>
        </footer>
    );
};

export default Footer;
