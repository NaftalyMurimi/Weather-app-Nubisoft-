import requests

def fetch_weather_data(city_name, api_key):
    base_url = "http://api.weatherapi.com/v1/current.json"
    params = {
        'key': api_key,
        'q': city_name,
        'aqi': 'no'
    }

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        data = response.json()

        # Extract desired fields
        temp_f = data["current"]["temp_f"]
        condition_text = data["current"]["condition"]["text"]
        humidity = data["current"]["humidity"]
        latitude = data["location"]["lat"]
        longitude = data["location"]["lon"]

        # Print extracted data
        print("📍 Location:", city_name.title())
        print("🌡️ Temperature (F):", temp_f)
        print("🌤️ Weather Condition:", condition_text)
        print("💧 Humidity:", humidity)
    except requests.exceptions.RequestException as e:
        print({"error": str(e)})

# Example usage
if __name__ == "__main__":
    city = input("Enter city name: ")
    api_key = "ef48ca769b35424994681321250504"  # Replace with your actual API key
    fetch_weather_data(city, api_key)
