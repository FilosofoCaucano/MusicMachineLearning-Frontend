// frontend/src/components/AudioUploader.js
import React, { useState } from 'react';
import { identifyInstrument } from '../Services/Api';
import { Bar } from 'react-chartjs-2';
import './AudioUploader.css';

const INSTRUMENT_LABELS = [
    "Bandola", "Charango", "Guitarra", "Requinto", "Bombo", "Cajon",
    "Chajchas", "Guacharaca", "Ocarina", "Quena", "Toyo", "Zampoña"
];

const AudioUploader = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState(null);
    const [predictedInstrument, setPredictedInstrument] = useState('');
    const [selectedModel, setSelectedModel] = useState('multiclass');
    const [spectrogram, setSpectrogram] = useState(null);
    const [waveform, setWaveform] = useState(null);

    const handleModelChange = (e) => setSelectedModel(e.target.value);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith('audio/')) {
            setErrorMessage('El archivo debe ser un audio válido.');
            return;
        }
        setErrorMessage('');
        setAudioFile(file);
    };

    const handleUpload = async () => {
        if (!audioFile) {
            setErrorMessage('Por favor selecciona un archivo antes de subir.');
            return;
        }

        setIsUploading(true);
        setErrorMessage('');

        try {
            const formData = new FormData();
            formData.append('file', audioFile);
            formData.append('model', selectedModel);

            const response = await identifyInstrument(formData);

            if (response.instrument && response.probabilities) {
                setPredictedInstrument(response.instrument);
                setResults(response.probabilities);
                setSpectrogram(response.spectrogram || null);
                setWaveform(response.waveform || null);
            } else {
                setErrorMessage('No se encontraron resultados válidos.');
            }
        } catch (error) {
            console.error('Error al subir el archivo:', error);
            setErrorMessage('Hubo un error procesando el archivo. Intenta nuevamente.');
        } finally {
            setIsUploading(false);
        }
    };

    const top3Results = results
        ? results.map((prob, index) => ({
            instrument: INSTRUMENT_LABELS[index] || `Instrumento ${index + 1}`,
            probability: prob
        }))
            .sort((a, b) => b.probability - a.probability)
            .slice(0, 3)
        : [];

    return (
        <div className="audio-uploader">
            <h2>Clasificación de Instrumentos Andinos</h2>

            <label>Selecciona un modelo:</label>
            <select value={selectedModel} onChange={handleModelChange} className="model-selector">
                <option value="multiclass">Multiclass (CNN)</option>
                <option value="ensemble">Ensamblado</option>
                <option value="svm">SVM</option>
            </select>

            <input type="file" onChange={handleFileChange} className="custom-file-input" accept="audio/*" />
            <button onClick={handleUpload} className="andean-button" disabled={isUploading}>
                {isUploading ? 'Procesando...' : 'Subir y Clasificar'}
            </button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {predictedInstrument && (
                <h3 style={{ color: '#8B4513' }}>Instrumento Detectado: {predictedInstrument}</h3>
            )}

            {results && (
                <div className="chart-container">
                    <h3 style={{ color: '#8B4513' }}>Gráfica de Probabilidades</h3>
                    <Bar
                        data={{
                            labels: INSTRUMENT_LABELS,
                            datasets: [{
                                label: 'Probabilidad (%)',
                                data: results.map(prob => prob * 100),
                                backgroundColor: results.map(prob => (prob >= 0.5 ? 'green' : 'red')),
                            }],
                        }}
                        options={{
                            indexAxis: 'y',
                            responsive: true,
                            plugins: { legend: { display: false } },
                            scales: { x: { beginAtZero: true, max: 100 } },
                        }}
                    />
                </div>
            )}

            {top3Results.length > 0 && (
                <div className="chart-container">
                    <h3 style={{ color: '#8B4513' }}>Top 3 Predicciones</h3>
                    <Bar
                        data={{
                            labels: top3Results.map(item => item.instrument),
                            datasets: [{
                                label: 'Probabilidad (%)',
                                data: top3Results.map(item => item.probability * 100),
                                backgroundColor: 'orange',
                            }],
                        }}
                        options={{
                            responsive: true,
                            plugins: { legend: { display: false } },
                            scales: { x: { beginAtZero: true, max: 100 } },
                        }}
                    />
                </div>
            )}

            {spectrogram && selectedModel === "multiclass" && (
                <div className="spectrogram-container">
                    <h3 style={{ color: '#8B4513' }}>Espectrograma del Audio</h3>
                    <img src={`data:image/png;base64,${spectrogram}`} alt="Espectrograma" className="spectrogram-image" />
                </div>
            )}

            {waveform && (
                <div className="waveform-container">
                    <h3 style={{ color: '#8B4513' }}>Waveform del Audio</h3>
                    <img src={`data:image/png;base64,${waveform}`} alt="Waveform" className="waveform-image" />
                </div>
            )}
        </div>
    );
};

export default AudioUploader;
