# from rest_framework import generics

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Comment
from api.serializers import CommentSerializer


class CommentListAPIView(APIView):
    serializer_class = CommentSerializer

    def get(self, request, post_id):
        categories = Comment.objects.filter(post_id=post_id)
        serializer = CommentSerializer(instance=categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not request.user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
