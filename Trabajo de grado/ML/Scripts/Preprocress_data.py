import numpy as np
import pandas as pd
import librosa

def extract_features(file_path):
    y, sr = librosa.load(file_path)
    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
    return np.mean(mfccs.T, axis=0)

def load_data(split='train'):
    data = pd.read_csv(f'data/{split}_data.csv')
    X = np.array([extract_features(file) for file in data['file_path']])
    y = data['instrument']
    return X, y

if __name__ == "__main__":
    # Preprocess training data
    X_train, y_train = load_data('train')
    np.save('data/processed/X_train.npy', X_train)
    np.save('data/processed/y_train.npy', y_train)
    
    # Preprocess test data
    X_test, y_test = load_data('test')
    np.save('data/processed/X_test.npy', X_test)
    np.save('data/processed/y_test.npy', y_test)