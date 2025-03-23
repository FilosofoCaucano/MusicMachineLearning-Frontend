// frontend/src/services/api.js
import axios from 'axios';
import config from '../Config/Config';
import { handleApiError } from '../Utils/ErrorHandlers';

// Crear instancia de axios con configuración base
const api = axios.create({
    baseURL: `${config.apiUrl}/api`,
    headers: {
        'Accept': 'application/json',
    },
});

// 🎯 Servicio: identificar instrumento
export const identifyInstrument = async (audioFile, model = "multiclass") => {
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', model); // 🔥 Enviar también el modelo si backend lo permite

    try {
        const response = await api.post('/upload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};

// 🎯 Puedes agregar más funciones API aquí, como enviar feedback o contacto
// export const sendContactMessage = async (data) => { ... }
