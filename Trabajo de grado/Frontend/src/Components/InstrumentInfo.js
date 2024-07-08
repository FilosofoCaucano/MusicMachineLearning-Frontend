import React from 'react';

const InstrumentInfo = ({ instrument }) => {
    // Aquí iría la lógica para mostrar información sobre un instrumento específico
    return (
        <div>
            <h3>{instrument.name}</h3>
            <p>{instrument.description}</p>
        </div>
    );
};

export default InstrumentInfo;
