from .post import Post
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Comment(models.Model):
    text = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f'Comment #{self.pk} for post {self.post.pk} from {str(self.author)}'
