from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    # path('projects/', views.project_index, name="project_index"),
    # path('projects/<int:pk>/', views.project_detail, name='project_detail'),
    # path('blog/', views.blog_index, name='blog_index'),
    # path('blog/<int:pk>/', views.blog_detail, name='blog_detail'),
    # path('blog/<category>/', views.blog_category, name='blog_category'),
]
