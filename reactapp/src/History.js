import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const History = () => {

  return (
    <div className="container mt-3">
      <div class="container mt-4">
        <h2 class="text-center">Weather Search Report</h2>
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>#</th>
                    <th>City</th>
                    <th>Temperature (°C)</th>
                    <th>Condition</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nairobi</td>
                    <td>24°C</td>
                    <td>Sunny</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>New York</td>
                    <td>10°C</td>
                    <td>Cloudy</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>London</td>
                    <td>15°C</td>
                    <td>Rainy</td>
                </tr>
            </tbody>
        </table>
    </div>

    </div>
  
  );
};

export default History;
