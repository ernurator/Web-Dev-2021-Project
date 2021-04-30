from rest_framework import generics
from api.models import Post
from api.serializers import PostSerializer, PostUpdatingSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class PostDetailAPIView(generics.RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.request.method == 'PUT':
            serializer_class = PostUpdatingSerializer

        return serializer_class


class PostListAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):
        request.data['author_id'] = request.user.pk
        return super().post(request, *args, **kwargs)
