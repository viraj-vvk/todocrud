from django.shortcuts import render
from django.views.generic.detail import DetailView

# Create your views here.
from todos.models import Todo


def index(request):
    return render(request, 'frontend/index.html')


class TodoDetailView(DetailView):
    model = Todo
    template_name = "frontend/index.html"
