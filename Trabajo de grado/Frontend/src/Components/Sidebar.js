import React, { useState } from 'react';
import './Sidebar.css';

// Componente reutilizable para una sección expandible
const ExpandableSection = ({ title, content, imageSrc, altText, isExpanded, toggleSection }) => {
    return (
        <>
            <button
                className="andean-button"
                onClick={toggleSection}
                aria-expanded={isExpanded}
                aria-controls={`${title.toLowerCase()}-content`}
            >
                {title}
            </button>
            {isExpanded && (
                <div id={`${title.toLowerCase()}-content`} className="expanded-section">
                    {imageSrc && <img src={imageSrc} alt={altText} className="ml-image" />}
                    {typeof content === 'string' ? <p>{content}</p> : content}
                </div>
            )}
        </>
    );
};

const Sidebar = ({ onFilterChange, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSection, setExpandedSection] = useState(null);

    // Función para alternar la expansión de una sección
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="sidebar">
            {/* Sección de búsqueda */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Buscar instrumento..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Buscar instrumento"
                />
                <button
                    className="andean-button"
                    onClick={() => onSearch(searchQuery)}
                    aria-label="Buscar"
                >
                    Buscar
                </button>
            </div>

            {/* Sección de filtros */}
            <div className="filters-section">
                <h3>Filtrar por tipo:</h3>
                <select
                    onChange={(e) => onFilterChange(e.target.value)}
                    aria-label="Filtrar por tipo de instrumento"
                >
                    <option value="all">Todos</option>
                    <option value="viento">Viento</option>
                    <option value="cuerda">Cuerda</option>
                    <option value="percusion">Percusión</option>
                </select>
            </div>

            {/* Sección de técnicas de Machine Learning */}
            <div className="ml-techniques-section">
                <h3>Técnicas de Machine Learning</h3>

                {/* Clasificación */}
                <ExpandableSection
                    title="Clasificación"
                    content={
                        <>
                            <p><strong>Clasificación:</strong> Un algoritmo analiza el audio y determina a qué categoría pertenece el instrumento.</p>
                            <ul>
                                <li>Se extraen características acústicas como espectrogramas, MFCCs y armónicos.</li>
                                <li>Se aplican modelos como Redes Neuronales Convolucionales (CNN), SVM o Random Forest.</li>
                                <li>El sistema decide si el instrumento es de viento, cuerda o percusión basándose en patrones aprendidos.</li>
                            </ul>
                            <p><strong>Nota:</strong> La clasificación es útil para organizar grandes bases de datos de sonidos musicales.</p>
                        </>
                    }
                    imageSrc="/images/classification-diagram.png"
                    altText="Proceso de Clasificación"
                    isExpanded={expandedSection === "clasificacion"}
                    toggleSection={() => toggleSection("clasificacion")}
                />

                {/* Identificación */}
                <ExpandableSection
                    title="Identificación"
                    content={
                        <>
                            <p><strong>Identificación:</strong> Detecta la presencia de un instrumento específico en una grabación de audio.</p>
                            <ul>
                                <li>Se analiza la señal de audio en tiempo real utilizando transformadas de Fourier.</li>
                                <li>Se compara con una base de datos de sonidos de referencia mediante DTW.</li>
                                <li>Se determina si el instrumento es una quena, charango, bombo, etc., con alto grado de precisión.</li>
                            </ul>
                            <p><strong>Nota:</strong> La identificación es útil en aplicaciones como transcripción automática de música.</p>
                        </>
                    }
                    imageSrc="/images/identification-process3.jpg"
                    altText="Proceso de Identificación"
                    isExpanded={expandedSection === "identificacion"}
                    toggleSection={() => toggleSection("identificacion")}
                />
            </div>

            {/* Explicación de modelos de Machine Learning */}
            <div className="ml-explanation">
                <h3>Modelos de Machine Learning</h3>

                {/* CNN */}
                <ExpandableSection
                    title="Redes Neuronales Convolucionales (CNN)"
                    content={
                        <>
                            <p>Las CNN son un modelo de aprendizaje profundo diseñado para procesamiento de imágenes y detección de patrones espaciales.</p>
                            <ol>
                                <li><strong>Conversión de audio en imágenes:</strong> El audio se convierte en un espectrograma.</li>
                                <li><strong>Capas convolucionales:</strong> Filtros detectan patrones característicos de los instrumentos.</li>
                                <li><strong>Capas de agrupamiento:</strong> Reducen la dimensionalidad sin perder información relevante.</li>
                                <li><strong>Capas totalmente conectadas:</strong> Combinan todas las características detectadas.</li>
                            </ol>
                            <p><strong>Ventajas de las CNN:</strong></p>
                            <ul>
                                <li>Aprenden automáticamente las características relevantes del audio.</li>
                                <li>Son altamente escalables.</li>
                                <li>Mejor precisión en comparación con enfoques tradicionales.</li>
                            </ul>
                        </>
                    }
                    imageSrc="/images/CnnReconocimiento.png"
                    altText="CNN para clasificación de audio"
                    isExpanded={expandedSection === "cnn"}
                    toggleSection={() => toggleSection("cnn")}
                />

                {/* SVM */}
                <ExpandableSection
                    title="Máquina de Vectores de Soporte (SVM)"
                    content={
                        <>
                            <p>Las SVM encuentran una frontera óptima entre distintas clases de instrumentos musicales.</p>
                            <ol>
                                <li><strong>Extracción de características:</strong> Se extraen características acústicas como MFCCs.</li>
                                <li><strong>Frontera de decisión:</strong> La SVM encuentra la línea que mejor separa las clases.</li>
                                <li><strong>Predicción:</strong> El modelo predice la clase basándose en su proximidad a la frontera.</li>
                            </ol>
                            <p><strong>Ventajas de las SVM:</strong></p>
                            <ul>
                                <li>Eficientes en problemas de alta dimensionalidad.</li>
                                <li>Funcionan bien con conjuntos de datos pequeños o medianos.</li>
                                <li>Permiten el uso de kernels para manejar datos no linealmente separables.</li>
                            </ul>
                        </>
                    }
                    imageSrc="/images/SmvReconocimiento.png"
                    altText="SVM en clasificación"
                    isExpanded={expandedSection === "svm"}
                    toggleSection={() => toggleSection("svm")}
                />

                {/* Clasificación Multiclase */}
                <ExpandableSection
                    title="Clasificación Multiclase"
                    content={
                        <>
                            <p>La clasificación multiclase permite predecir la clase más probable del instrumento musical entre múltiples categorías.</p>
                            <ol>
                                <li><strong>División en problemas binarios:</strong> Algunos algoritmos dividen el problema multiclase en varios problemas binarios.</li>
                                <li><strong>Modelos especializados:</strong> Otros algoritmos pueden manejar directamente la clasificación multiclase.</li>
                                <li><strong>Predicción final:</strong> El modelo selecciona la clase con la mayor probabilidad.</li>
                            </ol>
                            <p><strong>Ventajas de la clasificación multiclase:</strong></p>
                            <ul>
                                <li>Permite trabajar con múltiples categorías de instrumentos simultáneamente.</li>
                                <li>Es flexible y compatible con diversos modelos de Machine Learning.</li>
                                <li>Facilita la integración en sistemas de recomendación musical.</li>
                            </ul>
                        </>
                    }
                    imageSrc="/images/MulticlaseReconocimiento.png"
                    altText="Clasificación multiclase"
                    isExpanded={expandedSection === "multiclase"}
                    toggleSection={() => toggleSection("multiclase")}
                />
            </div>
        </div>
    );
};

export default Sidebar;