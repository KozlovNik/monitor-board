from django.urls import path
from .views import index
from .api import MonitorList

urlpatterns = [
    path('', index),
    path('api/monitors/', MonitorList.as_view()),
]