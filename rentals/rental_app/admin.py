from django.contrib import admin
from .models import location,sub_location,appartment

# Register your models here.
admin.site.register(location)
admin.site.register(sub_location)
admin.site.register(appartment)