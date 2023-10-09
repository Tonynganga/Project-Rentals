from rest_framework import viewsets,permissions
from .models import location,sub_location,appartment
from .serializer import LocationSerializer,SubLocationSerializer,AppartmentSerializer

class CustomCreatePermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_superuser 

# Create your views here.
class LocationAPI(viewsets.ModelViewSet):
    serializer_class=LocationSerializer
    queryset=location.objects.all()
    def get_permissions(self):
        if self.action == 'create':
            return [CustomCreatePermission()]
        return super().get_permissions()
class SubLocationAPI(viewsets.ModelViewSet):
    serializer_class=SubLocationSerializer
    queryset=sub_location.objects.all()
    def get_permissions(self):
        if self.action == 'create':
            return [CustomCreatePermission()]
        return super().get_permissions()
    def list(self, request, *args, **kwargs):
        self.queryset = sub_location.objects.filter(
            location_id=self.kwargs['loc'])
        return super().list(request, *args, **kwargs)
class AppartmentAPI(viewsets.ModelViewSet):
    serializer_class=AppartmentSerializer
    queryset=appartment.objects.all()
    def get_permissions(self):
        if self.action == 'create':
            return [CustomCreatePermission()]
        return super().get_permissions()
    def list(self, request, *args, **kwargs):
        self.queryset = appartment.objects.filter(
            sub_location_id=self.kwargs['sub_loc'])
        return super().list(request, *args, **kwargs)
    


from knox.views import LoginView as KnoxLoginView
from knox.views import LogoutView as KnoxLogoutView
from rest_framework import permissions

class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

class LogoutView(KnoxLogoutView):
    permission_classes = (permissions.IsAuthenticated,)