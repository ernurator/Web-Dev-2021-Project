from rest_framework import serializers
from api.models import Topic


class TopicSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Topic
        fields = ('id', 'theme', 'description')
