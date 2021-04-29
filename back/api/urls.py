from django.urls import path
from .views import PostDetailAPIVIEW, PostListAPIVIEW, topicList, TopicDetailAPIVIEW, topicPosts


urlpatterns = [
    path('posts/', PostListAPIVIEW.as_view()),  # post
    path('posts/<int:pk>/', PostDetailAPIVIEW.as_view()),  # get, put
    path('topics/', topicList),  # get fbv DONE
    path('topics/<int:pk>/', TopicDetailAPIVIEW.as_view()),  # get DONE
    path('topics/<int:topic_id>/posts/', topicPosts),  # get posts
    # # path('new-posts/', ),  # get
    # path('posts/<int:post_id>/comments/', ),  # get, post
    # path('comments/<int:comment_id>', ),  # update, delete
    # path('forum-statistics/', ),  # get
    # path('profile/', ),  # get, put
    # path('login/', ),  # post (token)
    # path('register/', ),  # post (token)
]
