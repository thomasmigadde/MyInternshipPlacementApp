from django.urls import path, include
from .views import StakeHolderViewSet


urlpatterns = [   
     path('stakeholders/', StakeHolderViewSet.as_view({'get': 'list', 'post': 'create'}), name='stakeholder-list'),
     ]