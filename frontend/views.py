from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, "frontend/base.html")


def about(request):
    pass


def contact(request):
    pass


def blog_index(request):
    return render(request, "frontend/blog_index.html")


def blog_category(request, category):
    return render(request, "frontend/blog_category.html")


def blog_detail(request, pk):
    return render(request, "frontend/blog_detail.html")


def project_index(request):
    return render(request, "frontend/project_detail.html")


def project_detail(request, pk):
    return render(request, "frontend/project_detail.html")
