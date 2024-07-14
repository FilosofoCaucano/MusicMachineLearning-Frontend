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
    const [filter, setFilter] = useState('all');  // Añadido 'filter' para eliminar la advertencia
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
                    <div className="post">
                        <h3 style={{ backgroundColor: 'cream', textAlign: 'center' }}>Sobre el Proyecto</h3>
                        <p>Este proyecto utiliza técnicas de machine learning para identificar instrumentos musicales de la región andina a partir de archivos de audio.</p>
                    </div>
                    <AudioUploader onInstrumentIdentified={handleInstrumentIdentified} />
                    {identifiedInstrument && (
                        <InstrumentDisplay instrumentData={identifiedInstrument} />
                    )}
                    <Results />
                    <div className="history-section">
                        <h3>Instrumentos de Viento</h3>
                        <History instrument={{ name: 'Quena', history: 'La quena es una flauta andina utilizada tradicionalmente en la música de los Andes.', imageUrl: 'Quena01.jpg' }} />
                        <History instrument={{ name: 'Sikus', history: 'El siku o zampoña es un conjunto de flautas de pan hechas de caña, con tubos de diferentes longitudes.', imageUrl: 'Sikus01.jpg' }} />
                        <History instrument={{ name: 'Toyos', history: 'El toyo es un gran conjunto de flautas de madera con un tubo de gran longitud y un sonido grave.', imageUrl: 'Toyos01.jpg' }} />
                        <History instrument={{ name: 'Ocarina', history: 'La ocarina es un instrumento de viento que produce sonido por la vibración del aire en una cámara ovalada.', imageUrl: 'Ocarina01.jpg' }} />

                        <h3>Instrumentos de Cuerda</h3>
                        <History instrument={{ name: 'Charango', history: 'El charango es un instrumento de cuerdas utilizado en la música tradicional de los Andes, similar a una guitarra pequeña.', imageUrl: 'Charango01.jpg' }} />
                        <History instrument={{ name: 'Guitarra', history: 'Una variante de la guitarra española adaptada a la música andina.', imageUrl: 'Guitarra01.jpg' }} />
                        <History instrument={{ name: 'Bandola', history: 'Un instrumento similar a la mandolina, común en la música de los Andes.', imageUrl: 'Bandola01.jpg' }} />
                        <History instrument={{ name: 'Tiple', history: 'El tiple es un pequeño instrumento de cuerda conocido por su sonido agudo y melodioso.', imageUrl: 'Tiple01.jpg' }} />

                        <h3>Instrumentos de Percusión</h3>
                        <History instrument={{ name: 'Bombo', history: 'El bombo es un tambor grande utilizado en la música andina, especialmente en ritmos folclóricos.', imageUrl: 'Bombo01.jpg' }} />
                        <History instrument={{ name: 'Cajón Peruano', history: 'El cajón peruano es una caja de resonancia de madera que se toca con las manos, originaria de Perú.', imageUrl: 'CajonPeruano01.jpg' }} />
                        <History instrument={{ name: 'Wankara', history: 'El wankara es un pequeño tambor de mano utilizado en ceremonias tradicionales y en música andina.', imageUrl: 'Wankara01.jpg' }} />
                        <History instrument={{ name: 'Guacharaca', history: 'La guacharaca es un instrumento de percusión idiófono de raspado utilizado en la música de la región andina.', imageUrl: 'Guacharaca01.jpg' }} />
                    </div>
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
