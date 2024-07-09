import React from 'react';

const History = ({ instrument }) => (
    <div className="history">
        <h2>Historia de {instrument.name}</h2>
        <p>{instrument.history}</p>
    </div>
);

export default History;
