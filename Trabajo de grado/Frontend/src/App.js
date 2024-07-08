import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import AudioUploader from './Components/AudioUploader';
import InstrumentDisplay from './Components/InstrumentDisplay';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <Header />
            <div id="wrap">
                <Sidebar />
                <div id="content">
                    <div className="post">
                        <h1>Sobre el Proyecto</h1>
                        <p>Este proyecto utiliza técnicas de machine learning para identificar instrumentos musicales de la región andina a partir de archivos de audio.</p>
                        <AudioUploader />
                        <InstrumentDisplay />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;

