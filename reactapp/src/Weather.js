import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });
    setCurrentDate(date);
  }, []);

  const fetchWeather = async () => {
    

    const api_key = process.env.REACT_APP_WEATHER_API_KEY; // Replace with your actual key
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;
    console.log("API KEY:", api_key); 

    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();

        const weatherData = {
          city: data.location.name,
          weather: data.current.condition.text,
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          datetime: data.location.localtime,
        };

        setWeather(weatherData);

        // Save to backend
        await axios.post("http://localhost:8000/save-search/", weatherData);
      } else {
        setError("City not found");
        setWeather(null);
      }
    } catch (err) {
      console.error("Error during fetch or backend post:", err);
      setError("Failed to fetch weather data or save it.");
      setWeather(null);
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Weather App</h2>

      <div className="card-body row">
        
        <div className="col-12 bg-light p-3">
          <h3 className="text-center">Type the city name to get the Weather updates</h3>

          <div className="input-group mb-3 justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="City e.g., Gliwice"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-outline-success" type="button" onClick={fetchWeather}>
              Search
            </button>
          </div>

          <p className="text-center">Date: {currentDate}</p>

          {error && <p className="text-danger text-center">{error}</p>}

          {weather && (
            <div className="row text-center">
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    {/* <img src="/static/weather-icon.png" className="img-fluid mb-2" alt="Weather" /> */}
                    <p>Weather</p>
                    <h5>{weather.weather}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    {/* <img src="/static/temp-icon.png" className="img-fluid mb-2" alt="Temperature" /> */}
                    <p>Temperature</p>
                    <h5>{weather.temperature}°C</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    {/* <img src="/static/position-icon.png" className="img-fluid mb-2" alt="Humidity" /> */}
                    <p>Humidity</p>
                    <h5>{weather.humidity}%</h5>
                  </div>
                </div>
              </div>

           
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;





















































// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';

// const WeatherApp = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);
//   const [currentDate, setCurrentDate] = useState("");

//   useEffect(() => {
//     // Update date dynamically
//     const date = new Date().toLocaleString("en-US", {
//       dateStyle: "full",
//       timeStyle: "short",
//     });
//     setCurrentDate(date);
//   }, []);

//   const fetchWeather = async () => {
//     const api_key = "cfb38cd82e5d3c5aaea32bf09e00750c";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&units=metric`;

//     try {
//       const response = await fetch(url);
//       if (response.status === 200) {
//         const data = await response.json();
//         const weatherData = {
//           city: city,
//           weather: data.weather[0].description,
//           temperature: data.main.temp,
//           humidity: data.main.humidity,
//           datetime: new Date().toISOString()
//         };

//         setWeather(weatherData); // for display

//         // Save to backend
//         await axios.post("http://localhost:8000/save-search/", weatherData);
//       } else {
//         setError("City not found");
//         setWeather(null);
//       }
//     } catch (err) {
//         console.error("Error during fetch or backend post:", err);
//         setError("Failed to fetch weather data or save it.");
//         setWeather(null);
//     }
//   };

//   return (
//     <div className="container mt-3">
//       <h2 className="text-center">Weather App</h2>

//       {/* Main Content */}
//       <div className="card-body row">
//         <div className="col-4 text-center">
//           <img src="/static/Weatherman.png" className="img-fluid" alt="Weatherman" />
//         </div>

//         <div className="col-8 bg-light p-3">
//           <h3 className="text-center">Type the city name to get the Weather updates</h3>

//           {/* Search Input */}
//           <div className="input-group mb-3 justify-content-center">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="City Eg Nairobi"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <button className="btn btn-outline-success" type="button" onClick={fetchWeather}>
//               Search
//             </button>
//           </div>

//           <p className="text-center">Date: {currentDate}</p>

//           {error && <p className="text-danger text-center">{error}</p>}

//           {weather && (
//             <div className="row text-center">
//               {/* Weather Card */}
//               <div className="col-md-4">
//                 <div className="card shadow">
//                   <div className="card-body">
//                     <img src="/static/weather-icon.png" className="img-fluid mb-2" alt="Weather" />
//                     <p>Weather</p>
//                     <h5>{weather.weather}</h5>
//                   </div>
//                 </div>
//               </div>

//               {/* Temperature Card */}
//               <div className="col-md-4">
//                 <div className="card shadow">
//                   <div className="card-body">
//                     <img src="/static/temp-icon.png" className="img-fluid mb-2" alt="Temperature" />
//                     <p>Temperature</p>
//                     <h5>{weather.temperature}°C</h5>
//                   </div>
//                 </div>
//               </div>

//               {/* Humidity Card */}
//               <div className="col-md-4">
//                 <div className="card shadow">
//                   <div className="card-body">
//                     <img src="/static/position-icon.png" className="img-fluid mb-2" alt="humidity" />
//                     <p>Humidity</p>
//                     <h5>{weather.humidity}%</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;
