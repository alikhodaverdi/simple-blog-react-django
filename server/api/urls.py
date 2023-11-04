from django.urls import path
from . import views

urlpatterns = [
    path("", views.ApiOverview, name='home'),
    path("createPost/", views.add_post, name="create-post"),
    path("getPosts/", views.get_posts, name="get-post"),
    path("updatePost/<int:pk>", views.update_post, name="update-post"),
    path("deletePost/<int:pk>/delete/",views.delete_post,name="delete post"),
    path("createCategory/",views.add_category,name="create category")
]
