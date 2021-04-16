from .models import comment, post, topic, user
from django.contrib import admin
from .models import *

# * Register with decorator.
admin.site.register((comment.Comment, post.Post, topic.Topic, user.UserProfile))
