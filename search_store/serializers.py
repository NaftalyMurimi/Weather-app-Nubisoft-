# The importance of this file is to convert the json data from the api to django model instances

from rest_framework import serializers
from .models import WeatherSearch

class WeatherSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherSearch
        fields = '__all__'
