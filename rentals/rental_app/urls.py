from django.urls import path
from .views import LocationAPI,SubLocationAPI,AppartmentAPI
from .views import LoginView, LogoutView




urlpatterns = [
    path('rentals/add_location',LocationAPI.as_view({'post':'create'}),name='add_location'),
    path('rentals/get_location',LocationAPI.as_view({'get':'list'}),name='get_location'),
    path('rentals/add_sub_location',SubLocationAPI.as_view({'post':'create'}),name='add_sub_location'),
    path('rentals/get_sub_location/<int:loc>',SubLocationAPI.as_view({'get':'list'}),name='get_sub_location'),
    path('rentals/add_appartment',AppartmentAPI.as_view({'post':'create'}),name='add_appartment'),   
    path('rentals/update_appartment/<int:id>',AppartmentAPI.as_view({'post':'update'}),name='update_appartment'),   
    path('rentals/get_appartment/<int:sub_loc>',AppartmentAPI.as_view({'get':'list'}),name='get_appartment'),
    path('auth/login', LoginView.as_view(), name='knox_login'),
    path('auth/logout', LogoutView.as_view(), name='knox_logout'),
]
