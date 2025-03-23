// frontend/src/config/config.js

const getApiUrl = () => {
    // Modo desarrollo local por defecto
    if (process.env.NODE_ENV === 'development') {
        return 'http://127.0.0.1:8000';
    }

    // Puedes definir REACT_APP_API_URL en .env.production para producción
    return process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
};

const config = {
    apiUrl: getApiUrl(),
};

export default config;
