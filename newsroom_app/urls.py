from django.urls import path
from .views import (
    register_view,
    login_view,
    movies_view,
    home_view,
    books_view,
    logout_view
)

urlpatterns = [
    path('', home_view, name='home'),
    path('books/', books_view, name='books'),
    path('movies/', movies_view, name='movies'),
    path('register/', register_view, name='register'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout')

]