import librosa
import numpy as np

def extract_features(audio_path):
    # Load the audio file
    y, sr = librosa.load(audio_path)
    
    # Extract features
    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
    spectral_centroid = librosa.feature.spectral_centroid(y=y, sr=sr)
    chroma = librosa.feature.chroma_stft(y=y, sr=sr)
    
    # Compute statistics
    features = np.hstack([
        np.mean(mfccs, axis=1),
        np.mean(spectral_centroid),
        np.mean(chroma, axis=1)
    ])
    
    return features
