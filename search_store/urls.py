from django.urls import path
from .views import save_weather_search, get_weather_history

urlpatterns = [
    path('save-search/', save_weather_search, name='save-weather-search'),
    path('weather-history/', get_weather_history, name='get-weather-history'),
]