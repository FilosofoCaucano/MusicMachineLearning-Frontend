import React from 'react';
import './Results.css';

const Results = ({ results }) => {
    if (!results || !Array.isArray(results) || results.length === 0) {
        return (
            <div className="no-results">
                <p>🔍 No hay resultados disponibles.</p>
            </div>
        );
    }

    return (
        <div className="results-container">
            <h3 className="results-title">🎼 Resultados de Clasificación</h3>
            {results.map((result, index) => (
                <div key={index} className="result-item" aria-label={`Resultado ${index + 1}`}>
                    <h4>{result.instrument}</h4>
                    <div className="probability-bar-container">
                        <div
                            className="probability-bar"
                            style={{ width: `${result.probability * 100}%` }}
                        >
                            <span className="percentage-text">{(result.probability * 100).toFixed(2)}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Results;
