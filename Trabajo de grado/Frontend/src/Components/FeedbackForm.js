import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Comment submitted:', comment);
        setComment('');
    };

    return (
        <form className="feedback-form" onSubmit={handleSubmit}>
            <label htmlFor="comment">Dejar Comentarios</label>
            <textarea
                id="comment"
                value={comment}
                onChange={handleCommentChange}
                rows="4"
                cols="50"
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FeedbackForm;

