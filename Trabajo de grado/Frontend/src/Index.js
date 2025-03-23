// frontend/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Punto de entrada para la aplicación
const container = document.getElementById('root');
const root = createRoot(container);

// Render de la app con soporte para el modo estricto
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/* 
// Si quieres preparar tu app para lazy loading:
// import('./App').then(({ default: App }) => {
//     root.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );
// });
*/
