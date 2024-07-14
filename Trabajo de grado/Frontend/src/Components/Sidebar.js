// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange }) => {
    return (
        <div className="sidebar" style={{ width: '25%' }}>
            <div className="search-section">
                <input type="text" placeholder="Buscar instrumento..." className="search-input" />
                <button className="andean-button">Buscar</button>
            </div>

            <div className="filters-section">
                <h3>Filtrar por tipo:</h3>
                <select onChange={(e) => onFilterChange(e.target.value)}>
                    <option value="all">Todos</option>
                    <option value="viento">Viento</option>
                    <option value="cuerda">Cuerda</option>
                    <option value="percusion">Percusión</option>
                </select>
            </div>

            <div className="instrument-section">
                <h3>Instrumentos Andinos</h3>
                <button className="andean-button" onClick={() => onFilterChange('viento')}>Viento</button>
                <button className="andean-button" onClick={() => onFilterChange('cuerda')}>Cuerda</button>
                <button className="andean-button" onClick={() => onFilterChange('percusion')}>Percusión</button>
            </div>

            <div className="ml-techniques-section">
                <h3>Técnicas de ML</h3>
                <button className="andean-button">Clasificación</button>
                <button className="andean-button">Identificación</button>
            </div>
        </div>
    );
};

export default Sidebar;
