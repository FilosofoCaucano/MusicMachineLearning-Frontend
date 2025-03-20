// frontend/src/services/api.js
import axios from 'axios';

const apiBaseUrl = 'http://127.0.0.1:8000/api';

export const identifyInstrument = async (formData) => {
    try {
        const response = await axios.post(`${apiBaseUrl}/upload/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error en la solicitud:', error.response || error.message);
        throw error;
    }
};







