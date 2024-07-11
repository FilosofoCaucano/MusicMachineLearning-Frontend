import React from 'react';
import './History.css';

const History = ({ instrument }) => {
    const { name, history, imageUrl } = instrument;

    return (
        <div className="history">
            <h3>Historia de {name}</h3>
            {imageUrl && <img src={imageUrl} alt={name} className="instrument-image" />}
            <p>{history}</p>
        </div>
    );
};

export default History;
