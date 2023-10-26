from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


from .models import Post, Category, Comment, Tag
from rest_framework import serializers
from .serlializers import PostSerializer
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


@api_view(['POST'])
def add_post(request):
    post = PostSerializer(data=request.data)

    if Post.objects.filter(**request.data).exists():
        raise serializers.ValidationError("This Post already exists")

    if post.is_valid():
        post.save()
        return Response(post.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
