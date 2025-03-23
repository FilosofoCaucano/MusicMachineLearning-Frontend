// frontend/src/components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState(''); // success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que todos los campos estén completos
        if (!formData.name || !formData.email || !formData.message) {
            setStatusMessage('Por favor completa todos los campos.');
            setStatusType('error');
            return;
        }

        // Enviar el correo usando EmailJS
        emailjs.send(
            'service_7ovvla6',      // Service ID
            'template_l0pjheh',     // Template ID
            {
                name: formData.name,       // Debe coincidir con {{name}} en el template
                email: formData.email,     // Debe coincidir con {{email}} en el template
                message: formData.message  // Debe coincidir con {{message}} en el template
            },
            'jc2KHEe6_bqatSo0Q'     // Public key
        ).then(() => {
            setStatusMessage('Mensaje enviado correctamente. ✅');
            setStatusType('success');
            setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
        }).catch((error) => {
            console.error('EmailJS Error:', error);
            setStatusMessage('Hubo un problema al enviar el mensaje. ❌');
            setStatusType('error');
        });
    };

    return (
        <div className="contact">
            <h3>📬 Contacto</h3>
            <p>¿Tienes dudas o sugerencias? ¡Estoy aquí para escucharte!</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="message">Mensaje:</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required />

                <button type="submit" className="andean-button">Enviar</button>
            </form>

            {statusMessage && (
                <p className={`status-message ${statusType}`}>
                    {statusMessage}
                </p>
            )}
        </div>
    );
};

export default Contact;
