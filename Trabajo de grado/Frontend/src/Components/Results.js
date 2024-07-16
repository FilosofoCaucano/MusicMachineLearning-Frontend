// frontend/src/Components/Results.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Results.css';

const Results = ({ identifiedInstrument }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [comparativeData, setComparativeData] = useState(null);
    const [activeTab, setActiveTab] = useState('accuracy');
    const [animationProgress, setAnimationProgress] = useState(0);
    const [spectrogramFrequency, setSpectrogramFrequency] = useState('mid');
    const [spectrogramTime, setSpectrogramTime] = useState(0);

    useEffect(() => {
        fetchComparativeData();
        const timer = setInterval(() => {
            setAnimationProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(oldProgress + 1, 100);
            });
        }, 20);
        return () => clearInterval(timer);
    }, []);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const fetchComparativeData = async () => {
        // Simulated API call
        setTimeout(() => {
            setComparativeData([
                { name: 'Quena', ML: 85, tradicional: 70 },
                { name: 'Bombo', ML: 78, tradicional: 85 },
                { name: 'Charango', ML: 92, tradicional: 88 },
                { name: 'Zampoña', ML: 88, tradicional: 75 },
            ]);
        }, 1500);
    };

    const instruments = [
        { name: 'Quena', accuracy: 85 },
        { name: 'Bombo', accuracy: 78 },
        { name: 'Charango', accuracy: 92 },
        { name: 'Zampoña', accuracy: 88 },
    ];

    const handleFrequencyChange = (freq) => {
        setSpectrogramFrequency(freq);
    };

    const handleTimeChange = (event) => {
        setSpectrogramTime(event.target.value);
    };

    return (
        <div className="results">
            <h3>Resultados del Análisis</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${animationProgress}%` }}></div>
            </div>
            <div className="tabs">
                <button className={activeTab === 'accuracy' ? 'active' : ''} onClick={() => setActiveTab('accuracy')}>Precisión</button>
                <button className={activeTab === 'spectrogram' ? 'active' : ''} onClick={() => setActiveTab('spectrogram')}>Espectrograma</button>
                <button className={activeTab === 'comparative' ? 'active' : ''} onClick={() => setActiveTab('comparative')}>Análisis Comparativo</button>
            </div>
            {activeTab === 'accuracy' && (
                <div className="accuracy-content">
                    <div className="graph-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={instruments}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="accuracy" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <ul className="instrument-list">
                        {instruments.map((instrument) => (
                            <li key={instrument.name}>
                                <span className="instrument">{instrument.name}:</span>
                                <div className="accuracy-bar">
                                    <div className="accuracy-fill" style={{ width: `${instrument.accuracy}%` }}></div>
                                    <span className="accuracy-text">{instrument.accuracy}%</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {activeTab === 'spectrogram' && (
                <div className="spectrogram">
                    <h4>Espectrograma</h4>
                    <div className="spectrogram-controls">
                        <button onClick={() => handleFrequencyChange('low')}>Frecuencias Bajas</button>
                        <button onClick={() => handleFrequencyChange('mid')}>Frecuencias Medias</button>
                        <button onClick={() => handleFrequencyChange('high')}>Frecuencias Altas</button>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={spectrogramTime}
                        onChange={handleTimeChange}
                    />
                    <svg className="spectrogram-svg">
                        {/* Placeholder for spectrogram visualization */}
                        <rect x="0" y="0" width="100%" height="100%" fill="rgba(255,255,255,0.1)" />
                        <text x="50%" y="50%" textAnchor="middle" fill="#FFD700">
                            Espectrograma: {spectrogramFrequency} freq, tiempo: {spectrogramTime}
                        </text>
                    </svg>
                </div>
            )}
            {activeTab === 'comparative' && (
                <div className="comparative-analysis">
                    <h4>Análisis Comparativo</h4>
                    {comparativeData ? (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={comparativeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="ML" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="tradicional" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="loading">Cargando análisis comparativo...</div>
                    )}
                </div>
            )}
            <button className="andean-button" onClick={toggleDetails}>
                {showDetails ? "Ocultar detalles" : "Ver más detalles"}
            </button>
            {showDetails && (
                <div className="details-container">
                    <p>Este análisis utiliza técnicas avanzadas de machine learning para identificar instrumentos andinos con alta precisión.</p>
                    <p>La Quena, por ejemplo, se identifica por su característico timbre agudo y sus armónicos distintivos en el espectro de frecuencia.</p>
                    <p>El Charango, con su sonido brillante y rico en armónicos medios, se distingue claramente de otros instrumentos de cuerda.</p>
                    <p>Nuestro modelo ha sido entrenado con miles de muestras de audio de alta calidad, lo que permite una identificación precisa incluso en condiciones de grabación variables.</p>
                </div>
            )}
        </div>
    );
};

export default Results;
