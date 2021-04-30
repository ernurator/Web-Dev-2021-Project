from rest_framework import serializers
from api.models import Post
from .topic import TopicSerializer
from .user import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    topic = TopicSerializer(read_only=True)
    author_id = serializers.IntegerField(write_only=True)
    topic_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ('id', 'date',)


class PostUpdatingSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    topic = TopicSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ('id', 'header', 'text', 'date',)
