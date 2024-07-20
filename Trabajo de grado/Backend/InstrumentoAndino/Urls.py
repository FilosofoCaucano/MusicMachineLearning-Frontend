from django.urls import path
from .Views import AudioFileUploadView, InstrumentListView

urlpatterns = [
    path('upload/', AudioFileUploadView.as_view(), name='upload'),
    path('instruments/', InstrumentListView.as_view(), name='instruments'),
]
