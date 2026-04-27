from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import StakeHolderViewSet
from .views import *
app_name = 'placements'
router = DefaultRouter()
router.register(r'stakeholders', StakeHolderViewSet, basename='stakeholder')


urlpatterns = [   
    
     path('', include(router.urls)),
     
     ]