// frontend/src/services/api.js
import axios from 'axios';
import config from '../Config/Config';

const api = axios.create({
    baseURL: config.apiUrl,
});

export const uploadAudio = (file) => {
    const formData = new FormData();
    formData.append('audio', file);
    return api.post('/upload/', formData);
};

export const identifyInstrument = (audioId) => {
    return api.get(`/identify/${audioId}/`);
};

export const getInstrumentInfo = (instrumentId) => {
    return api.get(`/instrument/${instrumentId}/`);
};
