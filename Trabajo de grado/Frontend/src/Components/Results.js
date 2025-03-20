// frontend/src/components/Results.js
import React from 'react';
import './Results.css';

const Results = ({ results }) => {
    if (!results || !Array.isArray(results) || results.length === 0) {
        return <p>No hay resultados disponibles.</p>;
    }

    return (
        <div className="results-container">
            {results.map((result, index) => (
                <div key={index} className="result-item">
                    <h3>{result.instrument}</h3>
                    <p>Probabilidad: {(result.probability * 100).toFixed(2)}%</p>
                </div>
            ))}
        </div>
    );
};


export default Results;










