import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import AudioUploader from './Components/AudioUploader';
import InstrumentDisplay from './Components/InstrumentDisplay';
import FeedbackForm from './Components/FeedbackForm';
import History from './Components/History';
import Results from './Components/Results';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="app-container">
            <Header />
            <div className="main-container">
                <div className="content-wrapper">
                    <div className="title-container">
                        <h1 className="main-title">Identificador de instrumentos de la región andina</h1>
                        <h2 className="subtitle">Usando técnicas de machine learning</h2>
                    </div>
                    <Sidebar onFilterChange={handleFilterChange} />
                    <div className="content">
                        <div className="post">
                            <h3>Sobre el Proyecto</h3>
                            <p>Este proyecto utiliza técnicas de machine learning para identificar instrumentos musicales de la región andina a partir de archivos de audio.</p>
                            <AudioUploader filter={filter} />
                            <InstrumentDisplay filter={filter} />
                            <Results />
                            <FeedbackForm />
                            <History instrument={{ name: 'Quena', history: 'La quena es una flauta andina utilizada tradicionalmente en la música de los Andes.', imageUrl: 'Quena01.jpg' }} />
                            <History instrument={{ name: 'Bombo', history: 'El bombo es un tambor grande utilizado en la música andina, especialmente en ritmos folclóricos.', imageUrl: 'Bombo01.jpg' }} />
                            <History instrument={{ name: 'Charango', history: 'El charango es un instrumento de cuerdas utilizado en la música tradicional de los Andes, similar a una guitarra pequeña.', imageUrl: 'Charango01.jpg' }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
