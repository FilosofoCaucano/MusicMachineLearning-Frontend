// frontend/src/components/AudioUploader.js
import React, { useState } from 'react';
import { uploadAudio, identifyInstrument } from '../Services/Api';
import './AudioUploader.css';

const AudioUploader = ({ onInstrumentIdentified }) => {
    const [audioFile, setAudioFile] = useState(null);

    const handleFileChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const uploadResponse = await uploadAudio(audioFile);
            const audioId = uploadResponse.data.id;
            const identifyResponse = await identifyInstrument(audioId);
            onInstrumentIdentified(identifyResponse.data.instrument);
        } catch (error) {
            console.error('Error uploading or identifying audio', error);
        }
    };

    return (
        <div className="audio-uploader">
            <input type="file" className="custom-file-input" onChange={handleFileChange} />
            <button className="andean-button" onClick={handleUpload}>Clasificar</button>
        </div>
    );
};

export default AudioUploader;
