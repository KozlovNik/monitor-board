from django.db import models


MONITOR_TYPE_CHOICES = (
    ('image', 'image'),
    ('slider', 'slider'),
    ('video', 'video')
)


class Monitor(models.Model):
    name = models.CharField(max_length=150)
    monitor_type = models.CharField(max_length=150,choices=MONITOR_TYPE_CHOICES)
    image1 = models.ImageField(null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)
    image3 = models.ImageField(null=True, blank=True)
    video = models.FileField(null=True, blank=True)
