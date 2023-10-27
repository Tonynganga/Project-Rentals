# Generated by Django 3.2.5 on 2023-10-27 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rental_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appartment',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='appartment',
            name='image2',
            field=models.ImageField(default='download.jpg', upload_to='appartment_pics'),
        ),
        migrations.AddField(
            model_name='appartment',
            name='image3',
            field=models.ImageField(default='download.jpg', upload_to='appartment_pics'),
        ),
        migrations.AddField(
            model_name='appartment',
            name='thumbnail',
            field=models.ImageField(default='download.jpg', upload_to='appartment_pics'),
        ),
    ]