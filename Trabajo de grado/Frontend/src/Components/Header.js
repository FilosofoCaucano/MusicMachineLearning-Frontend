import React from 'react';

const Header = () => {
    const boxStyle = {
        backgroundColor: 'rgba(245, 245, 220, 0.5)', // Light goldenrod yellow with 50% opacity
        color: '#8B4513', // Saddle brown
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        border: '2px solid #8B4513', // Saddle brown
        boxShadow: '0px 0px 10px #8B4513', // Saddle brown
    };

    const imageStyle = {
        maxWidth: '10%', // Ajusta el tamaño máximo de la imagen
        height: 'auto', // Permite que la altura se ajuste automáticamente
    };

    return (
        <div id="head" style={{ ...boxStyle, textAlign: 'center' }}>
            <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Bienvenido</h1>
            <img
                src="Bienvenido02.jpg" // Reemplaza con la ruta de tu imagen andina
                alt="Imagen andina"
                style={{ ...imageStyle, display: 'block', margin: '0 auto' }}
            />
            <p style={{ fontSize: '18px', fontStyle: 'italic', textAlign: 'center' }}>¡Explora los sonidos de los Andes!</p>
        </div>
    );
};

export default Header;


