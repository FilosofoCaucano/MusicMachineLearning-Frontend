-- Create Instruments table
CREATE TABLE IF NOT EXISTS instruments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    origin VARCHAR(100),
    image_url VARCHAR(255)
);

-- Create Audio Files table
CREATE TABLE IF NOT EXISTS audio_files (
    id SERIAL PRIMARY KEY,
    file_path VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    instrument_id INTEGER REFERENCES instruments(id)
);

-- Create Users table (if you plan to implement user authentication)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);