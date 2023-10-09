from django.urls import path
from .views import LocationAPI,SubLocationAPI,AppartmentAPI
from .views import LoginView, LogoutView



urlpatterns = [
    path('rentals/add_location',LocationAPI.as_view({'post':'create'}),name='location'),
    path('rentals/get_location',LocationAPI.as_view({'get':'list'}),name='location'),
    path('rentals/add_sub_location',SubLocationAPI.as_view({'post':'create'}),name='sub_location'),
    path('rentals/get_sub_location/<int:loc>',SubLocationAPI.as_view({'get':'list'}),name='sub_location'),
    path('rentals/add_appartment',AppartmentAPI.as_view({'post':'create'}),name='appartment'),   
    path('rentals/get_appartment/<int:sub_loc>',AppartmentAPI.as_view({'get':'list'}),name='appartment'),
    path('auth/login', LoginView.as_view(), name='knox_login'),
    path('auth/logout', LogoutView.as_view(), name='knox_logout'),
]
