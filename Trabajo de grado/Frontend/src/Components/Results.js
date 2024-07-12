import React from 'react';
import './Results.css';


const Results = () => {
    return (
        <div className="results" style={{ textAlign: "center" }}>
            <h3>Resultados</h3>
            <p>Estos son los resultados de los últimos análisis realizados:</p>
            <ul>
                <li>
                    <strong>Quena:</strong> 85% precisión.
                </li>
                <li>
                    <strong>Bombo:</strong> 78% precisión.
                </li>
                <li>
                    <strong>Charango:</strong> 92% precisión.
                </li>
            </ul>
            <button className="blue-button">Ver más detalles</button>
        </div>
    );
};

export default Results;
