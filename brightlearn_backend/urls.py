from django.http import JsonResponse
from django.urls import path, include
from django.contrib import admin

def home(request):
    return JsonResponse({"message": "Welcome to BrightLearn API!"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('brightlearn_backend.accounts.urls')),  # full path
    path('', home),
    path('api/courses/', include('brightlearn_backend.courses.urls')),  # full path
    
]
