import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";

const ForecastApp = () => {
  const [city, setCity] = useState("");
  const [days, setDays] = useState(3); // Default to 3-day forecast
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;// Replace with your WeatherAPI key

  const fetchForecast = async () => {
    if (!city || days < 1 || days > 10) {
      setError("Please enter a valid city and number of days (1-10)");
      return;
    }

    setError(null);
    setForecast([]);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json`,
        {
          params: {
            key: API_KEY,
            q: city,
            days: days,
            aqi: "no",
            alerts: "no"
          }
        }
      );

      const dailyForecast = response.data.forecast.forecastday;
      setForecast(dailyForecast);
    } catch (err) {
      console.error(err);
      setError("City not found or API error. Try again.");
    }
  };

  return (
    <Card.Body>
      <Card.Title className="text-center">Multi-Day Weather Forecast</Card.Title>

      {/* Input Form */}
      <div className="d-flex justify-content-center">
        <Form className="w-75">
          <div className="row g-2">
            {/* City Input */}
            <div className="col-md-6">
              <Form.Control
                type="text"
                placeholder="Enter City (e.g. Nairobi)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Day Range Input */}
            <div className="col-md-3">
              <Form.Control
                type="number"
                min="1"
                max="10"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                placeholder="Days (1–10)"
              />
            </div>

            {/* Submit Button */}
            <div className="col-md-3">
              <Button className="w-100" variant="primary" onClick={fetchForecast}>
                Get Forecast
              </Button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-danger text-center mt-3">{error}</p>}
        </Form>
      </div>

      {/* Forecast Results */}
      {forecast.length > 0 && (
        <div className="row mt-4">
          {forecast.map((day, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card className="shadow text-center">
                <Card.Body>
                  <h5>{day.date}</h5>
                  <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                    className="img-fluid mb-2"
                  />
                  <p>{day.day.condition.text}</p>
                  <p>
                    <strong>Max:</strong> {day.day.maxtemp_c}°C<br />
                    <strong>Min:</strong> {day.day.mintemp_c}°C<br />
                    <strong>Humidity:</strong> {day.day.avghumidity}%
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </Card.Body>
  );
};

export default ForecastApp;
