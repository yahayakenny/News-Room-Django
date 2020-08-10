from django.shortcuts import render
from django.contrib.auth.models import User, auth


# Create your views here.
def home(request):
    return render(request, 'home.html')

def books(request):
    return render(request, 'books.html')

def movies(request):
    return render(request, 'movies.html')

def register(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        user = User.objects.create_user(username = username, password = password1, email = email, first_name = first_name, last_name = last_name)
        user.save()
        note = 'Thank you ' + first_name + ' for signing up with us'
        return render(request, 'register.html', {'note': note})

    else:
        return render(request, 'register.html')
