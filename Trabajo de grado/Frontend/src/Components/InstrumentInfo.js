import React from 'react';
import './InstrumentInfo.css';

const InstrumentInfo = ({ instrument }) => {
    if (!instrument || !instrument.name) {
        return (
            <div className="instrument-info no-data">
                <p>No hay información disponible sobre el instrumento identificado.</p>
            </div>
        );
    }

    const { name, description, audioSample } = instrument;

    return (
        <div className="instrument-info">
            <h2 className="instrument-name">🎵 {name}</h2>
            <p className="instrument-description">{description || 'Sin descripción disponible.'}</p>

            {audioSample ? (
                <div className="audio-player">
                    <audio controls>
                        <source src={audioSample} type="audio/mpeg" />
                        Tu navegador no soporta la reproducción de audio.
                    </audio>
                </div>
            ) : (
                <p className="no-audio">🎧 No hay muestra de audio disponible para este instrumento.</p>
            )}
        </div>
    );
};

export default InstrumentInfo;
