// frontend/src/Utils/ErrorHandlers.js

export const handleApiError = (error) => {
    if (error.response) {
        // 🔥 El servidor respondió con un código fuera del rango 2xx
        console.error('🔴 Error de respuesta del servidor:');
        console.error('📦 Data:', error.response.data);
        console.error('📊 Status:', error.response.status);
        console.error('📁 Headers:', error.response.headers);

        // 🧠 Si quieres devolver un mensaje específico para mostrar en UI
        if (error.response.status === 500) {
            return 'Error interno del servidor. Por favor intenta más tarde.';
        }
        if (error.response.status === 400) {
            return 'Solicitud incorrecta. Revisa los datos enviados.';
        }
    } else if (error.request) {
        // 🚨 La solicitud fue hecha pero no hubo respuesta
        console.error('🔴 El servidor no respondió:');
        console.error('📡 Request:', error.request);
        return 'No se pudo conectar con el servidor.';
    } else {
        // ❌ Error durante la configuración de la solicitud
        console.error('❌ Error inesperado en la solicitud:', error.message);
        return 'Error inesperado. Intenta nuevamente.';
    }

    console.error('🧩 Configuración usada:', error.config);
    return 'Ocurrió un error al procesar la solicitud.';
};
