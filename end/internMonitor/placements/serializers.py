from rest_framework import serializers
from .models import StakeHolder

class StakeHolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = StakeHolder
        fields = ['id', 'name', 'position', 'description']