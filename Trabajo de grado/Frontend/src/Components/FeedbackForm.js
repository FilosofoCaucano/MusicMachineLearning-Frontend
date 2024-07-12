// src/components/FeedbackForm.js
import React from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    return (
        <div id="feedback" className="feedback-form card">
            <h3>Deja un Comentario</h3>
            <textarea placeholder="Escribe tu comentario aquí..."></textarea>
            <button className="blue-button">Enviar</button>
        </div>
    );
};

export default FeedbackForm;

