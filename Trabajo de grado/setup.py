import os

# Definir la estructura de directorios y archivos
directories = [
    "Trabajo de grado/data",
    "Trabajo de grado/models",
    "Trabajo de grado/src/preprocessing",
    "Trabajo de grado/src/training",
    "Trabajo de grado/src/app",
    "Trabajo de grado/tests",
]

files = {
    "Trabajo de grado/requirements.txt": "",
    "Trabajo de grado/README.md": "# Identificación de Instrumentos Andinos\n\nEste proyecto tiene como objetivo desarrollar un sistema de identificación de instrumentos musicales en la región andina utilizando técnicas de aprendizaje automático.",
    "Trabajo de grado/.gitignore": "venv/\n__pycache__/\n*.pyc\ndata/\n.vscode/",
}

# Crear directorios
for directory in directories:
    os.makedirs(directory, exist_ok=True)

# Crear archivos con contenido inicial
for file_path, content in files.items():
    with open(file_path, 'w') as file:
        file.write(content)

print("Estructura de proyecto creada exitosamente.")
