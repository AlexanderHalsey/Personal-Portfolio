from django.shortcuts import redirect, render
from rest_framework import generics
from .models import *
from .serializers import ProjectSerializer


# Create your views here.
class HomeView(generics.CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
