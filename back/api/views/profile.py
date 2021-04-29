from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from api.serializers import UserSerializer


class ProfileDetailAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        return Response(request.user)

    def put(self, request):
        serializer = UserSerializer(instance=request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
