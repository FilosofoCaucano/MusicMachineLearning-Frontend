// frontend/src/App.js

import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import AudioUploader from './Components/AudioUploader';
import InstrumentDisplay from './Components/InstrumentDisplay';
import InstrumentInfo from './Components/InstrumentInfo';
import FeedbackForm from './Components/FeedbackForm';
import History from './Components/History';
import Results from './Components/Results';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
    const [setFilter] = useState('all');
    const [identifiedInstrument, setIdentifiedInstrument] = useState(null);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleInstrumentIdentified = (instrument) => {
        setIdentifiedInstrument(instrument);
    };

    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <Sidebar onFilterChange={handleFilterChange} />
                <div className="content">
                    <AudioUploader onInstrumentIdentified={handleInstrumentIdentified} />
                    {identifiedInstrument && (
                        <InstrumentDisplay instrumentData={identifiedInstrument} />
                    )}
                    <div className="post">
                        <h3>Sobre el Proyecto</h3>
                        <p>Este proyecto utiliza técnicas de machine learning para identificar instrumentos musicales de la región andina a partir de archivos de audio.</p>
                    </div>
                    <Results />
                    <History instrument={{ name: 'Quena', history: 'La quena es una flauta andina utilizada tradicionalmente en la música de los Andes.', imageUrl: 'Quena01.jpg' }} />
                    <History instrument={{ name: 'Bombo', history: 'El bombo es un tambor grande utilizado en la música andina, especialmente en ritmos folclóricos.', imageUrl: 'Bombo01.jpg' }} />
                    <History instrument={{ name: 'Charango', history: 'El charango es un instrumento de cuerdas utilizado en la música tradicional de los Andes, similar a una guitarra pequeña.', imageUrl: 'Charango01.jpg' }} />
                    {identifiedInstrument && (
                        <InstrumentInfo instrument={identifiedInstrument} />
                    )}
                    <FeedbackForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
