from rest_framework.decorators import api_view
from ..models.post import Post
from ..models.topic import Topic
from ..models.comment import Comment
from ..serializers.serializer import PostSerializer, TopicSerializer
from rest_framework.response import Response
from rest_framework.request import Request

@api_view(['GET'])
def topicList(request):
    if request.method == "GET":
        topics = Topic.objects.all()
        serializer = TopicSerializer(topics, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def topicPosts(request, topic_id):
    if request.method == "GET":
        posts = Post.objects.filter(topic=topic_id)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


