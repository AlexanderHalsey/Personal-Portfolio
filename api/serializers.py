from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    projects = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Project.objects.all()
    )
    posts = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Post.objects.all()
    )
    categories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Category.objects.all()
    )
    comments = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Comment.objects.all()
    )

    class Meta:
        model = User
        fields = ['id', 'username', 'projects',
                  'posts', 'categories', 'comments']


class ProjectSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Project
        fields = ['title', 'description', 'technology', 'image', 'owner']


class CategorySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Category
        fields = ['name', 'owner']


class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Post
        fields = ['title', 'body', 'created_on', 'last_modified', 'categories',
                  'owner']


class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Comment
        fields = ['author', 'body', 'created_on', 'post', 'owner']
