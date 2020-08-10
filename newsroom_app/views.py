from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'home.html')

def books(request):
    return render(request, 'books.html')

def movies(request):
    return render(request, 'movies.html')

def register(request):
    return render(request, 'register.html')
