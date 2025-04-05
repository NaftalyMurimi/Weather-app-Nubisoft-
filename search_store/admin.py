from django.contrib import admin

# Register your models here.
from .models import WeatherSearch  # import your model
admin.site.register(WeatherSearch)