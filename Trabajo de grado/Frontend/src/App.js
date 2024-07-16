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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleInstrumentIdentified = (instrument) => {
        setIdentifiedInstrument(instrument);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="app-container">
            <Header toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <Sidebar
                    onFilterChange={handleFilterChange}
                    isOpen={sidebarOpen}
                    closeSidebar={() => setSidebarOpen(false)}
                />
                <div className="content">
                    <div className="post">
                        <h3>Sobre el Proyecto</h3>
                        <p>Este proyecto utiliza técnicas de machine learning para identificar instrumentos musicales de la región andina a partir de archivos de audio.
                            La identificacion de instrumentos musicales a partir de grabaciones de audio es una tarea
                            compleja que ha cobrado gran relevancia en el campo de la musicologia y las aplicaciones
                            tecnologicas. La creciente disponibilidad de grandes bases de datos de musica accesibles
                            al publico ha creado la necesidad de desarrollar sistemas que permitan la clasificacion
                            y el reconocimiento automatico de los contenidos de estos archivos. La identificacion
                            de instrumentos musicales en grabaciones de audio es crucial para diversas aplicaciones,
                            tales como la indexacion automatica de datos, la recuperacion de informacion en bases de
                            datos, el reconocimiento de estilos musicales, la edicion de audio, la generacion de listas
                            de reproduccion, la recuperacion de audio y la transcripcion musical. A pesar de los
                            numerosos estudios propuestos sobre la identificacion de instrumentos musicales, no se ha
                            encontrado investigacion especifica sobre la identificacion de los instrumentos tipicos de la
                            region andina

                            <p>La identificacion de instrumentos musicales de la region andina mediante tecnicas
                                de Machine Learning representa una interseccion innovadora entre la musica tradicional
                                y la tecnologia moderna. Este enfoque aprovecha la capacidad de los algoritmos de
                                aprendizaje automatico para procesar y analizar digitalmente las caracteristicas acusticas
                                de los sonidos, mejorando asi la precision y eficiencia en la identificacion de instrumentos
                                musicales especificos. Machine Learning (ML) ha evolucionado drasticamente en los
                                ultimos años y ahora se esta utilizando a escala global por los ingenierios de sistemas para
                                resolver diferentes problemas.</p>
                            <p>Como un subconjunto de la inteligencia artificial, ML se ha considerado vital al desarrollar
                                sistemas de software para dominios como el reconocimiento de voz/imagen o automotriz.
                                Las tecnicas de ML tambien se han utilizado para abordar varios problemas y actividades
                                de ingenieria de software. Comunmente, ML se ha empleado en la prediccion de defectos,
                                la estimacion de esfuerzo y la identificacion de patrones y similitudes en el codigo fuente.
                                Estas tecnicas estan dirigidas esencialmente a resolver problemas, los cuales a menudo
                                pueden ser dificiles de analizar para las personas como la identificacion y reconocimiento
                                de instrumentos.</p>

                        </p>
                    </div>
                    <AudioUploader onInstrumentIdentified={handleInstrumentIdentified} />
                    {identifiedInstrument && (
                        <InstrumentDisplay instrumentData={identifiedInstrument} />
                    )}
                    <Results />
                    <div className="history-section">
                        <h3>Instrumentos de Viento</h3>
                        <div className="instrument-grid">
                            <History instrument={{ name: 'Quena', history: 'La quena es una flauta andina utilizada tradicionalmente en la música de los Andes.', imageUrl: 'Quena01.jpg' }} />
                            <History instrument={{ name: 'Sikus', history: 'El siku o zampoña es un conjunto de flautas de pan hechas de caña, con tubos de diferentes longitudes.', imageUrl: 'Sikus01.jpg' }} />
                            <History instrument={{ name: 'Toyos', history: 'El toyo es un gran conjunto de flautas de madera con un tubo de gran longitud y un sonido grave.', imageUrl: 'Toyos01.jpg' }} />
                            <History instrument={{ name: 'Ocarina', history: 'La ocarina es un instrumento de viento que produce sonido por la vibración del aire en una cámara ovalada.', imageUrl: 'Ocarina01.jpg' }} />
                        </div>

                        <h3>Instrumentos de Cuerda</h3>
                        <div className="instrument-grid">
                            <History instrument={{ name: 'Charango', history: 'El charango es un instrumento de cuerdas utilizado en la música tradicional de los Andes, similar a una guitarra pequeña.', imageUrl: 'Charango01.jpg' }} />
                            <History instrument={{ name: 'Guitarra', history: 'Una variante de la guitarra española adaptada a la música andina.', imageUrl: 'Guitarra01.jpg' }} />
                            <History instrument={{ name: 'Bandola', history: 'Un instrumento similar a la mandolina, común en la música de los Andes.', imageUrl: 'Bandola01.jpg' }} />
                            <History instrument={{ name: 'Tiple', history: 'El tiple es un pequeño instrumento de cuerda conocido por su sonido agudo y melodioso.', imageUrl: 'Tiple01.jpg' }} />
                        </div>

                        <h3>Instrumentos de Percusión</h3>
                        <div className="instrument-grid">
                            <History instrument={{ name: 'Bombo', history: 'El bombo es un tambor grande utilizado en la música andina, especialmente en ritmos folclóricos.', imageUrl: 'Bombo01.jpg' }} />
                            <History instrument={{ name: 'Cajón Peruano', history: 'El cajón peruano es una caja de resonancia de madera que se toca con las manos, originaria de Perú.', imageUrl: 'CajonPeruano01.jpg' }} />
                            <History instrument={{ name: 'Wankara', history: 'El wankara es un pequeño tambor de mano utilizado en ceremonias tradicionales y en música andina.', imageUrl: 'Wankara01.jpg' }} />
                            <History instrument={{ name: 'Guacharaca', history: 'La guacharaca es un instrumento de percusión idiófono de raspado utilizado en la música de la región andina.', imageUrl: 'Guacharaca01.jpg' }} />
                        </div>
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