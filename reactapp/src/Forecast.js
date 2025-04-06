import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const ForecastApp = () => {
  const [city, setCity] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "ef48ca769b35424994681321250504"; // Replace with your actual WeatherAPI key

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
    setError(null);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: {
            key: API_KEY,
            q: city,
            aqi: "no"
          }
        }
      );

      const data = response.data;

      const parsedWeather = {
        description: data.current.condition.text,
        temp_c: data.current.temp_c,
        humidity: data.current.humidity
      };

      setWeather(parsedWeather);
    } catch (err) {
      console.error(err);
      setError("City not found. Try again.");
    }
  };

  return (
    <Card.Body>
      <Card.Title className="text-center">Check Weather</Card.Title>

      <div className="d-flex justify-content-center">
        <Form className="w-50">
          <div className="row align-items-center g-2">
            {/* City Input */}
            <div className="col-md-5">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter City (e.g. Nairobi)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
            </div>

            {/* Date Picker */}
            <div className="col-md-4">
              <Form.Group>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="form-control"
                />
              </Form.Group>
            </div>

            {/* Search Button */}
            <div className="col-md-3">
              <Button className="w-100" variant="primary" onClick={fetchWeather}>
                Get Weather
              </Button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-danger text-center mt-3">{error}</p>}
        </Form>
      </div>

      {/* Weather Results */}
      {weather && (
        <div className="row text-center mt-4">
          {/* Weather Card */}
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img src="/static/weather-icon.png" className="img-fluid mb-2" alt="Weather" />
                <p>Condition</p>
                <h5>{weather.description}</h5>
              </div>
            </div>
          </div>

          {/* Temperature Card */}
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img src="/static/temp-icon.png" className="img-fluid mb-2" alt="Temperature" />
                <p>Temperature</p>
                <h5>{weather.temp_c}°C</h5>
              </div>
            </div>
          </div>

          {/* Humidity Card */}
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img src="/static/position-icon.png" className="img-fluid mb-2" alt="Humidity" />
                <p>Humidity</p>
                <h5>{weather.humidity}%</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card.Body>
  );
};

export default ForecastApp;
