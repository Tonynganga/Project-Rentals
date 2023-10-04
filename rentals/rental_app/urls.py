from django.urls import path,include
from .views import LocationAPI,SubLocationAPI,AppartmentAPI




urlpatterns = [
    path('rentals/location',LocationAPI.as_view(),name='location'),
    path('rentals/sub_location',SubLocationAPI.as_view(),name='sub_location'),
    path('rentals/appartment',AppartmentAPI.as_view(),name='appartment'),    
]
