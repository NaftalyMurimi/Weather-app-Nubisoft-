import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



import axios from 'axios';

const WeatherHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchWeatherHistory();
  }, []);

  const fetchWeatherHistory = async () => {
    try {
      const response = await axios.get("http://localhost:8000/weather-history/");
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching weather history:", error);
    }
  };


  return (
    <div className="container mt-3">
      <div class="container mt-4">
        <h2 class="text-center">Weather Search Report</h2>
        <table class="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>City</th>
            <th>Weather</th>
            <th>Temperature (°C)</th>
            <th>Humidity (%)</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.city}</td>
              <td>{entry.weather}</td>
              <td>{entry.temperature}</td>
              <td>{entry.humidity}</td>
              <td>{entry.searched_at}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>

    </div>
  
  );
};

export default WeatherHistory;
