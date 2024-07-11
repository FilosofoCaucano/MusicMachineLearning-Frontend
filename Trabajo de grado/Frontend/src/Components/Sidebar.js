import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange }) => {
    return (
        <div className="sidebar">
            <div className="search-section">
                <label htmlFor="search">Buscar:</label>
                <input type="text" id="search" />
                <button>Buscar</button>
            </div>

            <div className="filters-section">
                <label htmlFor="filters">Filtros:</label>
                <select id="filters" onChange={(e) => onFilterChange(e.target.value)}>
                    <option value="all">Todos</option>
                    <option value="viento">Viento</option>
                    <option value="cuerda">Cuerda</option>
                    <option value="percusion">Percusión</option>
                </select>
            </div>

            <div className="instrument-section">
                <h2>Instrumentos Andinos</h2>
                <button onClick={() => onFilterChange('viento')}>Viento</button>
                <button onClick={() => onFilterChange('cuerda')}>Cuerda</button>
                <button onClick={() => onFilterChange('percusion')}>Percusión</button>
            </div>

            <div className="ml-techniques-section">
                <h2>Técnicas de ML</h2>
                <button>Clasificación</button>
                <button>Identificación</button>
            </div>
        </div>
    );
};

export default Sidebar;




