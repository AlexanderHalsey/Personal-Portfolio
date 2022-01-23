from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, "frontend/base.html", {})


def about(request):
    pass


def contact(request):
    pass


def blog_index(request):
    posts = Post.objects.all().order_by('-created_on')
    return render(request, "frontend/blog_index.html", {"posts": posts})


def blog_category(request, category):
    posts = Post.objects.filter(
        categories__name__contains=category
    ).order_by('-created_on')
    return render(request, "frontend/blog_category.html", {"posts": posts})


def blog_detail(request, pk):
    post = Post.objects.get(pk=pk)
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = Comment(
                author=form.cleaned_data['author'],
                body=form.cleaned_data['body'],
                post=post,
            )
            comment.save()
    comments = Comment.objects.filter(post=post)
    return render(request, "frontend/blog_detail.html",
                  {"post": post, "comments": comments})


def project_index(request):
    projects = Project.objects.all()
    return render(request, "frontend/project_detail.html",
                  {"projects": projects})


def project_detail(request, pk):
    project = Project.objects.get(pk=pk)
    return render(request, "frontend/project_detail.html",
                  {"project": project})
