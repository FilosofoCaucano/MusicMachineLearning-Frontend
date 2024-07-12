import React from 'react';
import './InstrumentInfo.css';

const InstrumentInfo = ({ instrument }) => (
    <div className="instrument-info">
        <h2>{instrument.name}</h2>
        <p>{instrument.description}</p>
        <audio controls>
            <source src={instrument.audioSample} type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
        </audio>
    </div>
);

export default InstrumentInfo;