from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Comment, Post, Topic
from django.contrib.auth.models import User


@api_view(['GET'])
def statistics_detail(request):
    topics_number = Topic.objects.all().count()
    posts_number = Post.objects.all().count()
    comments_number = Comment.objects.all().count()
    user_number = User.objects.all().count()

    data = {
        'topicsNumber': topics_number,
        'postsNumber': posts_number,
        'commentsNumber': comments_number,
        'userNumber': user_number,
    }
    return Response(data)
