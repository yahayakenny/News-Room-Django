from django.urls import path
from newsroom_app import views

urlpatterns = [
    path('', views.home, name='home'),
    path('books/', views.books, name='books'),
    path('movies/', views.movies, name='movies'),
    path('register/', views.register, name='register')
]