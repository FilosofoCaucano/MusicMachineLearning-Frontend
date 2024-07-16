import joblib
from .audio_processor import extract_features

# Load the trained model
model = joblib.load('path/to/your/trained_model.pkl')

def identify_instrument(audio_path):
    # Extract features from the audio file
    features = extract_features(audio_path)
    
    # Make prediction
    prediction = model.predict([features])[0]
    
    # Map prediction to instrument name (you'll need to create this mapping)
    instrument_mapping = {
        0: 'Quena',
        1: 'Sikus',
        2: 'Charango',
        # Add more mappings as needed
    }
    
    return instrument_mapping.get(prediction, 'Unknown Instrument')
