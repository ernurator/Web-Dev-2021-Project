from django.utils.timezone import now
from rest_framework import serializers

from api.models import Comment
from .user import UserSerializer
from .post import PostSerializer


class CommentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField()
    date = serializers.DateTimeField(read_only=True)
    likes = serializers.IntegerField(read_only=True)
    author = UserSerializer(read_only=True)
    post = PostSerializer(read_only=True)
    author_id = serializers.IntegerField(write_only=True)
    post_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment

    def update(self, instance, validated_data):
        pass


class CommentUpdatingSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    post = PostSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('id', 'text', 'date',)
