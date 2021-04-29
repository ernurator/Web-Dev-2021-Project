from rest_framework import generics
from ..models.post import Post
from ..models.topic import Topic
from rest_framework import mixins
from ..models.comment import Comment
from ..serializers.serializer import PostSerializer, TopicSerializer

class PostDetailAPIVIEW(generics.RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostListAPIVIEW(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class TopicDetailAPIVIEW(generics.RetrieveAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer






