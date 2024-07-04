from django.urls import path
from .views import upload, identify, info

urlpatterns = [
    path('upload/', upload.AudioUploadView.as_view(), name='audio-upload'),
    path('identify/<int:audio_id>/', identify.IdentifyInstrumentView.as_view(), name='identify-instrument'),
    path('instrument/<int:instrument_id>/', info.InstrumentInfoView.as_view(), name='instrument-info'),
]