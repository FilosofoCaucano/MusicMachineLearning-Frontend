import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/send-email/', formData);
            if (response.status === 200) {
                setStatusMessage('Mensaje enviado correctamente. ✅');
                setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
            }
        } catch (error) {
            setStatusMessage('Error enviando el mensaje. ❌');
            console.error('Error:', error);
        }
    };

    return (
        <div className="contact">
            <h3>Contacto</h3>
            <p>Para más información o consultas, por favor contáctanos a través del siguiente formulario.</p>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Mensaje:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />

                <button type="submit">Enviar</button>
            </form>

            {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
    );
};

export default Contact;
