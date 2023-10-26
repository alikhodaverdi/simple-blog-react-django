from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import io
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.http.response import HttpResponse

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


# create post
@api_view(['POST'])
def add_post(request):
    jdata = request.body
    stream = io.BytesIO(jdata)
    pydata = JSONParser().parse(stream)
    serializer = PostSerializer(data=pydata)
    if serializer.is_valid():
        serializer.save()
        res = {'msg': 'Data is created'}
        jdata = JSONRenderer().render(res)
        return HttpResponse(jdata, content_type='application/json')
    # If not valid
    jdata = JSONRenderer().render(serializer.errors)
    return HttpResponse(jdata, content_type='application/json')


# get single post
@api_view(['GET'])
def get_post_by_id(reques):
    pass
