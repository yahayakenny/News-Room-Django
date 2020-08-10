from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages

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

        if password1 == password2:
            if User.objects.filter(username = username).exists():
               messages.info(request, 'Username Taken')
               return redirect('register')

            elif User.objects.filter(email = email).exists():
               messages.info(request, 'Email taken')
               return redirect('register')
             
            else: 
                user = User.objects.create_user(username = username, password = password1, email = email, first_name = first_name, last_name = last_name)
                user.save()
                note = 'Thank you ' + first_name + ' for signing up with us'
                return render(request, 'register.html', {'note': note})

        else:
            messages.info(request,'Passwords do not match')
            return redirect('/register')

    else:
        return render(request, 'register.html')
        return redirect('/register')
