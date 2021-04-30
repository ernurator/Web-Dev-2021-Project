from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import status

from api.models import Comment
from api.serializers import CommentSerializer


class CommentListAPIView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, post_id):
        categories = Comment.objects.filter(post_id=post_id)
        serializer = CommentSerializer(instance=categories, many=True)
        return Response(serializer.data)

    def post(self, request, post_id):
        request.data['post_id'] = post_id
        request.data['author_id'] = request.user.pk
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
