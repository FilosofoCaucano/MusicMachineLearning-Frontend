import axios from 'axios';
import { API_BASE_URL } from '../Config/Config';

const api = axios.create({
    baseURL: API_BASE_URL,
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