import React, { useState } from 'react';
import AudioUploader from './components/AudioUploader';
import InstrumentDisplay from './components/InstrumentDisplay';
import InstrumentInfo from './components/InstrumentInfo';

function App() {
    const [identifiedInstrument, setIdentifiedInstrument] = useState(null);

    return (
        <div className="App">
            <h1>Andean Instrument Identifier</h1>
            <AudioUploader onUploadSuccess={setIdentifiedInstrument} />
            <InstrumentDisplay instrument={identifiedInstrument} />
            <InstrumentInfo instrument={identifiedInstrument} />
        </div>
    );
}

export default App;