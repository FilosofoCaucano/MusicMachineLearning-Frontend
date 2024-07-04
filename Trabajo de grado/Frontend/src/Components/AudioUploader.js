import React, { useState } from 'react';
import { uploadAudio } from '../services/api';

const AudioUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        try {
            const response = await uploadAudio(file);
            console.log('Upload successful:', response);
            // Handle successful upload (e.g., update state, notify parent component)
        } catch (error) {
            console.error('Upload failed:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} accept="audio/*" />
            <button type="submit">Upload</button>
        </form>
    );
};

export default AudioUploader;