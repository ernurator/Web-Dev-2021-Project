from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    write_only_fields = 'password'

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        return user
