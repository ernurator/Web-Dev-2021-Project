from django.utils.timezone import now
from rest_framework import serializers

from api.models import Comment
from api.serializers import UserSerializer, PostSerializer


class CommentSerializer(serializers.Serializer):
    text = serializers.CharField()
    date = serializers.DateTimeField(default=now, read_only=True)
    likes = serializers.IntegerField(default=0)
    author = UserSerializer(read_only=True)
    post = PostSerializer(read_only=True)
    id = serializers.IntegerField(read_only=True)
    author_id = serializers.IntegerField(write_only=True)
    post_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment
