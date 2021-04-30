from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from rest_framework import status

from api.models import Comment
from api.serializers import CommentUpdatingSerializer


class CommentDetailAPIView(mixins.DestroyModelMixin,
                           generics.UpdateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentUpdatingSerializer
    permission_classes = (IsAuthenticated,)

    def delete(self, request, *args, **kwargs):
        if request.user != self.get_object().author:
            return Response(status=status.HTTP_403_FORBIDDEN)
        return self.destroy(request, *args, **kwargs)
