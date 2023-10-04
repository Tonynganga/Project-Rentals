# Generated by Django 3.2.5 on 2023-10-04 17:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='sub_location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('location_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rental_app.location')),
            ],
        ),
        migrations.CreateModel(
            name='appartment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('image', models.ImageField(default='download.jpg', upload_to='appartment_pics')),
                ('rent_amount', models.IntegerField(null=True)),
                ('sub_location_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rental_app.sub_location')),
            ],
        ),
    ]
