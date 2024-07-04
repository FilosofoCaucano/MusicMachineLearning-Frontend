from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import AudioFile
from ..utils.ml_inference import identify_instrument

class IdentifyInstrumentView(APIView):
    def get(self, request, audio_id, format=None):
        try:
            audio_file = AudioFile.objects.get(id=audio_id)
            instrument = identify_instrument(audio_file.file.path)
            return Response({'instrument': instrument}, status=status.HTTP_200_OK)
        except AudioFile.DoesNotExist:
            return Response({'error': 'Audio file not found'}, status=status.HTTP_404_NOT_FOUND)