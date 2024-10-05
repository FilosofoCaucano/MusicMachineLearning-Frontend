import os
from pydub import AudioSegment

def split_wav(input_file, output_folder, segment_length_ms=5000):
    # Crear el directorio de salida si no existe
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Cargar el archivo de audio
    audio = AudioSegment.from_wav(input_file)

    # Obtener la duración total del audio en milisegundos
    total_duration = len(audio)

    # Dividir el audio en segmentos de 5 segundos
    for start_time in range(0, total_duration, segment_length_ms):
        end_time = start_time + segment_length_ms
        if end_time > total_duration:
            end_time = total_duration

        # Extraer el segmento
        segment = audio[start_time:end_time]

        # Generar el nombre del archivo de salida
        output_filename = f"segment_{start_time//1000:04d}_{end_time//1000:04d}.wav"
        output_path = os.path.join(output_folder, output_filename)

        # Guardar el segmento como un nuevo archivo WAV
        segment.export(output_path, format="wav")

        print(f"Segmento guardado: {output_filename}")

# Ejemplo de uso
input_file = "ruta/a/tu/archivo_de_entrada.wav"
output_folder = "ruta/a/la/carpeta_de_salida"

split_wav(input_file, output_folder)