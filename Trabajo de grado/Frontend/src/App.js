import React from 'react';
import AudioUploader from './Components/AudioUploader';
import InstrumentDisplay from './Components/InstrumentDisplay';

const App = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Andean Instruments Identifier</h1>
            </header>
            <AudioUploader />
            <InstrumentDisplay />
        </div>
    );
};

export default App;
