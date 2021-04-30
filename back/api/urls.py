from django.urls import path
from .views import PostDetailAPIView, PostListAPIView, topic_list, TopicDetailAPIView, topic_posts

from api.views import CommentListAPIView, CommentDetailAPIView, statistics_detail, \
    RegistrationAPIView, ProfileDetailAPIView

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('posts/', PostListAPIView.as_view()),  # get, post
    path('posts/<int:pk>/', PostDetailAPIView.as_view()),  # get, put
    path('topics/', topic_list),  # get fbv DONE
    path('topics/<int:pk>/', TopicDetailAPIView.as_view()),  # get DONE
    path('topics/<int:topic_id>/posts/', topic_posts),  # get fbv posts
    # # path('new-posts/', ),  # get
    path('posts/<int:post_id>/comments/', CommentListAPIView.as_view()),  # get, post
    path('comments/<int:pk>/', CommentDetailAPIView.as_view()),  # update, delete
    path('forum-statistics/', statistics_detail),  # get
    path('profile/', ProfileDetailAPIView.as_view()),  # get, put
    path('login/', obtain_jwt_token),  # post (token)
    path('register/', RegistrationAPIView.as_view()),  # post (token)
]
