from rest_framework.decorators import api_view
from rest_framework import generics
from api.models import Post
from api.models import Topic
from api.serializers import PostSerializer, TopicSerializer
from rest_framework.response import Response


class TopicDetailAPIView(generics.RetrieveAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


@api_view(['GET'])
def topic_list(request):
    if request.method == "GET":
        topics = Topic.objects.all()
        serializer = TopicSerializer(topics, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def topic_posts(request, topic_id):
    if request.method == "GET":
        posts = Post.objects.filter(topic=topic_id)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
