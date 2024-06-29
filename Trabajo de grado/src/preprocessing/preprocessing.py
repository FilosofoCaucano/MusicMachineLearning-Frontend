import os
import librosa
import numpy as np

def load_audio(file_path, sr=22050):
    """
    Carga un archivo de audio y lo convierte a un array de numpy.
    
    Args:
    file_path (str): Ruta al archivo de audio.
    sr (int): Frecuencia de muestreo.
    
    Returns:
    np.ndarray: Señal de audio.
    int: Frecuencia de muestreo.
    """
    signal, sr = librosa.load(file_path, sr=sr)
    return signal, sr

def extract_features(signal, sr):
    """
    Extrae características del audio usando librosa.
    
    Args:
    signal (np.ndarray): Señal de audio.
    sr (int): Frecuencia de muestreo.
    
    Returns:
    np.ndarray: Características extraídas.
    """
    mfccs = librosa.feature.mfcc(y=signal, sr=sr, n_mfcc=13)
    return np.mean(mfccs.T, axis=0)

def preprocess_audio_files(audio_dir):
    """
    Preprocesa todos los archivos de audio en un directorio.
    
    Args:
    audio_dir (str): Ruta al directorio que contiene los archivos de audio.
    
    Returns:
    list: Lista de características extraídas de cada archivo.
    """
    features = []
    for file_name in os.listdir(audio_dir):
        if file_name.endswith('.wav'):
            file_path = os.path.join(audio_dir, file_name)
            signal, sr = load_audio(file_path)
            mfccs = extract_features(signal, sr)
            features.append(mfccs)
    return features

if __name__ == "__main__":
    audio_dir = "../../data"  # Directorio que contiene los archivos de audio
    features = preprocess_audio_files(audio_dir)
    print(f"Processed {len(features)} audio files.")

