// src/components/AudioUploader.js
import React, { useState } from 'react';

const AudioUploader = ({ filter }) => {
    const [audioFile, setAudioFile] = useState(null);

    const handleFileChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (audioFile) {
            // Lógica para subir y procesar el archivo de audio
            console.log(`Archivo subido: ${audioFile.name}`);
        }
    };

    return (
        <div className="audio-uploader">
            <h2>Subir Audio</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default AudioUploader;


