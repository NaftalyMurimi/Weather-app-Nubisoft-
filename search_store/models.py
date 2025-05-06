from django.db import models

class WeatherSearch(models.Model):
    city = models.CharField(max_length=100)
    weather = models.CharField(max_length=100)
    temperature = models.FloatField()
    humidity = models.IntegerField()
    searched_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.city} - {self.weather} on {self.searched_at.strftime('%A, %B %d, %Y at %I:%M %p')}"
