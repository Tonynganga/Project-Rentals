from rest_framework import viewsets
from .models import location,sub_location,appartment
from .serializer import LocationSerializer,SubLocationSerializer,AppartmentSerializer

# Create your views here.
class LocationAPI(viewsets.ModelViewSet):
    serializer_class=LocationSerializer
    queryset=location.objects.all()
class SubLocationAPI(viewsets.ModelViewSet):
    serializer_class=SubLocationSerializer
    queryset=sub_location.objects.all()
class AppartmentAPI(viewsets.ModelViewSet):
    serializer_class=AppartmentSerializer
    queryset=appartment.objects.all()
    