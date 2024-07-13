# backend/api/models.py

from django.db import models

class AudioFile(models.Model):
    file = models.FileField(upload_to='audio/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Audio File {self.id}'


class Instrument(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)  # viento, cuerda, percusión
    description = models.TextField()
    origin = models.CharField(max_length=100)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.name
