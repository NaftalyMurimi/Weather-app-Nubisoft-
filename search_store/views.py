from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import WeatherSearch
from .serializers import WeatherSearchSerializer

@api_view(['POST'])
def save_weather_search(request):
    serializer = WeatherSearchSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


# display weather search from the database
@api_view(['GET'])
def get_weather_history(request):
    searches = WeatherSearch.objects.all().order_by('-id')  # latest first
    serializer = WeatherSearchSerializer(searches, many=True)
    return Response(serializer.data)