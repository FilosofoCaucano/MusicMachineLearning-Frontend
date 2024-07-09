import React from 'react';

const Sidebar = ({ onFilterChange }) => (
    <div id="left" className="sidebar">
        <ul>
            <li>
                <h2>Buscar:</h2>
                <ul>
                    <li>
                        <form id="searchform" method="get" action="#">
                            <div>
                                <input type="text" name="s" id="s" size="15" alt="enter search text" />
                                <input type="submit" value="Buscar" />
                            </div>
                        </form>
                    </li>
                    <li>
                        <h3>Filtros:</h3>
                        <select onChange={(e) => onFilterChange(e.target.value)}>
                            <option value="all">Todos</option>
                            <option value="viento">Viento</option>
                            <option value="cuerda">Cuerda</option>
                            <option value="percusión">Percusión</option>
                        </select>
                    </li>
                </ul>
            </li>
            <li>
                <h2>Instrumentos Andinos</h2>
                <ul>
                    <li><button>Viento</button></li>
                    <li><button>Cuerda</button></li>
                    <li><button>Percusión</button></li>
                </ul>
            </li>
            <li>
                <h2>Técnicas de ML</h2>
                <ul>
                    <li><button>Clasificación</button></li>
                    <li><button>Identificación</button></li>
                </ul>
            </li>
        </ul>
    </div>
);

export default Sidebar;




