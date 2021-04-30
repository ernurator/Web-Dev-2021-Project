from django.db import models
from .topic import Topic
from django.utils import timezone
from django.contrib.auth.models import User


class Post(models.Model):
    header = models.CharField(max_length=255)
    text = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        short_header = self.header[:20] + ('...' if len(self.header) > 20 else '')
        return f'\"{short_header}\" post in thread {str(self.topic)} from {str(self.author)}'
