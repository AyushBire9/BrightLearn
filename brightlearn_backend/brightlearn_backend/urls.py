# brightlearn_backend/urls.py
from django.http import JsonResponse
from django.urls import path, include
from django.contrib import admin

def home(request):
    return JsonResponse({"message": "Welcome to BrightLearn API!"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('https://ayushbire.pythonanywhare.com/')),
    path('', home),  # Add this for root path
]
from django.http import HttpResponse

def test_view(request):
    return HttpResponse("✅ BrightLearn backend is live on PythonAnywhere!")

urlpatterns += [
    path('test/', test_view),   # 👈 temporary test route
]
