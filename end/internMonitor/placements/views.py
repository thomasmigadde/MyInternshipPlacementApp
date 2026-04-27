from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import StakeHolder
from .serializers import StakeHolderSerializer
from rest_framework.response import Response
from rest_framework import status, viewsets


@api_view(['GET', 'POST'])

def StakeHolder_list(request):
    if request.method == 'GET':
        stakeholders = StakeHolder.objects.all()
        serializer = StakeHolderSerializer(stakeholders, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StakeHolderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])    
def Stakeholder_detail(request, pk):    
    
        try:
            stakeholder = StakeHolder.objects.get(pk=pk)
        except StakeHolder.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = StakeHolderSerializer(stakeholder, data=request.data)
        
        if request.method == 'GET':
            serializer = StakeHolderSerializer(stakeholder)
            return Response(serializer.data)
        elif request.method == 'PUT':
             serializer = StakeHolderSerializer(stakeholder, data=request.data)