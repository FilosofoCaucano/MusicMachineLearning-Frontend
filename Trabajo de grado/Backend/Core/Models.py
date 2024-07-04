from django.db import models

class AudioFile(models.Model):
    file = models.FileField(upload_to='audio_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

class Instrument(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    description = models.TextField()
    origin = models.CharField(max_length=100)
    image = models.ImageField(upload_to='instrument_images/', null=True, blank=True)

    def __str__(self):
        return self.name