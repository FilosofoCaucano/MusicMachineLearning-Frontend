// frontend/src/components/History.js
import React from 'react';
import './History.css';

const History = ({ instrument = {} }) => {
    const {
        name = 'Instrumento desconocido',
        history = 'No hay información disponible.',
        imageUrl = ''
    } = instrument;

    return (
        <article className="history" role="region" aria-label={`Historia del instrumento ${name}`}>
            <h3 className="history-title">Historia de {name}</h3>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={`Imagen del instrumento andino: ${name}`}
                    className="instrument-image"
                />
            )}
            <p className="history-description">{history}</p>
        </article>
    );
};

export default History;
