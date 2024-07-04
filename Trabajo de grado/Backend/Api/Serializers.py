from rest_framework import serializers
from .models import AudioFile, Instrument

class AudioFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioFile
        fields = ['id', 'file', 'uploaded_at']

class InstrumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = ['id', 'name', 'type', 'description', 'origin', 'image']