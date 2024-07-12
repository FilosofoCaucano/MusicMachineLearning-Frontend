// src/components/AudioUploader.js
import React, { useState } from 'react';
import './AudioUploader.css';

const AudioUploader = ({ filter, onDataChange }) => {
    const [audioFile, setAudioFile] = useState(null);

    const handleFileChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (audioFile) {
            // Lógica para subir y procesar el archivo de audio
            console.log(`Archivo subido: ${audioFile.name}`);
            onDataChange([{ name: audioFile.name, percentage: 100, color: '#FF4500' }]); // Ejemplo de actualización de datos
        }
    };

    return (
        <div className="audio-uploader">
            <h2>Subir Audio</h2>
            <input type="file" onChange={handleFileChange} className="custom-file-input" />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default AudioUploader;



