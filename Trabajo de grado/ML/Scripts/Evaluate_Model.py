import joblib
import numpy as np
from sklearn.metrics import classification_report, confusion_matrix
from preprocess_data import load_data

def evaluate_model(model_path, X_test, y_test):
    # Load the trained model
    model = joblib.load(model_path)
    
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Print classification report
    print(classification_report(y_test, y_pred))
    
    # Print confusion matrix
    print(confusion_matrix(y_test, y_pred))

if __name__ == "__main__":
    # Load test data
    X_test, y_test = load_data('test')
    
    # Evaluate the model
    evaluate_model('models/instrument_classifier.pkl', X_test, y_test)