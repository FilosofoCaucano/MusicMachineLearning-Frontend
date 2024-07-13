import React from 'react';
import './InstrumentInfo.css';

const InstrumentInfo = ({ instrument }) => {
    if (!instrument) {
        return <div>No hay información disponible sobre el instrumento.</div>;
    }

    return (
        <div className="instrument-info">
            <h2>{instrument.name}</h2>
            <p>{instrument.description}</p>
            <audio controls>
                <source src={instrument.audioSample} type="audio/mpeg" />
                Tu navegador no soporta la reproducción de audio.
            </audio>
        </div>
    );
};

export default InstrumentInfo;


