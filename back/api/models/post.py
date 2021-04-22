from django.db import models
# from .user import UserProfile
from .topic import Topic
from django.utils import timezone
from django.contrib.auth.models import User


class Post(models.Model):
    header = models.CharField(max_length=255)
    text = models.TextField()
    date = models.DateField(default=timezone.now)
    # TODO add > 0 constraint on likes
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='posts')
    
    def to_json(self):
        return { 
            'id': self.pk,
            'header': self.header,
            'text': self.text,
            'date': self.date,
            'likes': self.likes,
            'author': self.author.pk,
            'topic': self.topic.pk,
        }

    def __str__(self):
        short_header = self.header[:20] + '...' if len(self.header) > 20 else ''
        return f'{short_header} post in thread {str(self.topic)} from {str(self.author)}'
