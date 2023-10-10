from rest_framework import serializers,exceptions
from .models import location,sub_location,appartment
from django.contrib.auth.models import User
from django.contrib.auth import authenticate



class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model=location
        fields=['id','name']
        read_only_fields=['id']
class SubLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model=sub_location
        fields=['id','name','location_id']
        read_only_fields=['id']
class AppartmentSerializer(serializers.ModelSerializer):
    location_name = serializers.CharField(source='sub_location_id.location_id.name',required=False)
    sub_location_name = serializers.CharField(source='sub_location_id.name',required=False)
    class Meta:
        model=appartment
        fields=['id','name','sub_location_id','rent_amount','image','location_name','sub_location_name']
        read_only_fields=['id','location_name','sub_location_name']
class LoginUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField()  # added missing fields for serializer
    password = serializers.CharField()

    class Meta:
        model = User
        fields = ('username', 'password')

    def validate(self, data):
        user = authenticate(**data)
        if user:
            if user.is_active:
                data['user'] = user  # added user model to OrderedDict that serializer is validating
                return data  # and in sunny day scenario, return this dict, as everything is fine
            raise exceptions.AuthenticationFailed('Account is not activated')
        raise exceptions.AuthenticationFailed()