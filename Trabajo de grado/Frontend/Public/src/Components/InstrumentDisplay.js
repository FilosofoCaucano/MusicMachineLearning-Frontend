import React from 'react';

const InstrumentDisplay = ({ instrument }) => {
    if (!instrument) return null;

    return (
        <div>
            <h2>Identified Instrument</h2>
            <p>{instrument.name}</p>
            <img src={instrument.imageUrl} alt={instrument.name} />
        </div>
    );
};

export default InstrumentDisplay;