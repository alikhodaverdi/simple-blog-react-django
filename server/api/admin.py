from django.contrib import admin

# Register your models here.
from .models import *


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "parentId",
        "title",
        "metaTitle",
        "slug",
        "summary",
        "published",
        "content",
        "created_at",
        "updated_at",
        "published_at",
    ]

    def display_tags(self, obj):
        return ", ".join(tag.name for tag in obj.tag.all())
    display_tags.short_description = 'Tags'

    def display_categories(self, obj):
        return ", ".join(category.name for category in obj.category.all())
    display_categories.short_description = "Categories"


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "parentId",
        "title",
        "metaTitle",
        "slug",
        "content"
    ]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "postId",
        "parentId",
        "title",
        "published",
        "content",
        "created_at",
        "updated_at",
        "published_at"
    ]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "title",
        "metaTitle",
        "slug",
        "content"
    ]
