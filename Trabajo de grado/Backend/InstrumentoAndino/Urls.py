from django.urls import path
from .views import AudioFileUploadView, InstrumentListView

urlpatterns = [
    path('upload/', AudioFileUploadView.as_view(), name='upload'),
    path('instruments/', InstrumentListView.as_view(), name='instruments'),
]
