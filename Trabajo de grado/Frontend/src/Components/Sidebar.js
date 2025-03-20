import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSection, setExpandedSection] = useState(null);

    // 🎯 Función para mostrar/ocultar la descripción
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="sidebar">
            {/* 🔍 Sección de búsqueda */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Buscar instrumento..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="andean-button"
                    onClick={() => onSearch(searchQuery)}
                >
                    Buscar
                </button>
            </div>

            {/* 🎼 Filtrar por tipo */}
            <div className="filters-section">
                <h3>Filtrar por tipo:</h3>
                <select onChange={(e) => onFilterChange(e.target.value)}>
                    <option value="all">Todos</option>
                    <option value="viento">Viento</option>
                    <option value="cuerda">Cuerda</option>
                    <option value="percusion">Percusión</option>
                </select>
            </div>

            {/* 🤖 Sección de Técnicas de ML con expansión */}
            <div className="ml-techniques-section">
                <h3>Técnicas de Machine Learning</h3>

                {/* 📌 Clasificación */}
                <button className="andean-button" onClick={() => toggleSection("clasificacion")}>
                    Clasificación
                </button>
                {expandedSection === "clasificacion" && (
                    <div className="expanded-section">
                        <img src="classification-diagram.png" alt="Proceso de Clasificación" className="ml-image" />
                        <p>🔎 <strong>Clasificación:</strong> Un algoritmo analiza el audio y determina a qué categoría pertenece el instrumento.</p>
                        <ul>
                            <li>📌 Se extraen características acústicas como espectrogramas, MFCCs (coeficientes cepstrales en frecuencia mel), y armónicos.</li>
                            <li>📊 Se aplican modelos de Machine Learning como Redes Neuronales Convolucionales (CNN), SVM (Máquinas de Vectores de Soporte) o Random Forest.</li>
                            <li>🎼 El sistema decide si el instrumento es de viento, cuerda o percusión basándose en patrones aprendidos durante el entrenamiento.</li>
                        </ul>
                        <p>💡 <strong>Nota:</strong> La clasificación es útil para organizar grandes bases de datos de sonidos musicales, permitiendo una rápida categorización de instrumentos desconocidos.</p>
                    </div>
                )}

                {/* 🔍 Identificación */}
                <button className="andean-button" onClick={() => toggleSection("identificacion")}>
                    Identificación
                </button>
                {expandedSection === "identificacion" && (
                    <div className="expanded-section">
                        <img src="identification-process3.jpg" alt="Proceso de Identificación" className="ml-image" />
                        <p>🎼 <strong>Identificación:</strong> Detecta la presencia de un instrumento específico en una grabación de audio.</p>
                        <ul>
                            <li>📡 Se analiza la señal de audio en tiempo real utilizando transformadas de Fourier para extraer características temporales y espectrales.</li>
                            <li>🧠 Se compara con una base de datos de sonidos de referencia mediante técnicas de similitud como DTW (Dynamic Time Warping).</li>
                            <li>🎻 Se determina si el instrumento es una quena, charango, bombo, etc., con un alto grado de precisión.</li>
                        </ul>
                        <p>💡 <strong>Nota:</strong> La identificación es especialmente útil en aplicaciones como la transcripción automática de música o la creación de interfaces interactivas para músicos.</p>
                    </div>
                )}
            </div>

            {/* 📌 Explicación de los Modelos de Machine Learning */}
            <div className="ml-explanation">
                <h3>🤖 Modelos de Machine Learning</h3>

                {/* 🧠 Redes Neuronales Convolucionales (CNN) */}
                <button className="andean-button" onClick={() => toggleSection("cnn")}>📡 Redes Neuronales Convolucionales (CNN)</button>
                {expandedSection === "cnn" && (
                    <div className="expanded-section">
                        <p>Las Redes Neuronales Convolucionales (CNN) son un tipo de modelo de aprendizaje profundo diseñado específicamente para el procesamiento de imágenes y la detección de patrones espaciales. En la clasificación de instrumentos musicales, las CNN permiten analizar espectrogramas (representaciones visuales de la energía de la señal de audio en función del tiempo y la frecuencia) para extraer características distintivas de cada instrumento.</p>
                        <h4>¿Cómo funciona una CNN en la identificación de instrumentos?</h4>
                        <ol>
                            <li>🎵 <strong>Conversión de audio en imágenes:</strong> Antes de ser analizado por la CNN, el audio se convierte en un espectrograma, que representa cómo varían las frecuencias de la señal en el tiempo. Los espectrogramas son tratados como imágenes, donde cada color o intensidad representa una frecuencia dominante en un momento dado.</li>
                            <li>🔍 <strong>Capas convolucionales:</strong> La red neuronal tiene filtros de convolución que analizan pequeños fragmentos del espectrograma a la vez. Estos filtros detectan patrones característicos de los instrumentos, como armónicos, transitorios y estructura de frecuencia.</li>
                            <li>📊 <strong>Capas de agrupamiento (Pooling):</strong> Se utilizan técnicas como MaxPooling para reducir la dimensionalidad de los datos sin perder información relevante. Esto permite que el modelo sea más eficiente y reduzca el riesgo de sobreajuste.</li>
                            <li>🌐 <strong>Capas totalmente conectadas:</strong> Después del procesamiento en las capas convolucionales, la información extraída se pasa a capas densas que combinan todas las características detectadas. La última capa utiliza una función de activación Softmax, que asigna una probabilidad a cada clase de instrumento.</li>
                        </ol>
                        <p>💡 <strong>Ventajas de las CNN:</strong></p>
                        <ul>
                            <li>Aprenden automáticamente las características relevantes del audio sin necesidad de diseñarlas manualmente.</li>
                            <li>Son altamente escalables, permitiendo entrenar modelos con grandes bases de datos de espectrogramas.</li>
                            <li>Mejor precisión en comparación con enfoques tradicionales, como técnicas basadas en extracción manual de características acústicas.</li>
                        </ul>
                        <img src="C:\Users\Willi\Downloads\Trabajo de grado 1\MusicMachineLearning-Frontend\Trabajo de grado\Frontend\public\CnnReconocimiento.png" alt="CNN para clasificación de audio" />
                    </div>
                )}

                {/* 📊 Máquina de Vectores de Soporte (SVM) */}
                <button className="andean-button" onClick={() => toggleSection("svm")}>📈 Máquina de Vectores de Soporte (SVM)</button>
                {expandedSection === "svm" && (
                    <div className="expanded-section">
                        <p>Las SVM encuentran una frontera óptima entre distintas clases de instrumentos musicales. Este modelo es especialmente útil cuando los datos tienen características bien definidas y separables.</p>
                        <h4>¿Cómo funcionan las SVM en la clasificación de instrumentos?</h4>
                        <ol>
                            <li>🎯 <strong>Extracción de características:</strong> Se extraen características acústicas como MFCCs, cromagramas y espectros de potencia.</li>
                            <li>📏 <strong>Frontera de decisión:</strong> La SVM encuentra la línea (o hiperplano) que mejor separa las clases de instrumentos en el espacio de características.</li>
                            <li>📊 <strong>Predicción:</strong> Una vez entrenado, el modelo puede predecir la clase de un nuevo instrumento basándose en su proximidad a la frontera de decisión.</li>
                        </ol>
                        <p>💡 <strong>Ventajas de las SVM:</strong></p>
                        <ul>
                            <li>Eficientes en problemas de alta dimensionalidad.</li>
                            <li>Funcionan bien con conjuntos de datos pequeños o medianos.</li>
                            <li>Permiten el uso de kernels para manejar datos no linealmente separables.</li>
                        </ul>
                        <img src="C:\Users\Willi\Downloads\Trabajo de grado 1\MusicMachineLearning-Frontend\Trabajo de grado\Frontend\public\SmvReconocimiento.png" alt="SVM en clasificación" />
                    </div>
                )}

                {/* 🎭 Clasificación Multiclase */}
                <button className="andean-button" onClick={() => toggleSection("multiclase")}>🎭 Clasificación Multiclase</button>
                {expandedSection === "multiclase" && (
                    <div className="expanded-section">
                        <p>La clasificación multiclase permite predecir la clase más probable del instrumento musical entre múltiples categorías. Este enfoque es esencial cuando se trabaja con bases de datos que contienen una gran variedad de instrumentos.</p>
                        <h4>¿Cómo funciona la clasificación multiclase?</h4>
                        <ol>
                            <li>🎯 <strong>División en problemas binarios:</strong> Algunos algoritmos dividen el problema multiclase en varios problemas binarios (uno contra todos o uno contra uno).</li>
                            <li>📊 <strong>Modelos especializados:</strong> Otros algoritmos, como las CNN, pueden manejar directamente la clasificación multiclase mediante funciones de pérdida adecuadas (por ejemplo, Cross-Entropy Loss).</li>
                            <li>🎵 <strong>Predicción final:</strong> El modelo asigna una probabilidad a cada clase y selecciona la clase con la mayor probabilidad como la predicción final.</li>
                        </ol>
                        <p>💡 <strong>Ventajas de la clasificación multiclase:</strong></p>
                        <ul>
                            <li>Permite trabajar con múltiples categorías de instrumentos simultáneamente.</li>
                            <li>Es flexible y compatible con diversos modelos de Machine Learning.</li>
                            <li>Facilita la integración en sistemas de recomendación musical o análisis de grandes bases de datos.</li>
                        </ul>
                        <img src="Trabajo de grado\Frontend\public\MulticlaseReconocimiento.png" alt="Clasificación multiclase" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;