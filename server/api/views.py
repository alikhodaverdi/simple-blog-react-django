from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import io
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.http.response import HttpResponse ,Http404

from .models import Post, Category, Comment, Tag
from rest_framework import serializers
from .serlializers import PostSerializer,CategorySerializer
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
def get_posts(request):
    if request.query_params:
        posts = Post.objects.filter(**request.query_params.dict())
    else:
        posts =Post.objects.all()

    if posts:
        serializer = PostSerializer(posts,many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

# update post
@api_view(['POST'])
def update_post(request,pk):
    post =Post.objects.get(pk=pk)
    data =PostSerializer(instance=post,data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


# delete post
@api_view(['DELETE'])
def delete_post(request,pk):
    post =get_object_or_404(Post,pk=pk)
    post.delete()
    return Response(status=status.HTTP_202_ACCEPTED)


# create category
@api_view(['POST'])
def add_category(request):
    jdata= request.body
    stream= io.BytesIO(jdata)
    pydata= JSONParser().parse(stream)
    serializer= CategorySerializer(data=pydata)
    if serializer.is_valid():
        serializer.save()
        res= {"msg":"Category is created"}
        jdata= JSONRenderer().render(res)
        return HttpResponse(jdata,content_type='application/json')
    #If not valid
    jdata =JSONRenderer().render(serializer.errors)
    return HttpResponse(jdata,content_type='application/json')


