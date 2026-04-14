from django.shortcuts import render
from rest_framework import viewsets
from .models import StakeHolder
from .serializer import StakeHolderSerializer

# Create your views here.
class StakeHolderViewSet(viewsets.ModelViewSet):
    queryset = StakeHolder.objects.all()
    serializer_class = StakeHolderSerializer
