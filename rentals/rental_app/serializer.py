from rest_framework import serializers,exceptions
from .models import location,sub_location,appartment
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core.validators import FileExtensionValidator



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
    thumbnail=serializers.ImageField(write_only=True,required=False)
    image=serializers.ImageField(write_only=True,required=False)
    image2=serializers.ImageField(write_only=True,required=False)
    image3=serializers.ImageField(write_only=True,required=False)
    thumbnail_url=serializers.URLField(source='thumbnail.url',read_only=True)
    image_url=serializers.URLField(source='image.url',read_only=True)
    image2_url=serializers.URLField(source='image2.url',read_only=True)
    image3_url=serializers.URLField(source='image3.url',read_only=True)
    class Meta:
        model=appartment
        fields=['id','name','sub_location_id','rent_amount','image','image_url','thumbnail','thumbnail_url','image2','image2_url','image3','image3_url','location_name','sub_location_name','bedrooms','bathrooms','description']
        read_only_fields=['id','location_name','sub_location_name','image_url','bedrooms','bathrooms']
    
    def to_internal_value(self, data):
        if self.instance:
            data.pop('thumbnail', None)
        return super().to_internal_value(data)
    # def update(self, instance, validated_data):
    #     validated_data.pop('thumbnail', None)
    #     # validated_data.pop('field2', None)
    #     return super().update(instance, validated_data)
        
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