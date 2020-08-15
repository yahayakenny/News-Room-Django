from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.views.generic import View

# Create your views here.

def home_view(request):
    return render(request, 'home.html')

def books_view(request):
    return render(request, 'books.html')

def movies_view(request):
    return render(request, 'movies.html')

def login_view(request): 
        if request.method == "POST":
            username = request.POST['username']    
            password = request.POST['password']
            
            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return HttpResponseRedirect("/")
            else:
                messages.info(request, 'invalid credentials')
                return HttpResponseRedirect("/")
        else:
            return render(request, 'login.html')

def logout_view(request):
    auth.logout(request)
    return HttpResponseRedirect("/")

def register_view(request):
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
                print(note)
                return redirect('/')

        else:
            messages.info(request,'Passwords do not match')
            return redirect('/register')

    else:
        return render(request, 'register.html')
        return redirect('/register')
