from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Instrument
from ..serializers import InstrumentSerializer

class InstrumentInfoView(APIView):
    def get(self, request, instrument_id, format=None):
        try:
            instrument = Instrument.objects.get(id=instrument_id)
            serializer = InstrumentSerializer(instrument)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Instrument.DoesNotExist:
            return Response({'error': 'Instrument not found'}, status=status.HTTP_404_NOT_FOUND)