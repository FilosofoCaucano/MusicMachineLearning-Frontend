// frontend/src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AudioUploader from './components/AudioUploader';
import InstrumentDisplay from './components/InstrumentDisplay';
import FeedbackForm from './components/FeedbackForm';
import History from './components/History';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [filter, setFilter] = useState('all');
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
                    <FeedbackForm />
                    <History instrument={identifiedInstrument || { name: 'Quena', history: 'La quena es una flauta andina utilizada tradicionalmente en la música de los Andes.', imageUrl: 'Quena01.jpg' }} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
