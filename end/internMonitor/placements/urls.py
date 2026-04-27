from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import StakeHolderViewSet
from .views import StakeHolder_list

app_name = 'placements'

#router = DefaultRouter()
#router.register(r'stakeholders', StakeHolderViewSet, basename='stakeholder')


urlpatterns = [   
    
     #path('', include(router.urls)),
     path('stakeholders/', StakeHolder_list, name='stakeholder-list'),
     path('stakeholders/<int:pk>/', views.Stakeholder_detail, name='stakeholder-detail'),
     ]