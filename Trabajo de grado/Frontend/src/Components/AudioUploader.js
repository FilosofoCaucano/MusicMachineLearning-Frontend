// src/components/AudioUploader.js
import React, { useState } from 'react';

const AudioUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Aquí iría la lógica para subir el archivo al backend
        console.log('Archivo subido:', file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button className="button" onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default AudioUploader;

