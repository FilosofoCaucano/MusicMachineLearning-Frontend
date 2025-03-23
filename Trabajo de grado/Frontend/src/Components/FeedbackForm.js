// frontend/src/components/FeedbackForm.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        emailjs.send(
            'service_7ovvla6',        // ✅ Tu Service ID
            'template_l0pjheh',       // ✅ Tu Template ID
            formData,
            'jc2KHEe6_bqatSo0Q'       // ✅ Tu Public Key
        ).then(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }).catch((error) => {
            console.error('EmailJS Error:', error);
            setStatus('error');
        });
    };

    return (
        <div className="feedback-form">
            <h3>📣 Tu opinión es valiosa</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Comparte tus pensamientos sobre los instrumentos andinos..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="andean-button">Enviar Comentario</button>
            </form>

            {status === 'success' && <p className="status-message success">¡Gracias por tu comentario! ✅</p>}
            {status === 'error' && <p className="status-message error">⚠️ Por favor completa todos los campos correctamente.</p>}
        </div>
    );
};

export default FeedbackForm;
