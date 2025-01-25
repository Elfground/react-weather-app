import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h2>
        <span id="city">{props.city}</span>
        &nbsp;&nbsp;<span id="temperature">{props.temperature}</span>°C
      </h2>
    </div>
  );
}
