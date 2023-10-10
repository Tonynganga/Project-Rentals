from django.db import models
from PIL import Image

# Create your models here.
# Table location  {
#   id integer [pk]
#   name varchar [not null]
#   Indexes{
#     name
#   }
# }
# Table sub_location  {
#   id integer [primary key]
#   location_id integer [ref: > location.id]
#   name varchar [not null]
#   Indexes{
#     location_id
#   }
# }

# Table appartment {
#   id integer [primary key]
#   name  varchar [not null]
#   sub_location_id integer [ref: > sub_location.id]
#   Indexes{
#     sub_location_id
#   }
# }


class location(models.Model):   
    name=models.CharField(max_length = 50)
class sub_location(models.Model):   
    location_id=models.ForeignKey(location,on_delete=models.CASCADE)
    name=models.CharField(max_length = 50)
class appartment(models.Model):   
    sub_location_id=models.ForeignKey(sub_location,on_delete=models.CASCADE)
    name=models.CharField(max_length = 50)
    image = models.ImageField(default='download.jpg',upload_to='appartment_pics')
    rent_amount=models.IntegerField(null=True)
    def __str__ (self):
        return f'{self.name} pic'
    def save(self ,*args, **kwargs):
        super(appartment, self).save(*args, **kwargs)
        img=Image.open(self.image.path)
        if img.height>300 or img.width > 300:
            output_size=(300,300)
            img.thumbnail(output_size)
            img.save(self.image.path)