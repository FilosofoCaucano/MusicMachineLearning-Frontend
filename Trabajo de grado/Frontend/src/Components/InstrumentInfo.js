import React from 'react';

const InstrumentInfo = ({ instrument }) => {
    if (!instrument) return null;

    return (
        <div>
            <h2>{instrument.name}</h2>
            <p>Type: {instrument.type}</p>
            <p>Origin: {instrument.origin}</p>
            <p>Description: {instrument.description}</p>
        </div>
    );
};

export default InstrumentInfo;