# Generated by Django 3.2.5 on 2023-10-30 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rental_app', '0002_auto_20231027_1146'),
    ]

    operations = [
        migrations.AddField(
            model_name='appartment',
            name='bedrooms',
            field=models.CharField(default='bed-sitter', max_length=50),
        ),
    ]
