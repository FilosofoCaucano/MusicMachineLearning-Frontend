import unittest
import os
from src.preprocessing import preprocess_audio_files

class TestPreprocessing(unittest.TestCase):
    
    def test_preprocess_audio_files(self):
        audio_dir = "data"
        features = preprocess_audio_files(audio_dir)
        self.assertIsInstance(features, list)
        self.assertGreater(len(features), 0)

if __name__ == "__main__":
    unittest.main()
