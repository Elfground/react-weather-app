import React from "react";

import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div class="app-data">
        <div class="app-details">
          <span id="day">{props.day}</span>
          <br />
          <span id="time">{props.time}</span>
        </div>
        <div class="app-data-icon" id="icon">
          <br />
          <img
            src="images/broken-clouds-night.png"
            class="weather-app-icon"
            width="150"
            alt="broken clouds night"
          />
        </div>
        <div class="app-data-conditions">
          Humidity: <span id="humidity">{props.humidity}%</span>
          <br />
          Windspeed: <span id="windspeed">{props.windspeed} km/h</span>
        </div>
      </div>
      <div class="weather-conditions" id="weather-conditions">
        {props.conditions}
      </div>
    </div>
  );
}
