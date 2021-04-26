from .models import comment, post, topic
from django.contrib import admin
from .models import *

# TODO Register with decorator.
admin.site.register((comment.Comment, post.Post, topic.Topic))
