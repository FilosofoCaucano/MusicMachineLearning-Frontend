import os
import pandas as pd

def collect_audio_files(root_dir):
    data = []
    for instrument in os.listdir(root_dir):
        instrument_dir = os.path.join(root_dir, instrument)
        if os.path.isdir(instrument_dir):
            for audio_file in os.listdir(instrument_dir):
                if audio_file.endswith('.wav'):
                    data.append({
                        'file_path': os.path.join(instrument_dir, audio_file),
                        'instrument': instrument
                    })
    return pd.DataFrame(data)

if __name__ == "__main__":
    # Collect training data
    train_data = collect_audio_files('data/raw/train')
    train_data.to_csv('data/train_data.csv', index=False)
    
    # Collect test data
    test_data = collect_audio_files('data/raw/test')
    test_data.to_csv('data/test_data.csv', index=False)