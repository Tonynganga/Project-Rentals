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
    thumbnail = models.ImageField(default='download.jpg',upload_to='appartment_pics')
    image = models.ImageField(default='download.jpg',upload_to='appartment_pics')    
    image2 = models.ImageField(default='download.jpg',upload_to='appartment_pics')
    image3 = models.ImageField(default='download.jpg',upload_to='appartment_pics')
    description = models.TextField(null=True)
    bedrooms=models.CharField(max_length = 50,default='bed-sitter')
    bathrooms=models.CharField(max_length = 50,default='self-contained')
    rent_amount=models.IntegerField(null=True)
    def __str__ (self):
        return f'{self.name} pic'
    def save(self ,*args, **kwargs):
        super(appartment, self).save(*args, **kwargs)
        thumbnail=Image.open(self.thumbnail.path)
        img=Image.open(self.image.path)        
        img2=Image.open(self.image2.path)
        img3=Image.open(self.image3.path)
        my_list=[(img,self.image.path),(img2,self.image2.path),(img3,self.image3.path)]
        if thumbnail.height>300 or thumbnail.width > 300:
            output_size=(300,300)
            thumbnail.thumbnail(output_size)
            thumbnail.save(self.thumbnail.path)
        for img,path in my_list:
            if img.height>500 or img.width > 700:
                output_size=(700,500)
                img.thumbnail(output_size)
                img.save(path)