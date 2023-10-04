from rest_framework import serializers
from .models import location,sub_location,appartment



class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model=location
        fields=['id','name']
        read_only_fields=['id']
class SubLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model=sub_location
        fields=['id','name','location_id']
        read_only_fields=['id','location_id']
class AppartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=sub_location
        fields=['id','name','sub_location_id','rent_amount','image']
        read_only_fields=['id','sub_location_id']
