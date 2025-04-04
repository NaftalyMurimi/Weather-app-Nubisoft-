
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import History from "./History";
import './App.css';
import Weather from './Weather'
import Forecast from './Forecast'
function App() {
  return (
    <div className="App">
        <div className="card m-5">
        <Router>
        {/* Navigation */}
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link " href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/History" aria-disabled="true">History</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/Forecast" aria-disabled="true">Forecast</a>
            </li>
          </ul>
        </div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Weather />} />
          <Route path="/history" element={<History />} />
          <Route path="/forecast" element={<Forecast />} />
        </Routes>
        </Router>
 
     </div>
    </div>
  );
}

export default App;
