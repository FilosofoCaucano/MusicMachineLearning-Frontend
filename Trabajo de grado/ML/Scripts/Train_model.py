import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from preprocess_data import load_data

def train_model(X, y):
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Initialize and train the model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Save the model
    joblib.dump(model, 'models/instrument_classifier.pkl')
    
    return model, X_test, y_test

if __name__ == "__main__":
    # Load data
    X, y = load_data('train')
    
    # Train the model
    model, X_test, y_test = train_model(X, y)
    
    # Evaluate the model
    print("Model accuracy:", model.score(X_test, y_test))