from rest_framework import serializers
from api.models import Post
import TopicSerializer, UserSerializer
from django.utils.timezone import now


class PostSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(write_only=True)
    date = serializers.DateTimeField(default=now, read_only=True)
    author = UserSerializer(read_only=True)
    topics = TopicSerializer(read_only=True)
    author_id = serializers.IntegerField(write_only=True)
    topic_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Post
        fields = '__all__'
        # extra_kwargs = {'user': {'required': False}}