import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import AudioUploader from './Components/AudioUploader';
import InstrumentDisplay from './Components/InstrumentDisplay';
import FeedbackForm from './Components/FeedbackForm';
import History from './Components/History';
import DataVisualization from './Components/DataVisualization';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
    const [filter, setFilter] = useState('all');
    const [data] = useState([
        { label: 'Viento', value: 10 },
        { label: 'Cuerda', value: 20 },
        { label: 'Percusión', value: 5 }
    ]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="container">
            <Header />
            <div id="wrap">
                <Sidebar onFilterChange={handleFilterChange} />
                <div id="content">
                    <div className="post">
                        <h1>Sobre el Proyecto</h1>
                        <p>Este proyecto utiliza técnicas de machine learning para identificar instrumentos musicales de la región andina a partir de archivos de audio.</p>
                        <AudioUploader filter={filter} />
                        <InstrumentDisplay filter={filter} />
                        <FeedbackForm />
                        <History instrument={{ name: 'Quena', history: 'La quena es una flauta andina utilizada tradicionalmente en la música de los Andes.' }} />
                        <DataVisualization data={data} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;


