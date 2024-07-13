// frontend/src/components/History.js
import React from 'react';
import './History.css';

const History = ({ instrument = {} }) => {
    const { name = 'Instrumento desconocido', history = 'No hay información disponible.', imageUrl = '' } = instrument;

    return (
        <div className="history">
            <h3>Historia de {name}</h3>
            {imageUrl && <img src={imageUrl} alt={name} className="instrument-image" />}
            <p>{history}</p>
        </div>
    );
};

export default History;
