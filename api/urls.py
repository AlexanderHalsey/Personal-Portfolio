from django.urls import path, include
from . import views

urlpatterns = [
    # path('', views.HomeView.as_view(), name='home'),
    path('projects/', views.ProjectIndexView.as_view(), name="project_index"),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(),
         name='project_detail'),
    path('blog/', views.BlogIndexView.as_view(), name='blog_index'),
    path('blog/<int:id>/', views.BlogDetailView.as_view(), name='blog_detail'),
    path('blog/categories/', views.BlogCategoryIndexView.as_view(),
         name='blog_categories'),
    path('blog/categories/<int:pk>/', views.BlogCategoryDetailView.as_view(),
         name='blog_category'),
    path('blog/<int:pk>/<comment>/', views.BlogCommentView.as_view(),
         name='blog_comment'),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]
