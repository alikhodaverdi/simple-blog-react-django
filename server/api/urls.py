from django.urls import path
from . import views

urlpatterns = [
    path("", views.ApiOverview, name='home'),
    path("create/", views.add_post, name="add-post"),
    path("getPosts/", views.get_posts, name="get-post"),
    path("updatePost/<int:pk>", views.update_post, name="get-post"),
]
