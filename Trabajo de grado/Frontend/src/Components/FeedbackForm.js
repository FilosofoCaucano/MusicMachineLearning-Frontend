import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = () => {
        // Lógica para enviar la retroalimentación
        console.log(`Retroalimentación enviada: ${feedback}`);
    };

    return (
        <div className="feedback-form">
            <h2>Dejar Comentarios</h2>
            <textarea value={feedback} onChange={handleFeedbackChange} />
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default FeedbackForm;
