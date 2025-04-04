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

  const API_KEY = "cfb38cd82e5d3c5aaea32bf09e00750c"; // Replace with your OpenWeather API key

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      console.log(response)
    } catch (err) {
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



          {/* Error Message */}
          {error && <p className="text-danger text-center mt-3">{error}</p>}

          {/* Weather Results */}
          {weather && (
                 <div className="row text-center  mt-4">
                 {/* Weather Card */}
                 <div className="col-md-4">
                   <div className="card shadow">
                     <div className="card-body">
                       <img src="/static/weather-icon.png" className="img-fluid mb-2" alt="Weather" />
                       <p>Weather</p>
                       <h5>{weather.weather[0].description}</h5>
                     </div>
                   </div>
                 </div>
 
                 {/* Temperature Card */}
                 <div className="col-md-4">
                   <div className="card shadow">
                     <div className="card-body">
                       <img src="/static/temp-icon.png" className="img-fluid mb-2" alt="Temperature" />
                       <p>Temperature</p>
                       <h5>{weather.main.temp}</h5>
                     </div>
                   </div>
                 </div>
 
                 {/* Humidity Card */}
                 <div className="col-md-4">
                   <div className="card shadow">
                     <div className="card-body">
                       <img src="/static/position-icon.png" className="img-fluid mb-2" alt="Humidity" />
                       <p>Humidity</p>
                       <h5>{weather.main.humidity}</h5>
                     </div>
                   </div>
                 </div>
               </div>
           
          )}
        </Card.Body>

  );
};

export default ForecastApp;
