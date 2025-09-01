# brightlearn_backend/urls.py
from django.http import JsonResponse
from django.urls import path, include
from django.contrib import admin

def home(request):
    return JsonResponse({"message": "Welcome to BrightLearn API!"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('', home),  # Add this for root path
]
