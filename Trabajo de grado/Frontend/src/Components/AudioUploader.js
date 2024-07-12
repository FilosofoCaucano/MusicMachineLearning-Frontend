// AudioUploader.js
import React, { useState } from 'react';
import './AudioUploader.css';

const AudioUploader = ({ filter, onDataChange }) => {
    const [audioFile, setAudioFile] = useState(null);

    const handleFileChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (audioFile) {
            console.log(`Archivo subido: ${audioFile.name}`);
            onDataChange([{ name: audioFile.name, percentage: 100, color: '#FF4500' }]);
        }
    };

    return (
        <div className="audio-uploader">
            <h2>Subir Audio</h2>
            <input type="file" onChange={handleFileChange} className="custom-file-input" />
            <button className="andean-button" onClick={handleUpload}>Subir</button>
        </div>
    );
};

export default AudioUploader;



