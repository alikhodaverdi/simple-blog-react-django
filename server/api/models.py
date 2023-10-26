from django.db import models

from django.conf import settings
# Create your models here.


class Tag(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=150, blank=False)
    metaTitle = models.CharField(blank=True, max_length=50)
    slug = models.CharField(blank=True, max_length=50)
    content = models.TextField()

    def __str__(self):
        return self.title


class Category(models.Model):
    id = models.IntegerField(primary_key=True)
    parentId = models.BigIntegerField()
    title = models.CharField(max_length=150, blank=False)
    metaTitle = models.CharField(blank=True, max_length=50)
    slug = models.CharField(blank=True, max_length=50)
    content = models.TextField()

    def __str__(self):
        return self.title


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    authorId = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        related_name="post_created_by"
    )
    parentId = models.BigIntegerField()
    title = models.CharField(max_length=150, blank=False)
    metaTitle = models.CharField(blank=True, max_length=50)
    slug = models.CharField(blank=True, max_length=50)
    summary = models.CharField(max_length=50)
    published = models.BooleanField()
    content = models.TextField()
    tag = models.ManyToManyField(Tag, verbose_name=("tag_post"))
    category = models.ManyToManyField(Category, verbose_name=("category_port"))
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    id = models.IntegerField(primary_key=True)
    postId = models.ForeignKey(Post, on_delete=models.CASCADE, null=True)
    parentId = models.BigIntegerField()
    title = models.CharField(max_length=150, blank=False)
    published = models.BooleanField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
