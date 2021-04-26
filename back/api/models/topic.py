from django.db import models


class Topic(models.Model):
    theme = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return f'{self.theme} topic'
