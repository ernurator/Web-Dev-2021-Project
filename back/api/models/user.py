from django.db import models

class UserProfile(models.Model):
    username = models.CharField(max_length=50)
    bio = models.TextField()
    email = models.EmailField()
    password = models.CharField(max_length=255)
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def to_json(self):
        return {
            'id': self.pk,
            'username': self.username,
            'bio': self.bio,
            'email': self.email,
            'password': self.password,
        }

    def __str__(self):
        return f'User {self.username}'
