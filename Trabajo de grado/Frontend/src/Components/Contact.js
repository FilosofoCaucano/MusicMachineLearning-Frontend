import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contacto</h3>
            <p>Para más información o consultas, por favor contáctanos a través del siguiente formulario.</p>
            <form>
                <label>Nombre:</label>
                <input type="text" name="name" />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Mensaje:</label>
                <textarea name="message"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;
