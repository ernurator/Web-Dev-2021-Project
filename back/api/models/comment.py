from .post import Post
# from .user import UserProfile
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Comment(models.Model):
    text = models.TextField()
    date = models.DateField(default=timezone.now)
    # TODO add constraint: likes > 0
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')

    def to_json(self):
        return {
            'id': self.pk,
            'text': self.text,
            'date': self.date,
            'likes': self.likes,
            'author_id': self.author.pk,
            'post_id': self.post.pk,
        }

    def __str__(self):
        return f'Comment #{self.pk} for post {self.post.pk} from {str(self.author)}'
