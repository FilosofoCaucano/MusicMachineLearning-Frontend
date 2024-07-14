// Results.js
import React from 'react';
import './Results.css';

const Results = () => {
    return (
        <div className="results">
            <h3>Resultados del Análisis</h3>
            <div className="graph-container">
                {/* Aquí se puede añadir un gráfico o placeholder */}
                <div className="graph-placeholder">
                    <p>Gráficas del análisis se mostrarán aquí</p>
                </div>
            </div>
            <p>Precisión en la identificación de instrumentos:</p>
            <ul>
                <li><span className="instrument">Quena:</span> <span className="accuracy">85%</span></li>
                <li><span className="instrument">Bombo:</span> <span className="accuracy">78%</span></li>
                <li><span className="instrument">Charango:</span> <span className="accuracy">92%</span></li>
            </ul>
            <button className="andean-button">Ver más detalles</button>
        </div>
    );
};

export default Results;
