from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post, Category, Comment, Tag

# Create your views here.


@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        "all_posts": "/",
        "Search by Post": "/?post=post_name",
        "Saarch by Category": "/?Category=category_name",
        "Search by Tags": "/?Tags=tag_name",
        "All Categories": "/categories/",
        "Specific Category": "/categories/?cat=category_name",
        "All Tags": "/tags/",
        "Specific Tag": "/tags/?tag=tag_name",
        "Add post": "/createPost",
        "Update post": "/updatePost/?id=post_id",
        "Delete post": "/deletePost/?id=post_id",
    }

    return Response(api_urls)
